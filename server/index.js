import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailjs from '@emailjs/nodejs';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/booking', async (req, res) => {
  try {
    const formData = req.body;

    console.log('Am primit request:', formData);

    if (!formData.name || !formData.email || !formData.selectedDate) {
      return res.status(400).json({
        success: false,
        message: 'Lipsesc câmpuri obligatorii.',
      });
    }

    const formattedDate = new Date(formData.selectedDate).toLocaleDateString('ro-RO');

    const adminTemplateParams = {
      from_name: formData.name.trim(),
      email: formData.email.trim(),
      phone: (formData.phone || '').trim(),
      message: (formData.message || '').trim(),
      selected_date: formattedDate,
    };

    const clientTemplateParams = {
      to_name: formData.name.trim(),
      to_email: formData.email.trim(),
      selected_date: formattedDate,
    };

    console.log('Trimit email admin...');
    const adminResponse = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_ADMIN_TEMPLATE_ID,
      adminTemplateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );
    console.log('Răspuns admin:', adminResponse);

    console.log('Trimit email client...');
    const clientResponse = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_CLIENT_TEMPLATE_ID,
      clientTemplateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );
    console.log('Răspuns client:', clientResponse);

    if (process.env.OMNISEND_API_KEY) {
      try {
        console.log('Salvez contactul în Omnisend...');

        const contactPayload = {
          identifiers: [
            {
              type: 'email',
              id: formData.email.trim(),
              channels: {
                email: {
                  status: formData.marketingConsent ? 'subscribed' : 'nonSubscribed',
                  statusDate: new Date().toISOString(),
                },
              },
            },
          ],
          firstName: formData.name.trim(),
          phone: (formData.phone || '').trim(),
        };

        const contactResponse = await fetch('https://api.omnisend.com/v3/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': process.env.OMNISEND_API_KEY,
          },
          body: JSON.stringify(contactPayload),
        });

        const contactText = await contactResponse.text();
        console.log('Status contact Omnisend:', contactResponse.status);
        console.log('Răspuns contact Omnisend:', contactText);

        console.log('Trimit event către Omnisend...');

        const omnisendResponse = await fetch('https://api.omnisend.com/api/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Omnisend-API-Key ${process.env.OMNISEND_API_KEY}`,
            'Omnisend-Version': '2026-03-15',
          },
          body: JSON.stringify({
            eventName: 'booking_request_submitted',
            origin: 'api',
            contact: {
              email: formData.email.trim(),
              phone: (formData.phone || '').trim() || undefined,
              firstName: formData.name.trim(),
            },
            properties: {
              selected_date: formattedDate,
              raw_selected_date: formData.selectedDate,
              message: (formData.message || '').trim(),
              marketing_consent: !!formData.marketingConsent,
            },
          }),
        });

        const omnisendText = await omnisendResponse.text();
        console.log('Status event Omnisend:', omnisendResponse.status);
        console.log('Răspuns event Omnisend:', omnisendText);
      } catch (omnisendError) {
        console.error(
          'Omnisend a dat eroare, dar emailurile au fost trimise:',
          omnisendError
        );
      }
    } else {
      console.log('OMNISEND_API_KEY lipsește. Sar peste Omnisend momentan.');
    }

    return res.status(200).json({
      success: true,
      message: 'Cererea a fost trimisă cu succes.',
    });
  } catch (error) {
    console.error('EROARE SERVER COMPLETĂ:', error);

    return res.status(500).json({
      success: false,
      message: error?.text || error?.message || 'Eroare server',
    });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Serverul rulează pe portul ${process.env.PORT || 5000}`);
});
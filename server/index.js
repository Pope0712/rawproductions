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

    // EMAIL ADMIN
    const adminResponse = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_ADMIN_TEMPLATE_ID,
      adminTemplateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    // EMAIL CLIENT
    const clientResponse = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_CLIENT_TEMPLATE_ID,
      clientTemplateParams,
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    // OMNISEND
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
          message: (formData.message || '').trim(),
        },
      }),
    });

    if (adminResponse.status !== 200 || clientResponse.status !== 200) {
      return res.status(500).json({
        success: false,
        message: 'Emailurile nu au fost trimise.',
      });
    }

    if (!omnisendResponse.ok) {
      console.error('Eroare Omnisend');
    }

    return res.json({
      success: true,
      message: 'Cererea a fost trimisă!',
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: 'Eroare server',
    });
  }
});

app.listen(5000, () => {
  console.log('Serverul rulează pe portul 5000');
});
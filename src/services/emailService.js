import emailjs from '@emailjs/browser';

const sendFormDataToEmail = async (formData) => {
  console.log("Funcția sendFormDataToEmail a fost apelată:", formData);

  try {
    // Pregătirea parametrilor pentru emailul către admin
    const adminTemplateParams = {
      from_name: formData.name.trim(), // Numele expeditorului
      email: formData.email.trim(), // Emailul expeditorului
      phone: formData.phone.trim(), // Numărul de telefon
      message: formData.message.trim(), // Mesajul trimis de utilizator
      selected_date: new Date(formData.selectedDate).toLocaleDateString('ro-RO'), // Data selectată
    };

    // Trimiterea emailului către admin
    console.log("Parametrii pentru admin:", adminTemplateParams);
    const adminResponse = await emailjs.send(
      'service_us4sh9d', // ID-ul serviciului din EmailJS
      'template_whpecs2', // ID-ul șablonului pentru admin
      adminTemplateParams,
      'q_7bIwy-qfVY8swut' // Cheia publică EmailJS
    );
    console.log("Răspuns EmailJS pentru admin:", adminResponse);

    // Pregătirea parametrilor pentru emailul către client
    const clientTemplateParams = {
      to_name: formData.name.trim(), // Numele clientului
      to_email: formData.email.trim(), // Emailul clientului
      selected_date: new Date(formData.selectedDate).toLocaleDateString('ro-RO'), // Data selectată
    };

    // Trimiterea emailului către client
    console.log("Parametrii pentru client:", clientTemplateParams);
    const clientResponse = await emailjs.send(
      'service_us4sh9d', // ID-ul serviciului din EmailJS
      'template_ehrk0jc', // ID-ul șablonului pentru client
      clientTemplateParams,
      'q_7bIwy-qfVY8swut' // Cheia publică EmailJS
    );
    console.log("Răspuns EmailJS pentru client:", clientResponse);

    // Verificarea răspunsurilor EmailJS
    if (adminResponse.status === 200 && clientResponse.status === 200) {
      console.log("Emailurile au fost trimise cu succes.");
      return { success: true, message: 'Emailurile au fost trimise cu succes.' };
    } else {
      throw new Error('Eroare la trimiterea emailurilor.');
    }
  } catch (error) {
    console.error("Eroare în sendFormDataToEmail:", error);
    return { success: false, message: 'A apărut o eroare. Te rugăm să încerci din nou.' };
  }
};

export default sendFormDataToEmail;

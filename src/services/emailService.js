const API_URL = 'https://rawproductions-api.onrender.com';

const sendFormDataToEmail = async (formData) => {
  console.log('Funcția sendFormDataToEmail a fost apelată:', formData);

  try {
    const response = await fetch(`${API_URL}/api/booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'A apărut o eroare.');
    }

    console.log('Răspuns server:', data);

    return {
      success: true,
      message: data.message || 'Cererea a fost trimisă cu succes.',
    };
  } catch (error) {
    console.error('Eroare în sendFormDataToEmail:', error);

    return {
      success: false,
      message: error.message || 'A apărut o eroare. Te rugăm să încerci din nou.',
    };
  }
};

export default sendFormDataToEmail;
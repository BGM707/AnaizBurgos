document.addEventListener('DOMContentLoaded', () => {
  try {
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        const checkboxes = document.querySelectorAll('.service-checkbox:checked');
        const selectedServices = Array.from(checkboxes).map(cb => cb.value).join(', ');

        const formData = new FormData();
        formData.append('entry.1234567890', email); // Replace with your Google Form email field ID
        formData.append('entry.0987654321', selectedServices || 'Ningún servicio seleccionado'); // Replace with your services field ID

        fetch('https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse', {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        })
        .then(() => {
          alert('¡Gracias por tu suscripción! Pronto recibirás noticias.');
          newsletterForm.reset();
        })
        .catch(error => {
          console.error('Error submitting newsletter form:', error);
          alert('Hubo un error al enviar el formulario. Intenta de nuevo.');
        });
      });
    }

    // Quote Form
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
      quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('quote-email').value;
        const checkboxes = document.querySelectorAll('.service-checkbox:checked');
        const selectedServices = Array.from(checkboxes).map(cb => cb.value).join(', ');

        const formData = new FormData();
        formData.append('entry.1234567890', email); // Replace with your Google Form email field ID
        formData.append('entry.0987654321', selectedServices || 'Ningún servicio seleccionado'); // Replace with your services field ID

        fetch('https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse', {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        })
        .then(() => {
          alert('¡Cotización enviada! Te contactaremos pronto.');
          quoteForm.reset();
        })
        .catch(error => {
          console.error('Error submitting quote form:', error);
          alert('Hubo un error al enviar el formulario. Intenta de nuevo.');
        });
      });
    }
  } catch (error) {
    console.error('Error in formHandler.js:', error);
  }
});
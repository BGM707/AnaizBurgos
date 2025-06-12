document.addEventListener('DOMContentLoaded', () => {
  try {
    // WhatsApp Button
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const checkboxes = document.querySelectorAll('.service-checkbox:checked');
        const selectedServices = Array.from(checkboxes).map(cb => cb.value).join(', ');
        const message = selectedServices ? 
          `Hola Anaiz, quiero una cotización de servicios como: ${selectedServices}.` : 
          'Hola Anaiz, quiero una cotización de servicios.';
        const whatsappUrl = `https://wa.me/+56972250627?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      });
    }

    // Email Button
    const emailBtn = document.getElementById('email-btn');
    if (emailBtn) {
      emailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const checkboxes = document.querySelectorAll('.service-checkbox:checked');
        const selectedServices = Array.from(checkboxes).map(cb => cb.value).join(', ');
        const subject = 'Solicitud de Cotización';
        const body = selectedServices ? 
          `Hola Anaiz, quiero una cotización de servicios como: ${selectedServices}.` : 
          'Hola Anaiz, quiero una cotización de servicios.';
        const mailtoUrl = `mailto:anaiizburgoos@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl, '_blank', 'noopener,noreferrer');
      });
    }
  } catch (error) {
    console.error('Error initializing main.js:', error);
  }
});
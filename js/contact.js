// GSAP Animations
if (typeof gsap !== 'undefined') {
  gsap.from('.contact-hero h1', {
    y: 50,
    opacity: 0,
    duration: 1
  });

  gsap.from('.contact-info', {
    scrollTrigger: {
      trigger: '.contact-container',
      start: 'top 80%'
    },
    x: -100,
    opacity: 0,
    duration: 1
  });

  gsap.from('.contact-form-section', {
    scrollTrigger: {
      trigger: '.contact-container',
      start: 'top 80%'
    },
    x: 100,
    opacity: 0,
    duration: 1
  });
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const message = document.getElementById('formMessage');
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    const formData = {
      name: document.getElementById('contactName').value,
      email: document.getElementById('contactEmail').value,
      subject: document.getElementById('contactSubject').value,
      message: document.getElementById('contactMessage').value
    };
    
    try {
      // EmailJS integration
      // Initialize: emailjs.init('YOUR_PUBLIC_KEY');
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
      
      // Simulated success for demo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      message.className = 'form-message success';
      message.textContent = 'Thank you! Your message has been sent successfully.';
      contactForm.reset();
      
    } catch (error) {
      message.className = 'form-message error';
      message.textContent = 'Something went wrong. Please try again.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}

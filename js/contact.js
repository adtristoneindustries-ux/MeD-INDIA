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

// Initialize EmailJS - Replace with your Public Key
emailjs.init('YOUR_PUBLIC_KEY'); // Get from EmailJS Dashboard

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const message = document.getElementById('formMessage');
    const phoneInput = document.getElementById('contactPhone');
    const emailInput = document.getElementById('contactEmail');
    
    // Validate mobile number (exactly 10 digits)
    if (!/^[0-9]{10}$/.test(phoneInput.value)) {
      message.className = 'form-message error';
      message.textContent = 'Mobile number must be exactly 10 digits (numbers only).';
      phoneInput.focus();
      return;
    }
    
    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      message.className = 'form-message error';
      message.textContent = 'Please enter a valid email address.';
      return;
    }
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    const formData = {
      name: document.getElementById('contactName').value,
      email: emailInput.value,
      phone: phoneInput.value,
      country: document.getElementById('contactCountry').value,
      neet_score: document.getElementById('contactNeet').value,
      course: document.getElementById('contactCourse').value,
      message: document.getElementById('contactMessage').value || 'No additional details provided',
      to_email: 'medindiacag@gmail.com' // Your company email
    };
    
    try {
      // Send email via EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID',    // Replace with your Service ID
        'YOUR_TEMPLATE_ID',   // Replace with your Template ID
        formData
      );
      
      message.className = 'form-message success';
      message.textContent = 'Thank you! Your message has been sent successfully. Our team will contact you soon.';
      contactForm.reset();
      
    } catch (error) {
      message.className = 'form-message error';
      message.textContent = 'Failed to send. Please try again or call us directly at +91 86100 13089.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle('active');
  });
});

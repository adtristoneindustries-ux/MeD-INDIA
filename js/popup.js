// Initialize EmailJS - Replace with your Public Key
emailjs.init('YOUR_PUBLIC_KEY'); // Get from EmailJS Dashboard

// Show popup after 1 second with smooth animation
setTimeout(() => {
  const popup = document.querySelector('.popup-overlay');
  if (popup && !sessionStorage.getItem('popupShown')) {
    popup.classList.add('active');
  }
}, 1000);

// Close popup - only with close button
const closeBtn = document.querySelector('.popup-close');
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    const popup = document.querySelector('.popup-overlay');
    popup.classList.remove('active');
    sessionStorage.setItem('popupShown', 'true');
  });
}

// Form submission
const popupForm = document.getElementById('popupForm');
if (popupForm) {
  popupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = popupForm.querySelector('button[type="submit"]');
    const message = document.getElementById('popupMessage');
    const mobileInput = document.getElementById('popupMobile');
    const emailInput = document.getElementById('popupEmail');
    
    // Validate mobile number (exactly 10 digits)
    if (!/^[0-9]{10}$/.test(mobileInput.value)) {
      message.className = 'popup-message error';
      message.textContent = 'Mobile number must be exactly 10 digits (numbers only).';
      mobileInput.focus();
      return;
    }
    
    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      message.className = 'popup-message error';
      message.textContent = 'Please enter a valid email address.';
      return;
    }
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    const formData = {
      name: document.getElementById('popupName').value,
      email: emailInput.value,
      mobile: mobileInput.value,
      state: document.getElementById('popupState').value,
      to_email: 'medindiacag@gmail.com' // Your company email
    };
    
    try {
      // Send email via EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID',    // Replace with your Service ID
        'YOUR_TEMPLATE_ID',   // Replace with your Template ID
        formData
      );
      
      message.className = 'popup-message success';
      message.textContent = 'Thank you! We will contact you soon.';
      popupForm.reset();
      
      setTimeout(() => {
        document.querySelector('.popup-overlay').classList.remove('active');
        sessionStorage.setItem('popupShown', 'true');
      }, 2000);
      
    } catch (error) {
      message.className = 'popup-message error';
      message.textContent = 'Failed to send. Please try again or call us directly.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
    }
  });
}

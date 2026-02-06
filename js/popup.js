// Show popup after 3 seconds
setTimeout(() => {
  const popup = document.querySelector('.popup-overlay');
  if (popup && !sessionStorage.getItem('popupShown')) {
    popup.classList.add('active');
    if (typeof gsap !== 'undefined') {
      gsap.from('.popup-container', {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });
    }
  }
}, 3000);

// Close popup
const closeBtn = document.querySelector('.popup-close');
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    const popup = document.querySelector('.popup-overlay');
    popup.classList.remove('active');
    sessionStorage.setItem('popupShown', 'true');
  });
}

// Close on overlay click
document.querySelector('.popup-overlay')?.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup-overlay')) {
    e.target.classList.remove('active');
    sessionStorage.setItem('popupShown', 'true');
  }
});

// Form submission
const popupForm = document.getElementById('popupForm');
if (popupForm) {
  popupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = popupForm.querySelector('button[type="submit"]');
    const message = document.getElementById('popupMessage');
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    const formData = {
      name: document.getElementById('popupName').value,
      email: document.getElementById('popupEmail').value,
      mobile: document.getElementById('popupMobile').value,
      state: document.getElementById('popupState').value
    };
    
    try {
      // EmailJS integration
      // Initialize: emailjs.init('YOUR_PUBLIC_KEY');
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
      
      // Simulated success for demo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      message.className = 'popup-message success';
      message.textContent = 'Thank you! We will contact you soon.';
      popupForm.reset();
      
      setTimeout(() => {
        document.querySelector('.popup-overlay').classList.remove('active');
        sessionStorage.setItem('popupShown', 'true');
      }, 2000);
      
    } catch (error) {
      message.className = 'popup-message error';
      message.textContent = 'Something went wrong. Please try again.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
    }
  });
}

// Expandable service items
document.querySelectorAll('.service-header').forEach(header => {
  header.addEventListener('click', () => {
    const serviceItem = header.parentElement;
    const isActive = serviceItem.classList.contains('active');
    
    // Close all items
    document.querySelectorAll('.service-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      serviceItem.classList.add('active');
    }
  });
});

// GSAP Animations
if (typeof gsap !== 'undefined') {
  gsap.from('.services-hero h1', {
    y: 50,
    opacity: 0,
    duration: 1
  });

  gsap.from('.service-item', {
    scrollTrigger: {
      trigger: '.services-container',
      start: 'top 80%'
    },
    x: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  });
}

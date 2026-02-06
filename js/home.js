// Counter animation
const animateCounter = (element, target) => {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, 20);
};

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter-number').forEach(counter => {
  counterObserver.observe(counter);
});

// GSAP Animations
if (typeof gsap !== 'undefined') {
  // Hero animations
  gsap.from('.hero-text h1', {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.3
  });

  gsap.from('.hero-text p', {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5
  });

  gsap.from('.hero-buttons', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.7
  });

  gsap.from('.floating-globe', {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: 'elastic.out(1, 0.5)'
  });

  // Service cards animation
  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '.services-preview',
      start: 'top 80%'
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  });

  // Counter boxes animation
  gsap.from('.counter-box', {
    scrollTrigger: {
      trigger: '.counters-section',
      start: 'top 80%'
    },
    scale: 0.5,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15
  });
}

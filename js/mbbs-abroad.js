// GSAP Animations - No opacity changes, only position
if (typeof gsap !== 'undefined') {
  gsap.from('.hero-content h1', {
    y: 20,
    duration: 0.6,
    ease: 'power2.out'
  });

  gsap.from('.hero-subtitle', {
    scale: 0.98,
    duration: 0.5,
    delay: 0.1,
    ease: 'back.out(1.2)'
  });

  gsap.from('.hero-desc', {
    y: 15,
    duration: 0.5,
    delay: 0.2
  });

  gsap.from('.support-card', {
    scrollTrigger: {
      trigger: '.support-section',
      start: 'top 70%'
    },
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
  });

  gsap.from('.why-card', {
    scrollTrigger: {
      trigger: '.why-section',
      start: 'top 70%'
    },
    x: -20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out'
  });

  gsap.from('.guidance-box', {
    scrollTrigger: {
      trigger: '.guidance-section',
      start: 'top 75%'
    },
    scale: 0.98,
    y: 15,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out'
  });

  gsap.from('.stats-banner-item', {
    scrollTrigger: {
      trigger: '.stats-banner',
      start: 'top 80%'
    },
    y: 20,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out'
  });
}

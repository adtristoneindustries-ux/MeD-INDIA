// GSAP Animations
if (typeof gsap !== 'undefined') {
  // Hero animation
  gsap.from('.about-hero h1', {
    y: 50,
    opacity: 0,
    duration: 1
  });

  gsap.from('.about-hero p', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2
  });

  // About intro animation
  gsap.from('.about-image', {
    scrollTrigger: {
      trigger: '.about-intro',
      start: 'top 80%'
    },
    x: -100,
    opacity: 0,
    duration: 1
  });

  gsap.from('.about-text', {
    scrollTrigger: {
      trigger: '.about-intro',
      start: 'top 80%'
    },
    x: 100,
    opacity: 0,
    duration: 1
  });

  // Mission & Vision boxes
  gsap.from('.mv-box', {
    scrollTrigger: {
      trigger: '.mission-vision',
      start: 'top 80%'
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
  });

  // Timeline items animation
  gsap.from('.timeline-item', {
    scrollTrigger: {
      trigger: '.timeline-section',
      start: 'top 80%'
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  });
}

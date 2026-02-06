// GSAP Animations
if (typeof gsap !== 'undefined') {
  gsap.from('.mbbs-india-hero h1', {
    y: 50,
    opacity: 0,
    duration: 1
  });

  gsap.from('.info-card', {
    scrollTrigger: {
      trigger: '.info-grid',
      start: 'top 80%'
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  });

  gsap.from('.seat-card', {
    scrollTrigger: {
      trigger: '.seat-types',
      start: 'top 80%'
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15
  });
}

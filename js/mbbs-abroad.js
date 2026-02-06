// GSAP Animations
if (typeof gsap !== 'undefined') {
  gsap.from('.mbbs-abroad-hero h1', {
    y: 50,
    opacity: 0,
    duration: 1
  });

  gsap.from('.country-card', {
    scrollTrigger: {
      trigger: '.countries-grid',
      start: 'top 80%'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  });

  gsap.from('.process-step', {
    scrollTrigger: {
      trigger: '.process-section',
      start: 'top 80%'
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15
  });
}

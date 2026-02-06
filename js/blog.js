// GSAP Animations
if (typeof gsap !== 'undefined') {
  gsap.from('.blog-hero h1', {
    y: 50,
    opacity: 0,
    duration: 1
  });

  gsap.from('.blog-card', {
    scrollTrigger: {
      trigger: '.blog-grid',
      start: 'top 80%'
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  });
}

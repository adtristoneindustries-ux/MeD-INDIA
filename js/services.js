// GSAP Animations
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Set initial state immediately
  gsap.set('.service-item', { opacity: 1, y: 0 });

  // Hero animation
  gsap.from('.services-hero h1', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  gsap.from('.services-hero p', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
  });

  // Service cards animation on scroll
  gsap.utils.toArray('.service-item').forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none none',
        once: true
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'power2.out'
    });
  });
}

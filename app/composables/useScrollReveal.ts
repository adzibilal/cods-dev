import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useScrollReveal = () => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    const initReveal = () => {
      // Reveal standard sections
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        gsap.fromTo(el, 
          { 
            y: 50, 
            opacity: 0 
          }, 
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // Reveal-up (slightly faster/higher)
      const revealsUp = document.querySelectorAll('.reveal-up');
      revealsUp.forEach((el) => {
        gsap.fromTo(el, 
          { 
            y: 80, 
            opacity: 0 
          }, 
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // Staggered grid reveals
      const staggers = document.querySelectorAll('.reveal-stagger');
      staggers.forEach((container) => {
        const children = container.children;
        gsap.fromTo(children, 
          { 
            y: 40, 
            opacity: 0 
          }, 
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // Hero specific text reveal
      const heroTexts = document.querySelectorAll('.hero .reveal-text');
      if (heroTexts.length > 0) {
        gsap.fromTo(heroTexts, 
          { 
            y: 30, 
            opacity: 0 
          }, 
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            delay: 0.4,
            ease: 'power3.out'
          }
        );
      }
    };

    return { initReveal };
  }
  
  return { initReveal: () => {} };
};

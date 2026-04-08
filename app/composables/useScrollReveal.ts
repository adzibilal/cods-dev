import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useScrollReveal = () => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    const splitTextNodes = (el: HTMLElement) => {
      const nodes = Array.from(el.childNodes);
      el.innerHTML = '';

      nodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || '';
          // Split by whitespace but keep the whitespace as tokens
          const tokens = text.split(/(\s+)/);
          
          tokens.forEach(token => {
            if (/\s+/.test(token)) {
              // It's whitespace
              const span = document.createElement('span');
              span.textContent = token;
              el.appendChild(span);
            } else if (token.length > 0) {
              // It's a word, wrap it in a word container
              const wordSpan = document.createElement('span');
              wordSpan.classList.add('reveal-word');
              
              [...token].forEach(char => {
                const charSpan = document.createElement('span');
                charSpan.textContent = char;
                charSpan.classList.add('reveal-char');
                wordSpan.appendChild(charSpan);
              });
              el.appendChild(wordSpan);
            }
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const clone = (node as HTMLElement).cloneNode(true) as HTMLElement;
          splitTextNodes(clone);
          el.appendChild(clone);
        }
      });
    };

    const initReveal = () => {
      // 1. Staggered Character Reveal (Typing Effect)
      const typeReveals = document.querySelectorAll('.reveal-type');
      typeReveals.forEach((el) => {
        const htmlElement = el as HTMLElement;
        splitTextNodes(htmlElement);
        
        const chars = htmlElement.querySelectorAll('.reveal-char');
        gsap.fromTo(chars, 
          { 
            opacity: 0,
            y: 10
          }, 
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.025,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

      // 2. Reveal standard sections
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

      // 3. Reveal-up (slightly faster/higher)
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

      // 4. Staggered grid reveals
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

      // 5. Hero specific text reveal (Backup if not using reveal-type)
      const heroTexts = document.querySelectorAll('.hero .reveal-text:not(.reveal-type)');
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

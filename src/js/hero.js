import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

if (window.innerWidth > 1161) {
  let animationPlayed = false;
  gsap.set('.overlay-ellipse', { scale: 0, opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: '+=800',
      scrub: true,
      pin: true,
      anticipatePin: 1,
      onLeave: self => {
        if (!animationPlayed) {
          animationPlayed = true;

          gsap.to(window, {
            scrollTo: '#discover',
            duration: 1,
            ease: 'power2.inOut',
          });

          setTimeout(() => {
            self.kill();
            tl.kill();
            gsap.set('.hero', { clearProps: 'all' });
          }, 1000);
        }
      },
    },
  });

  tl.to('.eye', {
    opacity: 1,
    scale: 0,
    duration: 3,
    ease: 'power2.out',
  });

  tl.to(
    '.eye',
    {
      scale: 3,
      opacity: 1,
      duration: 3,
    },
    '>'
  );

  tl.to(
    '.overlay-ellipse',
    {
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: 'power2.out',
    },
    '>-0.5'
  );
  tl.to('.overlay-ellipse', {
    scale: 3,
    duration: 2,
    ease: 'power2.inOut',
  });
  tl.to('.overlay-ellipse', {
    scale: 5,
    duration: 2,
    ease: 'power2.inOut',
  });

  tl.to('.overlay-ellipse', {
    scale: 15,
    duration: 1,
    ease: 'power2.inOut',
  });

  tl.to('.overlay-ellipse', {
    scale: 50,
    duration: 1,
    ease: 'power2.inOut',
  });
}

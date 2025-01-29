'use strict';

{
  // Loading
  const loading = document.querySelector('#loading');

  window.addEventListener('load', () => {
    loading.animate(
      {
        opcity: [1, 0],
        translate: ['0 0', '0 -100%'],
        visibility: 'hidden',
      },
      {
        duration: 400,
        delay: 1500,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });


  // Menu
  const menu = document.querySelector('#menu');
  const menuOpen = document.querySelector('#menuBtn');
  const menuClose = document.querySelector('#menuClose');
  const menuOptions = {
    duration: 1400,
    easing: 'ease',
    fill: 'forwards',
  };

  menuOpen.addEventListener('click', () => {
    menu.animate({translate: [' 0', '-20rem 0']}, menuOptions);
  });

  menuClose.addEventListener('click', () => {
    menu.animate({translate: ['-20rem 0', '0']}, menuOptions);
  });
  
  
 // Fadein
  const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          {
            opacity: [0, 1],
            filter: ['blur(.4rem)', 'blur(0)'],
            translate: ['0 4rem', 0],
          },
          {
            duration: 1800,
            delay: 200,
            easing: 'ease',
            fill: 'forwards',
          }
        );
        obs.unobserve(entry.target);
      }
    });
  };
  
  const fadeObserver = new IntersectionObserver(animateFade);
  
  const fadeElements = document.querySelectorAll('.fadein');
  fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
  });

 // Blurin
 const animateBlur = (es, obs) => {
  es.forEach((e) => {
    if (e.isIntersecting) {
      e.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.6rem)', 'blur(0)'],
        },
        {
          duration: 600,
          easing: 'ease',
          fill: 'forwards',
        }
      );
      obs.unobserve(e.target);
    }
  });
};

const blurObserver = new IntersectionObserver(animateBlur);

const blurElements = document.querySelectorAll('.blurin');

blurElements.forEach((blurElement) => {
  blurObserver.observe(blurElement);
});
  

}

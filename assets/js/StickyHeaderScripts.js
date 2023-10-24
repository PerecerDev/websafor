
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section[data-theme]');
    const sticky = document.querySelector('#sticky-header');
    const stickyBudget = document.querySelector('#budgetSticky');
    const logo = document.querySelector('.logo');
    const plusButton = document.querySelector('#toggleButton');
    const navMenu = document.querySelector('#navMenu');
    const applyStylesForSticky = (theme) => {
  logo.style.transition = 'fill 0.3s ease';
  plusButton.style.transition = 'color 0.3s ease';
  sticky.style.transition = 'background 0.3s ease, background-image 0.3s ease, border-bottom 0.3s ease';

  switch (theme) {
      case 'white':
          logo.style.fill = 'black';
          plusButton.style.color = 'black';
          navMenu.style.color = 'black';
          sticky.style.background = 'white';
          sticky.style.borderBottom = '1px solid black';
          break;

      case 'orange':
          logo.style.fill = '#042f2e';
          plusButton.style.color = '#042f2e';
          navMenu.style.color = '#042f2e';
          sticky.style.background = '#fed7aa';
          sticky.style.borderBottom = '1px solid #042f2e';
          break;

      case 'green':
          logo.style.fill = '#fed7aa';
          plusButton.style.color = '#fed7aa';
          navMenu.style.color = '#fed7aa';
          sticky.style.background = '#042f2e';
          sticky.style.borderBottom = '1px solid #fed7aa';
          break;

      case 'black':
          logo.style.fill = 'white';
          plusButton.style.color = 'white';
          navMenu.style.color = 'white';
          sticky.style.background = 'black';
          sticky.style.borderBottom = '1px solid white';
          break;

      case 'grey':
          logo.style.fill = '#042f2e';
          plusButton.style.color = '#042f2e';
          navMenu.style.color = '#042f2e';
          sticky.style.background = '#e5e7eb';
          sticky.style.backgroundImage = 'linear-gradient(0deg, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)';
          sticky.style.backgroundSize = '20px 20px';
          sticky.style.borderBottom = '1px solid #042f2e';
          break;
  }
};
const applyStylesForStickyBudget = (theme) => {
  logo.style.transition = 'fill 0.3s ease';
  plusButton.style.transition = 'color 0.3s ease';
  stickyBudget.style.transition = 'background 0.3s ease, border-bottom 0.3s ease';

  switch (theme) {
      case 'white':
          stickyBudget.style.background = 'black';
          stickyBudget.style.color = 'white';
          break;

      case 'orange':
          stickyBudget.style.background = '#042f2e';
          stickyBudget.style.color = '#fed7aa';
          break;

      case 'green':
          stickyBudget.style.background = '#fed7aa';
          stickyBudget.style.color = '#042f2e';
          break;

      case 'black':
          stickyBudget.style.background = 'white';
          stickyBudget.style.color = 'black';
          break;

      case 'grey':
          stickyBudget.style.background = '#042f2e';
          stickyBudget.style.color = '#e5e7eb';
          break;
  }
};




  const checkStickyHeader = () => {
      const triggerPointTop = window.innerHeight * 0.1;
      let lastMatchedSection = null;

      sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= triggerPointTop && rect.bottom >= triggerPointTop) {
              lastMatchedSection = section;
          }
      });

      if (lastMatchedSection) {
          const theme = lastMatchedSection.getAttribute('data-theme');
          applyStylesForSticky(theme);
      }
  };

  const checkStickyBudget = () => {
      const triggerPointBottom = window.innerHeight * 0.9;
      let lastMatchedSection = null;

      sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= triggerPointBottom && rect.bottom >= triggerPointBottom) {
              lastMatchedSection = section;
          }
      });

      if (lastMatchedSection) {
          const theme = lastMatchedSection.getAttribute('data-theme');
          applyStylesForStickyBudget(theme);
      }
  };


    window.addEventListener('scroll', () => {
        checkStickyHeader();
        checkStickyBudget();
    });

    // Comprobar estilos iniciales
    checkStickyHeader();
    checkStickyBudget();
});

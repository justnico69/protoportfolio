
document.addEventListener('DOMContentLoaded', () => {
  // Grab all nav links by class or container
  const navLinks = document.querySelectorAll('.navbar__link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      console.log(`Link clicked: ${link.href}`);

      // Check if default was prevented (which would block navigation)
      if (e.defaultPrevented) {
        console.error(`Navigation blocked for link: ${link.href}`);
      } else {
        console.log('Navigation should proceed normally...');
      }
    });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  /***********************************
   * Mobile Menu Toggle
   ***********************************/
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  /***********************************
   * Smooth Scrolling for Nav Links
   ***********************************/
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Close mobile menu if open
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });

  /***********************************
   * Parallax Effect for Hero Background
   ***********************************/
  const bgImage = document.querySelector('.hero-sectionbg-image');
  if (bgImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      bgImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    });
  }

  
  
});

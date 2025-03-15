

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Toggle ARIA attributes for accessibility
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
      menuToggle.setAttribute('aria-expanded', !expanded);
    });
    
    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.navbar__link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

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
    const href = this.getAttribute('href');
    
    // If the link is just a hash (e.g., "#services"), smooth scroll:
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Close mobile menu if open
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    } else {
      // For full/other page links, don't prevent default—let it navigate
      console.log('Navigating to:', href);
    }
  });
});

  
});

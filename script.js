document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children); // Each is .carousel-slide
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    const dotsNav = document.querySelector('.carousel-dots');
    const dots = Array.from(dotsNav.children);
  
    // Get the width of a single slide
    const slideWidth = slides[0].getBoundingClientRect().width;
  
    // Position slides side by side
    slides.forEach((slide, index) => {
      slide.style.left = (slideWidth * index) + 'px';
    });
  
    function moveToSlide(track, currentSlide, targetSlide) {
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
    }
  
    function updateDots(currentDot, targetDot) {
      currentDot.classList.remove('active');
      targetDot.classList.add('active');
    }
  
    // Next button
    nextButton.addEventListener('click', () => {
      const currentSlide = track.querySelector('.current-slide') || slides[0];
      const currentDot = dotsNav.querySelector('.active') || dots[0];
      let nextSlide = currentSlide.nextElementSibling;
      let nextDot = currentDot.nextElementSibling;
  
      // If we're at the last slide, loop back to the first
      if (!nextSlide) {
        nextSlide = slides[0];
        nextDot = dots[0];
      }
      moveToSlide(track, currentSlide, nextSlide);
      updateDots(currentDot, nextDot);
    });
  
    // Prev button
    prevButton.addEventListener('click', () => {
      const currentSlide = track.querySelector('.current-slide') || slides[0];
      const currentDot = dotsNav.querySelector('.active') || dots[0];
      let prevSlide = currentSlide.previousElementSibling;
      let prevDot = currentDot.previousElementSibling;
  
      // If we're at the first slide, loop to the last
      if (!prevSlide) {
        prevSlide = slides[slides.length - 1];
        prevDot = dots[dots.length - 1];
      }
      moveToSlide(track, currentSlide, prevSlide);
      updateDots(currentDot, prevDot);
    });
  
    // Dot navigation
    dotsNav.addEventListener('click', (e) => {
      const targetDot = e.target.closest('span');
      if (!targetDot) return;
  
      const currentSlide = track.querySelector('.current-slide') || slides[0];
      const currentDot = dotsNav.querySelector('.active') || dots[0];
      const targetIndex = dots.findIndex(dot => dot === targetDot);
      const targetSlide = slides[targetIndex];
  
      moveToSlide(track, currentSlide, targetSlide);
      updateDots(currentDot, targetDot);
    });
  });
  

document.addEventListener("DOMContentLoaded", function () {
    const bgImage = document.querySelector(".hero-sectionbg-image");

    if (!bgImage) return; // Exit if the element doesn't exist

    function updateParallax() {
        let scrolled = window.scrollY;
        bgImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }

    window.addEventListener("scroll", function () {
        requestAnimationFrame(updateParallax);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const dots = document.querySelectorAll(".dot");

let index = 0;

function updateCarousel() {
const offset = index * items[0].offsetWidth;
track.style.transform = `translateX(-${offset}px)`;

// Update active dot
dots.forEach(dot => dot.classList.remove("active"));
dots[index].classList.add("active");
}

// Next Button
nextBtn.addEventListener("click", () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

// Prev Button
prevBtn.addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});

// Dot Navigation
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
    });
});
});



        document.addEventListener("DOMContentLoaded", function() {
            // Smooth scrolling
            const navLinks = document.querySelectorAll("nav ul li a");
            navLinks.forEach(link => {
                link.addEventListener("click", function(event) {
                    event.preventDefault();
                    const targetId = this.getAttribute("href").substring(1);
                    const targetSection = document.getElementById(targetId);
    
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }
                });
            });
            document.addEventListener("DOMContentLoaded", function() {
                document.addEventListener("scroll", function() {
                  let scrolled = window.scrollY;
                  document.querySelector(".hero-sectionbg-image").style.transform = "translateY(" + scrolled * 0.3 + "px)";
                });
              });
            
            // Mobile menu toggle
            const menuToggle = document.getElementById("menuToggle");
            const navMenu = document.getElementById("navMenu");
            
            menuToggle.addEventListener("click", function() {
                navMenu.classList.toggle("active");
            });
            
            // Close mobile menu when clicking a link
            navLinks.forEach(link => {
                link.addEventListener("click", function() {
                    if (navMenu.classList.contains("active")) {
                        navMenu.classList.remove("active");
                    }
                });
            });
        });


        
    
    
        
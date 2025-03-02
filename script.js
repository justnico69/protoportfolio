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


        
    
    
        
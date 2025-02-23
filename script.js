
// Initialize EmailJS with your user ID
emailjs.init("zcsvZn7yiKRHlnApP"); // Replace with your EmailJS user ID

function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_bz55rqg", "template_nxpcpwi", params)
        .then(function(response) {
            alert("Email Sent!");
            console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.log("FAILED...", error);
        });
}
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
   
    
    
        
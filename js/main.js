document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section");
    const logoSpan = navbar.querySelector(".navbar .logo a span");
  
    function handleNavbarAppearance() {
      const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
  
      if (currentSection) {
        navbar.className = "navbar"; // Reset the class to remove all previous styles
  
        if (currentSection.id === "home") {
          navbar.classList.add("blur-navbar");
          logoSpan.style.color = "#00bcd4";
        } else if (currentSection.id === "about") {
          navbar.classList.add("about-navbar");
          logoSpan.style.color = "#0082e6";
        } else {
          navbar.classList.add("section-navbar");
          logoSpan.style.color = "#0082e6";
        }
      }
      if (window.scrollY === 0) {
        navbar.classList.remove("blur-navbar");
      }
    }
  
    // Toggle menu/navbar script
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".navbar .menu");
    const menuItems = document.querySelectorAll(".navbar .menu a");
  
    function toggleMenu() {
      menu.classList.toggle("active");
      menuBtn.querySelector("i").classList.toggle("active");
    }
  
    menuBtn.addEventListener("click", toggleMenu);
  
    // Close menu when clicking on menu items
    menuItems.forEach(item => {
      item.addEventListener("click", toggleMenu);
    });
  
    new Typed(".typing", {
      strings: ["Student.", "Coder.", "Frontend Developer.", "Deep Learning Enthusiast.", "Freelancer."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    new Typed(".typing-2", {
      strings: ["Student.", "Coder.", "Frontend Developer.", "Deep Learning Enthusiast.", "Freelancer."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
   
    

  

  
    window.addEventListener("scroll", handleNavbarAppearance);
  });
  
  document.getElementById('hire-me-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'mailto:shivam21mishra08@gmail.com';
  });
  
window.addEventListener('scroll',reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i=0; i<reveals.length; i++){
      
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
  
      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
      else{
        reveals[i].classList.remove('active');
      }
    }
  }
  





  
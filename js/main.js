document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section");
    const logoSpan = navbar.querySelector(".navbar .logo a span");
    const footer = document.querySelector("footer");
    function handleNavbarAppearance() {
      const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
  
      if (currentSection) {
        navbar.className = "navbar"; // Reset the class to remove all previous styles
        footer.className = "footer";
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
        footer.classList.add("hidden")
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

  var map = L.map('map').setView([37.7749, -122.4194], 12);

  // Add the OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);
  
  // Create a marker and add it to the map
  L.marker([37.7749, -122.4194]).addTo(map)
    .bindPopup('Your Desired Location')
    .openPopup();
    
// send email
function sendMail(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    Email.send({
      SecureToken: "09b84e2e-e900-411d-ba95-8b160630be54",
      To: '20051028@kiit.ac.in',
      From: document.getElementById('email').value,
      Subject: "New Message from " + document.getElementById('name').value,
      Body: "Name: " + document.getElementById('name').value + "<br>Email: " + document.getElementById('email').value + "<br>Message: " + document.getElementById('message').value
    }).then(function () {
      alert("Mail Sent Successfully");
      // Reset the form fields after sending the email
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    });
  }
  



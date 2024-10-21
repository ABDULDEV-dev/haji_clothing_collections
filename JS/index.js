
// let username = prompt("WHAT IS YOUR NAME?");

// function greet(username){
//   return "HELLO, " + username;
// }

// window.alert = (greet(username));


// script.js
document.getElementById('btn').addEventListener('click', function() {
    var btn = document.getElementById('services');
    
  
    if (services.style.display === 'none' || services.style.display === '') {
      services.style.display = 'block';
      this.textContent = 'Hide Links'; // Change button text
    } else {
      services.style.display = 'none';
      this.textContent = 'SERVICES'; // Change button text
    }
  });
  
   // Array of image sources
   const images = ['./image/pic1.jpeg', './image/pic3.jpg'];

   let currentIndex = 0;

   // Function to change the image
   function changeImage() {
       currentIndex = (currentIndex + 1) % images.length; // Move to next image, loop back if at end
       document.getElementById('image-slider').src = images[currentIndex]; // Update the image source
   }

   // Automatically change the image every 10 seconds (10000 milliseconds)
   setInterval(changeImage, 5000);

  
    // Function to adjust layout based on window size
    function adjustLayout() {
      const content = document.getElementById('container');

      if (window.innerWidth <= 767) {
          // For small screens (mobile), stack boxes vertically
          content.style.flexDirection = 'row';
      } else {
          // For larger screens (tablet and desktop), display boxes in a row
          content.style.flexDirection = 'row'; 
      }
  }

  // Get elements
const btnToggleMenu = document.getElementById('btn');
const servicesSection = document.getElementById('services');
const btnToggleTheme = document.getElementById('btn1');
const socialLinks = document.getElementById('social-link');

// Function to toggle the services section
btnToggleMenu.addEventListener('click', () => {
    servicesSection.classList.toggle('hidden'); // Show/hide services menu
    servicesSection.style.transition = "all 0.5s ease-in-out";
});

// Function to enable Dark Mode toggle
btnToggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dark mode styles (added via JavaScript)
const addDarkModeStyles = () => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        body.dark-mode {
            background-color: #121212;
            color: #f0f0f0;
        }
        .side, #btn, footer {
            background-color: #333333;
        }
        .ls:hover, #btn:hover, .footer-social a:hover {
            color: #FFD700;
        }
    `;
    document.head.appendChild(styleElement);
};

// Add dark mode styles to the page
addDarkModeStyles();

// Mobile navigation handler (open/close menu)
const toggleMobileMenu = () => {
    if (window.innerWidth <= 768) {
        servicesSection.classList.add('hidden'); // Hide the menu by default
    } else {
        servicesSection.classList.remove('hidden'); // Show on larger screens
    }
};

// Trigger mobile menu toggle on window resize
window.addEventListener('resize', toggleMobileMenu);

// Call initially to set up menu visibility
toggleMobileMenu();

// For smoother scrolling behavior (when navigating between sections)
document.querySelectorAll('.ls').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

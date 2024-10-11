
// script.js
document.getElementById('btn').addEventListener('click', function() {
    var btn = document.getElementById('services');
    
    // Toggle the display of the anchor list
    if (services.style.display === 'none' || services.style.display === '') {
      services.style.display = 'block';
      this.textContent = 'Hide Links'; // Change button text
    } else {
      services.style.display = 'none';
      this.textContent = 'SERVICES'; // Change button text
    }
  });
  
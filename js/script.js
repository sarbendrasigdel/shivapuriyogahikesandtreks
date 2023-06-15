// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (let link of anchorLinks) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    }
  });
  
  // Form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Perform form validation
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
    } else {
      // TODO: Send form data to server or perform desired action
      alert('Form submitted successfully!');
      form.reset();
    }
  });


  
// for contact page

// Form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Validate phone number
    var phoneNumber = document.getElementById("phone").value;
    if (!validatePhoneNumber(phoneNumber)) {
      alert("Please enter a valid phone number in the format XXX-XXX-XXXX.");
      return;
    }
  
    // Form submission logic
    var formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value
    };
  
    // Send the form data to the server or perform any other desired actions
    console.log(formData);
  
    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
  });
  
  // Phone number validation
  function validatePhoneNumber(phoneNumber) {
    var regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(phoneNumber);
  }
  

  

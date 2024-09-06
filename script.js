// Basic form handling example
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display the form data in the console (just for demo purposes)
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // You can add AJAX here to send data to a backend or handle form validation
  alert('Thank you for reaching out! We will get back to you soon.');
});
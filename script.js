document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Basic validation
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
      return;
    }
  
    // Display success message
    document.getElementById('formMessage').textContent = 'Thank you for contacting us, ' + name + '!';
  
    // Reset form fields
    document.getElementById('contactForm').reset();
  });
  
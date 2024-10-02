document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  console.log('Form submitted');

  var formData = new FormData(this);

  fetch('contact.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.text())
  .then(result => {
      console.log('Result:', result);
      if (result === 'success') {
          alert('Thank you! Your message has been sent successfully.');
          document.querySelector('form').reset(); // Reset the form
      } else if (result === 'error') {
          alert('Sorry, there was an error sending your message. Please try again later.');
      } else if (result === 'validation_error') {
          alert('Please fill in all the required fields.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Sorry, there was an error with the submission. Please try again later.');
  });
});

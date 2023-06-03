document.getElementById('contactForm').addEventListener('submit', function(event) {
  // prevent the form from submitting normally
  event.preventDefault();

  // create an object to store the form inputs
  let formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  // log the form data to the console
  console.log(formData);
});
   
        

        document.getElementById('email').addEventListener('change', function() {
            alert('Email field changed to: ' + this.value);
        });

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();  // Prevent form submission to allow seeing the alert
            alert('Form submitted!');
        });
    
// script.js


// Select the photo element
const photo = document.getElementById('photo');

// Add a click event listener
photo.addEventListener('click', function() {
    // Toggle the 'zoomed' class on click
    this.classList.toggle('zoomed');
});



document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    const form = e.target;
    const formData = new FormData(form);
  
    // API URL for Web3Forms
    const url = "https://api.web3forms.com/submit";
  
    // Add your access key to the form data
    formData.append('access_key', '7e6f6d30-2a41-4793-9347-b2696c91fc59');
  
    // Optional: Add subject to the form (you can change this as needed)
    formData.append('subject', 'New Contact Form Submission');
    
    // Optional: Add redirect URL for success (useful if you want to redirect after form submission)
    // formData.append('redirect', 'https://yourwebsite.com/thank-you');
  
    // Set form status to "loading"
    document.getElementById('formStatus').textContent = "Sending...";
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });
  
      const result = await response.json();
      
      if (result.success) {
        document.getElementById('formStatus').textContent = "Message sent successfully!";
        form.reset(); // Clear the form
      } else {
        document.getElementById('formStatus').textContent = "Error sending message. Please try again.";
      }
    } catch (error) {
      document.getElementById('formStatus').textContent = "An error occurred. Please try again later.";
    }
  });
  

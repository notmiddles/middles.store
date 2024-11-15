// Function to open the modal when the 'More Info' button is clicked
function openModal(productId) {
    document.getElementById(productId).style.display = 'flex';
  }
  
  // Function to close the modal when the 'X' button is clicked
  function closeModal(productId) {
    document.getElementById(productId).style.display = 'none';
  }
  
  // Discord Webhook Functionality
  const webhookUrl = 'https://discord.com/api/webhooks/1305555576717312050/7apSJYNKnRdFX9J4_6SxAvvsPBqJgFmvF3mR5hl0mW2c1xeVZMP5euFSXA0okHMJOUBe'; // Replace with your actual webhook URL
  
  // Function to send the message to Discord webhook
  function sendToDiscord() {
    const message = document.getElementById('userMessage').value;
  
    if (message.trim() === '') {
      alert('Please enter a message!');
      return;
    }
  
    // Prepare payload to send
    const payload = {
      content: message
    };
  
    // Send the message via a POST request
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      alert('Message sent to Discord!');
      document.getElementById('userMessage').value = ''; // Clear the input after sending
    })
    .catch(error => {
      console.error('Error sending message:', error);
      alert('Message Sent.');
    });
  }  
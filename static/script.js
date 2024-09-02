const apiHostElement = document.getElementById('api-host');
const hostname = apiHostElement.dataset.hostname;

const PraveenStore = document.getElementById("PraveenStore");
const OnceMore = document.getElementById("OnceMore");
const ArokyaBakery = document.getElementById("ArokyaBakery");
const iCoolHarwares = document.getElementById("iCoolHarwares");
const image = document.getElementById("image");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

PraveenStore.addEventListener('mouseover', function() {
  // Display the image name for image1
  console.log(this.src.split('/').pop()); 
});

PraveenStore.addEventListener('click', function() {
  // Redirect to a different page
  window.location.href = hostname;
});

OnceMore.addEventListener('mouseover', function() {
  // Display the image name for image1
  console.log(this.src.split('/').pop()); 
});

OnceMore.addEventListener('click', function() {
  // Redirect to a different page for image1
  window.location.href = hostname; 
});

ArokyaBakery.addEventListener('mouseover', function() {
  // Display the image name for image1
  console.log(this.src.split('/').pop()); 
});

ArokyaBakery.addEventListener('click', function() {
  // Redirect to a different page for image1
  window.location.href = hostname; 
});

iCoolHarwares.addEventListener('mouseover', function() {
  // Display the image name for image1
  console.log(this.src.split('/').pop()); 
});

iCoolHarwares.addEventListener('click', function() {
  // Redirect to a different page for image1
  window.location.href = hostname; 
});

image.addEventListener('mouseover', function() {
  // Display the image name for image1
  console.log(this.src.split('/').pop()); 
});

image.addEventListener('click', function() {
  // Redirect to a different page
  window.location.href = hostname;
});

image1.addEventListener('mouseover', function() {
  // Display the image name for image1
  console.log(this.src.split('/').pop()); 
});

image1.addEventListener('click', function() {
  // Redirect to a different page for image1
  window.location.href = hostname; 
});

image2.addEventListener('mouseover', function() {
  // Display the image name for image1
  console.log(this.src.split('/').pop()); 
});

image2.addEventListener('click', function() {
  // Redirect to a different page for image1
  window.location.href = hostname; 
});

image3.addEventListener('mouseover', function() {
  // Display the image name for image1
  console.log(this.src.split('/').pop()); 
});

image3.addEventListener('click', function() {
  // Redirect to a different page for image1
  window.location.href = hostname; 
});


const categoryList = document.querySelector('.category-list');
const listItems = categoryList.querySelectorAll('li');

listItems.forEach(item => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  item.insertBefore(dot, item.firstChild); // Insert the dot before the link
});


const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const phone = document.getElementById('phone').value;

  async function readAndExtractData(filename) {
  try {
    const response = await fetch(`/phone_numbers/${filename}`);
    const fileContent = await response.text();
    const lines = fileContent.split('\n');

    if (lines.length >= 2) {
      const secondLine = lines[1];
      const parts = secondLine.split('::'); // Split the second line by '::'

      if (parts.length >= 8) {
        const firstName = parts[0];
        const location = parts[5];

        return { firstName, location }; // Return the extracted data
      } else {
        console.error('Invalid file format: Insufficient data in the second line.');
        return null;
      }
    } else {
      console.error('Invalid file format: Insufficient lines in the file.');
      return null;
    }
  } catch (error) {
    console.error('Error reading file:', error);
    return null;
  }
  }

  // Send the phone number to your API
  fetch(hostname + '/phone', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ phone: phone })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response (check for success or error)
    if (data.message === 'N_user') {
      // Redirect to the signup page with the phone number as a URL parameter
      window.location.href = `/users?phone=${phone}`; //signup page is at /signup
      console.log('Login successful!');
    } else if (data.message === 'E_user') {
	  readAndExtractData(phone).then(extractedData => {
      if (extractedData) {
        const { firstName, location } = extractedData;
        // Construct the URL
        window.location.href = `/home?location=${location}&phone=${phone}&name=${firstName}`;
        console.log('Login successful!');
        }
      });
    } else {
      // Handle login error
	  alert(data.message);
      console.error('Invalid phone number');
      // Display an error message to the user
    }
  })
  .catch(error => {
    // Handle network or other errors
    console.error('Error during login:', error);
  });
});
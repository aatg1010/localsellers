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



const signupForm = document.getElementById('signupForm');
const phoneInput = document.getElementById('phone'); // Get the hidden phone input

// Retrieve the phone number from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const phone = urlParams.get('phone');

// If the phone number is available, set it in the hidden input
if (phone) {
    phoneInput.value = phone;
}

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = phoneInput.value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const coreLocation = document.getElementById('coreLocation').value;
    const address = document.getElementById('address').value;
    const terms = document.getElementById('terms').checked;
    const seller = document.getElementById('seller').checked;

    // Construct the data string
    const dataString = `${firstName}::${lastName}::${userId}::${password}::${email}::${coreLocation}::${address}::${terms}::${seller}`;

    // Send the data to your API
    fetch(hostname + '/signup', { // Replace with your API URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone: phone, data: dataString })
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response and to check for success or error
        if (data.message === 'Signup successful') {
            console.log('Signup successful!');
		window.location.href = `/home?location=${coreLocation}&phone=${phone}&name=${firstName}`;
		} else {
            console.error('Signup failed');
			window.location.href = `/?phone=${phone}`;
            alert("Error Signing in. Please try again later!");
        }
    })
    .catch(error => {
        console.error('Error during signup:', error);
		alert("Error Signing in. Please try again later!");
    });
});
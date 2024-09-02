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

// Get URL parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Extract parameters and store them in hidden variables
const name = urlParams.get('name');
const userLocation = urlParams.get('location'); 
const phone = urlParams.get('phone');

// Create hidden input elements to store the parameters
const nameInput = document.createElement('input');
nameInput.type = 'hidden';
nameInput.id = 'nameInput';
nameInput.value = name;
document.body.appendChild(nameInput);

const locationInput = document.createElement('input');
locationInput.type = 'hidden';
locationInput.id = 'locationInput';
locationInput.value = userLocation; 
document.body.appendChild(locationInput);

const phoneInput = document.createElement('input');
phoneInput.type = 'hidden';
phoneInput.id = 'phoneInput';
phoneInput.value = phone;
document.body.appendChild(phoneInput);

// Print the name
document.getElementById('userName').textContent = name;
document.getElementById('userLocation').textContent = userLocation;
document.getElementById('userName1').textContent = name;
document.getElementById('userLocation1').textContent = userLocation;
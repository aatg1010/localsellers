if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Send location data to the server
        fetch('/api/location', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        })
        .then(response => {
          // Handle the server's response
          console.log("Location data sent to server");
        })
        .catch(error => {
          console.error("Error sending location data:", error);
        });
      },
      (error) => {
        // Handle location access errors
        console.error("Error getting location:", error);
      }
    );
  } else {
    // Handle browsers that don't support geolocation
    console.error("Geolocation is not supported by this browser.");
  }
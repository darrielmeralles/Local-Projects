function initialize() {
  const input = document.getElementById('search-input');
  const resultsContainer = document.getElementById('autocomplete-results');

  // Get user's location using the HTML5 Geolocation API
  navigator.geolocation.getCurrentPosition(function(position) {
    const userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    // Set the user's location as the bounds for autocomplete predictions
    const bounds = new google.maps.LatLngBounds(userLocation, userLocation);

    // Create Autocomplete object with bounds
    const autocomplete = new google.maps.places.Autocomplete(input, {
      types: ['geocode'], // Restrict to addresses
      bounds: bounds
    });

    // Display user's location in the autocomplete results
    displayUserLocation(userLocation);
  });

  input.addEventListener('input', function() {
    const query = input.value;

    if (query) {
      // Set component restrictions (e.g., restrict to the United States)
      const componentRestrictions = {
        country: 'US' // Replace with your desired country code
      };

      // Clear previous results
      resultsContainer.innerHTML = '';

      // Display user's location in the autocomplete results
      displayUserLocation();

      // Use Autocomplete object to fetch predictions
      autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();

        // Handle the selected place (customize as needed)
        console.log(place.name, place.formatted_address);
      });

      // Fetch predictions using AutocompleteService (optional)
      // const service = new google.maps.places.AutocompleteService();
      // service.getPlacePredictions(
      //   { input: query, componentRestrictions: componentRestrictions },
      //   function(predictions) {
      //     if (predictions) {
      //       predictions.forEach(function(prediction) {
      //         // Add predictions to resultsContainer
      //       });
      //       resultsContainer.style.display = 'block';
      //     } else {
      //       resultsContainer.style.display = 'none';
      //     }
      //   }
      // );
    } else {
      resultsContainer.style.display = 'none';
    }
  });

  function displayUserLocation(location) {
    const userLocationItem = document.createElement('div');
    userLocationItem.className = 'result-item';

    // Reverse geocode the user's location to get the address
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: location }, function(results, status) {
      if (status === 'OK') {
        userLocationItem.textContent = results[0].formatted_address;
      } else {
        userLocationItem.textContent = 'Your Location';
      }

      const icon = document.createElement('img');
      icon.src = 'user-icon.png'; // Replace with your user icon URL
      icon.alt = 'User Icon';
      icon.className = 'icon';

      userLocationItem.appendChild(icon);
      resultsContainer.appendChild(userLocationItem);

      userLocationItem.addEventListener('click', function() {
        // You can customize the behavior when the user's location is clicked
        console.log('User location clicked!');
      });
    });
  }
}
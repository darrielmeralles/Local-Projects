// Ref: https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js

// https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-multiple-countries

// apikey:"AIzaSyC9rXtfayHzDPUDYANS0eOD501pc2_gclQ",

let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		propertyList: [
			{
				  id: 1,
				  business_name: "Marmaris Grill & Pizza",
				  business_type: "Restaurants",
				  address: "Restaurants",
				  ratings: "4.3",
				  spend: "30.00",
				  delevery_time: "30-55 min",
				  sponsored: "Yes",
				  free_delevery: "Yes",
				  image: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/dpr_1.0/v1692793691/static-takeaway-com/images/restaurants/nl/R1P0P7QN/headers/header",
				  logo: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_82,w_120/f_auto/q_auto/dpr_1.0/v1692793691/static-takeaway-com/images/restaurants/nl/R1P0P7QN/logo_465x320",
				  markericon: "https://irt-cdn.multiscreensite.com/512c27b4888a492d9e99f35f8d9a8042/dms3rep/multi/maps-and-flags.svg",
				  latitude: "-25.363",
				  longitude: "131.044",
  
			},
			{
				  id: 2,
				  business_name: "New York Pizza Badhoevedorp",
				  business_type: "Groceries",
				  address: "Restaurants",
				  ratings: "4",
				  spend: "9.99",
				  delevery_time: "From 16",
				  sponsored: "Yes",
				  free_delevery: "Yes",
				  image: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/dpr_1.0/v1693208718/static-takeaway-com/images/chains/nl/newyorkpizza/headers/header",
				  logo: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_82,w_120/f_auto/q_auto/dpr_1.0/v1693208718/static-takeaway-com/images/chains/nl/newyorkpizza/logo_465x320",
				  markericon: "https://irt-cdn.multiscreensite.com/512c27b4888a492d9e99f35f8d9a8042/dms3rep/multi/maps-and-flags.svg",
				  latitude: "-26.363",
				  longitude: "131.044",
  
			},
			{
				  id: 3,
				  business_name: "Chicken Palace",
				  business_type: "Pharmacy",
				  address: "Restaurants",
				  ratings: "3.8",
				  spend: "29.99",
				  delevery_time: "From 20:30",
				  sponsored: "Yes",
				  free_delevery: "Yes",
				  image: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/v1693208718/static-takeaway-com/images/restaurants/nl/QOP053O/headers/header",
				  logo: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_82,w_120/f_auto/q_auto/dpr_1.0/v1693208718/static-takeaway-com/images/restaurants/nl/QOP053O/logo_465x320",
				  markericon: "https://irt-cdn.multiscreensite.com/512c27b4888a492d9e99f35f8d9a8042/dms3rep/multi/maps-and-flags.svg",
				  latitude: "-26.263",
				  longitude: "131.044",
  
			},
			{
				  id: 4,
				  business_name: "Chicken House",
				  business_type: "Pharmacy",
				  address: "Restaurants",
				  ratings: "3.8",
				  spend: "29.99",
				  delevery_time: "From 20:30",
				  sponsored: "Yes",
				  free_delevery: "Yes",
				  image: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/v1693208718/static-takeaway-com/images/restaurants/nl/QOP053O/headers/header",
				  logo: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_82,w_120/f_auto/q_auto/dpr_1.0/v1693208718/static-takeaway-com/images/restaurants/nl/QOP053O/logo_465x320",
				  markericon: "https://irt-cdn.multiscreensite.com/512c27b4888a492d9e99f35f8d9a8042/dms3rep/multi/maps-and-flags.svg",
				  latitude: "-26.263",
				  longitude: "131.044",
  
			}
		  ]
	}
};

let collection = new Collection()

let device = data.device;
let sampleList = data.config.sampleList;
let propertyList = data.config.propertyList;

let map;
let placesService;
const markers = [];
let circle;
let markerCluster;
const predefinedLocations = [
	{ name: 'Mary Mediatrix of All Grace Parish', lat: 13.9257684, lng: 121.1718262 }, // Example predefined locations
	{ name: 'Amiya Rosa Phase 2', lat: 13.9262997, lng: 121.1455341 },
	{ name: 'Archdiocesan Shrine and Parish of St. Anthony of Padua', lat: 13.9241927, lng: 121.1487052 },
	{ name: 'Blue Bay Beach Resort', lat: 13.6726549, lng: 121.4519088 }
  ];

let defaddress = "10 Ayala Hwy, Lipa, 4218 Batangas";

let noCollectMessage = 'No data was found.' ///data.config.noCollectMessage
let noCollectSubMessage = 'This will be hidden on preview and live site.' ///data.config.noCollectSubMessage
let sampleListData;

switch (device) {
	case 'desktop':
		$(element).width("960px");
		break;
	case 'tablet':
		$(element).width("875px");
		break;
	default:
		$(element).width("326px");
}

//ADD MULTIPLE LINK SOURCE HERE


dmAPI.runOnReady('init', function () {
	dmAPI.loadScript('https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js', function () {
		dmAPI.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyC9rXtfayHzDPUDYANS0eOD501pc2_gclQ&libraries=places,geometry', function () {
			initMap();
			searchPlaces(defaddress);
		})
	})
})

$(".searchBtn").click(function(){
	let address = document.getElementById('addressInput').value;
	searchPlaces(address);
});

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 13.9511538, lng: 121.1602778 },
		zoom: 15
	});

	markerCluster = new MarkerClusterer(map, markers, {
		imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
		gridSize: 50,
		maxZoom: 15,
	});
}

function searchPlaces(address) {
	// const address = document.getElementById('addressInput').value;

	const geocoder = new google.maps.Geocoder();
	geocoder.geocode({ address: address }, (results, status) => {
		if (status === 'OK' && results[0]) {
			clearMarkers();
			const location = results[0].geometry.location;
			map.setCenter(location);

			const radius = 10000;

			if (circle) {
				circle.setMap(null);
			}
			circle = new google.maps.Circle({
				map: map,
				center: location,
				radius: radius,
				fillColor: '#FF0000',
				fillOpacity: 0.2,
				strokeColor: '#FF0000',
				strokeOpacity: 0.8,
				strokeWeight: 2
			});

			const locationsInsideRadius = [];

			predefinedLocations.forEach((location) => {
				const latLng = new google.maps.LatLng(location.lat, location.lng);
				const distance = google.maps.geometry.spherical.computeDistanceBetween(latLng, circle.getCenter());

				if (distance <= radius) {
					const marker = new google.maps.Marker({
						position: latLng,
						title: location.name
					});
					markers.push(marker);
					locationsInsideRadius.push(location);
					// locationsInsideRadius.push(location.name);
				}
			});

			markerCluster.addMarkers(markers);

			console.log(locationsInsideRadius, "locationsInsideRadius");

			const locationsList = document.getElementById('locationsList');

			locationsList.innerHTML = '';

			//append results below
			locationsInsideRadius.map(function(x) {
				let ouput = `<li>${x.name}</li>`;
				$('#locationsList').append(ouput);
			 });

			// locationsInsideRadius.forEach((locationName) => {
			// 	const listItem = document.createElement('li');
			// 	listItem.textContent = locationName;
			// 	locationsList.appendChild(listItem);
			// });
		} else {
			alert('Geocode was not successful for the following reason: ' + status);
		}
	});
}

function clearMarkers() {
	markerCluster.clearMarkers();
	markers.length = 0;
}
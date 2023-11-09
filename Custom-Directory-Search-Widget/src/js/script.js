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
	dmAPI.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyC9rXtfayHzDPUDYANS0eOD501pc2_gclQ&libraries=places', function () {
		initialize();
		
	})
})


$(".srch").click(function(){
	let sVal = $(element).find('#searchTextField').val();
	console.log(sVal, "sval");
});

$(".fa-circle-xmark").click(function(){
	$(this).hide();
	$(".budiSuggest").hide();
	$(element).find('.cb-search-Input').val("");
});

function initialize() {
	const input = document.getElementById('search-input');
	const autocompleteService = new google.maps.places.AutocompleteService();

	const resultsContainer = document.getElementById('autocomplete-results');

	input.addEventListener('input', function() {
	  const query = input.value;

	  if (query) {
		autocompleteService.getPlacePredictions(
		  { input: query },
		  function(predictions) {
			if (predictions) {
			//   resultsContainer.innerHTML = ''; // Clear previous results
			$("#results-wrapper").empty(); // Clear previous results

			  predictions.forEach(function(prediction) {

				console.log(prediction.description, "predection");

				let output = `<div class="result-item">
								<i class="fa-solid fa-location-dot"></i>
								<p>${prediction.description}</p>
							</div>`

				$("#results-wrapper").append(output);

				$( ".result-item" ).click(function() {
					let val = $(this).find("p").text()
					console.log(val, "val");
					input.value = val;
					resultsContainer.style.display = 'none';
					// $('.sudgest').css("display", "none");
				});

			  });

			  resultsContainer.style.display = 'block';
			//   $('.sudgest').css("display", "block");
			} else {
			  resultsContainer.style.display = 'none';
			//   $('.sudgest').css("display", "none");
			}
		  }
		);
	  } else {
		resultsContainer.style.display = 'none';
		// $('.sudgest').css("display", "none");
	  }
	});
  }


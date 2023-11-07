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
				  lat: "-25.363",
				  lng: "131.044",
  
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
				  lat: "-26.363",
				  lng: "131.044",
  
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
				  lat: "-26.263",
				  lng: "131.044",
  
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
				  lat: "-26.263",
				  lng: "131.044",
  
			},
			{
				  id: 5,
				  business_name: "QBeach",
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
				  lat: "52.3377399",
				  lng: "4.7779935",
  
			},
			{
				  id: 6,
				  business_name: "Amsterdam Airport Schiphol",
				  business_type: "Groceries",
				  address: "Restaurants",
				  ratings: "3.8",
				  spend: "29.99",
				  delevery_time: "From 20:30",
				  sponsored: "Yes",
				  free_delevery: "Yes",
				  image: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/v1693208718/static-takeaway-com/images/restaurants/nl/QOP053O/headers/header",
				  logo: "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_82,w_120/f_auto/q_auto/dpr_1.0/v1693208718/static-takeaway-com/images/restaurants/nl/QOP053O/logo_465x320",
				  markericon: "https://irt-cdn.multiscreensite.com/512c27b4888a492d9e99f35f8d9a8042/dms3rep/multi/maps-and-flags.svg",
				  lat: "52.3130253",
				  lng: "4.7724781",
  
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

let googleId = "map_" + Math.floor(Math.random(99999) * 99999);
$(".custom-listing-map-Container").attr("id", googleId);

let defaddress = "Sloterweg 139, 1171 CL Badhoevedorp, Netherlands";

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
	dmAPI.loadScript('https://irp-cdn.multiscreensite.com/e70fa563a8d442bc81646ad9d635638a/files/uploaded/fuse.js', function() {
		dmAPI.loadScript('https://irt-cdn.multiscreensite.com/8914113fe39e47bcb3040f2b64f71b02/files/uploaded/paginates.min.js', function() { 	
			dmAPI.loadScript('https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js', function () {
				dmAPI.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyC9rXtfayHzDPUDYANS0eOD501pc2_gclQ&libraries=places,geometry', function () {
					initMap();
					searchPlaces(defaddress);
				})
			})
		})
	})
})

$(".searchBtn").click(function(){
	let address = document.getElementById('addressInput').value;
	searchPlaces(address);
});
$(element).find('.cd-layout-icon').click(function() {
	$(".custom-listing-map-Container").toggleClass("show");
	$(".cd-res-main").toggleClass("hide");
	$(".map").toggleClass("show");
	$(".list").toggleClass("hide");
 });

//FILTER ONCHANGE
$('.cd-sort-wrapper select').change(function(){
	let keyword = $('.cd-SearchInput').val();
	let type = $('.radio').val();
	let sortVal = $(this).val();
	let filters = {
	  business_type: type
	};
  
	console.log(type, "type");
	console.log(sortVal, "sortVal");
	console.log(keyword, "keyword");
  
	PaginationFunction(completeData, sortVal);
}); 

function initMap() {
	map = new google.maps.Map(document.getElementById(`${googleId}`), {
		center: { 
			lat: 52.3381103, 
			lng: 4.7788957 
		},
		zoom: 15
	});

 	// Initialize markerCluster here after the map is ready
	markerCluster = new MarkerClusterer(map, markers, {
		imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
		gridSize: 50,
		maxZoom: 15,
	});
}

// function searchPlaces(address) {
function searchPlaces(address) {
	// const address = document.getElementById('addressInput').value;

	let bounds = new google.maps.LatLngBounds();
	
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

			propertyList.forEach((location) => {
				
				const latLng = new google.maps.LatLng(location.lat, location.lng);
				const distance = google.maps.geometry.spherical.computeDistanceBetween(latLng, circle.getCenter());

				if (distance <= radius) {
					
					const marker = new google.maps.Marker({
						position: latLng,
						map,
						id: "marker_" + location.index
						// title: location.business_name
					});

					//DISPLAY ALL RESULTS ON THE MAP
					bounds.extend(marker.position);
					map.fitBounds(bounds);

					// Add an info window to the marker
					const infoWindow = new google.maps.InfoWindow({
						content: `<div class="cd-res-box-map">
									<div class="cd-left-col" style="background-image: url(${location.image});">
										<div class="cd-logo-wrapper">
										<img src="${location.logo}" alt="">
										</div>
									</div>
									<div class="cd-right-col">
										<p class="business-name">${location.business_name}</p>
										<p class="cd-ratings">
											<i class="fa-solid fa-star"></i>
											<span>${location.ratings} (34) . </span>
											<i class="fa-solid fa-bag-shopping"></i>
											<span>Min. € ${location.spend}</span>
										</p>
										<p class="del-time">
											<i class="fa-regular fa-clock"></i>
											<span>${location.delevery_time} . </span>
											<i class="fa-solid fa-bicycle"></i>
											<span>${location.free_delevery} . </span>
											<span>${location.sponsored}</span>
										</p>
									</div>
								</div>`
					});

					marker.addListener('click', function () {
						infoWindow.open(map, marker);
					});

					markers.push(marker);
					// locationsInsideRadius.push(location.business_name);
					locationsInsideRadius.push({
						id: location.id,
						business_name: location.business_name,
						business_type: location.business_type,
						address: location.address,
						ratings: location.ratings,
						spend: location.spend,
						delevery_time: location.delevery_time,
						sponsored: location.sponsored,
						free_delevery: location.free_delevery,
						image: location.image,
						logo: location.logo,
						markericon: location.markericon,
						lat: location.lat,
						lng: location.lng
				  });

				}
			});

			// Add the markers to the markerCluster
			markerCluster.addMarkers(markers);

			console.log(locationsInsideRadius, "locationsInsideRadius.");

			// PaginationFunction(locationsInsideRadius);

			$(element).find('.radio').click(function() {
				let val = $(this).data("val");
				console.log(val, "val")
			  
				let filters = {
				  business_type: val
				};
			  
				if(val != "All"){
				  let res = multiFilter(locationsInsideRadius,filters);
				  PaginationFunction(res);
				}else{
				  PaginationFunction(locationsInsideRadius);
				}
			  
			});



		} else {
			alert('Geocode was not successful for the following reason: ' + status);
		}
	});
}

function clearMarkers() {
	markerCluster.clearMarkers();
	markers.length = 0;
}

function createRow(b){
	let itemLink = window.location.href.includes(data.siteId)  ? `/site/${data.siteId}${b.page_item_url}?preview=true&nee=true&showOriginal=true&dm_checkSync=1&dm_try_mode=true&dm_device=${data.device}`: b.page_item_url;
	if(typeof b.page_item_url == "object"){
		itemLink = b.page_item_url.href;   
	}
	
	let j = `<div class="cd-res-box animate">
			  <div class="cd-left-col" style="background-image: url(${b.image});">
				<div class="cd-logo-wrapper">
				  <img src="${b.logo}" alt="">
				</div>
			  </div>
			  <div class="cd-right-col">
				<p class="business-name">${b.business_name}</p>
				<p class="cd-ratings">
				  <i class="fa-solid fa-star"></i>
				  <span>${b.ratings} (34) . </span>
				  <i class="fa-solid fa-bag-shopping"></i>
				  <span>Min. € ${b.spend}</span>
				</p>
				<p class="del-time">
				  <i class="fa-regular fa-clock"></i>
				  <span>${b.delevery_time} . </span>
				  <i class="fa-solid fa-bicycle"></i>
				  <span>Free . </span>
				  <span class="${b.sponsored == "Active" ? "" : "hideEl"}">Sponsored</span>
				</p>
				
			  </div>
			</div>`
	return j;
  }

//PAGINATION 
function PaginationFunction(items, sort = "HTL"){

	console.log(items, "items");
	  //Lowest Price
	  if(sort == "LTH"){
		  items.sort(function(a, b) {
			  return parseFloat(a.spend.replace(/,/g,'')) - parseFloat(b.spend.replace(/,/g,''));
		  });
	  }
	  //Highest Ratings
	  if(sort == "HTL"){
		  items.sort(function(a, b) {
			  return parseFloat(b.ratings.replace(/,/g,'')) - parseFloat(a.ratings.replace(/,/g,''));
		  });
	  }
  
  
	$(element).find('.cd-res-main').pagination({
		dataSource: items,
		pageSize:1,
		callback: function(result, pagination) {
			console.log(result, "resultS")
			let structure = '';
			structure = result.map(i=>{
			  return createRow(i);
		   }).join("")
		   $(element).find(".locationsList").html(structure);
		}
	});
  }

  // MULTI FILTER
function multiFilter(car, filters){
	const filterKeys = Object.keys(filters);
	return car.filter(function(eachObj){
		return filterKeys.every(function(eachKey){
			if (!filters[eachKey].length) {
				return true; // passing an empty filter means that filter is ignored.
			}
			return filters[eachKey].includes(eachObj[eachKey]);
		});
		
	});
}

  const paginateCss = 'paginationCss';
if (!document.getElementById(paginateCss)){
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = 'paginationCss';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.1.4/pagination.css';
    link.crossOrigin = 'anonymous';
    head.appendChild(link);
}
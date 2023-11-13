let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		    // apikey:"AIzaSyC9rXtfayHzDPUDYANS0eOD501pc2_gclQ", //Other but working
		    apiKey:"AIzaSyAPXbTPYbaYYyR6dAk1KaeAVqM7fAzBqEE", //Gilles
		    // apikey:"AIzaSyBMr1pQsfm1SIgU54HgGx5YxM56EjyOV3c", //Dev
		    initZoom: 7, // parseInt(data.config.initZoom);
        zoomDefault: 8,
        markerSize: 40,
        trigger: 'click', // onclick, mouseover
        widgetType: 'featured', 
        propSort: 'none', //alphabetical, new, old,
        newTab: "true",
        custom_layout: "horizontal", //vertical
        propertyList: [
            {
                id: 1,
                business_name: "Nove",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.5",
                reviews: "35",
                spend: "10",
                delevery_time: "À partir de 12:00",
                sponsored: "No",
                free_delevery: "livraison gratuite",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/pizza-nap.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/nove-pizzeria.jpg",
                lat: "50.5189559",
                lng: "5.2407952",
                link: "https://www.nove.fastoo.eu/nove-livraison-a-domicile"
            },
            {
                id: 2,
                business_name: "Maman",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.9",
                reviews: "32",
                spend: "10",
                delevery_time: "À partir de 12:00",
                sponsored: "Yes",
                free_delevery: "livraison gratuite",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/pokebowl.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/maman-huy.jpg",
                lat: "50.51804733",
                lng: "5.240622044",
                link: "https://www.maman.fastoo.eu/maman-livraison-a-domicile"
            },
            {
                id: 3,
                business_name: "O'Brunch Coffee",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.5",
                reviews: "60",
                spend: "50",
                delevery_time: "À partir de 12:00",
                sponsored: "Yes",
                free_delevery: "livraison gratuite",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/brunch+%281%29.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/obrunch.jpg",
                lat: "50.51891327",
                lng: "5.24041605",
                link: "https://www.obrunchcoffee.fastoo.eu/obrunch-coffee-livraison-a-domicile"
            },
            {
                id: 4,
                business_name: "Chill & Cheese",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.5",
                reviews: "20",
                spend: "60",
                delevery_time: "À partir de 12:00",
                sponsored: "No",
                free_delevery: "livraison gratuite",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/burgersandfries.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/chillandcheese.jpg",
                lat: "50.52648926",
                lng: "5.224036217",
                link: "https://www.chillcheese-huy.fastoo.eu/chill-and-cheese-huy-livraison-a-domicile"
            },
            {
                id: 5,
                business_name: "Mazzo",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.5",
                reviews: "15",
                spend: "20",
                delevery_time: "À partir de 12:00",
                sponsored: "Yes",
                free_delevery: "livraison gratuite",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/pizza-2.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/mazzo.jpg",
                lat: "50.5167832",
                lng: "5.2408242",
                link: "https://www.mazzo.fastoo.eu/mazzo-livraison-a-domicile"
            },
            {
                id: 6,
                business_name: "Crousty break",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.5",
                reviews: "10",
                spend: "20",
                delevery_time: "À partir de 12:00",
                sponsored: "No",
                free_delevery: "livraison gratuite",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/sandwich.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/croustybreak.jpg",
                lat: "50.52578987",
                lng: "5.229359832",
                link: "https://www.croustybreak.fastoo.eu/crousty-break-livraison-a-domicile"
            },
            {
                id: 7,
                business_name: "Il Capriccio",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "5",
                reviews: "35",
                spend: "20",
                delevery_time: "À partir de 12:00",
                sponsored: "No",
                free_delevery: "livraison gratuite",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/pizza.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/il+cappriccio.jpg",
                lat: "50.5807724",
                lng: "5.35482645",
                link: "https://www.ilcapriccio.fastoo.eu/il-capriccio-livraison-a-domicile"
            },
            {
                id: 8,
                business_name: "Benzai",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.1",
                reviews: "45",
                spend: "20",
                delevery_time: "À partir de 12:00",
                sponsored: "No",
                free_delevery: "livraison gratuite",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/noodles.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/benzaifood+logo.png",
                lat: "50.6406909",
                lng: "5.5958379",
                link: "https://www.benzaifood.fastoo.eu/"
            },
            {
                id: 9,
                business_name: "Robert la frite",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.9",
                reviews: "55",
                spend: "20",
                delevery_time: "À partir de 12:00",
                sponsored: "No",
                free_delevery: "livraison gratuite",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/Homepage+%282%29.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/robertlafrite.png",
                lat: "50.40900421",
                lng: "4.442223072",
                link: "https://www.robertlafrite.fastoo.eu/"
            }
            
          ]
	}
};

let collection = new Collection()

let device = data.device;
let sampleList = data.config.sampleList;
let sample = data.config.sample;

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

//WIDGET INPUT
let propertyList = data.config.propertyList;
let apiKey = data.config.apiKey;

//URL PARAM
// let urlLink = $(location).attr('href');
// let url = new URL(urlLink);
// let params = new URLSearchParams(url.search);
// let hasParam = urlLink.includes("data");
// let param = getParameterByName('data');
// let param_obj = hasParam ? JSON.parse(atob(param)) : "";

//MAP
let map;
let placesService;
const markers = [];
let circle;
let centerDot; // Marker for the center of the radius
let markerCluster;
let radiusLoc = [];
let googleId = "map_" + Math.floor(Math.random(99999) * 99999);
$(".custom-listing-map-Container").attr("id", googleId);

// let defaddress = param_obj.place; //for live site test
let defaddress = "Rue des Fouarges 7-3, 4500 Huy, Belgium"; //for widget preview test

//ADD MULTIPLE LINK SOURCE HERE
dmAPI.runOnReady('init', function () {
    dmAPI.loadScript('https://irp-cdn.multiscreensite.com/e70fa563a8d442bc81646ad9d635638a/files/uploaded/fuse.js', function() {
        dmAPI.loadScript('https://irt-cdn.multiscreensite.com/8914113fe39e47bcb3040f2b64f71b02/files/uploaded/paginates.min.js', function() { 	
            dmAPI.loadScript('https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js', function () {
                dmAPI.loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,geometry`, function () {
                  initMap();
                  searchPlaces(defaddress, propertyList);
                })
            })
        })
    })
})

//search button
$(".searchBtn").click(function(){
    let address = document.getElementById('addressInput').value;
    searchPlaces(address, propertyList);
});

//layout icon click
$(element).find('.cd-layout-icon').click(function() {
    $(".custom-listing-map-Container").toggleClass("show");
    $(".cd-res-main").toggleClass("hide");
    $(".map").toggleClass("show");
    $(".list").toggleClass("hide");
});

//sort filter
$('.cd-sort-wrapper select').change(function(){
    let sortVal = $(this).val();
    searchPlaces(defaddress, propertyList, sortVal);
}); 
// Keyword search
$(element).find('.cd-SearchInput').keyup(function(event) {
    let searchWord = $(this).val();
    if(!searchWord){
        searchPlaces(defaddress, propertyList);
    }else{
        let searchResult = searchByKeyword(propertyList, searchWord);
        searchPlaces(defaddress, searchResult);
    }
});

//radio button filter
$(element).find('.radio').click(function() {
    initMap();
    let val = $(this).data("val");
    let filters = {
        business_type: val
    };

    if(val != "All"){
        let res = multiFilter(propertyList,filters);
        searchPlaces(defaddress, res);
        //sort filter
        $('.cd-sort-wrapper select').change(function(){
          let sortVal = $(this).val();
          searchPlaces(defaddress, res, sortVal);
        }); 
    }else{
        searchPlaces(defaddress, propertyList);
        //sort filter
        $('.cd-sort-wrapper select').change(function(){
          let sortVal = $(this).val();
          searchPlaces(defaddress, propertyList, sortVal);
        }); 
    }
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

function searchPlaces(address, filteredProp, sortVal) {

	let bounds = new google.maps.LatLngBounds();

  console.log(filteredProp, "filteredProp");

	const geocoder = new google.maps.Geocoder();
	geocoder.geocode({ address: address }, (results, status) => {
		if (status === 'OK' && results[0]) {
			clearMarkers();
			const location = results[0].geometry.location;
			map.setCenter(location);

      //Radius from the center location
			const radius = 10000;

			if (circle) {
				  circle.setMap(null);
			}
			
			//radius indicator
			circle = new google.maps.Circle({
          map: map,
          center: location,
          radius: radius,
          fillColor: '#FF0000',
          fillOpacity: 0,
          strokeColor: '#FF0000',
          strokeOpacity: 0,
          strokeWeight: 2
			});

			// Add a simple dot as the center of the radius
			centerDot = new google.maps.Circle({
          map: map,
          center: location,
          radius: 100, // Adjust the size as needed
          fillColor: 'blue',
          fillOpacity: 0,
          strokeWeight: 0
      });

			const locationsInsideRadius = [];

      filteredProp.map((i) => {
          const latLng = new google.maps.LatLng(i.lat, i.lng);
          const distance = google.maps.geometry.spherical.computeDistanceBetween(latLng, circle.getCenter());

          if (distance <= radius) {
              const marker = new google.maps.Marker({
                  position: latLng,
                  map,
                  category: i.business_type,
                  icon: {
                    url: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/pinmap.svg",
                    scaledSize: new google.maps.Size(40, 40)
                },
                  id: "marker_" + i.index
              });

              //DISPLAY ALL RESULTS ON THE MAP
              // bounds.extend(marker.position);
              // map.fitBounds(bounds);

              // Add an info window to the marker
              const infoWindow = new google.maps.InfoWindow({
                  content: `${createRow(i)}`
              });

              marker.addListener('click', function () {
                  // infoindow.close();
                  infoWindow.open(map, marker);
              });

              markers.push(marker);

              locationsInsideRadius.push({
                  'id': i.id,
                  'business_name': i.business_name,
                  'business_type': i.business_type,
                  'ratings': i.ratings,
                  'reviews': i.reviews,
                  'spend': i.spend,
                  'delevery_time': i.delevery_time,
                  'sponsored': i.sponsored,
                  'free_delevery': i.free_delevery,
                  'image': i.image,
                  'logo': i.logo,
                  'link': i.link,
                  'lat': i.lat,
                  'lng': i.lng
              });
          }
      });


      // console.log(sortSponsord(locationsInsideRadius), "locationsInsideRadius");
      PaginationFunction(sortSponsord(locationsInsideRadius), sortVal);
      
			//display results counter
			let count = locationsInsideRadius.length;
			$(element).find(".counter").html(count);

			// Add the markers to the markerCluster
			markerCluster.addMarkers(markers);

      //display results
			// PaginationFunction(locationsInsideRadius, sortVal);

		} else {
			  console.log('Geocode was not successful for the following reason: ' + status);
		}
		
	});

}

function sortSponsord(obj){
    return obj.sort(function(a, b) {
        // Compare targetCategory1 in descending order
        if (a.sponsored === "Yes" && b.sponsored !== "Yes") {
            return -1;
        } else if (a.sponsored !== "Yes" && b.sponsored === "Yes") {
            return 1;
        } else {
           // If targetCategory1 is the same, sort by descending numbers in category2
            return b.ratings - a.ratings;
        }
    }); 
}

function clearMarkers() {
	if (circle) {
	  circle.setMap(null);
	}
	if (centerDot) {
	  centerDot.setMap(null);
	}
	markers.forEach((marker) => {
	  marker.setMap(null);
	});
	markers.length = 0;
}


function filterLocations(category) {
	showFilteredLocations(category);
  }

function showFilteredLocations(category) {
	markers.forEach((marker) => {
		if (category === 'all' || marker.category === category) {
		marker.setMap(map);
		} else {
		marker.setMap(null);
		}
	});
}
//SEARCH BY KEYWORDS
function searchByKeyword(arr,keyword){
	let options = {
		shouldSort: true,
		threshold: 0.2,
		location: 0,
		distance: 100,
		maxPatternLength: 32,
		minMatchCharLength: 1,
		keys: [
			"business_name"
		]
	};
	let fuse = new Fuse(arr, options);
	let result = fuse.search(keyword);
	return result;
}

function createRow(b){
	let itemLink = window.location.href.includes(data.siteId)  ? `/site/${data.siteId}${b.page_item_url}?preview=true&nee=true&showOriginal=true&dm_checkSync=1&dm_try_mode=true&dm_device=${data.device}`: b.page_item_url;
	if(typeof b.page_item_url == "object"){
		itemLink = b.page_item_url.href;   
	}
	
	
	let j = `<a href="${b.link}" target="_blank">

              <div class="cd-res-box animate">

                  <div class="cd-left-col" style="background-image: url(${b.image});">
                      <div class="cd-logo-wrapper">
                          <img src="${b.logo}" alt="">
                      </div>
                  </div>

                  <div class="cd-right-col">

                      <p class="business-name">${b.business_name}</p>
                      
                      <p class="cd-ratings">

                          <svg width="15" height="15" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M494.703 187.829L352.834 145.977L269.129 23.9202C267.667 21.7869 265.708 20.0418 263.42 18.836C261.133 17.6302 258.586 17 256 17C253.414 17 250.867 17.6302 248.58 18.836C246.292 20.0418 244.333 21.7869 242.871 23.9202L159.166 145.977L17.2973 187.829C14.8278 188.578 12.5774 189.916 10.74 191.728C8.90264 193.539 7.53344 195.771 6.7504 198.23C5.96736 200.688 5.79396 203.301 6.24518 205.841C6.69641 208.382 7.75871 210.775 9.34051 212.814L99.411 330.096L95.3531 478.49C95.2826 481.067 95.8396 483.624 96.9762 485.938C98.1128 488.253 99.7949 490.257 101.878 491.777C103.968 493.281 106.393 494.255 108.943 494.615C111.493 494.976 114.092 494.712 116.518 493.846L256 443.878L395.482 493.448C397.187 494.087 398.993 494.41 400.813 494.403C405.034 494.403 409.081 492.727 412.066 489.742C415.05 486.758 416.727 482.71 416.727 478.49L412.669 330.494L502.66 212.814C504.241 210.775 505.304 208.382 505.755 205.841C506.206 203.301 506.033 200.688 505.25 198.23C504.467 195.771 503.097 193.539 501.26 191.728C499.423 189.916 497.172 188.578 494.703 187.829ZM383.865 315.138C381.617 318.014 380.461 321.594 380.603 325.243L384.183 455.654L261.252 411.892C257.793 410.727 254.048 410.727 250.589 411.892L127.657 455.654L131.238 325.243C131.38 321.594 130.224 318.014 127.976 315.138L48.4082 211.7L173.568 174.86C177.069 173.813 180.104 171.594 182.161 168.574L256 61.0783L329.759 168.654C331.817 171.673 334.851 173.893 338.352 174.939L463.512 211.779L383.865 315.138Z" fill="#7349FB"/>
                          </svg>

                          <span>${b.ratings} (${b.reviews}) <i class="fa-solid fa-circle dots"></i> </span>

                          <svg width="15" height="15" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_129_221)">
                              <path d="M424 104H336V80C336 58.7827 327.571 38.4344 312.569 23.4315C297.566 8.42855 277.217 0 256 0C234.783 0 214.434 8.42855 199.431 23.4315C184.429 38.4344 176 58.7827 176 80V104H88C85.8783 104 83.8434 104.843 82.3431 106.343C80.8429 107.843 80 109.878 80 112V504C80 506.122 80.8429 508.157 82.3431 509.657C83.8434 511.157 85.8783 512 88 512H424C426.122 512 428.157 511.157 429.657 509.657C431.157 508.157 432 506.122 432 504V112C432 109.878 431.157 107.843 429.657 106.343C428.157 104.843 426.122 104 424 104ZM192 80C192 63.0261 198.743 46.7475 210.745 34.7452C222.747 22.7428 239.026 16 256 16C272.974 16 289.252 22.7428 301.255 34.7452C313.257 46.7475 320 63.0261 320 80V104H192V80ZM416 496H96V120H176V144C176 146.122 176.843 148.157 178.343 149.657C179.843 151.157 181.878 152 184 152C186.122 152 188.157 151.157 189.657 149.657C191.157 148.157 192 146.122 192 144V120H320V144C320 146.122 320.843 148.157 322.343 149.657C323.843 151.157 325.878 152 328 152C330.122 152 332.157 151.157 333.657 149.657C335.157 148.157 336 146.122 336 144V120H416V496Z" fill="#7349FB"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_129_221">
                              <rect width="512" height="512" fill="white"/>
                              </clipPath>
                              </defs>
                          </svg>

                          <span>Min. € ${b.spend}</span>

                      </p>

                      <div class="textspan">

                          <p class="del-time">
                              <i class="fa-regular fa-clock"></i>
                              <span>${b.delevery_time} <i class="fa-solid fa-circle dots"></i> </span>
                          </p>

                          <p class="del-time">
                              <svg width="20" height="20" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M37.08 382.84L178.16 437.68C179.206 438.065 180.319 438.236 181.433 438.181C182.546 438.126 183.637 437.847 184.64 437.36L228 415.6C250.672 425.11 274.321 432.099 298.52 436.44L288.92 459.4C286.76 464.76 288.24 468.84 292.68 470.68C293.727 471.155 294.864 471.4 296.014 471.396C297.164 471.393 298.3 471.141 299.344 470.659C300.388 470.177 301.315 469.476 302.064 468.603C302.812 467.729 303.363 466.705 303.68 465.6L314.56 439.52C327.367 441.793 339.911 445.358 352 450.16C372 463.56 384.2 470.16 403.4 465.24C418.48 461.24 429.8 438.04 433.76 423.44C434.746 419.961 434.712 416.272 433.663 412.811C432.614 409.351 430.592 406.265 427.84 403.92C428.6 398.32 427.84 390.04 416.76 383.92C405.962 378.891 393.73 377.857 382.24 381C368.88 385 368.84 391.52 360.72 390C358.16 389 348 382 344.24 379.76C354.24 364.24 377.12 321.2 383.84 297.52C392.68 266.48 387.44 249 384.44 242.36C386.16 228.64 390.04 209.92 394.68 200.8C398.259 202.436 402.198 203.124 406.12 202.8C410.073 202.258 413.739 200.435 416.557 197.61C419.375 194.785 421.188 191.114 421.72 187.16C421.72 186.16 424.2 170.6 424.8 169C429.15 168.435 433.138 166.284 436 162.96C437.72 160.68 439 158.96 436.24 142.96C455.64 142.96 475.84 126.52 478.2 124.56C479.242 123.691 480.046 122.572 480.536 121.307C481.026 120.043 481.187 118.674 481.003 117.33C480.819 115.986 480.297 114.711 479.484 113.625C478.672 112.538 477.597 111.676 476.36 111.12L435.6 92.7598C434.56 89.5198 433.12 85.1598 431.2 79.6398C425.16 62.5998 401.68 39.1998 361.76 44.5998C331.44 48.5998 313.76 66.8798 309.36 98.5598C307.08 114.56 314.52 134.56 315.8 141.96C315.582 150.395 314.428 158.779 312.36 166.96C303.32 168.92 285.08 173 273.88 176.2L120.6 137.76C119.08 137.378 117.481 137.451 116.001 137.97C114.522 138.489 113.228 139.431 112.28 140.68L78.8 184.68C78.1209 185.571 77.6366 186.595 77.3784 187.685C77.1203 188.776 77.0941 189.908 77.3015 191.009C77.5089 192.11 77.9453 193.156 78.5824 194.077C79.2196 194.999 80.0432 195.777 81 196.36C85.7778 198.999 90.9732 200.799 96.36 201.68L32.36 372.52C31.989 373.507 31.8168 374.558 31.8535 375.612C31.8901 376.666 32.1348 377.702 32.5734 378.662C33.0121 379.621 33.6361 380.484 34.4095 381.201C35.1829 381.918 36.0905 382.475 37.08 382.84ZM229.08 238.56C235.72 224.76 255 200.76 272.36 193.44C277.015 191.843 281.756 190.507 286.56 189.44C295.04 196 320 222.92 283.36 287.64C275.08 302.2 258.68 328.2 252.92 337.28C250.04 336.937 247.14 336.79 244.24 336.84C242.118 336.893 240.105 337.787 238.642 339.324C237.179 340.862 236.387 342.918 236.44 345.04C236.493 347.161 237.387 349.175 238.925 350.638C240.462 352.101 242.518 352.893 244.64 352.84C273.12 352.28 314.16 379.16 336.24 393.64L343.16 398.2C342.655 408.574 339.723 418.685 334.6 427.72C328.32 426.08 321.6 424.52 315.12 423.36C228 407.68 209.72 386.12 199.72 381.68C191.16 376.6 190.16 374.96 191.72 361C193.754 348.983 197.122 337.23 201.76 325.96C212.6 297.04 217.2 263.4 229.2 238.56H229.08ZM315.4 182.56C323.4 193.08 334.12 213.2 336.44 228.04C340.88 256.04 332.08 284.56 309.6 315.16C301.663 325.939 292.875 336.065 283.32 345.44C278.72 343.56 274.12 341.96 269.56 340.6C276.88 329.04 289.88 308.28 297.16 295.44C316.44 261.32 322.8 231.64 316 207.2C313.772 199.08 309.891 191.509 304.6 184.96L315.4 182.56ZM195.72 413.88L200.56 400.92C203.56 402.76 206.68 404.64 210.12 406.6L195.72 413.88ZM386.32 396C393.712 394.048 401.541 394.582 408.6 397.52C410.48 398.6 411.36 399.12 411.64 399.96C410.721 400.202 409.824 400.523 408.96 400.92C407.132 401.865 405.739 403.479 405.07 405.425C404.402 407.371 404.508 409.499 405.368 411.369C406.228 413.238 407.775 414.704 409.688 415.462C411.601 416.221 413.733 416.212 415.64 415.44C416.44 415.08 418.88 416.28 418.12 419.12C414.12 434.56 404.52 448.2 399.12 449.6C388.52 452.44 382.2 451.08 360.76 436.68C357.44 434.859 353.942 433.384 350.32 432.28C354.487 423.854 357.295 414.823 358.64 405.52C374.12 408 376.8 398.92 386.32 396ZM368 292.92C361.72 315 339.48 356.92 330.36 370.84C320.8 364.8 310.04 358.32 298.84 352.64C307.361 343.867 315.26 334.511 322.48 324.64C347.64 290.44 357.4 258.04 352.24 225.56C361.24 236.88 368 246.6 369.12 248C370.24 249.4 376.72 262.56 368 292.92ZM408 168.6C407.68 170.8 405.52 182.84 405.4 185.44C404.803 186.067 404.04 186.511 403.2 186.72C398.32 185.68 383.6 178.72 381.68 169.6C381.245 167.52 380.002 165.699 378.224 164.536C376.446 163.374 374.279 162.965 372.2 163.4C370.121 163.835 368.299 165.078 367.137 166.856C365.974 168.634 365.565 170.8 366 172.88C368.146 181.072 373.228 188.19 380.28 192.88C375.807 202.567 372.633 212.802 370.84 223.32C347.6 192.64 337.04 185 327.64 172C329.56 163.36 332.88 146.72 331.64 139.32C331.12 136.36 330 132.28 328.96 128.4C347.089 128.087 365.157 126.2 382.96 122.76C394.326 130.105 406.621 135.903 419.52 140C420.4 144.76 421.24 149.6 421.68 152.88C414.96 154.44 409.56 157.96 408 168.6ZM432 108.96L456.96 120C450 124 441.44 127.68 434.64 127.04C424.283 125.468 414.288 122.068 405.12 117C419.36 113.04 431.44 109.2 432.24 108.96H432ZM324.96 100.96C327.52 83.9998 334.04 64.5198 364 60.4798C391.24 56.7598 410.96 70.1198 416 84.9998C417.6 89.3998 418.8 92.9998 419.76 96.0398C409.48 99.1598 390.72 104.64 376.36 107.68C359.513 110.504 342.479 112.069 325.4 112.36C324.822 108.519 324.754 104.618 325.2 100.76L324.96 100.96ZM121.84 154.56L252 187.2C241.935 195.003 233.021 204.187 225.52 214.48L132 178.28C130.663 177.778 129.216 177.643 127.809 177.889C126.402 178.135 125.087 178.754 124 179.68C120.404 182.475 116.254 184.47 111.825 185.532C107.397 186.595 102.792 186.699 98.32 185.84L121.84 154.56ZM113.52 201.52C119.42 200.26 125.053 197.972 130.16 194.76L216.56 228.2C203.08 252.8 197.32 292.2 186.92 320.44C181.838 332.84 178.175 345.776 176 359C173.96 375 175.08 383.72 186.64 392.24L176.4 420L50.24 370.8L113.52 201.52Z" fill="#7349FB" />
                                      <path d="M304 56C304 53.8783 303.157 51.8434 301.657 50.3431C300.157 48.8429 298.122 48 296 48H264C261.878 48 259.843 48.8429 258.343 50.3431C256.843 51.8434 256 53.8783 256 56C256 58.1217 256.843 60.1566 258.343 61.6569C259.843 63.1571 261.878 64 264 64H296C298.122 64 300.157 63.1571 301.657 61.6569C303.157 60.1566 304 58.1217 304 56Z" fill="#7349FB" />
                                      <path d="M292 88C292 85.8783 291.157 83.8434 289.657 82.3431C288.157 80.8429 286.122 80 284 80H232C229.878 80 227.843 80.8429 226.343 82.3431C224.843 83.8434 224 85.8783 224 88C224 90.1217 224.843 92.1566 226.343 93.6569C227.843 95.1571 229.878 96 232 96H284C286.122 96 288.157 95.1571 289.657 93.6569C291.157 92.1566 292 90.1217 292 88Z" fill="#7349FB" />
                                      <path d="M184 128H280C282.122 128 284.157 127.157 285.657 125.657C287.157 124.157 288 122.122 288 120C288 117.878 287.157 115.843 285.657 114.343C284.157 112.843 282.122 112 280 112H184C181.878 112 179.843 112.843 178.343 114.343C176.843 115.843 176 117.878 176 120C176 122.122 176.843 124.157 178.343 125.657C179.843 127.157 181.878 128 184 128Z" fill="#7349FB" />
                                  </svg>
                              <span>${b.free_delevery} <i class="fa-solid fa-circle dots"></i> </span>
                          </p>

                          <p class="del-time">
                              <span class="sponsored ${b.sponsored == "Yes" ? "" : "hideEl"}">sponsorisé</span>
                          </p>
                      
                      </div>

                  </div>

              </div>
            </a>`
	return j;
}

//PAGINATION 
function PaginationFunction(items, sort = "HTL"){
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
    pageSize:10,
    callback: function(result, pagination) {
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

//GET URL PARAMETER
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//CREATE FONT AWESOME LINK SOURCE
// const cssId = 'fontAwesomeSource';
// if (!document.getElementById(cssId))
// {
//     var head  = document.getElementsByTagName('head')[0];
//     var link  = document.createElement('link');
//     link.id   = 'fontAwesomeSource';
//     link.rel  = 'stylesheet';
//     link.type = 'text/css';
//     link.href = 'https://use.fontawesome.com/releases/v6.2.0/css/all.css';
//     link.crossOrigin = 'anonymous';
//     head.appendChild(link);
// }

// const paginateCss = 'paginationCss';
// if (!document.getElementById(paginateCss)){
//     var head  = document.getElementsByTagName('head')[0];
//     var link  = document.createElement('link');
//     link.id   = 'paginationCss';
//     link.rel  = 'stylesheet';
//     link.type = 'text/css';
//     link.href = 'https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.1.4/pagination.css';
//     link.crossOrigin = 'anonymous';
//     head.appendChild(link);
// }
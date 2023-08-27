let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		// apikey:"AIzaSyC9rXtfayHzDPUDYANS0eOD501pc2_gclQ",
		initZoom: 7, // parseInt(data.config.initZoom);
        zoomDefault: 8,
        markerSize: 40,
        trigger: 'click', // onclick, mouseover
        widgetType: 'featured', 
        propSort: 'none', //alphabetical, new, old,
        newTab: "true",
        custom_layout: "horizontal", //vertical
		propertyList: [{
            'id': 1,
            "propertyName":"Sample Property Name",
            "propertyType": "Apartments",
            "rentalType": "Residential",
            "status": "For Sale",
            "price":"5900",
            "address":"Sample Address",
            "location": "Philippines",
            "street": "Sample Street",
            "city": "Sample City",
            "area":  "Sample Area",
            "state": "Sample State",
            "countryCode": "Sample Country Code",
            "zipCode": "Sample Zip Code",
            "lotSize": "412 sqm",
            "landArea": "1000",
            "room": "9+",
            "bedroom":"1",
            "bathroom": "1",
            "featuredProperty": "Yes",
            "garageAvailability": "Yes",
            "garageCount": '1',
            "dateAvailable": Date.now(),
            "propertyImage": 'https://storage.needpix.com/rsynced_images/new-england-style-house-2826065_1280.jpg',
            "properyDescription":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            "shortDescription": `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
            "page_item_url": '/home',
            "agent_name": "Holly R Smith",
            "agent_email": "holly.smith@gmail.com",
            "agent_number":"401-560-7098",
            "agent_website": "dtoxforgood.com",
            "agent_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPLKn6p156dUAYMniVNEIPEuSxNMqSu3kMPK_qwOnYR3p2ITD",
            "markericon": "https://irt-cdn.multiscreensite.com/512c27b4888a492d9e99f35f8d9a8042/dms3rep/multi/maps-and-flags.svg",
            "latitude": "-25.363",
            "longitude": "131.044",

       },{
            'id': 2,
            "propertyName":"Sample Property Name 2",
            "propertyType": "Apartments",
            "rentalType": "Residential",
            "status": "For Lease",
            "price": "10000",
            "address":"Sample Address",
            "location": "China",
            "street": "Sample Street",
            "city": "Sample City",
            "area":  "Sample Area",
            "state": "Sample State",
            "countryCode": "Sample Country Code",
            "zipCode": "Sample Zip Code",
            "lotSize": "412 sqm",
            "landArea": 1000,
            "room": "9+",
            "bedroom":"1",
            "bathroom": "1", 
            "featuredProperty": "Yes",
            "garageAvailability": "Yes",
            "garageCount": '1',
            "dateAvailable": Date.now(),
            "propertyImage": 'https://storage.needpix.com/rsynced_images/new-england-style-house-2826065_1280.jpg',
            "properyDescription":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            "shortDescription": `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
            "page_item_url": '/home',
            "agent_name": "Holly R Smith",
            "agent_email": "holly.smith@gmail.com",
            "agent_number":"401-560-7098",
            "agent_website": "dtoxforgood.com",
            "agent_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPLKn6p156dUAYMniVNEIPEuSxNMqSu3kMPK_qwOnYR3p2ITD",
            "markericon": "https://irt-cdn.multiscreensite.com/512c27b4888a492d9e99f35f8d9a8042/dms3rep/multi/maps-and-flags.svg",
            "latitude": "47.65577",
            "longitude": "-122.31806",

        },{
            'id': 3,
            "propertyName":"Sample Property Name 3",
            "propertyType": "Apartments",
            "rentalType": "Residential",
            "status": "For Lease",
            "price": "990",
            "address":"Sample Address",
            "location": "China",
            "street": "Sample Street",
            "city": "Sample City",
            "area":  "Sample Area",
            "state": "Sample State",
            "countryCode": "Sample Country Code",
            "zipCode": "Sample Zip Code",
            "lotSize": "412 sqm",
            "landArea": 1000,
            "room": "9+",
            "bedroom":"1",
            "bathroom": "1", 
            "featuredProperty": "Yes",
            "garageAvailability": "Yes",
            "garageCount": '1',
            "dateAvailable": Date.now(),
            "propertyImage": 'https://storage.needpix.com/rsynced_images/new-england-style-house-2826065_1280.jpg',
            "properyDescription":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            "shortDescription": `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
            "page_item_url": '/home',
            "agent_name": "Holly R Smith",
            "agent_email": "holly.smith@gmail.com",
            "agent_number":"401-560-7098",
            "agent_website": "dtoxforgood.com",
            "agent_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPLKn6p156dUAYMniVNEIPEuSxNMqSu3kMPK_qwOnYR3p2ITD",
            "markericon": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconpacks.net%2Ffree-icon%2Fpin-48.html&psig=AOvVaw1Ivx6UNA1cuaiF1ZDPWSpO&ust=1690415055268000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPC7qPmEq4ADFQAAAAAdAAAAABAE",
            "latitude": "-25.333",
            "longitude": "131.044",

         },{
            'id': 4,
            "propertyName":"Sample Property Name 4",
            "propertyType": "Apartments",
            "rentalType": "Residential",
            "status": "For Lease",
            "price": "990",
            "address":"Sample Address",
            "location": "China",
            "street": "Sample Street",
            "city": "Sample City",
            "area":  "Sample Area",
            "state": "Sample State",
            "countryCode": "Sample Country Code",
            "zipCode": "Sample Zip Code",
            "lotSize": "412 sqm",
            "landArea": 1000,
            "room": "9+",
            "bedroom":"1",
            "bathroom": "1", 
            "featuredProperty": "Yes",
            "garageAvailability": "Yes",
            "garageCount": '1',
            "dateAvailable": Date.now(),
            "propertyImage": 'https://storage.needpix.com/rsynced_images/new-england-style-house-2826065_1280.jpg',
            "properyDescription":`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            "shortDescription": `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
            "page_item_url": '/home',
            "agent_name": "Holly R Smith",
            "agent_email": "holly.smith@gmail.com",
            "agent_number":"401-560-7098",
            "agent_website": "dtoxforgood.com",
            "agent_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPLKn6p156dUAYMniVNEIPEuSxNMqSu3kMPK_qwOnYR3p2ITD",
            "marker_icon": "https://irt-cdn.multiscreensite.com/512c27b4888a492d9e99f35f8d9a8042/dms3rep/multi/maps-and-flags.svg",
            "latitude": "-25.365",
            "longitude": "131.041",

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

//ADD MULTIPLE LINK SOURCE HERE
let apikey = data.config.apikey;
let propertyList = data.config.propertyList;
let completeData = [];
let locationObj = {};
let initZoom = parseInt(data.config.initZoom);
let trigger = data.config.trigger;
let markerClick = "true";
let markerSize = parseInt(data.config.markerSize);
let markericon = data.config.markericon;
let googleId = "map_" + Math.floor(Math.random(99999) * 99999);
$(".custom-listing-map-Container").attr("id", googleId);

dmAPI.runOnReady('init', function () {
	// dmAPI.loadScript('PLUGIN LINK', function () {
	// })
	$(element).find('.radio').click(function() {
		let val = $(this).data("val");
		console.log(val, "val")
	 });

	dmAPI.loadScript(`https://maps.googleapis.com/maps/api/js?v=3.40&key=${apikey}`, function() {
		// initialize();
		initMap();
	}); // end  googleapis


})

function initMap(obj){
	console.log(obj,'obj');
	let bounds = new google.maps.LatLngBounds();
	let infowindow = new google.maps.InfoWindow();
	map = new google.maps.Map(document.getElementById(googleId), {
		center: {
			lat: 35.218382,
			lng: 128.8343554
		},
		zoom: initZoom,
		gestureHandling: "greedy",
		zoomControl: false,
	});
	obj.map((i,index) => {
	  console.log(i.latitude, i.longitude);
	  let itemLink = window.location.href.includes(data.siteId)  ? `/site/${data.siteId}${i.page_item_url}?preview=true&insitepreview=true&dm_device=${data.device}`: i.page_item_url;
	  if(typeof i.page_item_url === "object") itemLink = i.page_item_url;
  
	  let marker = new google.maps.Marker({
		position: new google.maps.LatLng(parseFloat(i.latitude), parseFloat(i.longitude)),
		map,
		icon: {
			url: i.markericon,
			scaledSize: new google.maps.Size(markerSize, markerSize)
		},
		id: "marker_" + i.index
	  });
  
	  bounds.extend(marker.position);
	  if (locationObj.list.length > 1) {
		  map.fitBounds(bounds);
	  }
	  if(markerClick){
		google.maps.event.addListener(marker,trigger, (marker, j => {
		  console.log(j,'jjj');
			let name = `<div className="property-map-info-name" data-id="${i.id}">${i.propertyName}</div>`;
			let address = `<div className="property-map-info-address">${i.address}</div>`
			let email = `<div class="googlemap-InfoWindow-Email">
					  <label>Email:</label>
					  <span><a href="mailto:${i.contactemail}">${i.contactemail}</a></span>
				  </div>`
  
			let telephone = `<div class="property-map-info-Telephone">
				<label>Telephone:</label>
				<span><a href="tel:${i.contactphone}">${i.contactphone}</a></span>
			</div>`
  
			let website = `<div class="property-map-info-Website">
				<label>Website:</label>
				<span><a href="${i.contactwebsite}" target="${newTab}">${i.contactwebsite}</a></span>
			</div>`
			let logo =  `<div class="property-map-info-Image"><img src="${i.image}"></div>` 
  
			let form = `
					  <div class="property-map-info-Window">
						  <div class="googleMap-Container-Left">
							  ${logo}
						  </div>
						  <div class="googleMap-Container-Right">
							  ${name}
							  ${address}
							  ${email}
							  ${telephone}
							  ${website}
						  </div>
					  </div>
				`;
  
				$(element).on(trigger, ".cInner-Container", function() {
				  console.log('click pin map');
				  let markerIndex = $(this).attr("data-index");
				  console.log(markerIndex , "markerIndex ");
				  if (marker.id == markerIndex) {
					  google.maps.event.trigger(marker, trigger);
				  }
				});
				  return function( ){
					console.log(infowindow,'infowindow');
					infowindow.setContent(form);
					infowindow.open(map, marker)
				  }
  
			  })(marker, i));
	  }
	})
  }
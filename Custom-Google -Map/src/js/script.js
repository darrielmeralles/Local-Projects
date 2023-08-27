let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		apikey:"AIzaSyC9rXtfayHzDPUDYANS0eOD501pc2_gclQ",
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
let apikey = data.config.apikey
let propertyList = data.config.propertyList
let completeData = [];
let locationObj = {}
let widgetType = data.config.widgetType
let propSort = data.config.propSort
let initZoom = parseInt(data.config.initZoom);
let trigger = data.config.trigger
let markerClick = "true";
let markerSize = parseInt(data.config.markerSize)
let googleId = "map_" + Math.floor(Math.random(99999) * 99999);
let markericon = data.config.markericon;
let newTab = data.config.newTab;
let custom_layout = data.config.custom_layout
$(".custom-listing-map-Container").attr("id", googleId);

dmAPI.runOnReady('init', function () {
	dmAPI.loadScript("https://irt-cdn.multiscreensite.com/5775367238d847b8b62d126ce25c20de/files/uploaded/mixitup.min.js", function () {
		dmAPI.loadScript("https://irt-cdn.multiscreensite.com/a4fddbba6e6f4d71b2bb406911fe4018/files/uploaded/mixitup-multifilter.min.js",function () {
		  dmAPI.loadScript('https://irt-cdn.multiscreensite.com/a4fddbba6e6f4d71b2bb406911fe4018/files/uploaded/mixitup-pagination.min.js',function () {
				dmAPI.loadScript(`https://maps.googleapis.com/maps/api/js?v=3.40&key=${apikey}`, function() {
					   initialize();
				}); // end  googleapis
		  }); // end multifilter
	  }); // end mixitup
	}); // end pagination
})

async function initialize() {
	let placeholderImage = 'https://chatelrealestate.appfoliowebsites8.com/wp-content/uploads/sites/8580/2018/10/IMAGECOMINGSOON-copy.png'
	await propertyList.forEach((i,index) => {
	  let propertyData = {
		"id": i.id,
		"index":index,
		"propertyname": i.propertyName,
		"propertytype": i.propertyType,
		"rentaltype": i.rentalType,
		"price": i.price,
		"address":i.address,
		"location":i.location,
		"area": i.area,
		"street": i.street,
		"state": i.state,
		"countrycode": i.countryCode,
		"zipcode": i.zipCode,
		"landarea":i.LandArea ?  i.LandArea  : "0",
		"bedrooms":i.bedrooms ?  i.bedrooms  : "0",
		"bathrooms":i.bathrooms ?  i.bathrooms  : "0",
		"garage": i.garageAvailability,
		"garagecount":i.garageAvailability != false ?  i.garagecount :"0",
		"featuredproperty": i.featuredProperty,
		"dateavailable":i.dateAvailable ?  i.dateAvailable  : "Not Available",
		"image":i.propertyImage ? i.propertyImage : placeholderImage,
		"description": i.properyDescription ,
		"shortdescription": i.shortDescription ,
		"page_item_url":i.page_item_url ? i.page_item_url: "#",
		"contactname":i.contactname ?  i.contactname  : "N/A",
		"contactemail":i.contactemail ?  i.contactemail  : "N/A",
		"contactphone":i.contactphone ?  i.contactphone  : "N/A",
		"contactwebsite":i.contactwebsite ?  i.contactwebsite  : "N/A",
		"contactimage":i.contactimage ?  i.contactimage  : placeholderImage,
		"markericon": i.markericon,
		"latitude": i.latitude,
		"longitude": i.longitude,
		"status":i.status ?  i.status  : "Sale"
	  }
	  completeData.push(propertyData)
	  // if(widgetType === 'featured'){
	  //   if(i.featuredproperty == 'yes') return completeData.push(propertyData)
	  // }else{
	  //   return completeData.push(propertyData)
	  // }
	})
	locationObj.list = completeData;
	createDropdownOptions(completeData)
  }

  function createDropdownOptions(completeData) {
	removeDuplicates(completeData, 'location').forEach(i => $(element).find('#locationSelectBox').append(`<option class="propLocation" value="${removeSpace(i.location)}">${i.location}</option>`));
	removeDuplicates(completeData, 'price').forEach(i => $(element).find('#priceSelectBox').append(`<option class="propPrice" value="${removeSpace(i.price)}">${i.price}</option>`));
	removeDuplicates(completeData, 'area').forEach(i => $(element).find('#buildingSizeSelectBox').append(`<option class="propSize" value="${removeSpace(i.area)}">${i.area}</option>`));
	removeDuplicates(completeData, 'status').forEach(i => $(element).find('#forSaleSelectBox').append(`<option class="propStatus" value="${removeSpace(i.status)}">${i.status}</option>`));
  
	let initData = completeData;
  
	createPagination(initData);
  }
  
  // dropdown
  $(element).find('#locationSelectBox').click(function() {
	let locationVal = $(this).val();
	console.log(locationVal);
  })
  
  
  function searchAndFilter(){
	let dropdownLocation = $(element).find('#locationSelectBox').val();
	let filters;
  }
  
  function createPagination(obj) {
	let sortedItems = sortItems(obj);
  
  
	initMap(sortedItems);
	$(element).find('.paginationContainer').pagination({
		dataSource: sortedItems,
		pageSize: 2, //pageSize,
		callback: function(data,pagination){
		  let createProperties = data.length != 0 ? createProperty(data) :`<div class="customPropertyMapResult"><i class="fas fa-house-damage customPropertyMapWarning customPropertyMapNoRes"></i><div class="customPropertyMapNoResult customPropertyMapWarningText">${data.length} result found.</div></div>`
		  $(element).find('.mixitup-page-list').html(createProperties)
		},
		afterPageOnClick: function () {
		  window.scrollTo({
			top: scrollTo,
			behavior: 'smooth'
		  });
		},
		afterNextOnClick: function () {
		  window.scrollTo({
			top: scrollTo,
			behavior: 'smooth'
		  });
		},
		afterPreviousOnClick: function () {
		  window.scrollTo({
			top: scrollTo,
			behavior: 'smooth'
		  });
		}
  
	})
  }
  
  
  function sortItems(items){
	switch(propSort){
	  case 'none':
		 return items.sort((a,b) => {return parseInt(a.id) - parseInt(b.id)});
		 break;
		 case "alphabetical":
		   return items.sort((a,b) => {
			let aProp = typeof parseInt(a.propertyname.split(" ")[0]) == "number" ? parseInt(a.propertyname.split(" ")[0]) : a.propertyname;
			  let bProp = typeof parseInt(b.propertyname.split(" ")[0]) == "number" ? parseInt(b.propertyname.split(" ")[0]) : b.propertyname;
			  if(aProp < bProp) { return -1; }
			  if(aProp > bProp) { return 1; }
			  return;
		   })
		   break;
		   case "newest":
			return items.sort(function(a,b){
			  if( parseInt(b["id"]) < parseInt(a["id"]) ) { return -1; }
			  if( parseInt(b["id"]) > parseInt(a["id"]) ) { return 1; }
			  return;
			});
			break;
			case "oldest": 
				return items.sort(function(a,b){
				  if( parseInt(a.id) < parseInt(b.id) ) { return -1; }
				  if( parseInt(a.id) > parseInt(b.id) ) { return 1; }
				  return;
			  });
			  break
			default: 
			console.log('Invalid sort option');
	}
  }
  
  // create property items
  
  function createProperty(items){
	let itemBody = "";
  
	items.map(i => {
	  itemBody += `<div class="cInner-Container" data-index='marker_${i.index}'>
				<div class="cInnerBG" style="background-image:url('${i.image}');">
								<div class="cRibbonImage">
									${i.status}
								</div>
								<div class="cInnerPropertyTitle">${i.propertyname}</div>
						</div>
						  <div class="cInner-Contents">
							
								<div class="cInner-Sqm">
									${i.landarea}
									</div>
								<div class="cInner-Price">
										$${i.price} Annual/SF
								</div>
								  <div class="cInner-Label">
											Apartments
								</div>
										<div class="cInnerLogo-Container">
										  <div class="cLogo" style="background-image:url('https://upload.wikimedia.org/wikipedia/commons/b/bd/UOL_logo.png');">
											
										  </div>
										<div class="cButton">
											Flyer
										</div>
									</div>
							  </div>
				</div>`;
		   //   }
			});
	return itemBody;
  
  }
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
  
  
  
  function removeSpace(str){
	return str.replace(/\s/g, "").toLowerCase().replace(/[_\W]+/g, "");
  }
  
  function removeExtra(str){
	let fullText ='';
	if(typeof str !== "undefined"){
		if(!str.includes("</p>")){
			fullText = str;
		}else{
			fullText = str.substring(str.indexOf(">")+1).replace("</p>",'');
		}
	}
	return fullText;
  }
  
  // Reusable
  function multiFilter(property, filters){
	const filterKeys = Object.keys(filters);
	return property.filter(function(eachObj){
		return filterKeys.every(function(eachKey){
			if (!filters[eachKey].length) {
				return true; // passing an empty filter means that filter is ignored.
			}
			return filters[eachKey] == eachObj[eachKey];
		});
	});
  }
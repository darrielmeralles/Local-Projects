let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		    // apikey:"AIzaSyC9rXtfayHzDPUDYANS0eOD501pc2_gclQ",
		    apikey:"AIzaSyBMr1pQsfm1SIgU54HgGx5YxM56EjyOV3c",
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
                'id': 1,
                "business_name": "Marmaris Grill & Pizza",
                "ratings": "4,3",
                "spend": "€ 30,00",
                "delevery_time": "30-55 min",
                "sponsored": "Yes",
                "free_delevery": "Yes",
                "image": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/dpr_1.0/v1692793691/static-takeaway-com/images/restaurants/nl/R1P0P7QN/headers/header",
                "logo": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_82,w_120/f_auto/q_auto/dpr_1.0/v1692793691/static-takeaway-com/images/restaurants/nl/R1P0P7QN/logo_465x320",
                "markericon": "https://irt-cdn.multiscreensite.com/512c27b4888a492d9e99f35f8d9a8042/dms3rep/multi/maps-and-flags.svg",
                "latitude": "-25.363",
                "longitude": "131.044",

          },
          {
                'id': 2,
                "business_name": "New York Pizza Badhoevedorp",
                "ratings": "4",
                "spend": "€ 9,99",
                "delevery_time": "From 16",
                "sponsored": "Yes",
                "free_delevery": "Yes",
                "image": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/dpr_1.0/v1693208718/static-takeaway-com/images/chains/nl/newyorkpizza/headers/header",
                "logo": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_82,w_120/f_auto/q_auto/dpr_1.0/v1693208718/static-takeaway-com/images/chains/nl/newyorkpizza/logo_465x320",
                "markericon": "https://irt-cdn.multiscreensite.com/512c27b4888a492d9e99f35f8d9a8042/dms3rep/multi/maps-and-flags.svg",
                "latitude": "-26.363",
                "longitude": "131.044",

          },
          {
                'id': 3,
                "business_name": "Chicken Palace",
                "ratings": "3.8",
                "spend": "€ 29,99",
                "delevery_time": "From 20:30",
                "sponsored": "Yes",
                "free_delevery": "Yes",
                "image": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_136,w_288/f_auto/q_auto/v1693208718/static-takeaway-com/images/restaurants/nl/QOP053O/headers/header",
                "logo": "https://res.cloudinary.com/tkwy-prod-eu/image/upload/c_thumb,h_82,w_120/f_auto/q_auto/dpr_1.0/v1693208718/static-takeaway-com/images/restaurants/nl/QOP053O/logo_465x320",
                "markericon": "https://irt-cdn.multiscreensite.com/512c27b4888a492d9e99f35f8d9a8042/dms3rep/multi/maps-and-flags.svg",
                "latitude": "-26.263",
                "longitude": "131.044",

          },
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
let locations = {};
let initZoom = parseInt(data.config.initZoom);
let trigger = data.config.trigger;
let markerClick = "true";
let markerSize = parseInt(data.config.markerSize);
let markericon = data.config.markericon;
let newTab = true;
let googleId = "map_" + Math.floor(Math.random(99999) * 99999);
$(".custom-listing-map-Container").attr("id", googleId);

dmAPI.runOnReady('init', function () {

	// $(element).find('.radio').click(function() {
	// 	let val = $(this).data("val");
	// 	console.log(val, "val")
	//  });

   dmAPI.loadScript('https://irp-cdn.multiscreensite.com/e70fa563a8d442bc81646ad9d635638a/files/uploaded/fuse.js', function() { 
      dmAPI.loadScript('https://irt-cdn.multiscreensite.com/8914113fe39e47bcb3040f2b64f71b02/files/uploaded/paginates.min.js', function() { 
        dmAPI.loadScript(`https://maps.googleapis.com/maps/api/js?v=3.40&key=${apikey}`, function() {
          initialize();
        });
      });
  });



})

async function initialize(){
  await propertyList.forEach(function(i){
      let dataA = {
          "id": i.id,
          "business_name": i.business_name,
          "ratings": i.ratings,
          "spend": i.spend,
          "delevery_time": i.delevery_time,
          "sponsored": i.sponsored,
          "free_delevery": i.free_delevery,
          "image": i.image,
          "logo": i.logo,
          "markericon": i.markericon,
          "latitude": i.latitude,
          "longitude": i.longitude
      }
      completeData.push(dataA);
  });

  locations.list = completeData;
  PaginationFunction(completeData);
  // initMap(completeData);
}

//PAGINATION 
function PaginationFunction(items){
  // let sordtedItems = sortItems(jobs);
  // console.log(sordtedItems);

  initMap(items);

  $(element).find('.cd-res-main').pagination({
      dataSource: items,
      pageSize:2,
      callback: function(result, pagination) {
          console.log(result)
          let structure = '';
          structure = result.map(i=>{
            return createRow(i);
         }).join("")
         $(element).find(".cd-results-con").html(structure);
      }
  });
}

function createRow(b){
  let itemLink = window.location.href.includes(data.siteId)  ? `/site/${data.siteId}${b.page_item_url}?preview=true&nee=true&showOriginal=true&dm_checkSync=1&dm_try_mode=true&dm_device=${data.device}`: b.page_item_url;
  if(typeof b.page_item_url == "object"){
      itemLink = b.page_item_url.href;   
  }
  
  let j = `<div class="cd-res-box">
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
                <span>Min. ${b.spend}</span>
              </p>
              <p class="del-time">
                <i class="fa-regular fa-clock"></i>
                <span>${b.delevery_time} . </span>
                <i class="fa-solid fa-bicycle"></i>
                <span>Free . </span>
                <span>${b.sponsored}</span>
              </p>
              
            </div>
          </div>`
  return j;
}

function initMap(obj){

	console.log(obj,'obj');

	let bounds = new google.maps.LatLngBounds();
	let infowindow = new google.maps.InfoWindow({
    maxWidth: 800
  });
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
      // icon: {
      //   url: i.markericon,
      //   scaledSize: new google.maps.Size(markerSize, markerSize)
      // },
      id: "marker_" + i.index
	  });
  
	  bounds.extend(marker.position);

	  if (locations.list.length > 1) {
		  map.fitBounds(bounds);
	  }

	  if(markerClick){
		  google.maps.event.addListener(marker,trigger, (marker, j => {

          let right_column =  `<div class="cd-left-col" style="background-image: url(${i.image});">
                                  <div class="cd-logo-wrapper">
                                    <img src="${i.logo}" alt="">
                                  </div>
                              </div>`;

          let left_column = `<div class="cd-right-col">
                                <p class="business-name">${i.business_name}</p>
                                <p class="cd-ratings">
                                    <i class="fa-solid fa-star"></i>
                                    <span>${i.ratings} (34) . </span>
                                    <i class="fa-solid fa-bag-shopping"></i>
                                    <span>Min. ${i.spend}</span>
                                </p>
                                <p class="del-time">
                                    <i class="fa-regular fa-clock"></i>
                                    <span>${i.delevery_time} . </span>
                                    <i class="fa-solid fa-bicycle"></i>
                                    <span>${i.free_delevery} . </span>
                                    <span>${i.sponsored}</span>
                                </p>
                            </div>`
      
          let form = `<div class="cd-res-box-map">
                        ${right_column}
                        ${left_column}
                    </div>`;
    
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

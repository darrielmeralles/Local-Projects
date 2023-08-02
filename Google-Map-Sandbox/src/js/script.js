// Dev Google Map API key: AIzaSyBMr1pQsfm1SIgU54HgGx5YxM56EjyOV3c

let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		sampleList: [{}],
		sample:''
	}
};
let apikey = "AIzaSyBMr1pQsfm1SIgU54HgGx5YxM56EjyOV3c";
// let apikey = "AIzaSyC9rXtfayHzDPUDYANS0eOD501pc2_gclQ";
let initZoom = 7;
let googleId = "map_" + Math.floor(Math.random(99999) * 99999);
$(element).find(".googleMap-Map-Container").attr("id", googleId);

let collection = new Collection()
let device = data.device;
let sampleList = data.config.sampleList;
let sample = data.config.sample;



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
	dmAPI.loadScript(`https://maps.googleapis.com/maps/api/js?v=3.40&key=${apikey}`, function () {
        initMap();
    });
})


function initMap() {
	let bounds = new google.maps.LatLngBounds();
    let infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById(googleId), {
        zoom: 13,
    	center: { lat: 59.325, lng: 18.07 },
    });
	marker = new google.maps.Marker({
		map,
		draggable: true,
		animation: google.maps.Animation.DROP,
		position: { lat: 59.327, lng: 18.067 },
	  });
	marker.addListener("click", toggleBounce);
  }

function toggleBounce() {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
}
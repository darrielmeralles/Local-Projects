let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		apikey:"AIzaSyAPXbTPYbaYYyR6dAk1KaeAVqM7fAzBqEE", //Gilles
		sampleList: [{}],
		sample:''
	}
};

let collection = new Collection()

let device = data.device;
let sampleList = data.config.sampleList;
let apikey = data.config.apikey;

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
	dmAPI.loadScript(`https://maps.googleapis.com/maps/api/js?v=3.54&key=${apikey}`, function() {
		initialize();
	  });
})

function initialize() {
	const fenway = { lat: 42.345573, lng: -71.098326 };
	const map = new google.maps.Map(document.getElementById("map"), {
	  center: fenway,
	  zoom: 14,
	});
	const panorama = new google.maps.StreetViewPanorama(
	  document.getElementById("pano"),
	  {
		position: fenway,
		pov: {
		  heading: 34,
		  pitch: 10,
		},
	  },
	);
  
	map.setStreetView(panorama);
  }
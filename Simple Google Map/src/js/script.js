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


//URL PARAM
let urlLink = $(location).attr('href');
let url = new URL(urlLink);
let params = new URLSearchParams(url.search);
let hasParam = urlLink.includes("data");
let param = getParameterByName('data');
let param_obj = hasParam ? JSON.parse(atob(param)) : "";

let apiKey = "AIzaSyDYvKIV_1eH9H8X2eZNqXhthAFlZ9HBXho"; //client key

dmAPI.runOnReady('init', function () {
    dmAPI.loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`, function () {
        showMap();
    })
})

function showMap() {
    // let address = param_obj.place; //live
    let address = "42RC+MQ8, Tagaytay - Calamba Rd, Tagaytay, Cavite"; //test

    // Use Google Maps Geocoding API to convert address to coordinates
    let geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            let location = results[0].geometry.location;

            // Create a new Google Map centered at the specified coordinates
            let map = new google.maps.Map(document.getElementById('map'), {
                center: location,
                zoom: 15 // You can adjust the zoom level as needed
            });

            // Add a marker at the specified location
            let marker = new google.maps.Marker({
                map: map,
                position: location,
                title: address
            });
        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }
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

function preloader() {
	$(element).find('div.widget-Loader-Container').fadeOut().remove()
	$(element).find('div.widgetName-Main-Container').fadeIn()
}
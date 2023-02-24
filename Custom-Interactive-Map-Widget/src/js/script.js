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



$( ".map-img-con i" ).click(function() {
	let mapData = $(this).attr("data-map");
	console.log(mapData, "mapData");

	if(mapData === "usa"){
		$(".worldmap-wrapper").addClass("hideMap");
		$(".mapwrapper").removeClass("showmap");
		$(".usa-map-wrapper").addClass("showmap");
	}
	if(mapData === "canada"){
		$(".worldmap-wrapper").addClass("hideMap");
		$(".mapwrapper").removeClass("showmap");
		$(".canada-map-wrapper").addClass("showmap");
	}
	if(mapData === "japan"){
		$(".worldmap-wrapper").addClass("hideMap");
		$(".mapwrapper").removeClass("showmap");
		$(".japan-map-wrapper").addClass("showmap");
	}

});

$( ".back" ).click(function() {
	$(".worldmap-wrapper").removeClass("hideMap");
	// $(".mapwrapper").addlass("hideMap");
	$(".mapwrapper").removeClass("showmap");
});

dmAPI.runOnReady('init', function () {
	//fade animation
	$('.countryBox, .resHotpot').chainFade({
		startAt: 0,
		interval: 700,
		speed: 700,
		fx: 'fade',
		distance: 50,
		direction: 'forward',
		toThe: 'bottom',
		fixedHeight: false,
		messages: false,
		queue: true,
		ease: 'swing',
		after: function(){}
	  });
})


let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '', 
	elementId: '',
	config: { 
		usamapList: [{
				Resort: "WHITE PASS",
				Logo: "https://powderalliance.com/wp-content/uploads/2020/09/whitepass-red-map-marker.png",
				Top:"37px",
				Left: "133px",
				Country: "usa",
				page_item_url: "Apartment"
			}, 
			{	
				Resort: "MISSION RIDGE",
				Logo: "https://powderalliance.com/wp-content/uploads/2020/09/mission-ridge-red-map-marker.png",
				Top:"58px",
				Left: "188px",
				Country: "usa",
				page_item_url: "Apartment"
			},
			{	
				Resort: "SKI MARMOT BASIN",
				Logo: "https://powderalliance.com/wp-content/uploads/2020/09/marmot-basin-red-map-marker.png",
				Top:"386.5px",
				Left: " 217.5px",
				Country: "canada",
				page_item_url: "Apartment"
			},
			{	
				Resort: "CASTLE MOUNTAIN RESORT",
				Logo: "https://powderalliance.com/wp-content/uploads/2020/09/castle-mtn-red-map-marker.png",
				Top:"437.5px",
				Left: "239px",
				Country: "canada",
				page_item_url: "Apartment"
			},
			{
				Resort: "KIRORO",
				Logo: "https://powderalliance.com/wp-content/uploads/2020/09/kiroro-red-map-marker.png",
				Top:"100px",
				Left: "551px",
				Country: "japan",
				page_item_url: "Apartment"
			},
			{
				Resort: "TŪROA SKI AREA",
				Logo: "https://irp.cdn-website.com/e93534a9/dms3rep/multi/turoa.png",
				Top:"100px",
				Left: "551px",
				Country: "new zealand",
				page_item_url: "Apartment"
			},
		],
		sample:''
	}
};

let collection = new Collection()

let device = data.device;
let usamapList = data.config.usamapList;
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

$(element).find( ".map-img-con i" ).click(function() {
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
	if(mapData === "new zealand"){
		$(".worldmap-wrapper").addClass("hideMap");
		$(".mapwrapper").removeClass("showmap");
		$(".newZealand-map-wrapperr").addClass("showmap");
	}

});

$(element).find( ".back" ).click(function() {
	$(".worldmap-wrapper").removeClass("hideMap");
	$(".mapwrapper").removeClass("showmap");
});

dmAPI.runOnReady('init', function () {

	console.log(usamapList, 'usamapList');

	let mapUsa = usamapList.filter(function (u) {
		return u.Country === "usa";
	});
	let mapCanada = usamapList.filter(function (u) {
		return u.Country === "canada";
	});
	let mapJapan = usamapList.filter(function (u) {
		return u.Country === "japan";
	});
	let mapNewZealand = usamapList.filter(function (u) {
		return u.Country === "new zealand";
	});

	mapUsa.map(function(a){
		let s = createBox(a);
		$(element).find(".usa-map-wrapper .img").after(s);
	})
	mapCanada.map(function(a){
		let s = createBox(a);
		$(element).find(".canada-map-wrapper .img").after(s);
	})
	mapJapan.map(function(a){
		let s = createBox(a);
		$(element).find(".japan-map-wrapper .img").after(s);
	})
	mapNewZealand.map(function(a){
		let s = createBox(a);
		$(element).find(".newZealand-map-wrapper .img").after(s);
	})


	//fade animation
	$(element).find('.countryBox, .resHotpot').chainFade({
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

//CREATE JOB GRID LAYOUT
function createBox(a){
    let itemLink = window.location.href.includes(data.siteId)  ? `/site/${data.siteId}${a.page_item_url}?preview=true&nee=true&showOriginal=true&dm_checkSync=1&dm_try_mode=true&dm_device=${data.device}`: a.page_item_url;
    if(typeof a.page_item_url == "object"){
        itemLink = a.page_item_url.href;   
    }
    let j = `<div class="resHotpot hspot-1" style="top: ${a.Top}; left: ${a.Left};">
				<a href="${itemLink}">
					<img src="${a.Logo}" alt="${a.Resort}">
				</a>
			</div>`
    return j;
}
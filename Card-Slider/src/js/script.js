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

let slideArrw="<i class='fa-solid fa-arrow-left filmSlider-Arrow'></i>";
let slideArrw2="<i class='fa-solid fa-arrow-right'></i>";
let a = $(element).find(".slick-list");


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


dmAPI.runOnReady('init', function () {
	dmAPI.loadScript('https://irp-cdn.multiscreensite.com/f49f126e/files/uploaded/slick.min.js', function () {

	$('.center-slider').slick({
		centerMode: true,
		slidesToShow: 2,
		variableWidth: true,
		focusOnSelect: true,
		infinite: true,
		centerPadding: '50px', // Adjust the centerPadding as needed
		// Add any other Slick settings you need
	});

			// a.fadeIn();
			// a.slick({
			// 	dots: false,
			// 	arrows: true,
			// 	infinite: true,
			// 	slidesToShow: 1,
			// 	slidesToScroll: 1,
			// 	pauseOnHover: false,
			// 	speed: 600,
			// 	infinite: false,
			// 	variableWidth: true,
			// 	prevArrow:'<button type="button" class="filmSlider-Arrow-Prev filmSlider-Arrow">'+slideArrw+'</button>',
			// 	nextArrow:'<button type="button" class="filmSlider-Arrow-Next filmSlider-Arrow">'+slideArrw2+'</button>',
			// 	easing:'linear'
			// });

	})
})

function preloader() {
	$(element).find('div.widget-Loader-Container').fadeOut().remove()
	$(element).find('div.widgetName-Main-Container').fadeIn()
}
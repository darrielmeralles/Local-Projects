let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		imageList: [{
			alText: "Federated National Logo",
			imageSrc: "https://lirp.cdn-website.com/3c2a93c6/dms3rep/multi/opt/fednat-768x267-1280w.png"
		}],
		sample:''
	}
};
let imageList=data.config.imageList;
let autoplay=data.config.autoplay;
let dots=data.config.dots;
let interval=data.config.interval;
let draggable=data.config.draggable;
let arrows=data.config.arrows;
let tablet=data.config.tablet;
let mobile=data.config.mobile;
let sTs=data.config.displaySlide;
let arrw=data.config.arrw;
let navSize=data.config.navSize;
let iColor=data.config.iColor;
let slideArrw="<i class='fa fa-"+arrw+"-left fa-"+navSize+" filmSlider-Arrow'></i>";
let slideArrw2="<i class='fa fa-"+arrw+"-right fa-"+navSize+" filmSlider-Arrow'></i>";
let a = $(element).find(".slider");
let dotsWrap = $(element).find('.filmSlider-Dots-Container');
let arrwWrap = $(element).find('.filmSlider-Arrow-Container');

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
		slidesShow = 3;
		break;
	case 'tablet':
		$(element).width("875px");
		slidesShow = 2;
		break;
	default:
		$(element).width("326px");
		slidesShow = 1;
}

//ADD MULTIPLE LINK SOURCE HERE


dmAPI.runOnReady('init', function () {
	dmAPI.loadScript('https://irp-cdn.multiscreensite.com/f49f126e/files/uploaded/slick.min.js', function () {
    
		if(imageList.length == 0) {
			if(data.inEditor){
				$(element).html("<div class='noCollection'>Please add slider.</div><div class='noCollectionSub'>This will be hidden on preview and live site.</div>");
			}else{
				$(element).hide();
			}
		}else{
			// a.attr('dir', 'rtl');
			a.fadeIn();
			a.slick({
				autoplay:false,
				infinite:true,
				slidesToScroll: 1,
				slidesToShow: 1,
				speed: 1750,
				dots: true,
				arrows: false,
                easing: 'linear',
				centerPadding: "10px",
				adaptiveHeight: true,
				pauseOnHover: false,
				swipe: false,
				touchMove: false,
				vertical: true,
				// verticalScrolling: true,
				speed: 1000,
				autoplaySpeed: 2000,
				useTransform: true,
			});
		}

	})
})


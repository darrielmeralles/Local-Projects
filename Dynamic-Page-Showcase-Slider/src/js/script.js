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

// let eachCarImage = data.config.AdditionalImages;
let eachCarImage = "https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1,https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
let separatedImage = eachCarImage.split(",");
let listingSlideToShow = 3;
// let listingSlideToShow = data.config.listingSlideToShow;
let arrowDiv = $(element).find('.arrowsWrapper');
let arrowToggle = true;
// let arrowToggle = data.config.arrowToggle;
let autoPlayListingSlide = true;
// let autoPlayListingSlide = data.config.autoPlayListingSlide;
let interval = 3000;
// let interval = data.config.interval;
let animSpeed = 200;
// let animSpeed = data.config.animSpeed;


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

separatedImage.map(function(i){
    let output = 
    `<img src="${i}">`;    
    $(element).find('.listingGalleryContainer').append(output);
    
    let output1 = 
    `<img src="${i}">`;    
    $(element).find('.listingGalleryContainerThumbnail').append(output1);
});

dmAPI.runOnReady('init', function () {
	dmAPI.loadScript('https://irp-cdn.multiscreensite.com/f49f126e/files/uploaded/slick.min.js', function () {

		$(element).find('.listingGalleryContainer').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			infinite:true,
			autoplay:autoPlayListingSlide,
			arrows: arrowToggle,
			autoplaySpeed:interval,
			speed:animSpeed,
			asNavFor: $(element).find('.listingGalleryContainerThumbnail'),
			prevArrow:'<button type="button" class="cSlickPrev cSarrow"><i class="fa fa-angle-left fa-3x"></i></button>',
			nextArrow:'<button type="button" class="cSlickNext cSarrow"><i class="fa fa-angle-right fa-3x"></i></button>',
		});
		$(element).find('.listingGalleryContainerThumbnail').slick({
			slidesToShow: parseInt(listingSlideToShow),
			slidesToScroll: 1,
			infinite:true,
			asNavFor: $(element).find('.listingGalleryContainer'),
			dots: false,
			centerMode: true,
			centerPadding:0,
			focusOnSelect: true,
			arrows:false
		});

	})
})

// Plugins
const slickCss = 'slickCss';
if (!document.getElementById(slickCss))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = 'slickCss';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.css';
    link.crossOrigin = 'anonymous';
    head.appendChild(link);
}

const slickCssTheme = 'slickCssTheme';
if (!document.getElementById(slickCssTheme))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = 'slickCssTheme';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css';
    link.crossOrigin = 'anonymous';
    head.appendChild(link);
}

const cssId = 'fontAwesomeSource';
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = 'fontAwesomeSource';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://use.fontawesome.com/releases/v5.5.0/css/all.css';
    link.integrity = 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU';
    link.crossOrigin = 'anonymous';
    head.appendChild(link);
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
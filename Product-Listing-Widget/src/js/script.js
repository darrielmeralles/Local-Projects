let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		sampleList: [{}],
		AdditionalImages:'https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal3.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal2.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal1.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal1.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal1.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal1.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal1.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal1.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal1.jpg',
		listingSlideToShow: 4,
		autoPlayListingSlide: false,
		arrowToggle: true,
		interval: 3000,
		animSpeed: 200
	}
};
let eachCarImage = data.config.AdditionalImages;
let separatedImage = eachCarImage.split(",");
let listingSlideToShow = data.config.listingSlideToShow;
let arrowDiv = $(element).find('.arrowsWrapper');
let arrowToggle = data.config.arrowToggle;
let autoPlayListingSlide = data.config.autoPlayListingSlide;
let interval = data.config.interval;
let animSpeed = data.config.animSpeed;

separatedImage.map(function(i){
    let output = 
    `<img src="${i}">`;    
    $(element).find('.listingGalleryContainer').append(output);
    
    let output1 = 
    `<img src="${i}">`;    
    $(element).find('.listingGalleryContainerThumbnail').append(output1);
});

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
	// THUMBNAIL SLIDER
	dmAPI.loadScript('https://irp-cdn.multiscreensite.com/f49f126e/files/uploaded/slick.min.js', function() { 
		$(element).find('.listingGalleryContainer').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			infinite:true,
			autoplay:autoPlayListingSlide,
			arrows: false,
			autoplaySpeed:interval,
			speed:animSpeed,
			asNavFor: $(element).find('.listingGalleryContainerThumbnail'),
			prevArrow:'<button type="button" class="cSlickPrev cSarrow"><i class="fa fa-angle-left fa-3x"></i></button>',
			nextArrow:'<button type="button" class="cSlickNext cSarrow"><i class="fa fa-angle-right fa-3x"></i></button>',
		});
		$(element).find('.listingGalleryContainerThumbnail').slick({
			slidesToShow: parseInt(4),
			slidesToScroll: 1,
			infinite:true,
			asNavFor: $(element).find('.listingGalleryContainer'),
			dots: false,
			centerMode: true,
			centerPadding:0,
			focusOnSelect: true,
			arrows:false
		});
	});
	
	(function(){
		var $element = $(element);
		$element.find('#accordion > ol > div').click(function(){
			var $this = $(this);
			//$element.find('#accordion').find('ol').find('div').removeClass('acc-active');
			$element.find('#accordion').find('ol').find('.list-container').removeClass('acc-active');
			//if (false === $this.next().is(':visible')){
			if (!$this.next().is(':visible')){
				$(element).find('#accordion').find('ol').find('div').next('ul').slideUp();
				$this.addClass('acc-active');
			}
			$this.next().slideToggle();
			
		});
		$(element).find('ul.rteBlock li').each(function(){
			if($(this).text() != ""){
				   
			}else{
				$(this).css("opacity","0");
			}
		});
	})();



})

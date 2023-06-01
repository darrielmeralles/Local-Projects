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


dmAPI.runOnReady('init', function () {
	dmAPI.loadScript('https://irt-cdn.multiscreensite.com/5775367238d847b8b62d126ce25c20de/files/uploaded/jquery.magnific-popup.js',function(){

		// Show the first tab by default
		$('.tabs-stage div.contents').hide();
		$('.tabs-stage div:first').show();
		$('.tabs-nav li:first').addClass('tab-active');

		// Change tab class and display content
		$('.tabs-nav a').on('click', function(event){
			event.preventDefault();
			$('.tabs-nav li').removeClass('tab-active');
			$(this).parent().addClass('tab-active');
			$('.tabs-stage div.contents').hide();
			$($(this).attr('href')).show();
		});

		$( ".more" ).click(function() {
			console.log("click more");
		});


	});
})

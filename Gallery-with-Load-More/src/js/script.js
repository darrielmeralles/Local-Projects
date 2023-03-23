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
	$('.gallery li:lt(3)').show();
	$('.less').hide();
	var items =  9;
	var shown =  3;
	$('.more').click(function () {
		$('.less').show();
		shown = $('.gallery li:visible').length+3;
		if(shown< items) {
			$('.gallery li:lt('+shown+')').show(300);
		} else {
			$('.gallery li:lt('+items+')').show(300);
			$('.more').hide();
		}
	});
	$('.less').click(function () {
		$('.gallery li').not(':lt(3)').hide(300);
		$('.more').show();
		$('.less').hide();
	});
})

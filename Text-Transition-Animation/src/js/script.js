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
let device = data.device;
let sampleList = data.config.sampleList;
let sample = data.config.sample;
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
	dmAPI.loadScript('https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.12/jquery.bxslider.min.js', function () {

	  $('.bxslider.right').bxSlider({
		mode: 'vertical',
		pager:false,
		controls:false,
		infiniteLoop:true,
		auto:true,
		speed:900,
		pause:2000,
		autoDirection: 'previous',
	  });

	})
	
})


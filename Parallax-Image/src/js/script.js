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


dmAPI.runOnReady('init', function () {
	dmAPI.loadScript('https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js', function () {

	var image = document.getElementsByClassName('thumbnail');
	new simpleParallax(image, {
		delay: .5,
		transition: 'cubic-bezier(0,0,0,1)'
		// scale: 1.5,
		// overflow: true
	});


	})
})


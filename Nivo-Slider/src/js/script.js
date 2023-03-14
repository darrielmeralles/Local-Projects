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
	dmAPI.loadScript('https://irp-cdn.multiscreensite.com/f49f126e/files/uploaded/jquery.nivo.slider.js', function () {


		$('#slider').nivoSlider({
			effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
			animSpeed: 500, // Slide transition speed
			pauseTime: 4000, // How long each slide will show
			startSlide: 0, // Set starting Slide (0 index)
			directionNav: false, // Next & Prev navigation
			controlNav: false, // 1,2,3... navigation
			controlNavThumbs: false, // Use thumbnails for Control Nav
			pauseOnHover: false // Stop animation while hovering      
		});


	})
})

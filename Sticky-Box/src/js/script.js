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
//https://abouolia.github.io/sticky-sidebar/#options

dmAPI.runOnReady('init', function () {
	dmAPI.loadScript('https://abouolia.github.io/sticky-sidebar/js/rAF.js', function () {
	dmAPI.loadScript('https://abouolia.github.io/sticky-sidebar/js/ResizeSensor.js', function () {
		
		dmAPI.loadScript('https://abouolia.github.io/sticky-sidebar/js/sticky-sidebar.js', function () {
			
			var stickySidebar = new StickySidebar('#sidebar', {
				topSpacing: 0,
				bottomSpacing: 0,
				containerSelector: false,
				innerWrapperSelector: '.sidebar__inner',
				resizeSensor: true,
				stickyClass: 'is-affixed',
				minWidth: 0
			});

		})

	})
	})
})

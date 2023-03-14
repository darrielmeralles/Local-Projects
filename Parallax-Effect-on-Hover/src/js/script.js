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
	(function() {
		// Add event listener
		document.addEventListener("mousemove", parallax);
		const elem = document.querySelector("#parallax");
		// const elem = $('#parallax');
		// Magic happens here
		function parallax(e) {
			let _w = window.innerWidth/2;
			let _h = window.innerHeight/2;
			let _mouseX = e.clientX;
			let _mouseY = e.clientY;
			let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
			let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
			let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
			let x = `${_depth3}, ${_depth2}, ${_depth1}`;
			console.log(x);
			elem.style.backgroundPosition = x;
		}
	
	})();
})


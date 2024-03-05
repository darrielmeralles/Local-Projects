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
	var settings = {
		"url": "https://api.idxbroker.com/mls/cities/b012",
		"method": "GET",
		"timeout": 0,
		"headers": {
		  "Content-Type": "application/x-www-form-urlencoded'",
		  "accesskey": "fmG-XnsPAx24Vy-QTRGRT5",
		  "outputtype": "json"
		},
	  };
	  
	  $.ajax(settings).done(function (response) {
		console.log(response);
	  });
})


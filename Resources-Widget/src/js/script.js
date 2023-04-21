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
let tab_list = data.config.tab_list;
let video = "https://www.youtube.com/embed/LXb3EKWsInQ";
let sources = {
    youtube: 'https://youtube.com/embed/',
    vimeo: 'https://player.vimeo.com/video/',
    dailymotion: 'https://www.dailymotion.com/embed/video/'
};

dmAPI.runOnReady('init', function () {
    let urlmap = new URL(video);
    let vidtype = "";
    
    if(video.includes("youtube")){
        $(element).find('.errorCon').hide();
        $(element).find('.tab-container').removeClass('hide');
        vidtype = "youtube";
    }
    
    if(video.includes("vimeo")){
        $(element).find('.errorCon').hide();
        $(element).find('.tab-container').removeClass('hide');
        vidtype = "vimeo";
    }

    hostedVideo(urlmap, vidtype);
})

function buildFrame (src) {
    var iframe = document.createElement('iframe');
    iframe.frameBorder = 0;
    iframe.allowFullScreen = true;
    iframe.src = src;
    return iframe;
}

function hostedVideo (url, type) {
    let container = $('.rw-video-wrap');
    var domain = sources[type];
    if (!domain) return console.error('Unknown video source.');
    var id = url.pathname.split('/').pop();
    var src = domain + id;
    var iframe = buildFrame(src);
    container.append(iframe);
}


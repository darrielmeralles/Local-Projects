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

	function getVimeoId( url ) {

		// Look for a string with 'vimeo', then whatever, then a
		// forward slash and a group of digits.
		var match = /vimeo.*\/(\d+)/i.exec( url );
	  
		// If the match isn't null (i.e. it matched)
		if ( match ) {
		  // The grouped/matched digits from the regex
		  return match[1];
		}
	  }

	console.log(getVimeoId('http://vimeo.com/11918221'), "ID vidmeo")  

	function getValue(VidID){
		var value= $.ajax({ 
		   url: `https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/${VidID}`, 
		   async: false
		}).responseText;
		let val = JSON.parse(value);
		console.log(val);
		return val.thumbnail_url;
	 }
	 console.log(getValue("112836958"), " vimeo Thumbnail");
})


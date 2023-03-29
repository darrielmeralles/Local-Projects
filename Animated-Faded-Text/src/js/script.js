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

// ref:https://stackoverflow.com/questions/49309193/show-sentences-word-by-word-only-one-sentence-displayed

dmAPI.runOnReady('init', function () {
	var P = $('.sentences > .faded');

	P.hide().contents().each(function() {
		var Words;
		if (this.nodeType === 3) {
			Words = '<span> ' + this.data.split(/\s+/).join(' </span><span> ') + ' </span>';
			$(this).replaceWith(Words);
		} else if (this.nodeType === 1) {
			this.innerHTML = '<span> ' + this.innerHTML.split(/\s+/).join(' </span><span> ') + ' </span>';
		}
	});
	
	P.find('span').hide().each(function() {
		if( !$.trim(this.innerHTML) ) {
			$(this).remove();
		}
	});
	
	var delay = 0;
	// Iterate over all the P's
	P.each(function(){
	  // You need an IIFE to pass correct 'this'
	  (function(that){
		// Add a setTimeout to hide/show P's
		setTimeout(function(){
		  // Show current P and hide all of its siblings
		  $(that).show().siblings().hide();
		  // This is what you already had
		  $(that).find('span').each(function(I) {
			  $(this).delay(200 * I).fadeIn(800);
		  });
		}, delay);
	  })(this);
	  // Delay is past delay + time to fade in all the spans + 1 sec break
	  delay = delay+($(this).find('span').length+1)*200+1000;
	});
})

function preloader() {
	$(element).find('div.widget-Loader-Container').fadeOut().remove()
	$(element).find('div.widgetName-Main-Container').fadeIn()
}
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
	(function(){
		var $element = $(element);
		$element.find('#accordion > ol > div').click(function(){
			var $this = $(this);
			//$element.find('#accordion').find('ol').find('div').removeClass('acc-active');
			$element.find('#accordion').find('ol').find('.list-container').removeClass('acc-active');
			//if (false === $this.next().is(':visible')){
			if (!$this.next().is(':visible')){
				$(element).find('#accordion').find('ol').find('div').next('ul').slideUp();
				$this.addClass('acc-active');
			}
			$this.next().slideToggle();
			
		});
		$(element).find('ul.rteBlock li').each(function(){
			if($(this).text() != ""){
				   
			}else{
				$(this).css("opacity","0");
			}
		});
	})();
})

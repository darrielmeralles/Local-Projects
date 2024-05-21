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
	getUrlList();
})

function getUrlList(){

	let getUrls = doAjax({
		url:`./php/actions.php`,
		type: 'GET',
		// data:JSON.stringify({
		// 	'action':'Get Url',
		// })
		data: {
			action: "Get Url"
		}
	});
	getUrls.then(data=>{
		console.log(data, 'data');
		let resp = JSON.parse(data);
		console.log(resp, 'resp');
		if(resp.status){

		}else{

		}
	  }); 

}


/**
 * @param settings
 * Reusable Async AJAX
 * eg: var a = {
        url: ajaxurl,
        type: 'POST',
        data: args
    }
    Callback : a.then(data => {
        console.log(data)
    })
    */
    async function doAjax(settings) {
      
		let result
		try{
			result = await $.ajax(settings);
			return result;
		}catch(error){
			console.log(error)
		}
	
		console.log(result, 'Result')
	}
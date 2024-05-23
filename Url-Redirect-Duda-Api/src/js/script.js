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

var settings;

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

	//iniitialize setting;
    settings = {
        url:`./php/actions.php`,
        type: "POST",
        data:{action: "Get Url"}
    };
    let ulrList = doAjax(settings);
    
    ulrList.then(resp =>{
		console.log(resp, "resp ");
        let data = JSON.parse(resp);
        
        if(data.status){
            //do
        }else{
            console.error(data.response)
        }
	})
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
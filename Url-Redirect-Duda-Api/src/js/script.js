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
let actionLink = "./php/actions.php";
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
    let urlList = doAjax(settings);
    
    urlList.then(resp =>{
		// Extract the JSON part from the received data
		const jsonString = resp.substring(resp.indexOf('{'));
        let data = JSON.parse(jsonString);
		console.log(data, "data");

		let sitename = data.response.site_name;
		let results = data.response.results;

		console.log(sitename, "site_name");
		console.log(results, "results");
        
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
 * eg: let a = doAjax({
        url: ajaxurl,
        type: 'POST',
        data: args
    })
    Callback : a.then(data => {
        console.log(data)
    })
*/
function doAjax(settings) {
    settings.data = JSON.stringify(settings.data);
    return new Promise((res, rej) => $.ajax(settings).done(a => res(a)));
}
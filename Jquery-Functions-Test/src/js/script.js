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
	console.log(dateFormat("08/29/2022"))
})

function preloader() {
	$(element).find('div.widget-Loader-Container').fadeOut().remove()
	$(element).find('div.widgetName-Main-Container').fadeIn()
}

function dateFormat(inputDate){
	// Input date in "mm/dd/yyyy" format
	// var inputDate = "12/25/2022";

	// Split the date into month, day, and year
	var dateParts = inputDate.split('/');
	var month = dateParts[0];
	var day = dateParts[1];
	var year = dateParts[2];

	// Create a Date object and format the output in "yyyy-mm-dd" format
	return new Date(`${year}-${month}-${day}`).toISOString().split('T')[0];

	// console.log(formattedDate);
}
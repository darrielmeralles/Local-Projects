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


	 let arr = [{name: "abc", age: "20", status: "Active"}, {name: "xyz", age: "21", status: "Inactive"}, {name: "pqr", age: "22", status: "Active"}]
	 
	 
	 console.log(arr);

	 let sorted =  arr.sort((a, b) => (a.status === b.status) ? 0 : a.status === "Active" ? -1 : 1);
	 
	 console.log(sorted, "sorted");

	 let sorted2 =  arr.sort((a, b) => (a.age === b.age) ? 0 : a.age === "22" ? -1 : 1);
	 console.log(sorted2, "sorted2");

	 sorted2.map((item) => {
		console.log(item, "item");

		let output = `<div class="con">
						<p>${item.name}</p>
						<p>${item.age}</p>
						<p>${item.status}</p>
					</div>`;

		$(".append").append(output);

	})

})

function handleData(arr, status) {
	if(!arr || arr.length == 0) return
	for(let i=0; i<arr.length; i++) {
	 let item = arr[i];
	 if(item.status == status) {
	   arr.splice(i, 1);
	   arr.unshift(item)
	 }
	}
 }
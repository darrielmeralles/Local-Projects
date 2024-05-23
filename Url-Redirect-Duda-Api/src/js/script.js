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

	// $(window).on('load', function() {
	// 	$('#login-form').modal('show');
	// });
	
	$('.deleteRedirect').click(function() {
		Swal.fire({
			title: "Are you sure?",
			text: "This action will remove the URL redirect from the site.",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Deleted!",
					text: "URL Redirect has been deleted.",
					icon: "success"
				});
			}
		});
	});
	
	$('.republishSite').click(function() {
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "The site has been republished",
			showConfirmButton: false,
			timer: 1500
		});
	});

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
			addTable(results);
			$('.fw-normal').html(sitename)
        }else{
            console.error(data.response)
        }
	})
}

function addUrl(src, target){

	//iniitialize setting;
    settings = {
        url:`./php/actions.php`,
        type: "POST",
        data:{
			action: "Add Url",
			source: src,
			target: target,
			response_code:"301"
		}
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
			addTable(results);
			$('.fw-normal').html(sitename)
        }else{
            console.error(data.response)
        }
	})
}

function addTable(j){
	j.map(function(i){
		let o = `<tr>
					<th scope="row">${i.id}</th>
					<td>${i.source}</td>
					<td>${i.target}</td>
					<td>
						<div class="container-fluid p-0">
							<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#updateRedirectModal"><i class="fa-solid fa-pen"></i></button>
							<button type="button" class="btn btn-danger ms-2 deleteRedirect"><i class="fa-solid fa-trash"></i></button>
						</div>
					</td>
				</tr>`;
		$('.tble').append(o);                
	});
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
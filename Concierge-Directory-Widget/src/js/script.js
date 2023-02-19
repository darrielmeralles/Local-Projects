let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		businessList: [{
			Business_Name: "CR Pro Inspections",
			Category:"Home Services",
			Image: "https://redzoneinsurance.com/wp-content/uploads/2022/03/MSH_GabrielCuesta-SOH_65531-768x515.webp",
			Location: "18495 South Dixie Highway Unit 371 Cutler Bay, FL 33157",
			Short_Description: "Whether it’s time to buy or sell, CR Pro Home Inspections provides prompt, professional service you can trust. At CR Pro Home Inspections, we strive to provide our community with the peace of mind they deserve when it comes to their homes. As InterNACHI certified inspectors, our friendly team has the experience and training needed […]",
			Description: "Whether it’s time to buy or sell, CR Pro Home Inspections provides prompt, professional service you can trust. At CR Pro Home Inspections, we strive to provide our community with the peace of mind they deserve when it comes to their homes. As InterNACHI certified inspectors, our friendly team has the experience and training needed […]",
			Phone: "(305) 912-7679",
			page_item_url: "Apartment"
		}, {
			Business_Name: "Mortgage Masters Inc – Lisa Irons",
			Category:"Home Services",
			Image: "https://redzoneinsurance.com/wp-content/uploads/2022/03/MORTGAGE_TITLE3-768x512.jpg",
			Location: "N/A",
			Short_Description: "We offer an array of Mortgages that we will personally match with your needs. We pride ourselves on professional service with personalized attention.",
			Description: "We offer an array of Mortgages that we will personally match with your needs. We pride ourselves on professional service with personalized attention.",
			Phone: "(954) 964-2220",
			page_item_url: "Apartment"
		}, {
			Business_Name: "One Path Realty",
			Category:"Home Services",
			Image: "https://redzoneinsurance.com/wp-content/uploads/2021/01/MORTGAGE7-768x512.jpg",
			Location: "20410 Old Cutler Rd Cutler Bay, FL 33189",
			Short_Description: "Welcome to South Florida’s lifestyle real estate team where our chief goal is to not only get the most value out of every home but to provide ethical, professional, and results-driven services to every property owner and prospective real estate buyer. We are able to do this through innovation, collaboration, and artistry.",
			Description: "Welcome to South Florida’s lifestyle real estate team where our chief goal is to not only get the most value out of every home but to provide ethical, professional, and results-driven services to every property owner and prospective real estate buyer. We are able to do this through innovation, collaboration, and artistry.",
			Phone: "(305) 297-7330",
			page_item_url: "Apartment"
		}
	],
		sample:'' 
	}
};

let collection = new Collection()

let device = data.device;
let businessList = data.config.businessList;
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
	dmAPI.loadScript('https://irp-cdn.multiscreensite.com/e70fa563a8d442bc81646ad9d635638a/files/uploaded/fuse.js', function() { 
		dmAPI.loadScript('https://irt-cdn.multiscreensite.com/8914113fe39e47bcb3040f2b64f71b02/files/uploaded/paginates.min.js', function() { 
			
			console.log(businessList, "businessList");

			//append categor in dropdown
			let bCat = removeDuplicate(businessList.map(a => a.Category));
			createFilterDropdown(bCat,'Category');

			//append onload
			let appdef = businessList.map(function(i){
				return createBox(i);
			})
			$(element).find(".cd-contentWrapper").html(appdef);
	
		});
	});

})

//ONCLICK SEARCH
$(element).find('.searchField').keyup(function(event) {
    if (event.keyCode == '13') {
        let keyword = $(this).val();
		console.log(keyword, "keyword");
        if(keyword != ""){
			let result = searchByBusinessKey(businessList,keyword);
			console.log(result, "result ");

			let filRes = result.map(function(i){
				return createBox(i);
			})

			$(element).find(".cd-contentWrapper").html(filRes);
        }
    }else{
		let allRes = businessList.map(function(i){
			return createBox(i);
		})
		$(element).find(".cd-contentWrapper").html(allRes);
	}
});

//FILTER ONCHANGE
$('.busFilWrap select').change(function(){
	let keyword = $(element).find('.searchInputField input').val();
	let keyword2 = $(element).find('.searchInputField2 input').val();
	let selectedCateg = $(element).find('#busCategory').val();
	let filters = {};
	
	if(selectedCateg !== null){
		filters.Category = selectedCateg;
	}

	console.log(filters, "filters");

	if(keyword != ""){
		let result = searchByBusinessKey(businessList,keyword);
		let filtered = multiFilter(result, filters);
		console.log(filtered, 'filtered');
	}else if(keyword2 != ""){
		let result2 = searchByBusinessKey(businessList,keyword2);
		let filtered2 = multiFilter(result2, filters);
		console.log(filtered2, 'filtered2');
	}else{  
		let filtered = multiFilter(businessList, filters);
		console.log(filtered, "filtered 2");
	}

});

//REMOVE DUPLICATE IN ARRAY
function removeDuplicate(arr){
    return uniqueItems = Array.from(new Set(arr))
}

function convertDash(str){
	let newStr = str.replace(/\s/g , "-");
	return newStr.replace(/\+/g , "");
}

function multiFilter(arr,filters){
    const filterKeys = Object.keys(filters);
    return arr.filter(function(eachObj){
        return filterKeys.every(function(eachKey){
        if (!filters[eachKey].length) {
            return true; // passing an empty filter means that filter is ignored.
        }
        return filters[eachKey].includes(eachObj[eachKey]);
        });
    });
}

//CREATE DROPDOWN
function createFilterDropdown(arr,filter){
    arr.map(function(i){
        $(element).find('#busCategory').append(`<option value="${i}">${i}</option>`);
    });
}

//SEARCH BY JOB KEY
function searchByBusinessKey(arr,keyword){
    let options = {
        shouldSort: true,
        threshold: 0.2,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "Business_Name",
            "Location"
        ]
    };
    let fuse = new Fuse(arr, options);
    let result = fuse.search(keyword);
    return result;
}

//CREATE JOB GRID LAYOUT
function createBox(b){
    let itemLink = window.location.href.includes(data.siteId)  ? `/site/${data.siteId}${b.page_item_url}?preview=true&nee=true&showOriginal=true&dm_checkSync=1&dm_try_mode=true&dm_device=${data.device}`: b.page_item_url;
    if(typeof b.page_item_url == "object"){
        itemLink = b.page_item_url.href;   
    }
    
    let j = `<div class="cd-resWrapper">
				<div class="cd-imgCon" style="background-image: url(${b.Image});">
				</div>
				<div class="cd-contentCon">
					<p class="bTitle">${b.Business_Name}</p>
					<p class="bDescription">
						${b.Short_Description}
					</p>
					<p class="bLocation">
						${b. Location}
					</p>
					<p class="bPhone">
						Phone: <a href="tel:${b.Phone}">${b.Phone}</a>
					</p>

					<button class="btnPageLink">
						<a href="${itemLink }">
							<span>More Info</span>
						</a>
					</button>
				</div>
			</div>`
    return j;
}
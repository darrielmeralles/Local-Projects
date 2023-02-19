let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		policyList: [{
			Policy: "SR-22 Insurance",
			Category:"Auto",
			Category_Image: "https://redzoneinsurance.com/wp-content/uploads/2022/04/Policies_Auto.jpg",
			Page_Link: "Apartment"
		}, {
			Policy: "ATV Insurance",
			Category:"Auto",
			Category_Image: "https://redzoneinsurance.com/wp-content/uploads/2022/04/Policies_Auto.jpg",
			Page_Link: "Apartment"
		}, {
			Policy: "Videographer Insurance",
			Category:"Business",
			Category_Image: "https://redzoneinsurance.com/wp-content/uploads/2022/04/Policies_Commercial.jpg",
			Page_Link: "Apartment"
		}, {
			Policy: "Vision Insurance",
			Category:"Life + Health",
			Category_Image: "https://redzoneinsurance.com/wp-content/uploads/2022/04/Policies_Auto.jpg",
			Page_Link: "Apartment"
		},{
			Policy: "Homeowners Insurance",
			Category:"Home",
			Category_Image: "https://redzoneinsurance.com/wp-content/uploads/2022/04/Policies_Auto.jpg",
			Page_Link: "Apartment"
		}
	], 
		sample:''
	}
};

let collection = new Collection()
let device = data.device;
let policyList = data.config.policyList;
let sample = data.config.sample;

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
	// map category
	let cat = removeDuplicate(policyList.map(a => a.Category));
	cat.map(function(a){
		let mapcat = `<li data-cat="${a}" class="category">${a}</li>`
		$(element).find('.p-row-container ul').append(mapcat);
	})

	//active category onload
	$(element).find('.p-row-container ul li:last-child').addClass('activecat');
	let activCat = $(element).find('.activecat').text();
	console.log(activCat, "activCat");
	fil(activCat);

	//filter policies when category click
	$(element).find( ".p-row-container ul li" ).click(function() {
		$(element).find('.p-row-container ul li').removeClass('activecat');
		$(this).addClass('activecat');
		let catVal = $(this).attr("data-cat");
		fil(catVal);
	});

})	

function preloader() {
	$(element).find('div.widget-Loader-Container').fadeOut().remove()
	$(element).find('div.widgetName-Main-Container').fadeIn()
}

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

function fil(filter){
	let filters = {};
	filters.Category = filter;
	let filtered = multiFilter(policyList,filters )
	let mapRes = filtered.map(function(b){
		return `<li>
					<a href="https://www.google.com/">${b.Policy}</a>
				</li>`;
	})
	$(element).find('.p-results ul').empty();
	$(element).find('.p-results ul').append(mapRes);
}
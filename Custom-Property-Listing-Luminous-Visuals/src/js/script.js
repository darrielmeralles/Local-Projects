let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		propertyList: [
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1690568422_0.jpg",
				Street_Address: "15 Eaglemere Drive",
				City: "Eaglemere",
				Price: "$448,900",
				Bedroom: "3",
				Bathroom: "3",
				Badge: "Coming Soon",
				page_item_url: "15-Eaglemere-Drive"
			},
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1690565062_0.jpg",
				Street_Address: "162 Joynson Crescent",
				City: "Ridgewood South",
				Price: "$488,900",
				Bedroom: "3",
				Bathroom: "2",
				Badge: "Coming Soon",
				page_item_url: "162-Joynson-Crescent"
			},
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1690215309_0.jpg",
				Street_Address: "213 Ferndale Ave",
				City: "Norwood Flats",
				Price: "$549,900",
				Bedroom: "3",
				Bathroom: "2",
				Badge: "Coming Soon",
				page_item_url: "213-Ferndale-Ave"
			},
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1689972335_0.jpg",
				Street_Address: "56 Lake Estate Drive",
				City: "Gimli RM",
				Price: "$634,900",
				Bedroom: "3",
				Bathroom: "2",
				Badge: "",
				page_item_url: "56-Lake-Estate-Drive"
			},
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1690909471_0.jpg",
				Street_Address: "402 Kirkfield Street",
				City: "Westwood",
				Price: "$390,000",
				Bedroom: "4",
				Bathroom: "1.5",
				Badge: "",
				page_item_url: "402-Kirkfield-Street"
			},
		],
		sample:''
	}
};

let collection = new Collection()

let device = data.device;
let sampleListData;
let propertyList= data.config.propertyList;

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
			
			console.log(propertyList, "propertyList");

			//append onload
			PaginationFunction(propertyList);
	
		});
	});
})

// Keyword search
$(element).find('.cpl-SearchInput').keyup(function(event) {
	if (event.keyCode == '13') {
        let keyword = $(this).val();
        if(keyword != ""){
            let result = searchByBusinessKey(propertyList,keyword);
            result.map(function(i){
                PaginationFunction(result);
            });
        }else{
			PaginationFunction(propertyList);
		}
    }
});
//ONCLICK SEARCH
$(element).find('.cpl-Search').click(function() {
	let keyword = $(".cpl-SearchInput").val();
	if(keyword != ""){
		let result = searchByBusinessKey(propertyList,keyword);
		result.map(function(i){
			PaginationFunction(result);
		});
	}else{
		PaginationFunction(propertyList);
	}
});
// RESET 
$(element).find('.cpl-Reset').click(function() {
	PaginationFunction(propertyList);
	$(element).find(".cpl-SearchInput").val("");
});

//FILTER ONCHANGE
$('.cpl-InputContainer select').change(function(){
	let keyword = $(element).find('.cpl-SearchInput').val();
	let min_price = $(element).find('#cpl-MinpriceInput').val();
	let max_price = $(element).find('#cpl-MaxpriceInput').val();
	let sort_by = $(element).find('#cpl-SortbyInput').val();
	let bathrooms = $(element).find('#cpl-BathsInput').val();
	let bedrooms = $(element).find('#cpl-BedroomsInput').val();
	let filters = {};
	
	// if(min_price !== null){
	// 	filters.Price = min_price;
	// }


	console.log(filters, "filters");

	if(keyword != ""){
		let result = searchByBusinessKey(propertyList,keyword);
		// let filtered = multiFilter(result, filters);
		// PaginationFunction(filtered);

		let filtered = multiFilter(result, filters).filter((a)=>{
   
            // let filterPrice = typeof a.price == "string" ? parseFloat(a.price.replace("$","").split(",").join("")):parseFloat(a.price);
            
            // let fPricing = isNaN(filterPrice) ? 0: filterPrice;
            
            // let filterArea = isNaN(parseFloat(a.landarea.split(",").join(""))) ? 0 :parseFloat(a.landarea.split(",").join(""));
            
            let bedC = a.Bedroom == 0 ? 0 : a.Bedroom;
            let batC = a.Bathroom == 0 ? 0 : a.Bathroom;

			// console.log(bedC, "bedC")
			// console.log(batC, "batC")
            
            // if(parseInt(bedrooms) <= parseInt(bedC) && parseInt(bathrooms) <= parseInt(batC) && min_price <= a.Price && max_price >= a.Price){
            if(parseInt(bedrooms) <= parseInt(bedC) && parseInt(bathrooms) <= parseInt(batC) ){
                return a;
            }
        });
		console.log(filtered, 'filtered');
		return PaginationFunction(filtered);

	}else{  
		// let filtered = multiFilter(propertyList, filters);
		// console.log(filtered, "filtered 2");
		// PaginationFunction(filtered);

		let filtered = multiFilter(propertyList, filters).filter((a)=>{
            
            let bedC = a.Bedroom == 0 ? 0 : a.Bedroom;
            let batC = a.Bathroom == 0 ? 0 : a.Bathroom;

            
            // if(parseInt(bedrooms) <= parseInt(bedC) && parseInt(bathrooms) <= parseInt(batC) && min_price <= a.Price && max_price >= a.Price){
            if(parseInt(bedrooms) <= parseInt(bedC) && parseInt(batC) == parseInt(bathrooms) && min_price <= a.Price && max_price >= a.Price){
                return a;
            }
        });
		console.log(filtered, 'filtered 2');
		return PaginationFunction(filtered);

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

// MULTI FILTER FOR SPLIT CATEGORY
function multiFilter(property, filters){
    const filterKeys = Object.keys(filters);
    return property.filter(function(eachObj){
        return filterKeys.every(function(eachKey){
            if (!filters[eachKey].length) {
                return true; // passing an empty filter means that filter is ignored.
            }
            return eachObj[eachKey].includes(filters[eachKey]);
        });
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
            "Street_Address",
            "City"
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
    
    let j = `<div class="cpl-content-box">
				<div class="cpl-image-con" style="background-image: url(${b.Image});"></div>
				<div class="cpl-countdown-con"></div>
				<div class="cpl-info-con">
					<p class="address">${b.Street_Address}</p>
					<p class="street">${b.City}</p>
					<div class="p-info">
						<p class="price">$${b.Price}</p>
						<p class="bed">${b.Bedroom}</p>
						<p class="bath">${b.Bathroom}</p>
					</div>
					<button class="cpl-link cpl-Btn">View Listing</button>
				</div>
			</div>`
    return j;
}

//SPLIT FILTERS WITH COMMA
function catFilter(obj, key) {
    let newObj = obj.map(i => {
        return i[key].split(",").map(j => {
            return j.trim();
        });
    }).flat();
    var uniqueItems = Array.from(new Set(newObj));
    return uniqueItems.sort((a, b) => {
        return a > b ? 1 : -1;
    }).map(i => {
        return i;
    })
};

//PAGINATION 
function PaginationFunction(items){
    $('.cProperty-Content-wrap').pagination({
        dataSource: items,
        pageSize:3,
        callback: function(result, pagination) {
            // console.log(result, 'result');
            let structure = '';

			structure = result.map(i=>{
				return createBox(i);
			 }).join("")

			$(element).find(".cpl-sub-wrapper").html(structure);
        }
    });
}
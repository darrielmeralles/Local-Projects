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
				Price: "448,900",
				Bedroom: "3",
				Bathroom: "3",
				Badge: "Coming Soon",
				page_item_url: "15-Eaglemere-Drive"
			},
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1690565062_0.jpg",
				Street_Address: "162 Joynson Crescent",
				City: "Ridgewood South",
				Price: "488,900",
				Bedroom: "3",
				Bathroom: "2",
				Badge: "Coming Soon",
				page_item_url: "162-Joynson-Crescent"
			},
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1690215309_0.jpg",
				Street_Address: "213 Ferndale Ave",
				City: "Norwood Flats",
				Price: "549,900",
				Bedroom: "3",
				Bathroom: "2",
				Badge: "Coming Soon",
				page_item_url: "213-Ferndale-Ave"
			},
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1689972335_0.jpg",
				Street_Address: "56 Lake Estate Drive",
				City: "Gimli RM",
				Price: "634,900",
				Bedroom: "3",
				Bathroom: "2",
				Badge: "",
				page_item_url: "56-Lake-Estate-Drive"
			},
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1690909471_0.jpg",
				Street_Address: "402 Kirkfield Street",
				City: "Westwood",
				Price: "390,000",
				Bedroom: "4",
				Bathroom: "1.5",
				Badge: "",
				page_item_url: "402-Kirkfield-Street"
			},
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1689958512_0.jpg",
				Street_Address: "49 Hargrave St",
				City: "",
				Price: "2,600,000",
				Bedroom: "16",
				Bathroom: "16",
				Badge: "",
				page_item_url: "49-Hargrave-St"
			},
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1690467958_0.jpg",
				Street_Address: "666 Dudley Ave",
				City: "Crescentwood",
				Price: "286,000",
				Bedroom: "3",
				Bathroom: "1",
				Badge: "",
				page_item_url: "666-Dudley-Ave"
			},
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1690405172_0.jpg",
				Street_Address: "77 Edmonton St (Unit 206)",
				City: "Downtown",
				Price: "155,000",
				Bedroom: "2",
				Bathroom: "2",
				Badge: "",
				page_item_url: "77-Edmonton-St-Unit-206"
			},
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1689190103_0.jpg",
				Street_Address: "459 Elgin Avenue",
				City: "Central",
				Price: "210,000",
				Bedroom: "4",
				Bathroom: "2",
				Badge: "",
				page_item_url: "459-Elgin-Avenue"
			},
			{
				Image: "https://jltadmin.m9corp.com//uploads/listings/1689190103_0.jpg",
				Street_Address: "432 Harbison Ave W",
				City: "Elmwood",
				Price: "299,900",
				Bedroom: "2",
				Bathroom: "2",
				Badge: "Rented",
				page_item_url: "432-Harbison-Ave-W"
			}
		],
		sample:''
	}
};

let collection = new Collection()

let device = data.device;
let sampleListData;
let propertyList= data.config.propertyList;
let initialSort = data.config.sort;

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
			PaginationFunction(rangeFilter(propertyList));
		});
	});
})

// Keyword search
$(element).find('.cpl-SearchInput').keyup(function(event) {

	let searchWord = $(this).val();
    //check if search field is empty
    if(!searchWord){
        PaginationFunction(propertyList);//Append default
    }else{
        let arr = filtered();
    	let searchResult = searchByKeyword(arr, searchWord);
    	PaginationFunction(searchResult);
    }

});
//ONCLICK SEARCH
$(element).find('.cpl-Search').click(function() {
	let sortValue = $("#cpl-SortbyInput").val();
	PaginationFunction(filtered(), sortValue);
	// PaginationFunction(filtered());
});
// RESET 
$(element).find('.cpl-Reset').click(function() {
	$(element).find(".cpl-SearchInput").val("");
	$(element).find("#cpl-BathsInput").val("");
	$(element).find("#cpl-BedroomsInput").val("");
	$(element).find('#cpl-MinpriceInput').val(0);
	$(element).find('#cpl-MaxpriceInput').val(1900000);
	$(element).find('#cpl-SortbyInput').val(0);
	PaginationFunction(rangeFilter(propertyList));
	console.log("reset Btn")
});
//Sorting
// $('#cpl-SortbyInput').change(function(){
//     let sortValue = $(this).val();
//     PaginationFunction(propertyList, sortValue);
// });

//FILTERED
function filtered(){
	let filterBaths = $(element).find('#cpl-BathsInput').val();
	let filterBed = $(element).find('#cpl-BedroomsInput').val();
	let filters = {
		Bathroom:filterBaths,
		Bedroom:filterBed
	};
	console.log(filters, "Filters");
	console.log(multiFilter(propertyList,filters), "results");
	return multiFilter(propertyList,filters);
}

//REMOVE DUPLICATE IN ARRAY
function removeDuplicate(arr){
    return uniqueItems = Array.from(new Set(arr))
}

function convertDash(str){
	let newStr = str.replace(/\s/g , "-");
	return newStr.replace(/\+/g , "");
}

// MULTI FILTER
function multiFilter(car, filters){
	const filterKeys = Object.keys(filters);
	return car.filter(function(eachObj){
		return filterKeys.every(function(eachKey){
			if (!filters[eachKey].length) {
				return true; // passing an empty filter means that filter is ignored.
			}
			return filters[eachKey].includes(eachObj[eachKey]);
		});
		
	});
}

//SEARCH BY KEYWORDS
function searchByKeyword(arr,keyword){
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
				<div class="badge" style="background-image: url(https://lirp.cdn-website.com/65baa37c/dms3rep/multi/opt/${badgeSelect(b.Badge)})"></div>
				<div class="cpl-image-con" style="background-image: url(${b.Image});"></div>
				<div class="cpl-countdown-con"></div>
				<div class="cpl-info-con">
					<p class="address">${b.Street_Address}</p>
					<p class="street">${b.City}</p>
					<div class="p-info">
						<p class="price">$${b.Price}</p>
						<p class="bed"><i class="fa-solid fa-bed"></i> ${b.Bedroom}</p>
						<p class="bath"><i class="fa-solid fa-bath"></i> ${b.Bathroom}</p>
					</div>
					<button class="cpl-link cpl-Btn">View Listing</button>
				</div>
			</div>`
    return j;
}

//BADGE SELECTION
function badgeSelect(a){
	if(a == 'Coming Soon'){
		return "comingsoon_listing-1920w.png";
	}
	if(a == 'Exclusive Listing'){
		return "exclusive_listing-1920w.png";
	}
	if(a == 'Rented'){
		return "rented-overlay-1920w.png";
	}
	if(a == 'Sold'){
		return "sold-1920w.png";
	}
	if(a == 'Sold for Full Price'){
		return "sold-full-1920w.png";
	}
	if(a == 'Sold In One Day'){
		return "sold-oneday-1920w.png";
	}
	if(a == 'Sold Over List Price'){
		return "sold-over-1920w.png";
	}
}

//PRICE RANGE FILTER
function rangeFilter(gsxRawData){
	let fromP = parseFloat($(element).find('#cpl-MinpriceInput').val());
	let toP = parseFloat($(element).find('#cpl-MaxpriceInput').val());
	return gsxRawData.filter(function(i){
		let price = parseFloat(i.Price.split(',').join(""));
		if(fromP <= price && toP >= price){
			return i;
		}
	});
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
function PaginationFunction(items, sort="LTH"){

	let filterRange = rangeFilter(items);
	console.log(filterRange, "filterRange");

	//Lowest Price
	if(sort == "LTH"){
		filterRange.sort(function(a, b) {
			return parseFloat(a.Price.replace(/,/g,'')) - parseFloat(b.Price.replace(/,/g,''));
		});
	}
	//Highest Price
	if(sort == "HTL"){
		filterRange.sort(function(a, b) {
			return parseFloat(b.Price.replace(/,/g,'')) - parseFloat(a.Price.replace(/,/g,''));
		});
	}

    $('.cProperty-Content-wrap').pagination({
        dataSource: filterRange,
        pageSize:6,
        callback: function(result, pagination) {
            let structure = '';
			structure = result.map(i=>{
				return createBox(i);
			 }).join("")
			$(element).find(".cpl-sub-wrapper").html(structure);
        }
    });
}
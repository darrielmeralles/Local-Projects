let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		directoryList: [{
			Image: "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			First_Name: "Brandon",
			Last_Name: "TestAccount",
			Job_Title_At_Work: "Owner",
			Phone_Number: "9049454401",
			Contact_Mail: "brandon@rdigs.net",
			Street_Address: "25 Oriole Street",
			Street_Address2: "",
			City: "Pensacola",
			State: "FL",
			Region: "South",
			Zip_Code: "32526",
			Company_Name: "VRDags",
			Company_Website: "vrdigs.com",
			Areas_Of_Expertise: "Landscaping",
			Year_The_Company_Was_Founded: "2002",
			Years_Of_Professional_Landscaping_Experience: "10",
			About_The_Company: "we are great",
			Number_Of_Company_Vehicles: "2",
			Number_Of_Current_Employees: "3",
			Actively_Hiring: "",
			Facebook_Link: "www.facebook.com",
			Instagram_Link: "n/a",
			Google_Link: "www.GMB.com",
			LinkedIn_Link: "n/a",
			Record_ID: "recRpytR4FEazYhtr",
			Member_ID: "639759d6030d56000481bad2",
			page_item_url: "TestUrl4Biz"
		}, {
			Image: "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			First_Name: "Jhon",
			Last_Name: "Doe edited",
			Job_Title_At_Work: "Booking Manager",
			Phone_Number: "222-2222-2222",
			Contact_Mail: "babydiieem@gmail.com",
			Street_Address: "USA",
			Street_Address2: "",
			City: "Oklahoma",
			State: "United States",
			Region: "Western America",
			Zip_Code: "1235",
			Company_Name: "Sale Booking",
			Company_Website: "salebooking.com",
			Areas_Of_Expertise: "Property Broker",
			Year_The_Company_Was_Founded: "2000",
			Years_Of_Professional_Landscaping_Experience: "13 year",
			About_The_Company: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,",
			Number_Of_Company_Vehicles: "700",
			Number_Of_Current_Employees: "800",
			Actively_Hiring: "",
			Facebook_Link: "facebook.com",
			Instagram_Link: "instagram.com",
			Google_Link: "Google.com",
			LinkedIn_Link: "linkedIn.com",
			Record_ID: "rechbvnC1TAkonnJz",
			Member_ID: "6392de7c191c8400046722a7",
			page_item_url: "jhon-doe"
		}, {
			Image: "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			First_Name: "Liz2",
			Last_Name: "Fedak",
			Job_Title_At_Work: "Developer",
			Phone_Number: "630-945-4089",
			Contact_Mail: "liz2@lizfedak.com",
			Street_Address: "23884 Peak to Peak Highway",
			Street_Address2: "",
			City: "Nederland",
			State: "Colorado",
			Region: "",
			Zip_Code: "80466",
			Company_Name: "Widget Pro",
			Company_Website: "https://www.widgetpro.io",
			Areas_Of_Expertise: "Commercial Property Services, Hardscape & Pavers Services",
			Year_The_Company_Was_Founded: "2021",
			Years_Of_Professional_Landscaping_Experience: "5",
			About_The_Company: "I make widgets",
			Number_Of_Company_Vehicles: "1-3",
			Number_Of_Current_Employees: "1",
			Actively_Hiring: "",
			Facebook_Link: "facebook.com",
			Instagram_Link: "instagram.com",
			Google_Link: "googlemybusiness.com",
			LinkedIn_Link: "linkedIn.com",
			Record_ID: "recLLfJWp3EaBwHsg",
			Member_ID: "1",
			page_item_url: "liz2-fedak"
		}
	],
		sample:'' 
	}
};

let collection = new Collection()

let device = data.device;
let directoryList= data.config.directoryList;
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
			
			console.log(directoryList, "directoryList");

			//append categor in dropdown
			let bCat = removeDuplicate(directoryList.map(a => a.Areas_Of_Expertise));
			createFilterDropdown(bCat,'Areas_Of_Expertise');

			//append onload
			let appdef = directoryList.map(function(i){
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
	// let keyword2 = $(element).find('.searchInputField2 input').val();
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
					<p class="bTitle">${b.First_Name} ${b.Last_Name}</p>
					<p class="bDescription">
						<b>Job Title:</b> ${b.Job_Title_At_Work}
					</p>
					<p class="bDescription">
						<b>Company Name:</b> ${b.Company_Name}
					</p>
					<p class="bLocation">
						<b>Street Address:</b> ${b.Street_Address}
					</p>
					<p class="bPhone">
						<b>Phone:</b> <a href="tel:${b.Phone_Number}">${b.Phone_Number}</a>
					</p>

					<button class="btnPageLink">
						<a href="${itemLink }">
							<span>MORE INFO</span>
						</a>
					</button>
				</div>
			</div>`
    return j;
}
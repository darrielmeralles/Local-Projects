let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		stateList: [
			{
				State: "Alabama",
				Id: "AL",
				Rep_Group: "",
				Contact: "Randy Heaton",
				Email: "randyheaton@gmail.com",
				Phone: "205-529-6590",
				Image: "",
                Video: "https://www.youtube.com/embed/exI_hD_4jAM?si=LBaVl7j3UQ-iMXWd",
                Button_Link: "https://www.google.com/",
                Color: "green"
			},
			{
				State: "Alaska",
                Id: "AK",
				Rep_Group: "CuBE Packaging Solutions Inc",
				Contact: "John Alexanian",
				Email: "john@cubep.com",
				Phone: "877-260-2823 x224",
                Image: "https://images.pexels.com/photos/17035575/pexels-photo-17035575/free-photo-of-calla-lily-in-droplets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                Video: "https://player.vimeo.com/video/871122886?h=bdd8c927a7",
                Button_Link: "",
                Color: "pink"
			},
			{
				State: "Tennesse",
                Id: "TN",
				Rep_Group: "CuBE Packaging Solutions Inc",
				Contact: "John Alexanian",
				Email: "john@cubep.com",
				Phone: "877-260-2823 x224",
                Image: "https://images.pexels.com/photos/17035575/pexels-photo-17035575/free-photo-of-calla-lily-in-droplets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                Video: "https://player.vimeo.com/video/871122886?h=bdd8c927a7",
                Button_Link: "",
                Color: "pink"
			},
			{
				State: "North Carolina",
                Id: "NC",
				Rep_Group: "CuBE Packaging Solutions Inc",
				Contact: "John Alexanian",
				Email: "john@cubep.com",
				Phone: "877-260-2823 x224",
                Image: "https://images.pexels.com/photos/17035575/pexels-photo-17035575/free-photo-of-calla-lily-in-droplets.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                Video: "https://player.vimeo.com/video/871122886?h=bdd8c927a7",
                Button_Link: "",
                Color: "pink"
			},
		],
		spreadsheet: "https://docs.google.com/spreadsheets/d/1yP7gG6KbPyw5tokq2hL7E9zY3D04vjl7ygh4rmgsE_s/edit?usp=sharing",
		sample:''
	}
};

let collection = new Collection()
let device = data.device;
let stateList = data.config.stateList;

let items = [],
    filter = [],
    arryContents = [],
    pushItem = [];
let filters = {};    
let filter2 = {}; 

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
	dmAPI.loadScript('https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js', function() {
		dmAPI.loadScript('https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js', function() {

            //ADD STATE COLOR
            stateList.map(function(i){
                console.log(i.Id, "i");
                $(element).find('#'+i.Id).css({
                    'fill': i.Color
                });    
            });

            //APPEND INFO TO POPUP
			appendtomap(stateList);	

		});  
	});
})

//DYNAMICALLY APPEND DATA FROM GSX TO MAP TOOLTIP
function appendtomap(stateList) {
    stateList.map(function(data) {
        let stateList = data.State;
        // console.log(stateList, "sate List");
        switch(stateList) {
            case "Alabama":
                filter2.State = "Alabama";
                tooltipContent("#AL");
            break;
            case "Alaska":
                filter2.State = "Alaska";
                tooltipContent("#AK");
            break;
            case "Arizona":
                filter2.State = "Arizona";
                tooltipContent("#AZ");
            break;
            case "Arkansas":
                filter2.State = "Arkansas";
                tooltipContent("#AR");
            break;
            case "California":
                filter2.State = "California";
                tooltipContent("#CA");
            break;
            case "Colorado":
                filter2.State = "Colorado";
                tooltipContent("#CO");
            break;
            case "Connecticut":
                filter2.State = "Connecticut";
                tooltipContent("#CT");
            break;
            case "Delaware":
                filter2.State = "Delaware";
                tooltipContent("#DE");
            break;
            case "Florida":
                filter2.State = "Florida";
                tooltipContent("#FL");
            break;
            case "Georgia":
                filter2.State = "Georgia";
                tooltipContent("#GA");
            break;
            case "Hawaii":
                filter2.State = "Hawaii";
                tooltipContent("#HI");
            break;
            case "Idaho":
                filter2.State = "Idaho";
                tooltipContent("#ID");
            break;
            case "Illinois":
                filter2.State = "Illinois";
                tooltipContent("#IL");
            break;
            case "Indiana":
                filter2.State = "Indiana";
                tooltipContent("#IN");
            break;
            case "Iowa":
                filter2.State = "Iowa";
                tooltipContent("#IA");
            break;
            case "Kansas":
                filter2.State = "Kansas";
                tooltipContent("#KS");
            break;
            case "Kentucky":
                filter2.State = "Kentucky";
                tooltipContent("#KY");
            break;
            case "Louisiana":
                filter2.State = "Louisiana";
                tooltipContent("#LA");
            break;
            case "Maine":
                filter2.State = "Maine";
                tooltipContent("#ME");
            break;
            case "Maryland":
                filter2.State = "Maryland";
                tooltipContent("#MD");
            break;
            case "Massachusetts":
                filter2.State = "Massachusetts";
                tooltipContent("#MA");
            break;
            case "Michigan":
                filter2.State = "Michigan";
                tooltipContent("#MI");
            break;
            case "Minnesota":
                filter2.State = "Minnesota";
                tooltipContent("#MN");
            break;
            case "Mississippi":
                filter2.State = "Mississippi";
                tooltipContent("#MS");
            break;
            case "Missouri":
                filter2.State = "Missouri";
                tooltipContent("#MO");
            break;
            case "Montana":
                filter2.State = "Montana";
                tooltipContent("#MT");
            break;
            case "Nebraska":
                filter2.State = "Nebraska";
                tooltipContent("#NE");
            break;
            case "Nevada":
                filter2.State = "Nevada";
                tooltipContent("#NV");
            break;
            case "New Hampshire":
                filter2.State = "New Hampshire";
                tooltipContent("#NH");
            break;
            case "New Jersey":
                filter2.State = "New Jersey";
                tooltipContent("#NJ");
            break;
            case "New Mexico":
                filter2.State = "New Mexico";
                tooltipContent("#NM");
            break;
            case "New York":
                filter2.State = "New York";
                tooltipContent("#NY");
            break;
            case "North Carolina":
                filter2.State = "North Carolina";
                tooltipContent("#NC");
            break;
            case "North Dakota":
                filter2.State = "North Dakota";
                tooltipContent("#ND");
            break;
            case "Ohio":
                filter2.State = "Ohio";
                tooltipContent("#OH");
            break;
            case "Oklahoma":
                filter2.State = "Oklahoma";
                tooltipContent("#OK");
            break;
            case "Oregon":
                filter2.State = "Oregon";
                tooltipContent("#OR");
            break;
            case "Pennsylvania EAST":
                filter2.State = "Pennsylvania EAST";
                tooltipContent("#PA");
            break;
            case "Rhode Island":
                filter2.State = "Rhode Island";
                tooltipContent("#RI");
            break;
            case "South Carolina":
                filter2.State = "South Carolina";
                tooltipContent("#SC");
            break;
            case "South Dakota":
                filter2.State = "South Dakota";
                tooltipContent("#SD");
            break;
            case "Tennesse":
                filter2.State = "Tennesse";
                tooltipContent("#TN");
            break;
            case "Texas":
                filter2.State = "Texas";
                tooltipContent("#TX");
            break;
            case "Utah":
                filter2.State = "Utah";
                tooltipContent("#UT");
            break;
            case "Vermont":
                filter2.State = "Vermont";
                tooltipContent("#VT");
            break;
            case "Virginia[E]":
                filter2.State = "Virginia[E]";
                tooltipContent("#VA");
            break;
            case "Washington":
                filter2.State = "Washington";
                tooltipContent("#WA");
            break;
            case "West Virginia":
                filter2.State = "West Virginia";
                tooltipContent("#WV");
            break;
            case "Wisconsin":
                filter2.State = "Wisconsin";
                tooltipContent("#WI");
            break;
            case "Wyoming":
                filter2.State = "Wyoming";
                tooltipContent("#WY");
            break;
        }  
    }); 
}

function tooltipContent(stateId){
    filtered2 = multiFilter(stateList, filter2);
    console.log(filtered2);
    filtered2.map(function(data2) {
        let emailsData2 = data2.Email;
        let eachEmailsData2 = emailsData2.split(',');
        let phoneData2 = data2.Phone;
        let eachPhoneData2 = phoneData2.split(',');
        let appendToMap =`<div class='tooltip_con'>
                            <p class="state_name ${!!data2.State ? "" :"hideEl"}"><b>${data2.State}</b></p>
                            <p class="${!!data2.Rep_Group ? "" :"hideEl"}"><b>${data2.Rep_Group}</b></p>
                            <p class="${!!data2.Contact ? "" :"hideEl"}"><b>Contact:</b> ${data2.Contact}</p>
                            <p ${!!data2.Phone ? "" :"hideEl"}><b>T:</b>
                                ${
                                    eachPhoneData2.map(function(i){
                                        return output = `<a href="tel:${i}">${i}</a>`;    
                                    })
                                }
                            </p>
                            <p ${!!data2.Email ? "" :"hideEl"}><b>E:</b>
                                ${
                                    eachEmailsData2.map(function(i){
                                        return output = `<a href = "mailto: ${i}">${i}</a>`;    
                                    })
                                }
                            </p>
                          </div>

                          <div class="image-container ${!!data2.Image ? "" :"hideEl"}" style="background-image: url(${data2.Image})">
                          </div>
                          
                          <div class="video-container">

                                <iframe class="${data2.Video.includes('youtube') && !!data2.Video ? "": "hideEl"}" width="auto" height="auto" src="${data2.Video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                                <iframe class="${data2.Video.includes('vimeo') && !!data2.Video ? "": "hideEl"}" src="${data2.Video}" width="auto" height="auto" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

                          </div> 

                          <div class="btn-container  ${!!data2.Button_Link ? "": "hideEl"}">
                                <button class="btn-link"><span class="text">Learn More</span></div>
                          </div>
                     
                          
                          `;
        //TIPPY TOOLTIP CONFIG
		tippy(stateId, {
			content: appendToMap,
			// animation: 'scale',
			animation: 'fade',
			inertia: true,
			maxWidth: 220,
			allowHTML: true,
			followCursor: true,
			interactive: true,
			theme: 'dark',
			trigger: 'click',
			appendTo: document.body
		});
    });            
}

function multiFilter(property, filters){
    const filterKeys = Object.keys(filters);
    return property.filter(function(eachObj){
        return filterKeys.every(function(eachKey){
            if (!filters[eachKey].length) {
                return true; // passing an empty filter means that filter is ignored.
            }
            return filters[eachKey] == eachObj[eachKey];
        });
    });
}

function removeSpecial(str) {
    let pattern = str.replace(/[^A-Z0-9]/ig, ``);
    return pattern;
}

const cssId = 'tippyCss';
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = 'tippyCss';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://unpkg.com/tippy.js@6/animations/scale.css';
    link.crossOrigin = 'anonymous';
    head.appendChild(link);
}

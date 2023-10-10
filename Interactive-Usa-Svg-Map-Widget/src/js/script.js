let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		// sampleList: [{}],
		spreadsheet: "https://docs.google.com/spreadsheets/d/1yP7gG6KbPyw5tokq2hL7E9zY3D04vjl7ygh4rmgsE_s/edit?usp=sharing",
		sample:''
	}
};

let collection = new Collection()
let device = data.device;
let sampleList = data.config.sampleList;
let sample = data.config.sample;

let sheetObj;
// COLLECTION USING DUDA JS API
let collect = new Collection();

let spreadSheets = data.config.spreadsheet;
let sheet = spreadSheets.substr(spreadSheets.indexOf('d/') + 2).replace('/edit?usp=sharing', '');
let sheetDetails = {
    sheetid: sheet,
    sheetname: "Sheet1",
    apikey: "AIzaSyAO95R71N7Ha4Z8smai-y23QuKE2Rrq4U0"
};
let responseData = collect.response(sheetDetails);
let items = [],
    filter = [],
    arryContents = [],
    pushItem = [];
let filters = {};    
let filter2 = {}; 




// let noCollectMessage = 'No data was found.' ///data.config.noCollectMessage
// let noCollectSubMessage = 'This will be hidden on preview and live site.' ///data.config.noCollectSubMessage
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


// dmAPI.runOnReady('init', function () {
// 	dmAPI.loadScript('PLUGIN LINK', function () {

// 	})
// })

let gsxdata = responseData.then(resp =>{
    sheetObj = resp;
    sheetObj.map(function(i) {
        pushItem.push({
            "State": i.state,
            "Rep_Group": i.repgroup,
            "Contact": i.contact,
            "Email": i.email,
            "Phone": i.phone,
            "Region": i.region
        });
    });
    appenditem(pushItem);
    appendtomap(pushItem);
    
    //CLICKING REGION GROUP FILTER
    $('.btnwrap').click(function(){
            let btntxt = $(this).html();
            
            switch(btntxt) {
                case "WEST":
                    filters.Region = "West";
                    filteredRegion();
                    $('.svgmap').css('fill','#D3D3D3');
                    $('.west').css('fill','#C5C7F0');
                break;
                case "MID WEST":
                    filters.Region = "Mid West";
                    filteredRegion();
                    $('.svgmap').css('fill','#D3D3D3');
                    $('.mid-west').css('fill','#BEFFFF');
                break;
                case "SOUTH WEST":
                    filters.Region = "South West";
                    filteredRegion();
                    $('.svgmap').css('fill','#D3D3D3');
                    $('.south-west').css('fill','#FFFFBD');
                break;
                case "SOUTH EAST":
                    filters.Region = "South East";
                    filteredRegion();
                    $('.svgmap').css('fill','#D3D3D3');
                    $('.south-east').css('fill','#41FF47');
                break;
                case "NORTH EAST":
                    filters.Region = "North East";
                    filteredRegion();
                    $('.svgmap').css('fill','#D3D3D3');
                    $('.north-east').css('fill','#FFC9CC');
                break;
                case "SHOW ALL":
                    $('.usamap_wrap').empty();
                    appenditem(pushItem);
                    $('.west').css('fill','#d3d3d3');
                    $('.mid-west').css('fill','#d3d3d3');
                    $('.south-west').css('fill','#d3d3d3');
                    $('.south-east').css('fill','#d3d3d3');
                    $('.north-east').css('fill','#d3d3d3');
                break;
            } 
        });
    
    //API DETECTION AUTOMATICALLY DETECTS COUNTRY IP ADDRESS
    // $.getJSON('https://ipapi.co/162.253.131.115/json/', function(data){
    $.getJSON('https://ipapi.co/json/', function(data){
                let ipAdd = data.region_code;
                console.log(ipAdd, "Country Code");
                console.log(data);
                switch(ipAdd) {
                // WEST REGION
                case "WA":
                case "OR":
                case "CA":
                case "NV":
                case "ID":
                case "MT":
                case "WY":
                case "UT":
                case "CO":
                case "AK":
                case "HI":
                    filters.Region = "West";
                    filteredRegion();
                    $('.svgmap').css('fill','#D3D3D3');
                    $('.west').css('fill','#A79FD2');
                break;
                // MIDWEST REGION
                case "ND":
                case "SD":
                case "NE":
                case "KS":
                case "MN":
                case "IA":
                case "MO":
                case "WI":
                case "IL":
                case "MI":
                case "IN":
                case "OH":
                    filters.Region = "Mid West";
                    filteredRegion();
                    $('.svgmap').css('fill','#D3D3D3');
                    $('.mid-west').css('fill','#BEFFFF')
                break;
                // SOUTHWEST REGION
                case "AZ":
                case "NM":
                case "OK":
                case "TX":
                    filters.Region = "South East";
                    filteredRegion();
                    $('.svgmap').css('fill','#D3D3D3');
                    $('.south-west').css('fill','#FFFFBD');
                break;
                // SOUTHEEAST REGION
                case "AR":
                case "LA":
                case "MS":
                case "AL":
                case "TN":
                case "KY":
                case "GA":
                case "FL":
                case "SC":
                case "NC":
                case "WV":
                case "VA":
                    filters.Region = "South East";
                    filteredRegion();
                    $('.svgmap').css('fill','#D3D3D3');
                    $('.south-east').css('fill','#41FF47');
                break;
                // NORTHEAST REGION
                case "PA":
                case "MD":
                case "DE":
                case "NJ":
                case "NY":
                case "CT":
                case "RI":
                case "MA":
                case "NH":
                case "VT":
                case "ME":
                    filters.Region = "North East";
                    filteredRegion();
                    $('.svgmap').css('fill','#D3D3D3');
                    $('.north-east').css('fill','#FFC9CC');
                break;
                //CANADA COUNTRY CODE
                case "YT":
                case "BC":
                case "NT":
                case "AB":
                case "SK":
                case "NU":
                case "MB":
                case "ON":
                case "QC":
                case "NL":
                case "NB":
                case "PE":
                case "NS":
                    $('.tabs .tab:nth-child(2) a').addClass('active');
                    $('.tabs .tab:nth-child(1) a').removeClass('active');
                    $('#test1').css('display','none');
                    $('#test2').css('display','block');
                    console.log("canada countries");
                break;
                default:
                    console.log("Ip Address not found")
                    $('.usamap_wrap').empty();
                    appenditem(pushItem);
                    $('.west').css('fill','#C5C7F0');
                    $('.mid-west').css('fill','#BEFFFF');
                    $('.south-west').css('fill','#FFFFBD');
                    $('.south-east').css('fill','#41FF47');
                    $('.north-east').css('fill','#FFC9CC');
                // code block
            } 
        })  
});

//DYNAMICALLY APPEND DATA FROM GSX TO MAP TOOLTIP
function appendtomap(pushItem) {
    pushItem.map(function(data) {
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

//FILTER REGIONS AND APPEND TO CONTAINER
function filteredRegion(){
    filtered = multiFilter(pushItem, filters);
    $('.usamap_wrap').empty();
    appenditem(filtered);
}
// function appenditem
function appenditem(pushItem) {
    pushItem.map(function(data) {
        let emailsData = data.Email;
        let eachEmailsData = emailsData.split(',');
        let phoneData = data.Phone;
        let eachPhoneData = phoneData.split(',');
        let appendData=`<div class='tooltip_con_details'>
                            <p class="state_name"><b>${data.State}</b></p>
                            <p><b>${data.Rep_Group}</b></p>
                            <p><b>Contact:</b> ${data.Contact}</p>
                            <p><b>T:</b> ${
                                eachPhoneData.map(function(i){
                                    return output = `<a href="tel:${i}">${i}</a>`;    
                                })
                            }</p>
                            <p><b>E:</b> ${
                                eachEmailsData.map(function(i){
                                    return output = `<a href = "mailto: ${i}">${i}</a>`;    
                                })
                            }</p>
                        </div>`;             
        $('.usamap_wrap').append(appendData);
    }); //pushItem Map
}
function tooltipContent(stateId){
    filtered2 = multiFilter(pushItem, filter2);
    console.log(filtered2);
    filtered2.map(function(data2) {
        let emailsData2 = data2.Email;
        let eachEmailsData2 = emailsData2.split(',');
        let phoneData2 = data2.Phone;
        let eachPhoneData2 = phoneData2.split(',');
        let appendToMap =`<div class='tooltip_con'>
                            <p class="state_name"><b>${data2.State}</b></p>
                            <p><b>${data2.Rep_Group}</b></p>
                            <p><b>Contact:</b> ${data2.Contact}</p>
                            <p><b>T:</b>
                                ${
                                    eachPhoneData2.map(function(i){
                                        return output = `<a href="tel:${i}">${i}</a>`;    
                                    })
                                }
                            </p>
                            <p><b>E:</b>
                                ${
                                    eachEmailsData2.map(function(i){
                                        return output = `<a href = "mailto: ${i}">${i}</a>`;    
                                    })
                                }
                            </p>
                          </div>`;
        //TIPPY TOOLTIP PLUGIN
        dmAPI.runOnReady('tippyJs',function(){
            dmAPI.loadScript('https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js', function() {
                dmAPI.loadScript('https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js', function() {
                    tippy(stateId, {
                        content: appendToMap,
                        animation: 'scale',
                        inertia: true,
                        maxWidth: 220,
                        allowHTML: true,
                        followCursor: true,
                        interactive: true,
                        appendTo: document.body
                    });  
                });  
            });
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

// GSX
function Collection() {
    this.ajax = function () {
        return $.ajax({
            url: `https://sheets.googleapis.com/v4/spreadsheets/${sheetDetails.sheetid}/values/${sheetDetails.sheetname}?key=${sheetDetails.apikey}`,
        });
    };
    this.response = function (sheetDetails) {
        let sheet = this.ajax(sheetDetails);
        return sheet.then(resp => {
            header = resp.values[0];
            let values = resp.values.filter((i, index) => index !== 0);
            let included = header.map(i => removeSpecial(i).toLowerCase());

            return values.map(i => {
                let items = {};
                header.map((k, index) => {
                    items[removeSpecial(k.toLowerCase())] = i[index];
                });
                items.keyword = included.map(b => items[b].toLowerCase()).join(",");
                return items;
            });
        });

    };
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
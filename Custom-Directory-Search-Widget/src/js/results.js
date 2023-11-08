/*
* Search Results Italian Delights Tours
* Release Date 10/11/2022
* Version 1.0.0

*Upon purchase of this widget, you acquire the right to use it; you're not actually 
acquiring the widget itself.TheCamel.co is the owner of the intellectual property of this widget.
The widget is for use only, it is not to be on sold, lent, rented, given away, gifted you can’t 
even put it in your will. It is for use for your sites only on the dashboard we install the item in.

*Kindly refer to our Terms and Conditions for more info - http://www.thecamel.co/terms-and-conditions

*/

let urlLink = $(location).attr('href');
let url = new URL(urlLink);
let params = new URLSearchParams(url.search);
let hasParam = urlLink.includes("data");
let param = getParameterByName('data');
let param_obj = hasParam ? JSON.parse(atob(param)) : "";
let filters = {};
let dates = data.config.eachDates;
let rawData = dates.map(function(i){
    console.log(i, "raw i")
	let itemLink = window.location.href.includes(data.siteId)  ? `/site/${data.siteId}${i.link1}?preview=true&insitepreview=true&dm_device=${data.device}`: i.link1;            
	if(typeof i.link1 == "object"){            
		itemLink = i.link1.href;               
	} 
    return {
        'tImage': i.tImage ? removeExtra(i.tImage) : "N/A",
        'tTitle': i.tTitle ? removeExtra(i.tTitle) : "N/A",
        'tDates': i.tDates ? removeExtra(i.tDates) : "N/A",
        'tDescription': i.tDescription ? removeExtra(i.tDescription) : "N/A",
        'tPrice': i.tDescription ? removeExtra(i.tPrice) : "N/A",
        'month': i.month ? removeExtra(i.month) : "N/A",
        'year': i.year ? removeExtra(i.year) : "N/A",
        'link': itemLink
    }
});

dmAPI.runOnReady('runSearchResults',function(){
    dmAPI.loadScript('https://irt-cdn.multiscreensite.com/8914113fe39e47bcb3040f2b64f71b02/files/uploaded/paginates.min.js', function() { 
        console.log(rawData, "rawData");
        getDropdownValues(rawData);
    
        //HAS PARAMETER
        if(hasParam){
            console.log(param_obj, "param_obj");
            let parMonth = param_obj.month;
            let parYear = param_obj.year;
            //set parameter value as dropdown value
            $(element).find('.cLbrandDropdown').val(parMonth);
            $(element).find('.cLvehicleDropdown').val(parYear);
            //add parameter value to filter
            filters.month = parMonth;
            filters.year = parYear;
            let filtered = multiFilter(rawData, filters);
            PaginationFunction(filtered);
        }
        //NO PARAMETER
        else{
            PaginationFunction(rawData);
            console.log("nasa search");
        }

    });
});

//FILTER BUTTON
$(element).find('.cLapplyBtn').click(function(){
	let filterMonth = $(element).find('.cLbrandDropdown').val();;
	let filterYear = $(element).find('.cLvehicleDropdown').val();;
    // Set Parameter
    let filters= {
        month:filterMonth, 
        year:filterYear
    };
    let filtered = multiFilter(rawData, filters);
    PaginationFunction(filtered);
});

//Get Dropdown Values
function getDropdownValues(gsxRawData){
	removeDuplicates(gsxRawData,"month").map(function(i){
		$(element).find('.cLbrandDropdown').append('<option>'+i.month+'</option>');
	});
	removeDuplicates(gsxRawData,"year").map(function(i){
		$(element).find('.cLvehicleDropdown').append('<option>'+i.year+'</option>');
	});
}

//For Internal Collections
function removeExtra(str) {
    let fullText ='';
    if(typeof str !== "undefined"){
        if(!str.includes("</p>")){
            fullText = str;
        }else{
            fullText = str.substring(str.indexOf(">")+1).replace("</p>",'');
        }
    }
    return fullText;
}

//REMOVE DUPLICATE
function removeDuplicates(array, key) {
	return array.reduce(function(arr, item) {
		const removed = arr.filter(function(i){
			return i[key] !== item[key];
		});
		return [...removed, item];
	},[]);
};
//GET URL PARAMETER
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
//MULTIFILTER JS
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
//PAGINATION 
function PaginationFunction(list){
    $('.mapResultsWrap').pagination({
        dataSource: list,
        pageSize: 4,
        callback: function(result, pagination) {
            console.log(result)
            let structure = '';
            structure = result.map(i=>{
                return createJob(i);
             }).join("")
            $(element).find(".mapResults").html(structure);
        }
    });
}
//CREATE JOB GRID LAYOUT
function createJob(tour){
    let j = `<div class="mapBox">
    
                <div class="colum1">
                    <div class="imgCon" style="background-image: url('${tour.tImage}')"></div>
                </div>
                
                <div class="colum2">
                    <p class="pTitle">${tour.tTitle}</p>
                    <p class="pPrice">${tour.tPrice}</p>
                    <p class="pDates">${tour.tDates}</p>
                    <p class="pDescription">${tour.tDescription}</p>
                    <a href="${tour.link}" target="_blank">
                        <div class="dmWidget btnContainer">
                          <span class="text">View Tour</span> 
                        </div>
                    </a>
                        
                </div>
     
       
            </div>`;
    return j;
}
//APPEND STYLE TO HEADER
const paginateCss = 'paginationCss';
if (!document.getElementById(paginateCss)){
	var head  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('link');
	link.id   = 'paginationCss';
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = 'https://cdnjs.cloudflare.com/ajax/libs/paginationjs/2.1.4/pagination.css';
	link.crossOrigin = 'anonymous';
	head.appendChild(link);
}
const cssId = 'fontAwesomeSource';
if (!document.getElementById(cssId)){
	var head  = document.getElementsByTagName('head')[0];
	var link  = document.createElement('link');
	link.id   = 'fontAwesomeSource';
	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = 'https://use.fontawesome.com/releases/v5.5.0/css/all.css';
	link.integrity = 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU';
	link.crossOrigin = 'anonymous';
	head.appendChild(link);
}

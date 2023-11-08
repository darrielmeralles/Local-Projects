/*
* Search Filter Italian Delights Tours
* Release Date 10/11/2022
* Version 1.0.0

*Upon purchase of this widget, you acquire the right to use it; you're not actually 
acquiring the widget itself.TheCamel.co is the owner of the intellectual property of this widget.
The widget is for use only, it is not to be on sold, lent, rented, given away, gifted you can’t 
even put it in your will. It is for use for your sites only on the dashboard we install the item in.

*Kindly refer to our Terms and Conditions for more info - http://www.thecamel.co/terms-and-conditions

*/

// let initialSort = data.config.sort;
let resultsPage = "tour-results-page";
let dates = data.config.eachDates;
let rawData = dates.map(function(i){
    return {
        'month':i.month ? removeExtra(i.month) : "N/A",
        'year':i.year ? removeExtra(i.year) : "N/A"
    }
});

dmAPI.runOnReady('runCarSerachFilter',function(){
   dmAPI.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js', function() { 
        dmAPI.loadScript('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js', function() { 
            console.log(rawData, "rawData");
            getDropdownValues(rawData);
        });
    });

});

//FILTER BUTTON
$(element).find('.cLapplyBtn').click(function(){
	let filterMonth = $(element).find('.cLbrandDropdown').val();;
	let filterYear = $(element).find('.cLvehicleDropdown').val();;
    // Set Parameter
    let obj= {
        month:filterMonth, 
        year:filterYear
    };
    console.log(obj, 'obj');
    let url_param = btoa(JSON.stringify(obj));
    let itemLink = window.location.href.includes(data.siteId)  ? `/site/${data.siteId}${resultsPage}?data=${url_param}&preview=true&insitepreview=true&dm_device=${data.device}`: `${resultsPage}?data=${url_param}`;
    window.location = itemLink;
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

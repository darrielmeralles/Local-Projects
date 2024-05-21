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

let collection = new Collection()

let device = data.device;
let sampleList = data.config.sampleList;
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
	let cdate = '2024-05-13T08:02:59';
	dateTime(cdate);
})

// Date Countdown
function dateTime(date){
	// Set the target date for the countdown (year, month (0-based), day, hour, minute, second)
// 	var targetDate = new Date('2024-05-13T08:00:59').getTime();
var targetDate = new Date(date).getTime();

// Update the countdown every second
var countdown = setInterval(function() {
	// Get the current date and time
	var currentDate = new Date().getTime();

	// Calculate the time remaining until the target date
	var timeRemaining = targetDate - currentDate;

	// Calculate days, hours, minutes, and seconds remaining
	var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

	// Display the countdown in a specific element
	document.getElementById('countdown').innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ';

	// If the countdown is over, stop the interval
	if (timeRemaining < 0) {
		clearInterval(countdown);
		document.getElementById('countdown').innerHTML = 'Countdown is over!';
	}
}, 1000); // Update every second (1000 milliseconds)
}
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
	dmAPI.loadScript('https://cdn.jsdelivr.net/npm/chart.js@4.2.0/dist/chart.umd.min.js', function () {

		let data = {
			labels: ["Average", "High Records"],
			datasets: [{
				label: "Snowfall (Inches)",
				backgroundColor: "#3E66A0",
				data: [210,300]
				// borderColor: "rgba(255,99,132,1)",
				// borderWidth: 2,
				// hoverBackgroundColor: "rgba(255,99,132,0.4)",
				// hoverBorderColor: "rgba(255,99,132,1)",
				
				// data: [65, 59, 20, 81, 56, 55, 40],
			}]
		};
		
		let options = {
			legend: {
				position: 'bottom',
				display: true
			},
			maintainAspectRatio: false,
			scales: {
				y: {
					min: 0,
        			max: 800,
					stacked: true,
					grid: {
						display: true,
					}
				},
				x: {
					grid: {
						display: true
					}
				}
			}
		};
		
		new Chart('barChart', {
			type: 'bar',
			options: options,
			data: data
		});

	})
})

function preloader() {
	$(element).find('div.widget-Loader-Container').fadeOut().remove()
	$(element).find('div.widgetName-Main-Container').fadeIn()
}
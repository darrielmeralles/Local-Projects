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

		//BAR CHART
		let data = {
			labels: ["Average", "High Records"],
			datasets: [{
				label: "Snowfall (Inches)",
				backgroundColor: "#3E66A0",
				data: [210,300]
			}]
		};
		
		let options = {
			responsive: true,
			plugins: {
				legend: {
				  position: 'bottom',
				}
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


		//PIE CHART
		let xValues = [ "Beginner", "Intermediate", "Advance"];
		let yValues = [10, 60, 30];
		let barColors = [
			"#2BA433",
			"#2b5797",
			"#222222",
		];

		new Chart("pieChart", {
		type: "pie",
		data: {
			labels: xValues,
			datasets: [{
				backgroundColor: barColors,
				data: yValues
			}]
		},
		options: {
			plugins: {
				legend: {
				  position: 'bottom',
				}
			}
		}
		});

	})
})

function preloader() {
	$(element).find('div.widget-Loader-Container').fadeOut().remove()
	$(element).find('div.widgetName-Main-Container').fadeIn()
}
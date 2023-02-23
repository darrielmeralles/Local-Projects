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


let summit = "6,820 ft";
let vertical = "2,250 ft";
let base = "4,570 ft";
let average = 210;
let highRecords = 300;
let beginner = 10;
let intermediate = 60;
let advance = 30;
// let summit = data.config.summit;
// let vertical = data.config.vertical;
// let base = data.config.base;


dmAPI.runOnReady('init', function () {
	dmAPI.loadScript('https://cdn.jsdelivr.net/npm/chart.js@4.2.0/dist/chart.umd.min.js', function () {

		let elevate = `<p class="summit">Summit: ${summit}</p>
						<p class="vertical">Vertical: ${vertical}</p>
						<p class="base">Base: ${base}</p>`;
						
		$(element).find('.content-data').append(elevate);	

		//BAR CHART
		let data = {
			labels: ["Average", "High Records"],
			datasets: [{
				label: "Snowfall (Inches)",
				backgroundColor: "#3E66A0",
				data: [average,highRecords]
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
		let yValues = [beginner, intermediate, advance];
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
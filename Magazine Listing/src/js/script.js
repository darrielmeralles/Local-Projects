let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		magazineList: [{
			title: 'Our Hometown Magazine',
			month: 'March 2022',
			imageSrc: 'https://redzoneinsurance.com/wp-content/uploads/2020/10/Cover_MARGIF.gif',
			iframeSrc: 'https://indd.adobe.com/embed/3ca22f9a-75d1-4fd6-bd63-5eeeec8ce061?startpage=1&allowFullscreen=true',
		}, {
			title: 'Our Hometown Magazine',
			month: 'April 2022',
			imageSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Cover_APRGIF.gif',
			iframeSrc: 'https://indd.adobe.com/embed/8f66cf75-0b45-4af0-b66d-0e5de4e134ee?startpage=1&allowFullscreen=true',
		}, {
			title: 'Our Hometown Magazine',
			month: 'May 2022',
			imageSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/04/Cover_MAYGIF.gif',
			iframeSrc: 'https://indd.adobe.com/embed/d15523bc-8356-47d6-823d-ccea3aa2bc1f?startpage=1&allowFullscreen=true',
		}, {
			title: 'Our Hometown Magazine',
			month: 'June 2022',
			imageSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/06/Cover_JuneGIF.gif',
			iframeSrc: 'https://indd.adobe.com/embed/a6eccb04-d80f-4c9d-bca0-d5a11aa4648c?startpage=1&allowFullscreen=true',
		}, {
			title: 'Our Hometown Magazine',
			month: 'July 2022',
			imageSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/06/Cover_JulyGIF.gif',
			iframeSrc: 'https://indd.adobe.com/embed/ddff4f97-4a6f-4657-86c1-a0ded786caa2?startpage=1&allowFullscreen=true',
		}, {
			title: 'Our Hometown Magazine',
			month: 'August 2022',
			imageSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/07/Cover_AUG22GIF.gif',
			iframeSrc: 'https://indd.adobe.com/embed/5bafa055-85c7-4104-8dd1-e1eb740da5ea?startpage=1&allowFullscreen=true',
		}, {
			title: 'Our Hometown Magazine',
			month: 'September 2022',
			imageSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/08/Cover_SEPGIF.gif',
			iframeSrc: 'https://indd.adobe.com/embed/7eaba4f0-1e91-4558-8775-4174cf1308e7?startpage=1&allowFullscreen=true',
		}, {
			title: 'Our Hometown Magazine',
			month: 'October 2022',
			imageSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/09/Cover_OCTGIF.gif',
			iframeSrc: 'https://indd.adobe.com/embed/6200c5f2-c258-4ede-bdad-ca1b888812bc?startpage=1&allowFullscreen=true',
		}, {
			title: 'Our Hometown Magazine',
			month: 'November 2022',
			imageSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/10/Cover_NOVGIF.gif',
			iframeSrc: 'https://indd.adobe.com/embed/524ec093-3135-4741-9669-280480ceeb0a?startpage=1&allowFullscreen=true',
		}, {
			title: 'Our Hometown Magazine',
			month: 'December 2022',
			imageSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/11/Cover_DECGIF.gif',
			iframeSrc: 'https://indd.adobe.com/embed/257ba5cb-c8a9-4e2d-9669-12d5e9000e76?startpage=1&allowFullscreen=true',
		}, {
			title: 'Our Hometown Magazine',
			month: 'January 2023',
			imageSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/12/Cover_JANGIF.gif',
			iframeSrc: 'https://indd.adobe.com/embed/2d5e0df3-91e6-4c98-918b-4d0ceb9292d7?startpage=1&allowFullscreen=true',
		}, {
			title: 'Our Hometown Magazine',
			month: 'February 2023',
			imageSrc: 'https://redzoneinsurance.com/wp-content/uploads/2023/01/Cover_FEBGIF.gif',
			iframeSrc: 'https://indd.adobe.com/embed/ec83a2e3-8ce3-4fe9-85e2-9f28ce2ccf93?startpage=1&allowFullscreen=true',
		}],
		sample: ''
	}
};

let collection = new Collection()
let device = data.device;
let magazineList = data.config.magazineList;
let sample = data.config.sample;

let noCollectMessage = 'No data was found.' ///data.config.noCollectMessage
let noCollectSubMessage = 'This will be hidden on preview and live site.' ///data.config.noCollectSubMessage
let magazineArr;

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

	magazineArr = collection.data(magazineList)

	if (magazineArr.length == 0) {

		if (data.inEditor) {
			$(element).html(`<div class="widget-noCollection-Title">${noCollectMessage}</div><div class="widget-noCollection-Subtext">${noCollectSubMessage}</div>`)
		} else {
			$(element).hide()
		}
		return

	} else {

		appendMagazine(magazineArr)
		setTimeout(preloader(), 4000)

		let montName = $(element).find('div.dmp-Magazines-Container > div').eq(0).find('h4.dmp-Magazines-Title').text()
		let iframeSrc = $(element).find('div.dmp-Magazines-Container > div').eq(0).find('div.dmp-Magazines-Link').data('iframe')

		$(element).find('h3.dmp-Iframe-Title').html(montName);
		$(element).find('iframe.dmp-Iframe-Link').attr("src", iframeSrc);

		$(element).find('div.dmp-Magazines-Link').on('click', function () {
			$(element).find('h3.dmp-Iframe-Title').html($(this).find('h4.dmp-Magazines-Title').text());
			$(element).find('iframe.dmp-Iframe-Link').attr("src", $(this).data('iframe'));
		})
	}

})

// APPEND TEAM
function appendMagazine(arr) {
	let magazineDataMarkup = ""
	arr.reverse().map((i) => {
		magazineDataMarkup += `<div class="dmp-Magazines-Column">
									<div class="dmp-Magazines-Link" data-iframe="${i.iframeSrc}">
										<img class="dmp-Magazines-Image"
											src="${i.imageSrc}" alt="${i.month}'s Image" loading="lazy">
										<h4 class="dmp-Magazines-Title">${i.month}</h4>
									</div>
								</div>`
		$(element).find('div.dmp-Magazines-Container').html(magazineDataMarkup)
	});
}

function preloader() {
	$(element).find('div.widget-Loader-Container').fadeOut().remove()
	$(element).find('div.dmp-Main-Container').fadeIn()
}
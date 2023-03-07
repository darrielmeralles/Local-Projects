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
		openNewTab: true,
		pageURL: 'magazine-page',
	}
};

let collection = new Collection()
let device = data.device;
let magazineList = data.config.magazineList;
let pageURL = data.config.pageURL;
let openNewTab = data.config.openNewTab ? '_target' : '';

let noCollectMessage = 'No data was found.' ///data.config.noCollectMessage
let noCollectSubMessage = 'This will be hidden on preview and live site.' ///data.config.noCollectSubMessage
let magazineListData;

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


dmAPI.runOnReady('init', function () {
	magazineListData = collection.data(magazineList)
	if (magazineListData.length == 0) {
		if (data.inEditor) {
			$(element).html(`<div class="widget-noCollection-Title">${noCollectMessage}</div><div class="widget-noCollection-Subtext">${noCollectSubMessage}</div>`)
		} else {
			$(element).hide()
		}
		return
	} else {
		magazineDOM(magazineListData)
		setTimeout(preloader(), 2000)
	}
})

function magazineDOM(arr) {
	let output = '';
	arr.reverse().slice(0, 1).map(i => {
		let pageLink = window.location.href.includes(data.siteId) ? `/site/${data.siteId}${pageURL}?preview=true&insitepreview=true&dm_device=${data.device}` : pageURL;
		if (typeof i.pageItemURL == "object") pageLink = i.page_item_url.href;

		output = `<div class="dm-Main-Row">
						<div class="dm-Main-Column">
							<h2>Score Monthly Tips</h2>
							<p class="dm-Detail-Title">${i.title}</p>
							<p class="dm-Detail-Description">Be on the lookout every month to see all the cool, new things we have in store for you!</p>
							<a class="dm-Detail-Button" href="${pageLink}" target=${openNewTab}>
								<span class="text">Read Latest Edition</span>
							</a>
						</div>
						<div class="dm-Main-Column">
							<img src="${i.imageSrc}" alt="${i.month} Image">
						</div>
					</div>`
	})

	$(element).find('div.dm-Main-Container').html(output)
}

function preloader() {
	$(element).find('div.widget-Loader-Container').fadeOut().remove()
	$(element).find('div.dm-Main-Container').fadeIn()
}
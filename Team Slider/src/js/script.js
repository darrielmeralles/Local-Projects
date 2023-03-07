// WIDGET VARIABLES
let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: 'abc123',
	elementId: '',
	config: {
		teamList: [{
			name: 'Test Cruz',
			position: 'Personal Lines Manager',
			imageLink: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Rachel_Cruz.png',
			description: 'I grew up in Miami, went to Miami Dade, and got licensed in Polk County while living in Orlando. For the past 6-7 years, I have been doing insurance. I began with health insurance and now do personal and commercial lines. What excites me the most about my job is helping people find exactly what they need at an affordable price. With first-time homeowners, I love ensuring they feel relief and peace of mind knowing they are covered. I enjoy the seasons and always try to talk to clients about the weather or their day while I look up their policies instead of having them on hold. I love to travel and spend my weekends at the beach. Before COVID, I volunteered at senior living facilities and helped foster kids.',
			telephone: '(281) 20331-3131',
			email: 'marianna@insurancetexas.net',
			address: '3676 Collin Drive Ste 1 West Palm Beach, FL 33406',
			pageItemURL: 'rachel-cruz'
		}, {
			name: 'Rachel Cruz',
			position: 'Personal Lines Manager',
			imageLink: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Rachel_Cruz.png',
			description: 'I grew up in Miami, went to Miami Dade, and got licensed in Polk County while living in Orlando. For the past 6-7 years, I have been doing insurance. I began with health insurance and now do personal and commercial lines. What excites me the most about my job is helping people find exactly what they need at an affordable price. With first-time homeowners, I love ensuring they feel relief and peace of mind knowing they are covered. I enjoy the seasons and always try to talk to clients about the weather or their day while I look up their policies instead of having them on hold. I love to travel and spend my weekends at the beach. Before COVID, I volunteered at senior living facilities and helped foster kids.',
			telephone: '(281) 20331-3131',
			email: 'marianna@insurancetexas.net',
			address: '3676 Collin Drive Ste 1 West Palm Beach, FL 33406',
			pageItemURL: 'rachel-cruz'
		}, {
			name: 'Rachel Cruz',
			position: 'Personal Lines Manager',
			imageLink: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Rachel_Cruz.png',
			description: 'I grew up in Miami, went to Miami Dade, and got licensed in Polk County while living in Orlando. For the past 6-7 years, I have been doing insurance. I began with health insurance and now do personal and commercial lines. What excites me the most about my job is helping people find exactly what they need at an affordable price. With first-time homeowners, I love ensuring they feel relief and peace of mind knowing they are covered. I enjoy the seasons and always try to talk to clients about the weather or their day while I look up their policies instead of having them on hold. I love to travel and spend my weekends at the beach. Before COVID, I volunteered at senior living facilities and helped foster kids.',
			telephone: '(281) 20331-3131',
			email: 'marianna@insurancetexas.net',
			address: '3676 Collin Drive Ste 1 West Palm Beach, FL 33406',
			pageItemURL: 'rachel-cruz'
		}, {
			name: 'Rachel Cruz',
			position: 'Personal Lines Manager',
			imageLink: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Rachel_Cruz.png',
			description: 'I grew up in Miami, went to Miami Dade, and got licensed in Polk County while living in Orlando. For the past 6-7 years, I have been doing insurance. I began with health insurance and now do personal and commercial lines. What excites me the most about my job is helping people find exactly what they need at an affordable price. With first-time homeowners, I love ensuring they feel relief and peace of mind knowing they are covered. I enjoy the seasons and always try to talk to clients about the weather or their day while I look up their policies instead of having them on hold. I love to travel and spend my weekends at the beach. Before COVID, I volunteered at senior living facilities and helped foster kids.',
			telephone: '(281) 20331-3131',
			email: 'marianna@insurancetexas.net',
			address: '3676 Collin Drive Ste 1 West Palm Beach, FL 33406',
			pageItemURL: 'rachel-cruz'
		}, {
			name: 'Rachel Cruz',
			position: 'Personal Lines Manager',
			imageLink: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Rachel_Cruz.png',
			description: 'I grew up in Miami, went to Miami Dade, and got licensed in Polk County while living in Orlando. For the past 6-7 years, I have been doing insurance. I began with health insurance and now do personal and commercial lines. What excites me the most about my job is helping people find exactly what they need at an affordable price. With first-time homeowners, I love ensuring they feel relief and peace of mind knowing they are covered. I enjoy the seasons and always try to talk to clients about the weather or their day while I look up their policies instead of having them on hold. I love to travel and spend my weekends at the beach. Before COVID, I volunteered at senior living facilities and helped foster kids.',
			telephone: '(281) 20331-3131',
			email: 'marianna@insurancetexas.net',
			address: '3676 Collin Drive Ste 1 West Palm Beach, FL 33406',
			pageItemURL: 'rachel-cruz'
		}, {
			name: 'Rachel Cruz',
			position: 'Personal Lines Manager',
			imageLink: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Rachel_Cruz.png',
			description: 'I grew up in Miami, went to Miami Dade, and got licensed in Polk County while living in Orlando. For the past 6-7 years, I have been doing insurance. I began with health insurance and now do personal and commercial lines. What excites me the most about my job is helping people find exactly what they need at an affordable price. With first-time homeowners, I love ensuring they feel relief and peace of mind knowing they are covered. I enjoy the seasons and always try to talk to clients about the weather or their day while I look up their policies instead of having them on hold. I love to travel and spend my weekends at the beach. Before COVID, I volunteered at senior living facilities and helped foster kids.',
			telephone: '(281) 20331-3131',
			email: 'marianna@insurancetexas.net',
			address: '3676 Collin Drive Ste 1 West Palm Beach, FL 33406',
			pageItemURL: 'rachel-cruz'
		}, {
			name: 'Rachel Cruz',
			position: 'Personal Lines Manager',
			imageLink: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Rachel_Cruz.png',
			description: 'I grew up in Miami, went to Miami Dade, and got licensed in Polk County while living in Orlando. For the past 6-7 years, I have been doing insurance. I began with health insurance and now do personal and commercial lines. What excites me the most about my job is helping people find exactly what they need at an affordable price. With first-time homeowners, I love ensuring they feel relief and peace of mind knowing they are covered. I enjoy the seasons and always try to talk to clients about the weather or their day while I look up their policies instead of having them on hold. I love to travel and spend my weekends at the beach. Before COVID, I volunteered at senior living facilities and helped foster kids.',
			telephone: '(281) 20331-3131',
			email: 'marianna@insurancetexas.net',
			address: '3676 Collin Drive Ste 1 West Palm Beach, FL 33406',
			pageItemURL: 'rachel-cruz'
		}, {
			name: 'Rachel Cruz',
			position: 'Personal Lines Manager',
			imageLink: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Rachel_Cruz.png',
			description: 'I grew up in Miami, went to Miami Dade, and got licensed in Polk County while living in Orlando. For the past 6-7 years, I have been doing insurance. I began with health insurance and now do personal and commercial lines. What excites me the most about my job is helping people find exactly what they need at an affordable price. With first-time homeowners, I love ensuring they feel relief and peace of mind knowing they are covered. I enjoy the seasons and always try to talk to clients about the weather or their day while I look up their policies instead of having them on hold. I love to travel and spend my weekends at the beach. Before COVID, I volunteered at senior living facilities and helped foster kids.',
			telephone: '(281) 20331-3131',
			email: 'marianna@insurancetexas.net',
			address: '3676 Collin Drive Ste 1 West Palm Beach, FL 33406',
			pageItemURL: 'rachel-cruz'
		}, {
			name: 'Rachel Cruz',
			position: 'Personal Lines Manager',
			imageLink: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Rachel_Cruz.png',
			description: 'I grew up in Miami, went to Miami Dade, and got licensed in Polk County while living in Orlando. For the past 6-7 years, I have been doing insurance. I began with health insurance and now do personal and commercial lines. What excites me the most about my job is helping people find exactly what they need at an affordable price. With first-time homeowners, I love ensuring they feel relief and peace of mind knowing they are covered. I enjoy the seasons and always try to talk to clients about the weather or their day while I look up their policies instead of having them on hold. I love to travel and spend my weekends at the beach. Before COVID, I volunteered at senior living facilities and helped foster kids.',
			telephone: '(281) 20331-3131',
			email: 'marianna@insurancetexas.net',
			address: '3676 Collin Drive Ste 1 West Palm Beach, FL 33406',
			pageItemURL: 'rachel-cruz'
		}],

		// slider options
		autoplay: false,
		infinite: true,
		draggable: true,
		slideDesktop: '6', // 1 -> 12
		slideTablet: '4', // 1 -> 6
		slideMobile: '2', // 1 -> 2
	}
};

let device = data.device;
let teamList = data.config.teamList;

let autoplay = data.config.autoplay;
let infinite = data.config.infinite;
let draggable = data.config.draggable;
let slideDesktop = data.config.slideDesktop;
let slideTablet = data.config.slideTablet;
let slideMobile = data.config.slideMobile;

let collection = new Collection();

let noCollectMessage = 'No data was found.' ///data.config.noCollectMessage
let noCollectSubMessage = 'This will be hidden on preview and live site.' ///data.config.noCollectSubMessage
let teamListData, slidesShow;

switch (device) {
	case 'desktop':
		$(element).width("1200px");
		slidesShow = slideDesktop;
		break;
	case 'tablet':
		$(element).width("875px");
		slidesShow = slideTablet;
		break;
	default:
		$(element).width("326px");
		slidesShow = slideMobile;
}

//CREATE MULTIPLE LINK SOURCE
cssLibrary('slickCSS', 'https://irp.cdn-website.com/f49f126e/files/uploaded/slick.min.css')
cssLibrary('animateCSS', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css')
cssLibrary('fontAwesomeSourceCSS', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css')

dmAPI.runOnReady('init', function () {
	dmAPI.loadScript('https://irp-cdn.multiscreensite.com/f49f126e/files/uploaded/slick.min.js', function () {

		teamListData = collection.data(teamList)

		if (teamListData.length == 0) {

			if (data.inEditor) {
				$(element).html(`<div class="widget-noCollection-Title">${noCollectMessage}</div><div class="widget-noCollection-Subtext">${noCollectSubMessage}</div>`)
			} else {
				$(element).hide()
			}

			return

		} else {
			doSomethingAsynchronous(teamListData)
		}

	})
})


async function doSomethingAsynchronous(obj) {

	await preloader()
	// await sliderMarkUp(teamListData)

	await Promise.all(obj.map(i => {
		let pageLink = window.location.href.includes(data.siteId) ? `/site/${data.siteId}${i.pageItemURL}?preview=true&insitepreview=true&dm_device=${data.device}` : i.pageItemURL;

		if (typeof i.pageItemURL == "object") pageLink = i.page_item_url.href;

		let output = `<div class="ts-Main-Column">
						<div class="ts-Column-Image">
							<a href="${pageLink}">
								<img src="${i.imageLink}"
									alt="${i.name} Image">
							</a>
						</div>
						<div class="ts-Column-Details">
							<a href="${pageLink}">
								<h3>${i.name}</h3>
							</a>
							<a href="${pageLink}">
								<p>${i.position}</p>
							</a>
						</div>
						<div class="ts-Column-Arrow animate__animated animate__fadeInUp">
							<img src="https://redzoneinsurance.com/wp-content/uploads/2020/07/TeamMember_Selection_Arrow.png" alt="Arrow Image">
						</div>
					</div>`

		return $(element).find('div.ts-Main-Row').append(output)
	}))

	await $(element).find('div.ts-Main-Row').slick({
		autoplay: autoplay,
		infinite: true,
		dots: false,
		draggable: draggable,
		arrows: false,
		slidesToShow: slidesShow,
		easing: 'linear'
	})
}

function sliderMarkUp(obj) {
	obj.map(i => {
		let pageLink = window.location.href.includes(data.siteId) ? `/site/${data.siteId}${i.pageItemURL}?preview=true&insitepreview=true&dm_device=${data.device}` : i.pageItemURL;

		if (typeof i.pageItemURL == "object") pageLink = i.page_item_url.href;

		let output = `<div class="ts-Main-Column">
						<div class="ts-Column-Image">
							<a href="${pageLink}">
								<img src="${i.imageLink}"
									alt="${i.name} Image">
							</a>
						</div>
						<div class="ts-Column-Details">
							<a href="${pageLink}">
								<h3>${i.name}</h3>
							</a>
							<a href="${pageLink}">
								<p>${i.position}</p>
							</a>
						</div>
					</div>`

		$(element).find('div.ts-Main-Row').append(output)
	})
}

function preloader() {
	$(element).find('div.widget-Loader-Container').fadeOut().remove()
	$(element).find('div.ts-Main-Container').fadeIn()
}
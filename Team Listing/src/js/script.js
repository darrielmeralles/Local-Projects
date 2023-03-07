let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		openNewTab: true,
		numberPagination: 3,
		teamList: [{
			imgSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Noel_Alvarez.png',
			name: 'Noel Alvarez',
			position: 'President',
			email: 'noel@redzoneinsurance.com',
			phoneNumber: '(305) 255-1901',
			description: '',
			pageItemURL: 'noel-alvarez',
		}, {
			imgSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Alex_Alvarez.png',
			name: 'Alex Alvarez',
			position: 'Chief Operating Officer',
			description: '',
			phoneNumber: '(305) 301-4248',
			pageItemURL: 'alex-alvarez',
		}, {
			imgSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Gretel_Alvarez.png',
			name: 'Gretel Alvarez',
			position: 'Instagram Manager',
			description: 'I grew up in Miami Beach, Fl. I have my Master’s and Specialist Degree in Leadership. Although I have my 220 Insurance License, my role has been on the marketing side. I love creating digital designs and connecting via social media with customers, clients, brokers, and real estate agents. Besides creating digital designs, I love dancing and traveling. I also love personal and business growth and self-improvement. Shopping is my guilty pleasure. During weekends, I am usually home relaxing, spending time with family, or at my son’s baseball game.',
			phoneNumber: '(305) 255-1901',
			pageItemURL: 'gretel-alvarez',
		}, {
			imgSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Noel_Alvarez.png',
			name: 'Noel Alvarez',
			position: 'President',
			email: 'noel@redzoneinsurance.com',
			phoneNumber: '(305) 255-1901',
			description: '',
			pageItemURL: 'noel-alvarez',
		}, {
			imgSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Alex_Alvarez.png',
			name: 'Alex Alvarez',
			position: 'Chief Operating Officer',
			description: '',
			phoneNumber: '(305) 301-4248',
			pageItemURL: 'alex-alvarez',
		}, {
			imgSrc: 'https://redzoneinsurance.com/wp-content/uploads/2022/03/Gretel_Alvarez.png',
			name: 'Gretel Alvarez',
			position: 'Instagram Manager',
			description: 'I grew up in Miami Beach, Fl. I have my Master’s and Specialist Degree in Leadership. Although I have my 220 Insurance License, my role has been on the marketing side. I love creating digital designs and connecting via social media with customers, clients, brokers, and real estate agents. Besides creating digital designs, I love dancing and traveling. I also love personal and business growth and self-improvement. Shopping is my guilty pleasure. During weekends, I am usually home relaxing, spending time with family, or at my son’s baseball game.',
			phoneNumber: '(305) 255-1901',
			pageItemURL: 'gretel-alvarez',
		}],
	}
};

let collection = new Collection()
let device = data.device;
let teamList = data.config.teamList;
let numberPagination = data.config.numberPagination;
let openNewTab = data.config.openNewTab ? '_blank' : '';

let noCollectMessage = 'No data was found.' ///data.config.noCollectMessage
let noCollectSubMessage = 'This will be hidden on preview and live site.' ///data.config.noCollectSubMessage
let teamArr;

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
cssLibrary('fontAwesomeSourceCSS', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css')

dmAPI.runOnReady('init', function () {
	dmAPI.loadScript('https://irt-cdn.multiscreensite.com/5775367238d847b8b62d126ce25c20de/files/uploaded/mixitup.min.js', function () {
		dmAPI.loadScript('https://irt-cdn.multiscreensite.com/a4fddbba6e6f4d71b2bb406911fe4018/files/uploaded/mixitup-multifilter.min.js', function () {
			dmAPI.loadScript('https://irt-cdn.multiscreensite.com/a4fddbba6e6f4d71b2bb406911fe4018/files/uploaded/mixitup-pagination.min.js', function () {

				// ? Uncomment this if you want to ue the CONNECT DATA feature
				teamArr = collection.data(teamList)

				if (teamArr.length == 0) {

					if (data.inEditor) {
						$(element).html(`<div class="widget-noCollection-Title">${noCollectMessage}</div><div class="widget-noCollection-Subtext">${noCollectSubMessage}</div>`)
					} else {
						$(element).hide()
					}
					return

				} else {
					appendTeam(teamArr)

					const containerEl = $(element).find('div.team-Row-Container')
					const mixer = mixitup(containerEl, {
						multifilter: {
							enable: true
						},
						pagination: {
							limit: parseInt(numberPagination)
						},
						animation: {
							"duration": 250,
							"nudge": true,
							"reverseOut": false,
							"effects": "fade translateZ(-100px)"
						}
					})

					setTimeout(preloader(), 2000)
				}

			})
		})
	})
})

// APPEND TEAM
function appendTeam(arr) {
	let teaMDataMarkup = ""
	arr.map((i) => {

		let pageLink = window.location.href.includes(data.siteId) ? `/site/${data.siteId}${i.pageItemURL}?preview=true&insitepreview=true&dm_device=${data.device}` : i.pageItemURL;
		if (typeof i.pageItemURL == "object") pageLink = i.page_item_url.href;

		let defaultImage = `https://via.placeholder.com/232x325.png?text=${i.name} Image`
		let imgSrc = i.imgSrc ? i.imgSrc : defaultImage
		let description = i.description ? `<p class="team-Description-Details">${i.description}</p>` : ''

		teaMDataMarkup += `<div class="team-Column-Container mix">
								<div class="team-Image-Container">
									<img src="${imgSrc}" alt="${name}'s Image">
								</div>
								<div class="team-Details-Container">
									<h3 class="team-Name-Details">${i.name}</h3>
									<p class="team-Position-Details">${i.position}</p>
									${description}
									<a href="tel:${i.phoneNumber}" class="team-Phone-Details">
										<i class="fa-solid fa-phone"></i>
										<span class="text">${i.phoneNumber}</span>
									</a>
									<a href="${pageLink}" target="${openNewTab}" class="team-Page-Details">
										<span class="text">More</span>
									</a>
								</div>
							</div>`

		$(element).find('div.team-Row-Container').html(teaMDataMarkup)
	});
}

function preloader() {
	$(element).find('div.widget-Loader-Container').fadeOut().remove()
	$(element).find('div.team-Main-Container').fadeIn()
}
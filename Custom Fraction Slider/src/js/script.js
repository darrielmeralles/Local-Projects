let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		list: [{
			"image_url": 'https://canoeplace.com/wp-content/uploads/2022/10/Workstead_Canoe_Bedroom2_0490-web-691x691@2x.jpg',
			"image_alt": 'Image',
			"image_link": 'https://canoeplace.com/accommodations/',
			"image_text": 'Stay Classic',
			"number": "01",
			"description": "Centuries-old charm meets modern luxury in light-filled suites and cottages designed for comfort and style by Workstead, Canoe’s talented interior design team."
		},
		{
			"image_url": 'https://canoeplace.com/wp-content/uploads/2023/07/23-CPI-William-097-RET-691x691.jpg',
			"image_alt": 'Image',
			"image_link": 'https://canoeplace.com/our-story/',
			"image_text": 'Moments Away',
			"number": "02",
			"description": "Just 90 miles from New York City, and minutes from the Hamptons’ most beloved beaches and villages, Canoe Place is a lush, hedged enclave in the waterfront hamlet of Hampton Bays."
		},
		{
			"image_url": 'https://canoeplace.com/wp-content/uploads/2023/07/MicrosoftTeams-image-305-691x691@2x.jpg',
			"image_alt": 'Image',
			"image_link": 'https://canoeplace.com/dining/',
			"image_text": 'Curated Cuisine',
			"number": "03",
			"description": "Inspired by the region’s abundance of local seafood and vegetables, savor our chef’s fresh takes on seasonal favorites."
		},
		{
			"image_url": 'https://canoeplace.com/wp-content/uploads/2023/07/230626_CanoePlace_SHOT_01_0197-691x691@2x.jpg',
			"image_alt": 'Image',
			"image_link": 'https://canoeplace.com/events/',
			"image_text": 'EXCEPTIONAL EVENTS',
			"number": "04",
			"description": "No matter the occasion, the rich history and charm of Canoe Place is a perfect backdrop for memorable gatherings and celebrations."
		}],
		sample:''
	}
};

let collection = new Collection()

let device = data.device;
let list = data.config.list;
let sample = data.config.sample;

let noCollectMessage = 'No data was found.' ///data.config.noCollectMessage
let noCollectSubMessage = 'This will be hidden on preview and live site.' ///data.config.noCollectSubMessage
let sampleListData;

let widget_id = $(element).attr("id");
$(element).find(".rgs-gallery-slider-container").addClass("rgs-swiper"+widget_id);
$(element).find(".rgs-next.swiper-button-next, .rgs-prev.swiper-button-prev").addClass("rgs-navigation"+widget_id);

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
	dmAPI.loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', function() {
        $(element).find(".rgs-gallery-slider.swiper-wrapper").html(multiplySliderStructure(1));
        sliderInitialize();
    });
})

function multiplySliderStructure(count) {
    return [...Array(count)].map(() => sliderStructure(list));
}

function sliderStructure(list) {
    let output = '';

    list.map(function(item) {
        output += `
            <div class="rgs-gallery-item swiper-slide">
				<img loading="lazy" src="${item.image_url}" class="rgs-slider-image" alt="${item.image_alt}">
				<div class="rgs-title-wrapper">
					<h3 class="rgs-title">${item.number}</h3>
					<h3 class="rgs-title">${item.image_text}</h3>
					<hr>
					<p class="description">${item.description}</p>
					<button class="btn-link">
						<span class="text">LEARN MORE</span>
					</button>
				</div>
            </div>
        `;
    });

    return output;
}

function sliderInitialize() {
    let swiper = new Swiper(".rgs-swiper"+widget_id, {
		slidesPerView: 1.8,
        spaceBetween: 60,
		centeredSlides: true,
		draggable: true,
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		  },
        navigation: {
            nextEl: ".rgs-next.swiper-button-next.rgs-navigation"+widget_id,
            prevEl: ".rgs-prev.swiper-button-prev.rgs-navigation"+widget_id,
        },
    });
}

addCss('fontAwesomeSource','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'); 
addCss('swiperCss','https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'); 
function addCss(id, url) { 
    if (!document.getElementById(id)) { 
        let head = document.getElementsByTagName('head')[0]; 
        let link = document.createElement('link'); 
        link.id = id; 
        link.rel = 'stylesheet'; 
        link.type = 'text/css'; 
        link.href = url; 
        link.crossOrigin = 'anonymous'; 
        head.appendChild(link); 
    } 
}


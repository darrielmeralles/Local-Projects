let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		list: [{
			"image_url": 'https://dreffui1gbt6t.cloudfront.net/images/pld/PRI_Home_Dine_021124_Elements.jpg',
			"image_alt": 'Image',
			"image_link": '#',
			"image_text": 'Elements'
		},
		{
			"image_url": 'https://dreffui1gbt6t.cloudfront.net/images/pld/PRI_Home_Dine_021124_19th-Pub.jpg',
			"image_alt": 'Image',
			"image_link": '#',
			"image_text": '19th Pub'
		},
		{
			"image_url": 'https://dreffui1gbt6t.cloudfront.net/images/pld/pri-home-dine-stables-pie-mobile.jpg',
			"image_alt": 'Image',
			"image_link": '#',
			"image_text": 'Stables Saloon'
		},
		{
			"image_url": 'https://dreffui1gbt6t.cloudfront.net/images/pld/PRI_Home_Dine_021124_Wine-Cellar.jpg',
			"image_alt": 'Image',
			"image_link": '#',
			"image_text": 'Schlumberger Wine Cellar'
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
					<h3 class="rgs-title">01</h3>
					<h3 class="rgs-title">${item.image_text}</h3>
					<hr>
					<p class="description">Centuries-old charm meets modern luxury in light-filled suites and cottages designed for comfort and style by Workstead, Canoe’s talented interior design team.</p>
					<button>
						<span class="text">LEARN MORE</span>
					</button>
				</div>
            </div>
        `;
    });
    // list.map(function(item) {
    //     output += `
    //         <div class="rgs-gallery-item swiper-slide">
    //             <a href="${item.image_link}" class="rgs-item-link">
    //                 <img loading="lazy" src="${item.image_url}" class="rgs-slider-image" alt="${item.image_alt}">
    //                 <div class="rgs-gradient"></div>
    //                 <div class="rgs-title-wrapper">
    //                     <h3 class="rgs-title">${item.image_text}</h3>
    //                 </div>
    //             </a>
    //         </div>
    //     `;
    // });

    return output;
}

function sliderInitialize() {
    let swiper = new Swiper(".rgs-swiper"+widget_id, {
        // slidesPerView: 1,
        // spaceBetween: 50,
		slidesPerView: 1.9,
        spaceBetween: 60,
		centeredSlides: true,
		// centeredSlidesBounds: true, // Allow centered slides to be partial
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		  },
        navigation: {
            nextEl: ".rgs-next.swiper-button-next.rgs-navigation"+widget_id,
            prevEl: ".rgs-prev.swiper-button-prev.rgs-navigation"+widget_id,
        },
    });

	swiper.on('beforeInit', function () {
		swiper.$wrapperEl.css('justify-content', 'flex-start'); // Adjust the justification to left
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


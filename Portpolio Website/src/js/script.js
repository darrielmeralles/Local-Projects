// Ref: https://codepen.io/jenishhrestha/pen/ErdZpx 

let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		mockupList: [
            // {
            //     image: "Adam Craig Music-MockUps",
            // },
            // {
            //     image: "Adroit Panels Mockup",
            // },
            // {
            //     image: "Arrive in Style Transport Group Mock-up",
            // },
            {
                image: "Athens Addiction Recovery Center-Mockup-V2",
            },
            {
                image: "Bayside Shade Solutions-Mockup-V2",
            },
            {
                image: "Bayside Shade Solutions-Mockup",
            },
            {
                image: "Beauty On Bridge Street_mockup-v1",
            },
            {
                image: "Beauty On Bridge Street_mockup-v2",
            },
            {
                image: "bendigo-taxis-mockup-v1",
            },
            {
                image: "bendigo-taxis-mockup-v2",
            },
            {
                image: "Biancas-Admin-Services-V1",
            },
            {
                image: "Biancas-Admin-Services-V2",
            },
            {
                image: "cheeky-mockup-v1",
            },
            {
                image: "cheeky-mockup-v2",
            },
            {
                image: "Club-Sapphire-v1-06142018-qa",
            },
            {
                image: "Club-Sapphire-v2-061418-Redesign",
            },
            {
                image: "ColdwellBanker_mockup_V1",
            },
            {
                image: "ColdwellBanker_mockup_V2",
            },
            {
                image: "Cudgegong-Plumbing-PTY-LTDV2",
            },
            {
                image: "Denis  Yeo  &  Associates  Business  Accountants  version 1",
            },
            {
                image: "Denis  Yeo  &  Associates  Business  Accountants  version 2",
            },
            {
                image: "Dr Kim Shanon Mockup V1",
            },
            {
                image: "Dr Kim Shanon Mockup V2",
            },
            {
                image: "duncan-consulting-version1",
            },
            {
                image: "duncan-consulting-version2",
            },
            {
                image: "Eagle Eye Signs & Graphics  Mockup",
            },
            {
                image: "FlippinFresh-V1",
            },
            {
                image: "formby-tyres-mockup-v1",
            },
            {
                image: "FreedomMobility_Mockup_V1",
            },
            {
                image: "FreedomMobility_Mockup_V2",
            },
            {
                image: "Gorgeous Mockup",
            },
            {
                image: "hair-illusions-mock-up-v1",
            },
            {
                image: "hair-illusions-mock-up-v2",
            },
            {
                image: "hamilton-caravan-park-mockup-v1",
            },
            {
                image: "hamilton-caravan-park-mockup-v2",
            },
            {
                image: "Home with the hoopers v1",
            },
            {
                image: "Home with the hoopers v2",
            },
            {
                image: "josie-scott-and-south-coast-conveyancing-mockup-v1",
            },
            {
                image: "josie-scott-and-south-coast-conveyancing-mockup-v2",
            },
            {
                image: "Just Skips QLD PTY LTD-Mockup-V1",
            },
            {
                image: "Just Skips QLD PTY LTD-Mockup-V2",
            },
            {
                image: "Karen_Magnotta_Harcourts_v1",
            },
            {
                image: "Karen_Magnotta_Harcourts_v2",
            },
            {
                image: "Kirkland Heating _ Air Conditioning, Inc. Mockup-V2 QA Comment",
            },
            {
                image: "Kirkland Heating & Air Conditioning, Inc. Mockup-V1 QA Comment",
            },
            {
                image: "mudgee-honda-centre-mockup-v1",
            },
            {
                image: "mudgee-honda-centre-mockup-v2",
            },
            {
                image: "National Ag Pty Ltd-mock-up-v1",
            },
            {
                image: "National Ag Pty Ltd-Mockup-V2",
            },
            {
                image: "New-Life-Adopt-V1",
            },
            {
                image: "New-Life-Mock-Up-V1",
            },
            {
                image: "New-Life-Mock-Up-V2",
            },
            {
                image: "picture-framer-mockup-v1",
            },
            {
                image: "picture-framer-mockup-v2",
            },
            {
                image: "Point S • Mount Vernon, WA-mockup-v1",
            },
            {
                image: "Point S • Mount Vernon, WA-mockup-v2",
            },
            {
                image: "PrimnProper - V1",
            },
            {
                image: "PrimnProper - v2",
            },
            {
                image: "Roger's Tool's and More Mockup v1",
            },
            {
                image: "Roger's Tool's and More Mockup v2",
            },
            {
                image: "Scallywags-MockUps",
            },
            {
                image: "she_Group_mockup_v1-rv1-06272018",
            },
            {
                image: "she_Group_mockup_v2-rv1-06272018",
            },
            {
                image: "Social Eatery Winston Churchill-Mockup-v1",
            },
            {
                image: "Social Eatery Winston Churchill-Mockup-v2",
            },
            {
                image: "Tamar Valley Veterinary Clinic Mockup-v1",
            },
            {
                image: "Tamar Valley Veterinary Clinic Mockup-v2",
            },
            {
                image: "TAS_heating&cooling_mockup_v1",
            },
            {
                image: "TAS_heating&cooling_mockup_v2",
            },
            {
                image: "Terrick_Merinos_Stud_Sheep_Mockup_v1",
            },
            {
                image: "Terrick_Merinos_Stud_Sheep_Mockup_v2",
            },
            {
                image: "Terry Davis Transport-Mockup-V1",
            },
            {
                image: "Terry Davis Transport-Mockup-V2",
            },
            {
                image: "the merchant-mock-up-v1",
            },
            {
                image: "the merchant-mock-up-v2",
            },
            {
                image: "Thorough Dental Care-Mockup-v1",
            },
            {
                image: "Thorough Dental Care-Mockup-v2",
            },
            {
                image: "Tooko Wildlife Displays-Mockup-V1",
            },
            {
                image: "Tooko Wildlife Displays-Mockup-V2",
            },
            {
                image: "Tooth Fairy & Co Mockup_V1",
            },
            {
                image: "Tooth Fairy & Co Mockup_V2",
            },
            {
                image: "Tra-la-v2-mockup",
            },
            {
                image: "v1",
            },
            {
                image: "v2",
            },
            {
                image: "Wallerawang Landscaping & Construction-mock-up-v1",
            },
            {
                image: "Wallerawang Landscaping & Construction-mock-up-v2",
            },
            {
                image: "Why-Switch-V1-revisedv2",
            },
            {
                image: "Yuva Medical Spa-Mockup-V1",
            },
            {
                image: "Yuva Medical Spa-Mockup-V2",
            },
            {
                image: "Zappora Skin Clinic-MockUp-V1",
            },
            {
                image: "Zappora Skin Clinic-MockUp-V2",
            },
            {
                image: "ZONE_28_mockup_v1",
            },
            {
                image: "ZONE_28_mockup_v2",
            },
        
            
          ],
		fullbuildList:[
			{
                image: "screencapture-dashboard-thecamel-co-preview-6b68bb36-2019-10-23-19_51_12",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-06beff6a-2019-10-24-20_28_22",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-6fff0f25-2019-10-24-20_25_45",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-7c8d9194-2019-12-12-10_30_11",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-7d4a94b0-2019-10-23-04_19_27",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-47e506a7-2019-10-23-21_07_06",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-93e549b4-2019-10-24-20_20_12",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-911ada74-2019-10-24-02_06_55",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-66324d16-2019-10-24-20_23_31",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-93514f41-2019-10-24-03_52_51",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-343260fe-2019-10-24-00_04_12",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-734003f6-2019-10-24-03_28_56",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-55814004-2019-10-23-02_04_29",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-a5f23b6a-2019-10-24-19_29_36",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-a6bbaa61-2019-10-24-20_07_43",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-b0aff1a0-2019-10-24-02_15_38",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-b413117e-2019-10-24-03_49_01",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-ba746c00-2019-10-24-03_27_01",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-bb523d55-2019-10-23-04_21_41",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-beb0f62b-2019-10-24-02_00_10",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-c2b41c95-2019-10-24-00_27_27",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-cbca7e08-2019-10-23-04_49_39",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-cd70895f-2019-10-23-02_09_29",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-cfc1a2e5-2019-11-11-09_20_01",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-dc427ab7-2019-10-23-23_56_10",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-dc6994e4-2019-10-24-03_41_59",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-e6ac32ce-2019-10-23-04_32_49",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-e29a71e8-2019-10-24-20_16_10",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-e85fc378-2019-10-24-02_11_27",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-e941e4bd-2019-10-24-20_08_21",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-fa5ef180-2019-10-23-19_46_42",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-fa57b313-2019-10-24-19_33_36",
            },
			{
                image: "screencapture-dashboard-thecamel-co-preview-fd57e202-2019-10-24-00_28_55",
            },
			{
                image: "screencapture-editor-searchmarketingspecialists-au-preview-67250b0c-2019-10-24-00_00_30",
            },
			{
                image: "screencapture-editor-searchmarketingspecialists-au-preview-c5e92fa6-2019-10-24-20_07_11",
            },
			{
                image: "screencapture-fairfaxmarketingservices-editor-multiscreensite-preview-3e78d220-2019-10-23-04_20_34",
            },
			{
                image: "screencapture-fairfaxmarketingservices-editor-multiscreensite-preview-5aec0166-2019-10-23-04_27_18",
            },
			{
                image: "screencapture-fairfaxmarketingservices-editor-multiscreensite-preview-2436c21f-2019-10-24-20_24_50",
            },
			{
                image: "screencapture-fairfaxmarketingservices-editor-multiscreensite-preview-7456d291-2019-10-23-04_25_41",
            },
			{
                image: "screencapture-fairfaxmarketingservices-editor-multiscreensite-preview-92834abb-2019-10-23-02_11_18",
            },
			{
                image: "screencapture-fairfaxmarketingservices-editor-multiscreensite-preview-b9a1bb32-2019-10-23-04_33_53",
            },
			{
                image: "screencapture-fairfaxmarketingservices-editor-multiscreensite-preview-ca626e24-2019-10-29-04_13_04",
            },
			{
                image: "screencapture-lovederm-ca-2019-10-24-04_00_18",
            },
			{
                image: "screencapture-mccalldawson-ca-2019-10-24-19_31_24",
            },
			{
                image: "screencapture-my-duda-co-preview-2c3fbd48-2019-10-24-00_11_48",
            },
			{
                image: "screencapture-my-duda-co-preview-2fb4a9b5-2019-10-23-21_08_06",
            },
			{
                image: "screencapture-my-duda-co-preview-4edbd52e-2019-10-23-21_05_59",
            },
			{
                image: "screencapture-my-duda-co-preview-8e19a33d-2019-10-24-00_02_31",
            },
			{
                image: "screencapture-my-duda-co-preview-0031a8d5-2019-10-23-04_52_55",
            },
			{
                image: "screencapture-my-duda-co-preview-34a4a050-2019-10-23-04_46_36",
            },
			{
                image: "screencapture-my-duda-co-preview-80cec419-2019-10-23-04_23_34",
            },
			{
                image: "screencapture-my-duda-co-preview-516d5119-2019-10-24-00_17_05",
            },
			{
                image: "screencapture-my-duda-co-preview-795dc61a-2019-10-24-19_39_38",
            },
			{
                image: "screencapture-my-duda-co-preview-921fac69-2019-10-23-23_58_40",
            },
			{
                image: "screencapture-my-duda-co-preview-2491b429-2019-10-23-19_49_23",
            },
			{
                image: "screencapture-my-duda-co-preview-4537da85-2019-10-24-19_28_16",
            },
			{
                image: "screencapture-my-duda-co-preview-48820df0-2019-10-24-00_14_29",
            },
			{
                image: "screencapture-my-duda-co-preview-5528080f-2019-10-24-03_37_14",
            },
			{
                image: "screencapture-my-duda-co-preview-8097184c-2019-10-23-04_39_54",
            },
			{
                image: "screencapture-my-duda-co-preview-b9d5c823-2019-10-23-19_47_40",
            },
			{
                image: "screencapture-my-duda-co-preview-bec3187b-2019-10-23-04_22_43",
            },
			{
                image: "screencapture-my-duda-co-preview-c7232cd5-2019-10-24-20_21_24",
            },
			{
                image: "screencapture-my-duda-co-preview-dd45b00f-2019-10-24-00_23_47",
            },
			{
                image: "screencapture-my-duda-co-preview-e9c2e55e-2019-10-23-04_54_00",
            },
			{
                image: "screencapture-my-duda-co-preview-ef4b2da0-2019-10-24-03_55_57",
            },
			{
                image: "screencapture-my-duda-co-preview-fceff528-2019-10-23-04_31_40",
            },
			{
                image: "screencapture-my-duda-co-preview-fd6af413-2019-10-24-02_13_58",
            },
			{
                image: "screencapture-preview-greenelephantagency-preview-54f29355-2019-10-23-04_50_41",
            },
			{
                image: "screencapture-talbotestate-ca-2019-10-24-19_39_55",
            },
			{
                image: "screencapture-thecameltraining-editor-multiscreensite-preview-7afa2382-2019-10-24-04_08_40",
            },
			{
                image: "screencapture-thecameltraining-editor-multiscreensite-preview-c6f92575-2019-10-24-00_19_50",
            },
		],
        logoList:[
            {
                image: "ajja-;logo-design-1000x1000 (Page 1)",
            },
            {
                image: "ajja-;logo-design-1000x1000 (Page 2)",
            },
            {
                image: "ajja-;logo-design-1000x1000 (Page 3)",
            },
            {
                image: "ajja-;logo-design-1000x1000 (Page 4)",
            },
            {
                image: "ajja-;logo-design-1000x1000 (Page 5)",
            },
            {
                image: "Beauty on bridge street logo (Page 1)",
            },
            {
                image: "Beauty on bridge street logo (Page 2)",
            },
            {
                image: "Beauty on bridge street logo (Page 3)",
            },
            {
                image: "Beauty on bridge street logo (Page 4)",
            },
            {
                image: "Beauty on bridge street logo (Page 5)",
            },
            {
                image: "big-girls-fashion-logo (Page 1)",
            },
            {
                image: "big-girls-fashion-logo (Page 2)",
            },
            {
                image: "big-girls-fashion-logo (Page 3)",
            },
            {
                image: "big-girls-fashion-logo (Page 4)",
            },
            {
                image: "big-girls-fashion-logo (Page 5)",
            },
            {
                image: "cherry-farm-recreate-logo (Page 1)",
            },
            {
                image: "cherry-farm-recreate-logo (Page 2)",
            },
            {
                image: "cherry-farm-recreate-logo (Page 3)",
            },
            {
                image: "cherry-farm-recreate-logo (Page 4)",
            },
            {
                image: "cherry-farm-recreate-logo (Page 5)",
            },
            {
                image: "mudgee-tax-and-accounting-logo (Page 1)",
            },
            {
                image: "mudgee-tax-and-accounting-logo (Page 2)",
            },
            {
                image: "mudgee-tax-and-accounting-logo (Page 3)",
            },
            {
                image: "mudgee-tax-and-accounting-logo (Page 4)",
            },
            {
                image: "mudgee-tax-and-accounting-logo (Page 5)",
            },
            {
                image: "Porky’s Nest -Logo Recreate (Page 1)",
            },
            {
                image: "Porky’s Nest -Logo Recreate (Page 2)",
            },
            {
                image: "robees-painting-service-logo (Page 1)",
            },
            {
                image: "robees-painting-service-logo (Page 2)",
            },
            {
                image: "robees-painting-service-logo (Page 3)",
            },
            {
                image: "robees-painting-service-logo (Page 4)",
            },
            {
                image: "robees-painting-service-logo (Page 5)",
            },
            {
                image: "Terang Harness Racing Logo (Page 1)",
            },
            {
                image: "Terang Harness Racing Logo (Page 2)",
            },
            {
                image: "Terang Harness Racing Logo (Page 3)",
            },
            {
                image: "Terang Harness Racing Logo (Page 4)",
            },
            {
                image: "Terang Harness Racing Logo (Page 5)",
            },
            {
                image: "Timber Blind Express-Logo",
            },
            {
                image: "Tooko Wildlife Displays-Logo",
            },
        ]
	}
};

let collection = new Collection()

let device = data.device;
let mockupList= data.config.mockupList;
let fullbuildList= data.config.fullbuildList;
let logoList=data.config.logoList;

let autoplay=data.config.autoplay;
let dots=data.config.dots;
let interval=data.config.interval;
let draggable=data.config.draggable;
let arrows=data.config.arrows;
let tablet=data.config.tablet;
let mobile=data.config.mobile;
let sTs=data.config.displaySlide;
let arrw=data.config.arrw;
let navSize=data.config.navSize;
let iColor=data.config.iColor;
let slideArrw="<i class='fa fa-"+arrw+"-left fa-"+navSize+" filmSlider-Arrow'></i>";
let slideArrw2="<i class='fa fa-"+arrw+"-right fa-"+navSize+" filmSlider-Arrow'></i>";
let a = $(element).find(".filmSlider-Main-Container");
let dotsWrap = $(element).find('.filmSlider-Dots-Container');
let arrwWrap = $(element).find('.filmSlider-Arrow-Container');

let noCollectMessage = 'No data was found.' ///data.config.noCollectMessage
let noCollectSubMessage = 'This will be hidden on preview and live site.' ///data.config.noCollectSubMessage

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
	dmAPI.loadScript('https://irt-cdn.multiscreensite.com/8914113fe39e47bcb3040f2b64f71b02/files/uploaded/paginates.min.js', function () {
        dmAPI.loadScript('https://irp-cdn.multiscreensite.com/f49f126e/files/uploaded/slick.min.js', function () {
            dmAPI.loadScript('https://irt-cdn.multiscreensite.com/5775367238d847b8b62d126ce25c20de/files/uploaded/jquery.magnific-popup.js', function () {

                PaginationFunction(fullbuildList, "fb-Main-Container", "fb-text-center", "fullbuild", "jpg");
                PaginationFunction(mockupList, "sT-Main-Container", "text-center", "mockup", "png");
                magnificPopUp("fb-text-center");
                magnificPopUp("text-center");

                createSlider(logoList, "logo", "png");

                a.fadeIn();
                a.slick({
                    autoplay:true,
                    infinite:true,
                    dots:true,
                    autoplaySpeed:5000,
                    draggable:true,
                    arrows:true,
                    appendDots:dotsWrap,
                    slidesToShow:6,
                    slidesToScroll:6,
                    prevArrow:'<button type="button" class="filmSlider-Arrow-Prev filmSlider-Arrow">'+slideArrw+'</button>',
                    nextArrow:'<button type="button" class="filmSlider-Arrow-Next filmSlider-Arrow">'+slideArrw2+'</button>',
                    easing:'linear'
                });

            })
		})
	})
})

//PAGINATION 
function PaginationFunction(items, container, wrapper, src, filetype){
	$(element).find(`.${container}`).pagination({
	  dataSource: items,
	  pageSize:3,
	  callback: function(result, pagination) {
		let structure = '';
		structure = result.map(i=>{
		  return createRow(i, src, filetype);
		  }).join("")
		  $(element).find(`.${wrapper}`).html(structure);
	  }
	});
  }

function createRow(b, src, filetype){
	let j = `<li class="block">
				<div class="window macpro">
					<a class="portfolioLink mfp-with-zoom" href="./src/images/${src}/${b.image}.${filetype}"><i class="fa-solid fa-expand"></i></a>
					<img src="./src/images/${src}/${b.image}.${filetype}">
				</div>
			</li>`
	return j;
}
function createSlider(c, src, filetype){
    console.log(c, "c")
    c.map(function(i){
        let j = `<div class="filmSlider-Section-ImageSlider">
                    <div class="filmSlider-ImageSlider-PanelSlider">
                        <a class="portfolioLink mfp-with-zoom" href="./src/images/${src}/${i.image}.${filetype}"><i class="fa-solid fa-expand"></i></a>
                        <img src="./src/images/${src}/${i.image}.${filetype}" alt="logo" class="filmSlider-PanelSlider-Img">
                    </div> 
                </div>`
            $("#filmSlider").append(j);
    })

}

function magnificPopUp(container) {
    $(element).find(`.${container}`).magnificPopup({
		delegate: 'a',
        type: 'image'
    });
}

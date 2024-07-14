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
                image: "Athens Addiction Recovery Center-Mockup-V2",
            },
		]
	}
};

let collection = new Collection()

let device = data.device;
let mockupList= data.config.mockupList;
let fullbuildList= data.config.fullbuildList;
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
	dmAPI.loadScript('https://irt-cdn.multiscreensite.com/8914113fe39e47bcb3040f2b64f71b02/files/uploaded/paginates.min.js', function () {
		dmAPI.loadScript('https://irt-cdn.multiscreensite.com/5775367238d847b8b62d126ce25c20de/files/uploaded/jquery.magnific-popup.js', function () {
			PaginationFunction(mockupList);
			magnificPopUp();
		})
	})
})

//PAGINATION 
function PaginationFunction(items){
	$(element).find('.sT-Main-Container').pagination({
	  dataSource: items,
	  pageSize:12,
	  callback: function(result, pagination) {
		let structure = '';
		structure = result.map(i=>{
		  return createRow(i);
		  }).join("")
		  $(element).find(".text-center").html(structure);
	  }
	});
  }

function createRow(b){
	let j = `<li class="block">
				<div class="window macpro">
					<a class="portfolioLink mfp-with-zoom" href="./src/images/mockup/${b.image}.png"><i class="fa-solid fa-expand"></i></a>
					<img src="./src/images/mockup/${b.image}.png">
				</div>
			</li>`
	return j;
}

function magnificPopUp() {
    $(element).find('.text-center').magnificPopup({
		delegate: 'a',
        type: 'image'
    });
}

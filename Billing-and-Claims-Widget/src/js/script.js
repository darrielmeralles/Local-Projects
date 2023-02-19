let element = $('.widget-abc123');
let data = { 
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		logoList: [
			{
				Title: "Wright Flood",
				Logo:"https://redzoneinsurance.com/wp-content/uploads/2022/03/wright-flood.png",
				Paybill_Create_Account_Link: "https://www.wrightflood.net/login",
				Paybill_Create_Account_Phone: "800-820-3242",
				Claims_Link: "https://www.wrightflood.net/login",
				Claims_Phone: "800-725-9472"
			},
			{
				Title: "UNIVERSAL NORTH AMERICA",
				Logo:"https://redzoneinsurance.com/wp-content/uploads/2022/03/Universal-North-America-Logo.png",
				Paybill_Create_Account_Link: "https://www.uihna.com/en-US/Log-In/",
				Paybill_Create_Account_Phone: "866-458-4262",
				Claims_Link: "https://www.uihna.com/Claims/ReportAClaim/",
				Claims_Phone: "866-999-0898"
			},
			{
				Title: "UNITED AUTO",
				Logo:"https://redzoneinsurance.com/wp-content/uploads/2022/03/UaicLogo.png",
				Paybill_Create_Account_Link: "https://www.uaig.net/uaichome/#/uaichome",
				Paybill_Create_Account_Phone: "888-987-8242",
				Claims_Link: "https://www.uaig.net/uaichome/#/uaichome/claims",
				Claims_Phone: "305-940-7299"
			},
			{
				Title: "Security First",
				Logo:"https://redzoneinsurance.com/wp-content/uploads/2022/03/securityfirst.png",
				Paybill_Create_Account_Link: "https://pay.securityfirstmanagers.com/find-your-bill?ins=SFI",
				Paybill_Create_Account_Phone: "877-333-9992",
				Claims_Link: "https://my.securityfirstflorida.com/#/sfi-prod/login",
				Claims_Phone: "877-581-4862"
			},
			{
				Title: "RLI",
				Logo:"https://redzoneinsurance.com/wp-content/uploads/2022/03/rli.png",
				Paybill_Create_Account_Link: "https://ipn2.paymentus.com/cp/rlin",
				Paybill_Create_Account_Phone: "309-692-1000",
				Claims_Link: "https://www.rlicorp.com/how-report-claim",
				Claims_Phone: "800-444-0406"
			},
			{
				Title: "People’s Trust Insurance Company",
				Logo:"https://redzoneinsurance.com/wp-content/uploads/2022/03/pti.png",
				Paybill_Create_Account_Link: "https://mypti.com/view/user/login.cfm",
				Paybill_Create_Account_Phone: "888-364-8557",
				Claims_Link: "https://peoplestrustinsurance.com/policyholders/file-a-claim",
				Claims_Phone: "877-333-1230"
			}
		],
		sample:''
	}
};

let collection = new Collection()

let device = data.device;
let logoList = data.config.logoList;
let sample = data.config.sample;


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
	console.log(logoList, "logoList");

	logoList.map(function(a){
		let mapcat = `<li>
						<a href="#${convertDash(a.Title)}">
							<figure>
								<img src="${a.Logo}" alt="${a.Title} Logo">
							</figure>
						</a>
					</li>`;

		let mapRes = `<div class="res box" id="${convertDash(a.Title)}">
						<div class="logo-wrapper">
							<img src="${a.Logo}" alt="${a.Title} Logo">
							<span>${a.Title}</span>
						</div>
						<div class="link-wrapper">
							<div class="link-left">
								<a href="${a.Paybill_Create_Account_Link}">
								<button>PAY MY BILL/CREATE ACCOUNT</button>
								</a>
								<a href="tel:${a.Paybill_Create_Account_Phone}">${a.Paybill_Create_Account_Phone}</a>
							</div>
							<div class="link-right">
								<a href="${a.Claims_Link}"> <button>CLAIMS</button></a>
								<a href="tel:${a.Claims_Phone}">${a.Claims_Phone}</a>
							</div>
						</div>
					</div>`;

		$(element).find('.bc-logo-container ul').append(mapcat);
		$(element).find('.bc-results-container').append(mapRes);
	})


})

function convertDash(str){
	let newStr = str.replace(/\s/g , "-");
	return newStr.replace(/\+/g , "").toLowerCase();
}


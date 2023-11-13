let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		propertyList: [
            {
                id: 1,
                business_name: "Nove",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.5",
                spend: "10",
                delevery_time: "À partir de 12:00",
                sponsored: "Yes",
                free_delevery: "Yes",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/pizza-nap.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/nove-pizzeria.jpg",
                lat: "50.5189559",
                lng: "5.2407952",
                link: "https://www.nove.fastoo.eu/nove-livraison-a-domicile"
            },
            {
                id: 2,
                business_name: "Maman",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.9",
                spend: "10",
                delevery_time: "À partir de 12:00",
                sponsored: "Yes",
                free_delevery: "No",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/pokebowl.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/maman-huy.jpg",
                lat: "50.51804733",
                lng: "5.240622044",
                link: "https://www.maman.fastoo.eu/maman-livraison-a-domicile"
            },
            {
                id: 3,
                business_name: "O'Brunch Coffee",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.5",
                spend: "50",
                delevery_time: "À partir de 12:00",
                sponsored: "No",
                free_delevery: "No",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/brunch+%281%29.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/obrunch.jpg",
                lat: "50.51891327",
                lng: "5.24041605",
                link: "https://www.obrunchcoffee.fastoo.eu/obrunch-coffee-livraison-a-domicile"
            },
            {
                id: 4,
                business_name: "Chill & Cheese",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.5",
                spend: "60",
                delevery_time: "À partir de 12:00",
                sponsored: "No",
                free_delevery: "No",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/burgersandfries.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/chillandcheese.jpg",
                lat: "50.52648926",
                lng: "5.224036217",
                link: "https://www.chillcheese-huy.fastoo.eu/chill-and-cheese-huy-livraison-a-domicile"
            },
            {
                id: 5,
                business_name: "Mazzo",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.5",
                spend: "20",
                delevery_time: "À partir de 12:00",
                sponsored: "No",
                free_delevery: "No",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/pizza-2.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/mazzo.jpg",
                lat: "50.5167832",
                lng: "5.2408242",
                link: "https://www.mazzo.fastoo.eu/mazzo-livraison-a-domicile"
            },
            {
                id: 6,
                business_name: "Crousty break",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.5",
                spend: "20",
                delevery_time: "À partir de 12:00",
                sponsored: "No",
                free_delevery: "No",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/sandwich.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/croustybreak.jpg",
                lat: "50.52578987",
                lng: "5.229359832",
                link: "https://www.croustybreak.fastoo.eu/crousty-break-livraison-a-domicile"
            },
            {
                id: 7,
                business_name: "Il Capriccio",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "5",
                spend: "20",
                delevery_time: "À partir de 12:00",
                sponsored: "No",
                free_delevery: "No",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/pizza.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/il+cappriccio.jpg",
                lat: "50.5807724",
                lng: "5.35482645",
                link: "https://www.ilcapriccio.fastoo.eu/il-capriccio-livraison-a-domicile"
            },
            {
                id: 8,
                business_name: "Benzai",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.1",
                spend: "20",
                delevery_time: "À partir de 12:00",
                sponsored: "No",
                free_delevery: "No",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/noodles.webp?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/benzaifood+logo.png",
                lat: "50.6406909",
                lng: "5.5958379",
                link: "https://www.benzaifood.fastoo.eu/"
            },
            {
                id: 9,
                business_name: "Robert la frite",
                business_type: "Restaurants",
                address: "Restaurants",
                ratings: "4.9",
                spend: "20",
                delevery_time: "À partir de 12:00",
                sponsored: "No",
                free_delevery: "No",
                image: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/Homepage+%282%29.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                logo: "https://irp.cdn-website.com/b2d4b892/dms3rep/multi/robertlafrite.png",
                lat: "50.40900421",
                lng: "4.442223072",
                link: "https://www.robertlafrite.fastoo.eu/"
            }
            
          ]
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
var items = [
	{ name: 'Item 1', category1: 'A', category2: '3' },
	{ name: 'Item 2', category1: 'C', category2: '3' },
	{ name: 'Item 3', category1: 'A', category2: '1' },
	{ name: 'Item 4', category1: 'A', category2: '2' },
	{ name: 'Item 5', category1: 'B', category2: '2' },
	{ name: 'Item 6', category1: 'B', category2: '1' },
	{ name: 'Item 7', category1: 'B', category2: '3' },
	{ name: 'Item 8', category1: 'B', category2: '3' },
	// ... more items
  ];

let propertyList = data.config.propertyList;

dmAPI.runOnReady('init', function () {
	
})


console.log(sortSponsord(propertyList), "propertyList");

function sortSponsord(propertyList){
	let targetCategory1 = 'Yes';
	return propertyList.sort(function(a, b) {
		// Compare targetCategory1 in descending order
		if (a.sponsored === targetCategory1 && b.sponsored !== targetCategory1) {
			return -1;
		} else if (a.sponsored !== targetCategory1 && b.sponsored === targetCategory1) {
			return 1;
		} else {
			// If targetCategory1 is the same, sort by descending numbers in category2
			return b.ratings - a.ratings;
		}
	});
	  
}




// function fileSize(){
// 	let f = "https://www.africau.edu/images/default/sample.pdf"
// 	var fileSize = f.size; 
//     var fileSizeInKB = (fileSize/1024); 

// 	console.log(fileSize, "fileSize");
// }
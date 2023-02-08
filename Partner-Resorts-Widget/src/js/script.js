let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		// sampleList: [{}],
		resortsList: [{
				Title: "Angel Fire, NM",
				Images: "https://powderalliance.com/wp-content/uploads/2020/10/angel-fire-resort-hero-1500x1000-1-300x200.jpg",
				Category:"Canada, New Zealand",
				Page_Link: "Apartment"
			}, {
				Title: "Blacktail Mountain, MT",
				Images: "https://powderalliance.com/wp-content/uploads/2022/03/blacktail-base-300x225.jpg",
				Category:"Canada, Japan",
				Page_Link: "Apartment"
			}, {
				Title: "Bogus Basin, ID",
				Images: "https://powderalliance.com/wp-content/uploads/2020/10/bogus-basin-hero-1500x1000-1-300x200.jpg",
				Category:"New Zealand",
				Page_Link: "Apartment"
			}, {
				Title: "Angel Fire, NM",
				Images: "https://powderalliance.com/wp-content/uploads/2020/10/castle-mountain-resort-hero-1500x1000-1-300x200.jpg",
				Category:"West, High Lands",
				Page_Link: "Apartment"
			}
		],
		sample:''
	}
};

let collection = new Collection()

let device = data.device;
let resortsList = data.config.resortsList;
let sample = data.config.sample;

let noCollectMessage = 'No data was found.' ///data.config.noCollectMessage
let noCollectSubMessage = 'This will be hidden on preview and live site.' ///data.config.noCollectSubMessage
let resortsListData;

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
	dmAPI.loadScript('https://irt-cdn.multiscreensite.com/5775367238d847b8b62d126ce25c20de/files/uploaded/mixitup.min.js', function () {

		// ? Uncomment this if you want to ue the CONNECT DATA feature
		resortsList = collection.data(resortsList) 
		
		console.log(resortsList, "resortsList");

		let splitCategory = catFilter(resortsList, 'Category');
		let sortCat = sortAsc(splitCategory);
		console.log(sortAsc(splitCategory), "sort");

		//map category
		sortCat.map(function(i){
			let output = `<li data-filter=".${spaceDash(i)}"><span>${i}</span></li>`;
			$('.navmix-items .all').after(output);
		});

		resortsList.map(function(i){
			let output = `<div class="mix ${spaceComma(splitClass(i.Category).toString())}" data-order="1">
							<div class="boxWrapper">
								<div class="img-con" style="background-image: url('${i.Images}');"></div>
								<div class="title-con">
									<span>${i.Title}</span>
								</div>
							</div>
						</div>`;
		
			$('.container').append(output);
		});
		
		var mixer = mixitup('.container');

		// if (sampleListData.length == 0) {

		// 	if (data.inEditor) {
		// 		$(element).html(`<div class="widget-noCollection-Title">${noCollectMessage}</div><div class="widget-noCollection-Subtext">${noCollectSubMessage}</div>`)
		// 	} else {
		// 		$(element).hide()
		// 	}
		// 	return

		// } else {
			
		// 	setTimeout(preloader(), 2000)
		// }
		
	})

})

function preloader() {
	$(element).find('div.widget-Loader-Container').fadeOut().remove()
	$(element).find('div.widgetName-Main-Container').fadeIn()
}
function splitClass(cat){
    let catmap = cat.split(',');
    let newcat = catmap.map(function(i){
        console.log(spaceDash(i), 'i');
        return spaceDash(i).toString();
    })

    return newcat;
}
function spaceDash(cat){
    return cat.replaceAll(" ", "");
}
function spaceComma(cat){
    return cat.replaceAll(",", " ");
}

//SPLIT FILTERS WITH COMMA
function catFilter(obj, key) {
    let newObj = obj.map(i => {
        return i[key].split(",").map(j => {
            return j.trim();
        });
    }).flat();
    var uniqueItems = Array.from(new Set(newObj));
    return uniqueItems.sort((a, b) => {
        return a > b ? 1 : -1;
    }).map(i => {
        return i;
    })
};

//REMOVE DUPLICATE IN ARRAY
function removeDuplicate(arr){
    return uniqueItems = Array.from(new Set(arr))
}

//SORT JOB VIA TITLE IN ASCENDING ORDER
function sortAsc(arr){
    return arr.sort((a, b) => a.localeCompare(b))
}

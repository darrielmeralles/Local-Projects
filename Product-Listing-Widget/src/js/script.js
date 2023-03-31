let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		medList: [
			{
				Item_Id: 1,
				Title: "Acerola Plod, Suh Izvlecek, Min. Vitamin C 25%",
				Subtitle:"Lat: Malpighia Punicifolia",
				Sifra_Proizvajalca:"HP 774/150",
				Volumen:"150 ml",
				Maksimalen_Volumen:"158 ml",
				Premer:"51,6 mm",
				Visina:"122,8 mm",
				Teza:"98 g",
				Tip_Stekla:"Belo III + Jantar rjava III",
				Grlo:"PFP 28",
				Pakiranje:"88 kos",
				Pakiranje_1:"1kg",
				Pakiranje_2:"5kg",
				Pakiranje_3:"10kg",
				Ident_1:"0010",
				Ident_2:"0011",
				Ident_3:"0012",
				Cas_1:"66-84-2",
				Cas_2:"66-84-2",
				Cas_3:"66-84-2",
				Inci_1:"Glucosamin sulfate",
				Inci_2:"Glucosamin sulfate",
				Inci_3:"Glucosamin sulfate",
				Link_1:"https://www.google.com/",
				Link_2:"https://www.google.com/",
				Link_3:"https://www.google.com/",
				Dokumenti_surovine:"https://www.google.com/",
				Images: 'https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal3.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal2.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal1.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal1.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal1.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal1.jpg'
			},
			{
				Item_Id: 2,
				Title: "Sample, Suh Izvlecek, Min. Vitamin C 50%",
				Subtitle:"Lat: Malpighia Punicifolia",
				Sifra_Proizvajalca:"HP 774/150",
				Volumen:"150 ml",
				Maksimalen_Volumen:"158 ml",
				Premer:"51,6 mm",
				Visina:"122,8 mm",
				Teza:"98 g",
				Tip_Stekla:"Belo III + Jantar rjava III",
				Grlo:"PFP 28",
				Pakiranje:"88 kos",
				Pakiranje_1:"1kg",
				Pakiranje_2:"5kg",
				Pakiranje_3:"10kg",
				Ident_1:"0010",
				Ident_2:"0011",
				Ident_3:"0012",
				Cas_1:"66-84-2",
				Cas_2:"66-84-2",
				Cas_3:"66-84-2",
				Inci_1:"Glucosamin sulfate",
				Inci_2:"Glucosamin sulfate",
				Inci_3:"Glucosamin sulfate",
				Link_1:"https://www.google.com/",
				Link_2:"https://www.google.com/",
				Link_3:"https://www.google.com/",
				Dokumenti_surovine:"https://www.google.com/",
				Images: 'https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal3.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal2.jpg,https://irt-cdn.multiscreensite.com/edb6655af63949cc93dd07aa38c7b398/dms3rep/multi/cargal1.jpg'
			}
		],
		listingSlideToShow: 4,
		autoPlayListingSlide: false,
		arrowToggle: true,
		interval: 3000,
		animSpeed: 200,
		layout: 'layout2' //layout2
	}
};

let layout = data.config.layout;
let listingSlideToShow = data.config.listingSlideToShow;
let arrowDiv = $(element).find('.arrowsWrapper');
let arrowToggle = data.config.arrowToggle;
let autoPlayListingSlide = data.config.autoPlayListingSlide;
let interval = data.config.interval;
let animSpeed = data.config.animSpeed;
let medList = data.config.medList;

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
dmAPI.runOnReady('init', function () {

	dmAPI.loadScript('https://irp-cdn.multiscreensite.com/e70fa563a8d442bc81646ad9d635638a/files/uploaded/fuse.js', function() { 
		dmAPI.loadScript('https://irt-cdn.multiscreensite.com/8914113fe39e47bcb3040f2b64f71b02/files/uploaded/paginates.min.js', function() { 
			dmAPI.loadScript('https://irp-cdn.multiscreensite.com/f49f126e/files/uploaded/slick.min.js', function() { 

			//append categor in dropdown
			let bCat = medList.map(a => a.Item_Id);
			
			console.log(bCat, "bCat");
			//append onload
			console.log(layout, "layout ");
			if(layout == "layout1"){
				let appdef = medList.map(function(i){
					return layout1(i);
				})
				$(element).find(".accordionContainer").html(appdef);
			}else{
				let appdef = medList.map(function(i){
					return layout2(i);
				})
				$(element).find(".accordionContainer").html(appdef);
			}
			
			

			sliderAccor();
			initGallery();
			});





		});
	});


})

//ONCLICK SEARCH
$(element).find('.searchField').keyup(function(event) {
	if (event.keyCode == '13') {
		let keyword = $(this).val();
		console.log(keyword, "keyword");
		if(keyword != ""){
			let result = searchByBusinessKey(medList,keyword);
			console.log(result, "result ");
			if(layout == "layout1"){
				let appdef = result.map(function(i){
					return layout1(i);
				})
				$(element).find(".accordionContainer").html(appdef);
				sliderAccor();
			}else{
				let appdef = result.map(function(i){
					return layout2(i);
				})
				$(element).find(".accordionContainer").html(appdef);
				sliderAccor();
			}
		}

	}else{
		if(layout == "layout1"){
			let appdef = medList.map(function(i){
				return layout1(i);
			})
			$(element).find(".accordionContainer").html(appdef);
			sliderAccor();
		}else{
			let appdef = medList.map(function(i){
				return layout2(i);
			})
			$(element).find(".accordionContainer").html(appdef);
			sliderAccor();
		}
		
	}
});


//SEARCH BY JOB KEY
function searchByBusinessKey(arr,keyword){
    let options = {
        shouldSort: true,
        threshold: 0.2,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "Title"
        ]
    };
    let fuse = new Fuse(arr, options);
    let result = fuse.search(keyword);
    return result;
}

//CREATE JOB GRID LAYOUT
function layout1(b){
	let separatedImage = b.Images.split(",");
    let j = `<ol class="list-item hasBackgroundOverlay">
				<div class="list-container">
					<div class="list-container-item">
						<!--h4 list title-->
						<div class="listTitle">
							<p class="ptitle">${b.Title}</p>
							<p class="psub">${b.Subtitle}</p>
						</div>

					</div>
					<!--col with icon arrow dm-icon-p_arrow_right-->
					<div class="list-container-item limg">
						<div class="numCon">
							<i class="fa-solid fa-chevron-down"></i>
							<i class="fa-solid fa-chevron-up"></i>
						</div>
					</div>
				</div><!--end list container-->
				<ul class="hidefirst">
					<ol class="accContent hasBackgroundOverlay acc{{accImgSize}}">
						<div class="acc{{accImgPos}} accImageTextContainer">
							<div class="accTextContainer">
								<table class="tblMed">
									<tr>
									<th>PAKIRANJE</th>
									<th>IDENT</th>
									<th>CAS</th>
									<th>INCI</th>
									<th></th>
									</tr>
									<tr>
									<td>${b.Pakiranje_1}</td>
									<td>${b.Ident_1}</td>
									<td>${b.Cas_1}</td>
									<td>${b.Inci_1}</td>
									<td>
										<button class="btnLink">Povprasevanje</button>
									</td>
									</tr>
									<tr>
									<td>${b.Pakiranje_2}</td>
									<td>${b.Ident_2}</td>
									<td>${b.Cas_2}</td>
									<td>${b.Inci_2}</td>
									<td>
										<button class="btnLink">Povprasevanje</button>
									</td>
									</tr>
									<tr>
									<td>${b.Pakiranje_3}</td>
									<td>${b.Ident_3}</td>
									<td>${b.Cas_3}</td>
									<td>${b.Inci_3}</td>
									<td>
										<button class="btnLink">Povprasevanje</button>
									</td>
									</tr>
									
								</table>
								<div class="imgContent">
									<div class="leftContent">
										<p>Dokumenti surovine</p>
										<div class="lockContent">
											<i class="fa-solid fa-lock"></i>
											<!-- <i class="fa-solid fa-lock-open"></i> -->
											<button class="btnLink">Odkleni</button>
										</div>
									</div>
									<div class="rightContent">
										${
											separatedImage.map(function(i){
												return `<div class="imgThumb" style="background-image: url(${i});"></div>`;    
											}).join("")
										}
					
										
									</div>
								</div>
							</div>
						</div>
					</ol>
				</ul> 
			</ol>`
    return j;
}

function layout2(b){
	let separatedImage = b.Images.split(",");
    let j = `<ol class="list-item hasBackgroundOverlay">
				<div class="list-container">
					<div class="list-container-item">
						<!--h4 list title-->
						<div class="listTitle">
							<p class="ptitle">${b.Title}</p>
							<p class="psub">${b.Subtitle}</p>
						</div>

					</div>
					<!--col with icon arrow dm-icon-p_arrow_right-->
					<div class="list-container-item limg">
						<div class="numCon">
							<i class="fa-solid fa-chevron-down"></i>
							<!-- <i class="fa-solid fa-chevron-up"></i> -->
						</div>
					</div>
				</div><!--end list container-->
				<ul class="hidefirst">
					<ol class="accContent hasBackgroundOverlay acc{{accImgSize}}">
						<div class="acc{{accImgPos}} accImageTextContainer">
							<div class="accTextContainer">
								<div class="layout2-wrapper">
									<div class="col1-wrap">
										<!-- Primary carousel image -->

										<div class="show" href="1.jpg">
										<img src="./src/images/1.png" id="show-img-${b.Item_Id}">
										</div>
								
										<!-- Secondary carousel image thumbnail gallery -->
								
										<div class="small-img">
										<img src="./src/images/next-icon.png" class="icon-left" alt="" id="prev-img">
										<div class="small-container">
										<div id="small-img-roll">
											<img data-id="show-img-${b.Item_Id}" src="https://images.pexels.com/photos/5029301/pexels-photo-5029301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="show-small-img" alt="">
											<img data-id="show-img-${b.Item_Id}" src="https://images.pexels.com/photos/11837301/pexels-photo-11837301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="show-small-img" alt="">
											<img data-id="show-img-${b.Item_Id}" src="https://images.pexels.com/photos/12296890/pexels-photo-12296890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="show-small-img" alt="">
											<img data-id="show-img-${b.Item_Id}" src="https://images.pexels.com/photos/5110955/pexels-photo-5110955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="show-small-img" alt="">
										</div>
										</div>
										<img src="./src/images/next-icon.png" class="icon-right" alt="" id="next-img">
										</div> 
									</div>
									<div class="col2-wrap">
										<table class="tblMed2">
											<tr>
												<td>SIFRA PROIZVAJALCA</td>
												<td>${b.Sifra_Proizvajalca}</td>
											</tr>
											<tr>
												<td>VOLUMEN</td>
												<td>${b.Volumen}</td>
											</tr>
											<tr>
												<td>MAKSIMALEN VOLUMEN</td>
												<td>${b.Maksimalen_Volumen}</td>
											</tr>
											<tr>
												<td>PREMER</td>
												<td>${b.Premer}</td>
											</tr>
											<tr>
												<td>VISINA</td>
												<td>${b.Visina}</td>
											</tr>
											<tr>
												<td>TEZA</td>
												<td>${b.Teza}</td>
											</tr>
											<tr>
												<td>TIP STEKLA</td>
												<td>${b.Tip_Stekla}</td>
											</tr>
											<tr>
												<td>GRLO</td>
												<td>${b.Grlo}</td>
											</tr>
											<tr>
												<td>PAKIRANJE</td>
												<td>${b.Pakiranje}</td>
											</tr>
										</table>
									</div>
									<div class="col3-wrap">
										<button class="btnLink">Povprasevanje</button>
									</div>
								</div>
							</div>
						</div>
					</ol>
				</ul> 
			</ol>`
    return j;
}

function sliderAccor(){
	//accordion
	(function(){
		var $element = $(element);
		$element.find('#accordion > ol > div').click(function(){
			var $this = $(this);
			//$element.find('#accordion').find('ol').find('div').removeClass('acc-active');
			$element.find('#accordion').find('ol').find('.list-container').removeClass('acc-active');
			//if (false === $this.next().is(':visible')){
			if (!$this.next().is(':visible')){
				$(element).find('#accordion').find('ol').find('div').next('ul').slideUp();
				$this.addClass('acc-active');
			}
			$this.next().slideToggle();
		});
		$(element).find('ul.rteBlock li').each(function(){
			if($(this).text() != ""){
				   
			}else{
				$(this).css("opacity","0");
			}
		});
	})();
	//accordion
	
}


function initGallery(){
	//Initialize product gallery

	// $('.show').zoomImage();

	$('.show-small-img:first-of-type').css({'border': 'solid 1px #951b25', 'padding': '2px'})
	$('.show-small-img:first-of-type').attr('alt', 'now').siblings().removeAttr('alt')
	$('.show-small-img').click(function () {

		let imgs =  $(this).attr('src');
		let imgId = $(this).data('id');
		console.log(imgs, "imgs");
		console.log(imgId, "imgId");

		$(`#${imgId}`).attr('src', $(this).attr('src'))
		$('#big-img').attr('src', $(this).attr('src'))
		$(this).attr('alt', 'now').siblings().removeAttr('alt')
		$(this).css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
		if ($('#small-img-roll').children().length > 4) {
			if ($(this).index() >= 3 && $(this).index() < $('#small-img-roll').children().length - 1){
			$('#small-img-roll').css('left', -($(this).index() - 2) * 76 + 'px')
			} else if ($(this).index() == $('#small-img-roll').children().length - 1) {
			$('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
			} else {
			$('#small-img-roll').css('left', '0')
			}
		}
		console.log("click image");
	})

	//Enable the next button

	$('#next-img').click(function (){
	$(`#${imgId}`).attr('src', $(".show-small-img[alt='now']").next().attr('src'))
	$('#big-img').attr('src', $(".show-small-img[alt='now']").next().attr('src'))
	$(".show-small-img[alt='now']").next().css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
	$(".show-small-img[alt='now']").next().attr('alt', 'now').siblings().removeAttr('alt')
	if ($('#small-img-roll').children().length > 4) {
		if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
		$('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 76 + 'px')
		} else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
		$('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
		} else {
		$('#small-img-roll').css('left', '0')
		}
	}
	})

	//Enable the previous button

	$('#prev-img').click(function (){
	$(`#${imgId}`).attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
	$('#big-img').attr('src', $(".show-small-img[alt='now']").prev().attr('src'))
	$(".show-small-img[alt='now']").prev().css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
	$(".show-small-img[alt='now']").prev().attr('alt', 'now').siblings().removeAttr('alt')
	if ($('#small-img-roll').children().length > 4) {
		if ($(".show-small-img[alt='now']").index() >= 3 && $(".show-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
		$('#small-img-roll').css('left', -($(".show-small-img[alt='now']").index() - 2) * 76 + 'px')
		} else if ($(".show-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
		$('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
		} else {
		$('#small-img-roll').css('left', '0')
		}
	}
	})
	
	
}
let element = $('.widget-abc123');
let data = {
	device: 'desktop', //desktop, tablet, mobile
	inEditor: true,
	siteId: '',
	elementId: '',
	config: {
		sampleList: [{}],
		sample:''
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


dmAPI.runOnReady('init', function () {
	(function($) {
		$.fn.timeline = function() {
		  var selectors = {
			id: $(this),
			item: $(this).find(".timeline-item"),
			activeClass: "timeline-item--active",
			img: ".timeline__img"
		  };
		  selectors.item.eq(0).addClass(selectors.activeClass);
		  selectors.id.css(
			"background-image",
			"url(" +
			  selectors.item
				.first()
				.find(selectors.img)
				.attr("src") +
			  ")"
		  );
		  var itemLength = selectors.item.length;
		  $(window).scroll(function() {
			var max, min;
			var pos = $(this).scrollTop() + 150;
			selectors.item.each(function(i) {
			  min = $(this).offset().top;
			  max = $(this).height() + $(this).offset().top;

			  var that = $(this);

			  console.log(min, "min");
			  console.log(max, "max");
			  console.log(i, "i");
			  console.log(itemLength, "itemLength");

			  if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
				selectors.item.removeClass(selectors.activeClass);
				selectors.id.css(
				  "background-image",
				  "url(" +
					selectors.item
					  .last()
					  .find(selectors.img)
					  .attr("src") +
					")"
				);
				selectors.item.last().addClass(selectors.activeClass);
			  } else if (pos <= max - 40 && pos >= min) {
				selectors.id.css(
				  "background-image",
				  "url(" +
					$(this)
					  .find(selectors.img)
					  .attr("src") +
					")"
				);
				selectors.item.removeClass(selectors.activeClass);
				$(this).addClass(selectors.activeClass);
			  }
			});
		  });
		};
	  })(jQuery);
	  
	  $("#timeline-1").timeline();
	  
})

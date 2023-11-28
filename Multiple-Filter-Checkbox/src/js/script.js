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
	var items = [
		{ name: 'Item 1', category1: 'A', category2: 'X', category3: 'I', category4: 'Red', price: 10 },
		{ name: 'Item 2', category1: 'B', category2: 'Y', category3: 'II', category4: 'Green', price: 20 },
		{ name: 'Item 3', category1: 'A', category2: 'X', category3: 'I', category4: 'Blue', price: 15 },
		{ name: 'Item 4', category1: 'C', category2: 'Z', category3: 'III', category4: 'Red', price: 25 },
		// Add more items as needed
	  ];
	
	  $(document).ready(function() {
		// Function to filter items based on selected categories and minimum price
		function filterItems(selectedCategories1, selectedCategories2, selectedCategory3, selectedCategory4, minPrice) {
		  return items.filter(function(item) {
			return (selectedCategories1.length === 0 || selectedCategories1.includes(item.category1)) &&
				   (selectedCategories2.length === 0 || selectedCategories2.includes(item.category2)) &&
				   (selectedCategory3 === 'All' || item.category3 === selectedCategory3) &&
				   (selectedCategory4 === 'All' || item.category4 === selectedCategory4) &&
				   item.price >= minPrice;
		  });
		}
	
		// Function to display items
		function displayItems(itemsToShow) {
		  // Clear previous content
		  $('#result').empty();
	
		  // Display items
		  $.each(itemsToShow, function(index, item) {
			$('#result').append('<p>' + item.name + ' - Category 1: ' + item.category1 + ' - Category 2: ' + item.category2 + ' - Category 3: ' + item.category3 + ' - Category 4: ' + item.category4 + ' - Price: $' + item.price + '</p>');
		  });
		}
	
		// Display all items on page load
		displayItems(items);
	
		// Handle checkbox changes for Category 1
		$('.category1Checkbox').on('change', function() {
		  updateFilteredItems();
		});
	
		// Handle checkbox changes for Category 2
		$('.category2Checkbox').on('change', function() {
		  updateFilteredItems();
		});
	
		// Handle dropdown change for Category 3
		$('#category3Dropdown').on('change', function() {
		  updateFilteredItems();
		});
	
		// Handle radio button change for Category 4
		$('input[name="category4Radio"]').on('change', function() {
		  updateFilteredItems();
		});
	
		// Handle range slider change for Minimum Price
		$('#minPriceRangeSlider').on('input', function() {
		  updateFilteredItems();
		});
	
		// Update filtered items based on all filters
		function updateFilteredItems() {
		  var selectedCategories1 = $('.category1Checkbox:checked').map(function() {
			return this.value;
		  }).get();
		  var selectedCategories2 = $('.category2Checkbox:checked').map(function() {
			return this.value;
		  }).get();
		  var selectedCategory3 = $('#category3Dropdown').val();
		  var selectedCategory4 = $('input[name="category4Radio"]:checked').val();
		  var minPrice = $('#minPriceRangeSlider').val();
		  console.log('Selected values: ', selectedCategories1, selectedCategories2, selectedCategory3, selectedCategory4, minPrice);
		  var filteredItems = filterItems(selectedCategories1, selectedCategories2, selectedCategory3, selectedCategory4, minPrice);
		  console.log('Filtered items: ', filteredItems);
		  displayItems(filteredItems);
		}
	  });
	  
})


// total time spent on page

$(document).ready(function() {
	var start;
	var end;
	var vowel;

	// time spent on page
	start = Date.now();
	$(window).on('beforeunload',function(event) {
		end = Date.now();
		console.log("User spent " + (end - start) / 1000 + "seconds");
	});

	// percentage the user viewed
	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var scrollTop = $(window).scrollTop();
	var totalLength = documentHeight - windowHeight;
	var percentageScrolled = Math.floor(scrollTop/totalLength * 100)
	console.log(percentageScrolled + '% viewed')

	//time spent hovering over each element
	//first pug image
	$('.pug-image1').mouseover(function() {
		start  = Date.now();
	});
	$('.pug-image1').mouseleave(function() {
		end = Date.now();
		console.log((end - start) / 100);
	});
	//first paragraph

	//second pug picture

	//first link


	//second paragraph


	//second link

	//third pug picture


	//input field
	// how many vowels typed in input
	$('.input').keyup(function(){
		var x = $('.input').val();
		if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
			vowel = x;
			console.log(vowel)
	}
	});

	// which link did they click
	$('link').click(function(){
		console.log($('link').val());
	})
});

// var finalReport = $(window).on('beforeunload', function(event){
// 	return 
//          Needs to return
//         1) total time spent on page
//         2) what percentage of the page they viewed ( how far they scrolled down)
//         3) time spent hovering over each element on the page
//         4) how many vowels they typed in the input
//         5) if they left page by clicking a link, record which link

// 		time-spent on page - take date method from page load and subtract from leaving page and do the math
//         scroll-top - find what percentage of the page they viewed


        
//     })
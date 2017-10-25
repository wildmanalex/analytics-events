// total time spent on page

$(document).ready(function() {
	var start;
	var end;
	var vowel = 0;
	var hovering;
	var timespent;
	var amountviewed;
	var vowelstyped

	// time spent on page
	start = Date.now();
	$(window).on('beforeunload',function(event) {
		end = Date.now();
		timespent = ("User spent " + (end - start) / 1000 + " seconds on the page");
	});

	// percentage the user viewed
	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var scrollTop = $(window).scrollTop();
	var totalLength = documentHeight - windowHeight;
	var percentageScrolled = Math.floor(scrollTop/totalLength * 100)
	amountviewed = (percentageScrolled + '% viewed')

	//time spent hovering over each element
	//first pug image
	$('.pug-image1').mouseover(function() {
		start  = Date.now();
	});
	$('.pug-image1').mouseleave(function() {
		end = Date.now();
		hovering += ("User spent " + ((end - start) / 100) + " seconds on the first pug image");
	});
	//first paragraph
	$('.paragraph1').mouseover(function() {
	start  = Date.now();
	});
	$('.paragraph1').mouseleave(function() {
		end = Date.now();
		hovering += ("User spent " + ((end - start) / 100) + " seconds on the first paragraph");
	});
	//second pug picture
	$('.pug-image2').mouseover(function() {
	start  = Date.now();
	});
	$('.pug-image2').mouseleave(function() {
		end = Date.now();
		hovering += ("User spent " + ((end - start) / 100) + " seconds on the second pug image");
	});
	//first link
	$('.link1').mouseover(function() {
	start  = Date.now();
	});
	$('.link1').mouseleave(function() {
		end = Date.now();
		hovering += ("User spent " + ((end - start) / 100) + " seconds on the first link");
	});
	//second paragraph
	$('.paragraph2').mouseover(function() {
	start  = Date.now();
	});
	$('.paragraph2').mouseleave(function() {
		end = Date.now();
		hovering += ("User spent " + ((end - start) / 100) + " seconds on the second paragraph");
	});

	//second link
	$('.link2').mouseover(function() {
	start  = Date.now();
	});
	$('.link2').mouseleave(function() {
		end = Date.now();
		hovering += ("User spent " + ((end - start) / 100) + " seconds on the second link");
	});
	//third pug picture
	$('.pug-image3').mouseover(function() {
	start  = Date.now();
	});
	$('.pug-image3').mouseleave(function() {
		end = Date.now();
		hovering += ("User spent " + ((end - start) / 100) + " seconds on the third pug image");
	});

	//input field
	$('.input').mouseover(function() {
	start  = Date.now();
	});
	$('.input').mouseleave(function() {
		end = Date.now();
		hovering += ("User spent " + ((end - start) / 100) + " seconds on the input field");
	});
	// how many vowels typed in input
	$(document).keydown(function(event){
		
		// var x = $('.input').val();
			if (event.key === 'a' || event.key === 'e' || event.key === 'i' || event.key === 'o' || event.key === 'u') {
				vowel += 1;
				vowelstyped = ("User typed " + vowel + " vowels");
			}
	});

	// which link did they click
	$('link').click(function(){
		console.log($('link').val());
	});

	var finalReport = $(window).on('beforeunload', function(event){
		console.log(timespent);
		console.log(amountviewed);
		console.log(vowelstyped);
		console.log();
		console.log(hovering);
	})
});

//          Needs to return
//         1) total time spent on page
//         2) what percentage of the page they viewed ( how far they scrolled down)
//         3) time spent hovering over each element on the page
//         4) how many vowels they typed in the input
//         5) if they left page by clicking a link, record which link

// 		time-spent on page - take date method from page load and subtract from leaving page and do the math
//         scroll-top - find what percentage of the page they viewed

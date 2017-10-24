// total time spent on page

$(document).ready(function() {
	var start;
	var end;




	// start = Date.getTime();
	// var now = new Date ()
	var start = Date.now();
	$(window).on('beforeunload',function(event) {
		// var end = Date.getTime();
		// var end = new Date ();
		var end = Date.now();
	console.log((end - start) / 1000);
	});
});

// percentage the user viewed
// 1) find the height of the page
var windowHeight = $(window).height();
var documentHeight = $(document).height();
var scrollTop = $(window).scrollTop();
var totalLength = documentHeight - windowHeight;
var percentageScrolled = Math.floor(scrollTop/totalLength * 100)
console.log(percentageScrolled + '% viewed')

//time spent hovering over each element
$('.pug-image1').mouseover(function() {
	start  = Date.now();
});

$('.pug-image1').mouseleave(function() {
	end = Date.now();
	console.log((end - start) / 100);
});


// how many vowels typed in input
var vowels = function() {
	if($('.input').val() )
	var sss = $('.input').val()
	if()
console.log(sss);

};




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
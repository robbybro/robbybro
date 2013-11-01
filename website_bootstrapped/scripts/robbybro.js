/* Robby Brosman wrote this js file for use on his website */
$(document).ready(function(){
	// changes the color of the logo when it is scrolled over
	$(".navbar-brand").mouseenter(function() {
		$("#logo").attr("src", "img/logo_littleBlack.png");
	}).mouseleave(function() {
		$("#logo").attr("src", "img/logo_littleWhite.png");
	});

	renderPortfolio(); // populate design and development work in the web page

	$(window).scroll(function() {
		stretchMenu();
	});
});

/* uses an html template and portfolio javascript object to populate the design and development
   portions of the site
 */
function renderPortfolio() {
	var template = $('.template');
	var designBucket = $('#design');
	var developmentBucket = $('#develop');
	var templateClone;
	// iterate through design pieces
	$.each(Portfolio.design, function() {
		templateClone = template.clone();
		templateClone.find('img').attr({
			src: this.image,
			alt: this.projectTitle
		});
		templateClone.find('.title').html(this.projectTitle);
		templateClone.find('.description').html(this.description);
		$('#design').append(templateClone);
	});
}

/* resizes the body content with the window */
function windowResize() {
	$(".jumbotron").height($(window).height() - 100);
	$(window).resize(function() {
		$(".jumbotron").height($(window).height() - 100);
	}); // resize every time after
}

/* stretches the menu bar when it reaches the bottom of the #intro section.
   use a global variable to see if the animation is happening or not and don't
   let it keep happening if it is. Then use a callback function to set global
   variable to false.
*/
function stretchMenu() {
	if($("#design").offset().top <= $("header").offset().top + $("header").height() && $("header").width != 100 && !animating){
		console.log("Expanding navbar... ");
		animationFlagger(); // change animating to true.
		$("header").animate({
			'width' : '100%',
			'top' : '0px',
			'right' : '0%'
		}, 500, function() {
			animationFlagger();
		}); // callback turns animating false again
	} else if($("#design").offset().top > $("header").offset().top + $("header").height() + 100 && $("header").width != 75 && !animating){
		console.log("Contratcting navbar... ");
		animationFlagger(); // change animating to true
		$("header").animate({
			'width' : '75%',
			'top' : '100px',
			'right' : '12.5%'
		}, 500, function() {
			animationFlagger();
		});
	}
}

// Moves the social media buttons left and down, framing an appearing email submission form. Called when the email button is clicked.
function contactAnimate() {
	// move social media buttons left
	// move social media buttons down
	// cause email form to appear
}

// holds design and development portfolio pieces for site population
var Portfolio = {
	design: [
		{image: 'C:\\Users\\Robby\\Dropbox\\robbybro\\website_bootstrapped\\img\\hrcShirt.jpg', imageDescription: HRC_DESIGN_DESC, projectTitle: 'Husky Running Club Shirt Design'},
		{image: '../img/robbybro.jpg', imageDescription: ROBBYBRO_DESC, projectTitle: 'Robby Brosman Logo Redesign'},
		{image: '../img/purpleSquirrel.jpg', imageDescription: PURPLE_SQUIRREL_DESC, projectTitle: 'Purple Squirrel'}
	],
	develop: [
		{image: '', imageDescription: '', projectTitle: ''}
	]
};


// keeps track of whether navbar if expanding or contracting. If navbar is in mid-animation,
// animating is true. If the animation is over, animating is false.
var animating = false;
var animationNum = 0;
function animationFlagger() {
	animating = !animating;
	// keep track of what animation you are on
	animationNum ++;
	// keep track of time
	var now = new Date();
    now = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
    console.log("Number of calls: " + animationNum + ", Time: " + now + ", Animating: " + animating);
}
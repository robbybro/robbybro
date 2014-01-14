/* Robby Brosman wrote this js file for use on his website */

// globals
var homeHeight;
var deskTab;
var mobile;
var windowHeight;
var windowWidth;

$(function(){
	// run all the stuff where screensize doesn't matter
	universalController();

	environmentChecker();
	//  var desktop = false; // width >= 1000
    deskTab = false; // 875 < width < 1000
    mobile = false; // width =< 875
	// check screensize and run the stuff where screensize matters
	environmentChecker();

    $(window).resize(function(){
        environmentChecker();
    });
}); //document.onLoad


function universalController() {
	// changes the color of the logo when it is scrolled over
	$(".navbar-brand").mouseenter(function() {
		$("#logo").attr("src", "img/logo_littleBlack.png");
	}).mouseleave(function() {
		if(!($('.navbar-brand').hasClass('active'))) {
			$("#logo").attr("src", "img/logo_littleWhite.png");
		}
	});


	navbarAnimate();
	windowResize('#home');
	parallax(); // move the very mountains

	$('.project-panel img').click(function() {
		$('.project-panel').find('.fullscreen-project').remove();
		$('.project-panel').animate({
			'left' : $(window).width() + 'px'
		}, 500, function() {$('.project-panel').css('display', 'none');});
		$('body').css('overflow', 'scroll');
	});
} // universalController

// checks if mobile or larger, and rnders portfolio and navbar accordingly
function environmentChecker() {
    console.log('environmentChecker `fired');
    if($(window).width() >= 875 && deskTab == false) {
    	// desktop = true;
    	console.log('rendering deskTab view');
    	deskTab = true;
    	mobile = false;
    	// nuke mobile area
    	if($('.mobile-field') != undefined) {
    		$('.mobile-field').remove();
    	}
    	deskTabController();
    }

    if($(window).width() < 875 && mobile == false) {
    	console.log('rendering mobile view');
    	deskTab = false;
    	mobile = true;
    	// nuke deskTab area
		if($('.hex-field') != undefined) {
			$('.hex-field').remove();
		}
    	mobileController();
    }

}; //environmentChecker

// handles mobile view stuff
function mobileController() {
	renderMobilePortfolio();
}

// handles desktop and tablet view stuff
function deskTabController() {
	renderDeskTabPortfolio();
}

function parallax() {
	// home range
	$.stellar({
		 horizontalScrolling: false
	});
}

/* uses an html template and portfolio javascript object to populate the portfolio and development
   portions of the site
 */
function renderDeskTabPortfolio() {
	// create area to drop hexagons
	if($('.hex-field') != undefined) {
		var hexFieldPiece = document.createElement('div');
		var hexField = $(hexFieldPiece).clone().addClass('hex-field');
		var hexThreeRow_One = $(hexFieldPiece).clone().addClass('hex-3-row');
		var hexThreeRow_Two = $(hexThreeRow_One).clone();
		var hexFourRow = $(hexFieldPiece).clone().addClass('hex-4-row');
		$(hexField).append($(hexThreeRow_One)).append($(hexFourRow)).append($(hexThreeRow_Two));
		$('#portfolio').append($(hexField));
		


		// grab hex template
		var hexTemplate = $('.hex-template')[0];
		var hexCounter = 0;
		var idx;
		for(idx=0; idx < Portfolio.length; idx++) {
			var project = Portfolio[idx];
			// console.log('project: ' + project);
			hexCounter++;
			var hex = $(hexTemplate).clone();
			$(hex).removeClass('hex-template');
			$(hex).addClass('hex').addClass('project');
			$(hex).addClass(project.name);
			$(hex).attr('project-name', project.name);
			$(hex).find('.inner').append(project.inner);
			$(hex).find('.hover-inner').html(project.description);

			// add background images to project hexagons that specify them
			if(project.backgroundImage) {
				console.log('this one has a background image: ' + project.backgroundImage);
				$(hex).find('a').css('background-image', project.backgroundImage);
				console.log($(hex).find('a').css('background-image'));
			}
			// add proper tagging classes
			if(project.design) {
				$(hex).addClass('design');
			}
			if(project.develop) {
				$(hex).addClass('develop');
			}

			//append the hexagon tho the right row
			if(hexCounter <= 3) {
				$($('.hex-3-row')[0]).append($(hex));
			} else if(hexCounter > 3 && hexCounter <= 7) {
				$($('.hex-4-row')[0]).append($(hex));
			} else if(hexCounter > 7 && hexCounter <= 10) {
				$($('.hex-3-row')[1]).append($(hex));
			}
		}

		var hexField = $('.hex-field');

		$('.hex a').hover(function(){
			$(this).find('.inner').hide();
			$(this).parent().find('.hover-inner').show();
			// $(this).addClass('hex-hover');
		}, function(){
			$(this).find('.hover-inner').hide(); // do it immediately so stuff doesn't get messed up
			$(this).find('.inner').fadeIn();
			// $(this).removeClass('hex-hover');
		});

		$('.project').click(function() {
			fullScreenPortfolio($(this).attr('project-name'));
		});
	}
}

function renderMobilePortfolio() {
	console.log('rendering mobile portfolio.');
	// create are for mobile portfolio to be placed
	if($('.mobile-field') != undefined) {
		$('#portfolio').append($(document.createElement('div')).addClass('mobile-field'));
	}
	var mobileTemplate = $('.mobile-portfolio-template')[0];
	var idx;
	for(idx=0; idx < Portfolio.length; idx++) {
		var project = Portfolio[idx];
		if(project.name != 'design' && project.name != 'develop') {
			var mobileTemplateClone = $(mobileTemplate).clone();
			$(mobileTemplateClone).removeClass('mobile-portfolio-template');
			$(mobileTemplateClone).addClass('mobile-portfolio').addClass('project');
			$(mobileTemplateClone).attr('project-name', project.name);
			$(mobileTemplateClone).find('p').append(project.description);

			// add proper tagging classes
			if(project.design) {
				$(mobileTemplateClone).addClass('design');
			}
			if(project.develop) {
				$(mobileTemplateClone).addClass('develop');
			}
			// console.log(mobileTemplateClone);
			$('.mobile-field').append(mobileTemplateClone);
		}
	}
	$('.project').click(function() {
		fullScreenPortfolio($(this).attr('project-name'));
	});}

function fullScreenPortfolio(projectName) {

	console.log(projectName + ' clicked!');
	event.preventDefault();
	$('body').css('overflow', 'hidden');

	$('.project-panel').css({
		'display' : 'block',
		'left' : $(window).width() + 'px',
		'top' : $(window).scrollTop(),
		'width' : $(window).width() + 'px',
		'height' : $(window).height() + 'px'
	}).animate({
		'left' : '0px',
	});

	var fullScreenTemplate = $('.fullscreen-project-template');
	var fullScreenPortfolio;
	var idx = 0;
	$.each(Portfolio, function() {
		if(this.name != "develop" || this.name != "design") {
			var fullScreenProject = $(fullScreenTemplate).clone().removeClass('fullscreen-project-template').addClass('fullscreen-project');
			fullScreenProject.find('.project-title').text(this.name);
			fullScreenProject.find('.project-img').attr('src', this.fullScreenImage);
			fullScreenProject.find('.project-description').text(this.description);
			$('.project-panel').append(fullScreenProject);

			$(fullScreenProject).css('left', idx+'00%');
			idx++;
			//fullScreenPortfolio.push(fullScreenProject);
		}
	});

	// test quo
	$$('.project-panel').swipeLeft(function() {
		console.log('swiped left!');
		$.each($('.fullscreen-project'), function() {
			$(this).animate({'left': $(this).offset().left - $(window).width()});
		});
	});

	$$('.project-panel').swipeRight(function() {
		console.log('swiped right!');
		$.each($('.fullscreen-project'), function() {
			$(this).animate({'left': $(this).offset().left + $(window).width()});
		});	})
}

/* resizes the body content with the window */
function windowResize(div) {
	$(div).height($(window).height() - 100);
	$(window).resize(function() {
		$(div).height($(window).height() - 100);
	}); // resize every time after

	$('.range-div').css('height', $(window).height() - 100);
	$('#portfolio::before').css('top', $(window).height() - 120);
}

/* stretches the menu bar when it reaches the bottom of the #intro section.
   use a global variable to see if the animation is happening or not and don't
   let it keep happening if it is. Then use a callback function to set global
   variable to false.
*/
function navbarAnimate() {
	$(window).scroll(function(i) {
		var scrollTop = $(window).scrollTop();
		var navTop = $("#portfolio").offset().top - $('header').height() - 100;
		if (scrollTop > navTop) {
            $('header').addClass('fixedtop');
        } else {
            $('header').removeClass('fixedtop');
        }
        // trick navbar-brand area into looking like it's part of scrollspy
        $('#home').waypoint(function(direction) {
        	$("#logo").attr("src", "img/logo_littleBlack.png");
			$('.navbar-brand').addClass('active');
			if(direction == 'up') {
				console.log('removing portfolio active');
				$('#portfolio h2').removeClass('active');
			}
        });

        $('#portfolio').waypoint(function(direction) {
        	if(direction == 'down' && !$('.portfolio-menu-button').hasClass('active')) {
				$('.portfolio-menu-button').addClass('active');
        	} else if(direction == 'up' && ($('.portfolio-menu-button').hasClass('active') || $('.contact-menu-button').hasClass('active'))) {
				$('.portfolio-menu-button').removeClass('active');
				$('.contact-menu-button').removeClass('active');
        	}
        	// change home button back to normal
			$("#logo").attr("src", "img/logo_littleWhite.png");
			$('.navbar-brand').removeClass('active');
		}, { offset: 100 });
	});
	
	$(".nav li").on('activate', function() {
		// deactivate all headers
		$.each($('.headers'), function() {
			$(this).removeClass('active');
		});
		// activate the right header
		var section = $(this).find('a').attr('href');
		console.log(section + " activated");
		var sectionHeader = $(section).find('h2');
		$(sectionHeader).addClass('active');
	   // $($(this).find('a').attr('href')).find('h2').addClass('active');
	});

	//easing
	$('.menu-button').click(function() {
		event.preventDefault();
		$('html,body').animate({
          scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1000);
	});
}

// Moves the social media buttons left and down, framing an appearing email submission form. Called when the email button is clicked.
function contactAnimate() {
	// move social media buttons left
	// move social media buttons down
	// cause email form to appear
}

var Portfolio = [
	{
		name: "clearwire",
		inner: "", // goes inside the hexagon
		backgroundImage: '../img/portfolio/clearwire.jpg', // if this is set, instead of an inner set the background image to this
		description: 'Two software development internships at Clearwire', // display on rollover
		develop: true, // true if a dev project, false if not
		design: false, // true if design project, false if not
		fullScreenImage: 'img/portfolio/clearwire.png' // displays in fullscreen portfolio
	 },

	{
		name: "reflex",
		inner: '<img src="img/portfolio/reflex-logo.png">', // goes inside the hexagon
		description: "Research project at UW", // display on rollover
		develop: true, // true if a dev project, false if not
		design: true, // true if design project, false if not
		fullScreenImage: 'img/portfolio/reflex_poster.jpg' // displays in fullscreen portfolio
	},

	{
		name: "hrc",
		inner: '<img src="img/portfolio/hrc-logo.png">', // goes inside the hexagon
		description: "HRC webmaster", // display on rollover
		develop: true, // true if a dev project, false if not
		design: false, // true if design project, false if not
		fullScreenImage: 'img/portfolio/hrc-shoe.jpg' // displays in fullscreen portfolio
	 },

	{
		name: "swingkids",
		inner: '<img src="img/portfolio/swing-kids-logo.png">', // goes inside the hexagon
		description: "UW Swing Kids website and logo", // display on rollover
		develop: true, // true if a dev project, false if not
		design: true, // true if design project, false if not
		fullScreenImage: 'img/portfolio/filler.jpg' // displays in fullscreen portfolio
	 },

	{
		name: "develop",
		inner: "<p>develop</p>", // goes inside the hexagon
		description: "my development projects", // display on rollover
		develop: true, // true if a dev project, false if not
		design: false, // true if design project, false if not
	 },

	{
		name: "design",
		inner: "<p>design</p>", // goes inside the hexagon
		description: "my design projects", // display on rollover
		develop: false, // true if a dev project, false if not
		design: true, // true if design project, false if not
	 },

	{
		name: "arduino",
		inner: "", // goes inside the hexagon
		backgroundImage: '../img/portfolio/arduino-bg.jpg', // if this is set, instead of an inner set the background image to this
		description: "Arduino programs", // display on rollover
		develop: true, // true if a dev project, false if not
		design: false, // true if design project, false if not
		fullScreenImage: 'img/portfolio/arduino.jpg' // displays in fullscreen portfolio
	 },

	{
		name: "hrcdog",
		inner: '<img src="img/portfolio/hrc-dog.png">', // goes inside the hexagon
		description: "2013 HRC shirt design winner", // display on rollover
		develop: false, // true if a dev project, false if not
		design: true, // true if design project, false if not
		fullScreenImage: 'img/portfolio/hrc-dog-sketch.jpg' // displays in fullscreen portfolio
	 },

	{
		name: "robbybrologo",
		inner: '<img src="img/portfolio/robbybro-logo.png">', // goes inside the hexagon
		description: "my logo design", // display on rollover
		develop: false, // true if a dev project, false if not
		design: true, // true if design project, false if not
		fullScreenImage: 'img/portfolio/robbybro-logo-iterations.jpg' // displays in fullscreen portfolio
	 },

	{
		name: "purplesquirrel",
		inner: '<img src="img/portfolio/purple-squirrel-logo.png">', // goes inside the hexagon
		description: "Purple Squirrel logo", // display on rollover
		develop: false, // true if a dev project, false if not
		design: true, // true if design project, false if not
		fullScreenImage: 'img/portfolio/purple-squirrel-logo-words.png' // displays in fullscreen portfolio
	 }
];
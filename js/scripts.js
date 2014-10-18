$(function() {
	var portfolioItemTemplate = $('.portfolio-item-template');

    // make fullscreen slides fullscreen
	fullScreen($(window).height(), setHeaderImg);

	var source   = $("#portfolio-template").html();
	var template = Handlebars.compile(source);
	$('#work .container').append(template(portfolio));

	$(window).on('resize', function() {
		fullScreen($(window).height(), setHeaderImg);
	});

	// easing for buttons and links
    $('.scroll-button').on('click', function() {
        event.preventDefault();
        $('html,body').stop().animate({
                scrollTop : $($(this).attr('data-href')).offset().top
        }, 500);
    });
});

function fullScreen(windowHeight, callback) {
	// $('.header img').css('height', windowHeight + 'px');
	$('.full-screen-slide').css('height', windowHeight + 'px');
	callback(windowHeight);
}

function setHeaderImg(windowHeight) {
	var headerImgHeight = windowHeight - 50 - $('.header img').position().top*2;
	console.log('headerimageheight: ' + headerImgHeight);
	$('.header img').css('height', headerImgHeight + 'px');
}


// function squareifyPortfolio() {
// 	console.log('squarifying!');
// 	// grab each portfolio element and make width = height
// 	// next, set left and top of image to (0,0) and description to (0, width)
// 	// then set hover of image to (0, -width), and description to (0, 0)
// 	var width = $('.col-md-4').css('width');
// 	console.log("portfolio item width: " + width);
	
// 	//set default height, width, and position
// 	$('.portfolio-item').css({
// 		'height' : width + 'px'
// 	});

// 	$('.portfolio-item .image-container').css({
// 		'width' : width + 'px',
// 		'height' : width + 'px'
// 	});

// 	$('.portfolio-item .image-container').css({
// 		'left' : width + 'px'
// 	});
// 	// set hover height, width, and position
// 	$('.portfolio-item:hover .image-container').css({
// 		'left' : '-' + width + 'px'
// 	});

// 	$('.portfolio-item:hover .description-container').css({
// 		'left' : '0px'
// 	});
// }
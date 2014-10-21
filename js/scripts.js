$(function() {
	// handlebars templating portfolio
	var source   = $("#portfolio-template").html();
	var template = Handlebars.compile(source);
	$('#work .container').append(template(portfolio));

    // make fullscreen slides fullscreen
	fullScreen($(window).height(), setHeaderImg);
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

    $('.social-icon').tooltip({ container: 'body' });
});

function fullScreen(windowHeight, callback) {
	// $('.header img').css('height', windowHeight + 'px');
	$('.full-screen-slide').css('height', windowHeight + 'px');
	callback(windowHeight);
}

function setHeaderImg(windowHeight) {
	var headerImgHeight = windowHeight - 50 - $('.header img').position().top*2;
	// console.log('headerimageheight: ' + headerImgHeight);
	$('.header img').css('height', headerImgHeight + 'px');
}
$('html').css('display', 'none');

$(document).ready(function() {

	$('html').fadeIn();

	$('#year').text((new Date).getFullYear());


	$('#hamburger').click(function(){
		$(this).toggleClass('change');
		$('#menu-mobile').animate({height: 'toggle', padding: 'toggle'});
	});

	$('#social').click(function(){
		$('.social-icon').animate({width: 'toggle', padding: 'toggle'});
	});
});


$(document).ready(function(){
	$('.hamburger-menu').click(function(){
		$('.sidebar-wrapper').addClass('show-menu')
	})

	$('.closebtn').click(function(){
		$('.sidebar-wrapper').removeClass('show-menu')
	})


	if( $('form').hasClass('success')){
		$('.fixed-box p').css({'display' : 'none'})
		$('.contact-us-title').css({'display' : 'none'})
		$('.content p').css({'display' : 'none'})
	}

})

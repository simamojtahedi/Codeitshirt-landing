
$(document).ready(function(){
	$('.hamburger-menu').click(function(){
		$('.menu > nav > ul').addClass('show-menu')
	})

	$('.closebtn').click(function(){
		$('.menu > nav > ul').removeClass('show-menu')
	})


	if( $('form').hasClass('success')){
		$('.fixed-box p').css({'display' : 'none'})
		$('.contact-us-title').css({'display' : 'none'})
		$('.content p').css({'display' : 'none'})
	}

	$('#dropdownMenuButton').click(() => {
		$('.s-dropdown-menu').toggleClass('open')
	})

	$('.shop-item-delete').click( function(e) {
		$(e.target).parent().css('display' , 'none')
	})

	$('.shop-item-price').text()

	for( i = 0 ; i< $('.shop-item-price').length; i++ ) {
		console.log(i + $('.shop-item-price').text())
	}
})

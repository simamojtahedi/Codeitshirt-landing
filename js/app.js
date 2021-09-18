
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

	$('#plus').click(() => {
		let value = $('#number').html()
		value ++;
		console.log(value)
	})

	$('#minus').click(() => {
		let value = $('#number').html()
		value -= value;

	})

})

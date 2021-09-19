
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
		$('#s-dropdown-menu').toggleClass('open')
	})

	$('.fa-trash').click( function(e) {
		$(e.target).parent().parent().remove()
	})


	$('#plus').click(() => {
		let value = $('#s_number').text();
		let num = parseInt($('#s_number').text())
		num += 1 ;
		console.log(num);
		value === num;

	})

	$('#minus').click(() => {
		let value = $('#number').html()
		value -= value;

	})

		// $('#basket_badge').text() === $('.basket-item').length


})


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

	$('#dropdownUserButton').click(() => {
		$('#u-dropdown-menu').toggleClass('open')
	})

	$('.fa-trash').click( function(e) {
		$(e.target).parent().parent().remove()
	})


	// $('#plus').click(() => {
	// 	let value = $('#s_number').text();
	// 	let num = parseInt($('#s_number').text())
	// 	num ++ ;
	// 	console.log(num);
	// 	value === num;

	// })

	
	// $('#plus').on('click' , () => {
	// 	let value = $('#s_number').text();
	// 	let num = parseInt(value)
	// 	num ++;
	// 	console.log(num)
	
	// })

	$('#minus').click(() => {
		let value = $('#number').html()
		value -= value;
	})

		// $('#basket_badge').text() === $('.basket-item').length

})


$(document).ready(function(){
  
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots:false,
		autoPlay: 1000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	});

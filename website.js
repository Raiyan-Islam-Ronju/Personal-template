$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.header').addClass("sticky");
		}else{
			$('.header').removeClass("sticky");
		}
	})
});

$('#a1').click(function(){
	$('html, body').animate({
		scrollTop: $('#home').offset().top
	}, 1000)
})
$('#a2').click(function(){
	$('html, body').animate({
		scrollTop: $('#about').offset().top
	}, 1000)
})
$('#a3').click(function(){
	$('html, body').animate({
		scrollTop: $('#service').offset().top
	}, 1000)
})
$('#a4').click(function(){
	$('html, body').animate({
		scrollTop: $('#myskill').offset().top
	}, 1000)
})
$('#a5').click(function(){
	$('html, body').animate({
		scrollTop: $('#contact').offset().top
	}, 1000)
})

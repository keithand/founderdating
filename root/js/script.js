$(document).ready(function(){

	$('#nav-join-button').on('click', function(){
		$('.overlay').fadeIn("fast")
	});

	$('.close-signup-overlay').on('click', function(){
		$('.overlay').fadeOut("fast")
	});

});

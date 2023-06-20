$(function(){
	podcastDescrip();
	scrollForm();


	function podcastDescrip(){
		$('.podcasts-descrip span b a').click(function(){
			$('.podcasts-descrip-square').fadeIn();
			return false;
		});
	}

	function scrollForm(){
		$('.header2 .linkForm').click(function(){
			let href = $(this).attr('href');
			let offSetTop = $(href).offset().top;

			$('html, body').animate({'scrollTop':offSetTop});
			return false;
		})
	}

})
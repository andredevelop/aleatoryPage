$(function(){

	$('#form').submit(function(){

		$('input[type=text], textarea').focus(function(){
			resetarCampoInvalido($(this));
		});

		var idade = $('input[name=idade]').val();
		var mensagem = $('textarea').val();
		if (verificarIdade(idade) == false){
			mostrarInvalido($('input[name=idade]'));
			return false;
		}else if(verificarMensagem(mensagem) == false){
			mostrarInvalido($('textarea'));
			return false;
		};

		function verificarIdade(idade){
			if(idade == ''){
				return false;
			};
		};

		function verificarMensagem(mensagem){
			if (mensagem == '') {
				return false;
			};
		};

		function mostrarInvalido(el){
			el.css('color','red');
			el.val('Preencha!');
		};

		function resetarCampoInvalido(el){
			el.css('color','black');
			el.css('border', '1px solid #212121');
			el.val('');
		};

		var form = $('#form');
		
			$('#form').ajaxSubmit({
				beforeSubmit:function(){
					form.find('input[type=submit]').attr('disabled','true');
					form.find('input[type=submit]').animate({'opacity':'0.4'})
					form.find('input[type=submit]').attr('value','Enviando...');

				},
				success:function(data){
					alert('Obrigado pela sua sugestão!');
					form.find('input[type=submit]').removeAttr('disabled');
					form.find('input[type=submit]').animate({'opacity':'1'})
					form.find('input[type=submit]').attr('value','Enviar');
					form[0].reset();
				}
			});


		return false;
	})
})
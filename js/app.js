$(document).ready(function() {

	//Al hacer click al boton de encriptar
	$('#encriptar').click(function(event) {
		//Recuperamos los valores del mensaje y la palabra clave
        var mensaje = $('#mensaje').val();
        var clave = $('#clave').val();
        //Checamos si estan vacias y si lo estan mandamos un mensaje de error
        if($.trim(mensaje).length==0 || $.trim(clave).length==0){
        	nota('error','El mensaje o la palabra clave estan vacios!');
        	return;
        }
        //Encriptamos el mensaje con la palabra clave
		var res = $.jCryption.encrypt(mensaje,clave);
		//Limpiamos el area de texto del resultado y mostramos el mensaje encriptado
		$('#resultado').val('');
		$('#resultado').val(res);
		nota('success','Mensaje encriptado correctamente.')
	});

	//al hacer click en el boton desencriptar
	$('#desencriptar').click(function(event) {
		//Recuperamos los valores del mensaje y la palabra clave
        var mensaje = $('#mensaje').val();
        var clave = $('#clave').val();
        //Checamos si estan vacias y si lo estan mandamos un mensaje de error
        if($.trim(mensaje).length==0 || $.trim(clave).length==0){
        	nota('error','El mensaje o la palabra clave estan vacios!');
        	return;
        }
        //Desencriptamos el mensaje con la palabra clave
		var res = $.jCryption.decrypt(mensaje,clave);
		//Limpiamos el area de texto del resultado y mostramos el mensaje desencriptado
		$('#resultado').val('');
		$('#resultado').val(res);
		//Checamos si el resultado es vacio..si es asi es por que la palabra clave no es correcta
		if($.trim(res).length==0){
			nota('error','El mensaje no fue desencriptado correctamente.');
			return;
		}
		nota('success','Mensaje desenciptado correctamente.')
	});
});

//Funcion para enviar notificaciones
function nota(op,msg,time){
    if(time == undefined)time = 5000;
    var n = noty({text:msg,maxVisible: 1,type:op,killer:true,timeout:time,layout: 'top'});
}
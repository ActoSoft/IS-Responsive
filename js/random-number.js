$(document).ready(function() {

	var number = Math.floor(Math.random()* 9000) + 1000;
	document.getElementById("number").value = number;
	//Inicializando Firebase

});





// function CompareNumbers() {

// 	var original = document.getElementById('number').value;
// 	var inputted = document.getElementById('code').value;

// 	if(original == inputted)
// 	{
// 		comentarios.push({
// 			nombre: document.getElementById('name').value,
// 			correo: document.getElementById('email').value,
// 			comentario: document.getElementById('cuerpo').value

// 		});
// 		location.href('index.html');
// 	}
// 	else
// 	{
// 		alert('Los números no coinciden, inténtalo nuevamente')
// 		var number = Math.floor(Math.random()* 9000) + 1000;
// 		document.getElementById("number").value = number;
// 		document.getElementById("code").value = null;
// 		location.reload();
// 	}

// }
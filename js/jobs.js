$(document).ready(function(){
	$(".upload_book").uploadFile({
	  	url:"",
	  	multiple: false,
	  	dragDrop:false,
	  	fileName:"myfile",
	  	dragDropStr: "",
	  	uploadStr:'<span>Book</span><img src="images/aplicacion/Adjunta.png" class="adjuntar">',
	  	/*allowedTypes: ".jpg,.jpeg,.png,.gif",
	  	doneStr:"Cargado!",
	  	extErrorStr:"Solo puedes realizar carga de archivos!",
	  	uploadErrorStr:"Ocurrio un error al carga. Intentelo de nuevo!"*/
	});
	$(".upload_cv").uploadFile({
	  	url:"",
	  	multiple: false,
	  	dragDrop:false,
	  	fileName:"myfile",
	  	dragDropStr: "",
	  	uploadStr:'<span>CV</span><img src="images/aplicacion/Adjunta.png" class="adjuntar">',
	  	/*allowedTypes: ".jpg,.jpeg,.png,.gif",
	  	doneStr:"Cargado!",
	  	extErrorStr:"Solo puedes realizar carga de archivos!",
	  	uploadErrorStr:"Ocurrio un error al carga. Intentelo de nuevo!"*/
	});
	$("#send").click(function(){
		$("#change").hide();
		$("#gracias").fadeIn();
	});
});
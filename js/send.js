$('.adjuntar').uploadifive({
	uploadScript : '',
	buttonText : '&nbsp;',
	method : 'post',
	fileSizeLimit : "5MB",
	multi: false,
	removeCompleted : false,
	onUpload : function(file){
		if(file != 0){
			$("#video_upload").hide();
			$("#video_btn").addClass("hidden");
			componentObj.uploadingVideo = true;
			$("#err_video").hide();	
		}			
	},
	onUploadComplete : function(file, data){
		componentObj.uploadingVideo = false;
		var json = jQuery.parseJSON(data);
		if(json.error === undefined || json.error === ""){
			componentObj.videoUploadedPath = json.video_url;
			$("#err_video").text("Video subido con exito");
			$("#err_video").css({"color":"#B0D82E"});
			$("#err_video").show();
		}else{
			$("#video_upload").show();
			$("#video_btn").removeClass("hidden");
			componentObj.videoUploadedPath = "";
			if(json.error === "Invalid file type."){
				$("#err_video").text("El formato del video no es válido");
				$("#err_video").css({"color":"#FF404D"});
				$("#err_video").show();
			}else{
				$("#err_video").text("Error al subir el video");
				$("#err_video").css({"color":"#FF404D"});
				$("#err_video").show();
			}						
		}
	},
	onCancel : function(file){
		$("#video_upload").show();
		$("#video_btn").removeClass("hidden");
		componentObj.videoUploadedPath = "";
	},
	onError : function(errorType, file, errorMsg) {
		$("#video_upload").show();
		$("#video_btn").removeClass("hidden");
		componentObj.uploadingVideo = false;
		if(errorType === 'FILE_SIZE_LIMIT_EXCEEDED'){
			$("#err_video").text("El video es demasiado grande, su tamaño maximo debe ser 75MB");
			$("#err_video").css({"color":"#FF404D"});
			$("#err_video").show();
		}else{
			$("#err_video").text(errorType);
			$("#err_video").css({"color":"#FF404D"});
			$("#err_video").show();
		}
	}
});
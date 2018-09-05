$(function ()argument) )	
	$("#cpass").on('change',function(e){
		e.preventDefault();
		var cpass =$(this).val();
		var pass = $("#pass").val();
		if(pass!=cpass)
		{
			$(this).val("");
			$("#cpasserr").html("<span
				class='alert alert-danger'>
				Passwords do not match</span>");
		}
		else
		{
			$("$cpasserr")html("<span
				class='alert ")
		}

	});
	$("#pass").on('change',function(e){
		e.preventDefault();
		$("$cpass").val("");
		$(this).focus();

	});
});
$(function(){
	$("#cpass").on('change',function(e){
		e.preventDefault();
		var cpass =$(this).val();
		var pass = $("#pass").val();
		if(pass!=cpass)
		{
			$(this).val("");
			$("#cpasserr").html("<span class='alert alert-danger'> Passwords do not match</span>");
		}
		else
		{
			$("#cpasserr").html("<span class='alert alert-success'> Passwords matches</span>");
		}

	});
	$("#pass").on('change',function(e){
		e.preventDefault();
		$("$cpass").val("");
		$(this).focus();
	});

	$("#user").on('keypress',function(e)
	{
		var user =$(this).val();
		var datastring = 'user=' +user;
		$.ajax({
			type:'POST',
			url:'checkuser.php',
			data:datastring,
			cache:false,
			success:function(available)
			{
				
				if(available == "false")
				{
					$('#usererr').html("<span class='alert alert-danger'>username not available<span/>");

				}
				else
				{
					$('#usererr').html("<span class='alert alert-success'>username available<span/>");
				}
			}
		});
	});
});
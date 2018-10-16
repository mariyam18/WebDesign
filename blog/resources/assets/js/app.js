
 $(function(){
 	$('#rollno').on('blur',function(){
 		if(!/(\d{2}((CO)|(DCO)|(EE)|(DEE)|(EX)|(DEX)|(ME)|(DME)|(CE)|(DCE)|(CES)|(DCES))\d{2,3})/i.test(this.value))
 		{
 			alert("Invalid Roll NO.");
 			this.value="";
 			$(this).focus();
 		}
 });

 	$('#sname').on('keypress',function(e){
 		if(/[^a-zA-Z ]/.test(e.key)){
 			alert("Invalid name.only alphabets and space is allowed");
 			this.value="";
 			$(this).focus();
 			return false;
 		}
 	});

 	$('#add').on('blur',function(e){
 		if((this.value.length>50 && this.value.length>150).test(e.key))
 		{
 			alert("Address cannot be more than this");
 			this.value="";
 			$(this).focus();
 		}

  	});

});
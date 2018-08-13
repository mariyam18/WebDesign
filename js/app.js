$(function(){
	$('#rollno').on('blur',function(){
		if(!/(\d\d((CO)|(DCO)|(EE)|(ME)|(DME)|(CE)|(DCE)|(DEE)|(CES)|(DCES)|(EX)|(DEX))\d{2,3})/i.test(this.value)){
			alert("Invalid rollno.");
			this.value="";
			$(this).focus();
		}
	});

	$('#sname').on('keypress',function(e){
		//console.log();
		if(/[^a-zA-Z ]/.test(e.key)){
			alert("Invalid Name");
			this.value="";
			$(this).focus();
			return false;
		}
	});

	$('#add').on('blur',function(e){
		if((this.value.length()<=10 && this.value.length()>=15).test(this.value)){
			alert("Minimum size is 50");
			this.value="";
			$(this).focus();
		

});
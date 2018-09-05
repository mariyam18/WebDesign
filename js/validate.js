function checkEmail(e){
	var element=e.target;
	if(/[^a-zA-Z0-9@._]/.test(element.value)){
		alert("email is invalid!Only characters a-z A-Z 0-9 @ . _");
		element.value="";
		return false;
	}
	if(!/[a-zA-Z]/.test(element.value)){
		alert("email is invalid");
		element.value="";
		return false;
	}
	if(!/[@]/.test(element.value)){
		alert("email is invalid...u r missing @");
		element.value="";
		return false;
	}
	if(!/[.]/.test(element.value)){
		alert("email is invalid! .Domain name is missing");
		element.value="";
		return false;
	}
	return true;
}

function checkSubject(e){
	var element=e.target;
	if(!/[^a-zA-Z]/.test(element.value)){
		alert("subject is invalid!Only characters a-z A-Z ");
		element.value="";
		return false;
	}
}

function submitform(e){
	if(document.getElementById('user-email').value!="" && 
		document.getElementById('subject').value!="" && 
		document.getElementById('message').value!=""){
		var contact=document.getElementById('con');
		contact.innerHTML="<h3>THANK YOU for feedback.i will get you shortly<h3>";

	}
}


var email = document.getElementById('user-email');
email.addEventListener('blur',checkEmail,false);

var subject = document.getElementById('subject');
subject.addEventListener('blur',checkSubject,false);

var submit = document.getElementById('submit-btn');
submit.addEventListener('blur',submitform,false);

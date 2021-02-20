
function validate() {
	var username = document.getElementById("uname");
	var password = document.getElementById("pass");
	var alert = document.querySelector(".alert");
	var incorrect = document.getElementById("incorrect");
	var checkbox = document.querySelector("#check");

	if (username.value.trim() == "") {
		incorrect.innerHTML = "Incorrect Username";
		alert.style.display = "block";
		username.style.border = "1px solid #ff0000";
		return false;
	} 
	else if (password.value.trim() == "") {
		incorrect.innerHTML = "Incorrect Password";
		alert.style.display = "block";
		password.style.border = "1px solid #ff0000";
		return false;
	}
	else if (password.value.trim().length < 6) {
		incorrect.innerHTML = "Password Too Short use munimun 6 characer";
		alert.style.display = "block";
		password.style.border = "1px solid #ff0000";
		return false;
	}
	else {
		return true;
	}
}
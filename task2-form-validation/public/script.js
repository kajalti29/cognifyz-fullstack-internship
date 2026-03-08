function validateForm(){

let password = document.getElementById("password").value
let error = document.getElementById("error")

if(password.length < 6){

error.textContent = "Password must be at least 6 characters"

return false

}

error.textContent = ""

return true

}
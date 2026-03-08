const password = document.getElementById("password")
const message = document.getElementById("strength")

password.addEventListener("input", function(){

let value = password.value

if(value.length < 6){

message.textContent = "Weak Password"
message.style.color = "red"

}
else if(value.length < 10){

message.textContent = "Medium Password"
message.style.color = "orange"

}
else{

message.textContent = "Strong Password"
message.style.color = "green"

}

})
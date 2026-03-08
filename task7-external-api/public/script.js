async function getQuote(){

try{

const res = await fetch("https://dummyjson.com/quotes/random")

const data = await res.json()

document.getElementById("quote").textContent =
data.quote + " — " + data.author

}

catch(err){

document.getElementById("quote").textContent =
"Error loading quote"

}

}
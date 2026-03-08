const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

let users = []   // temporary storage

app.get("/",(req,res)=>{
res.render("index")
})

app.post("/submit",(req,res)=>{

const name = req.body.name
const email = req.body.email
const password = req.body.password

// server side validation
if(!name || !email || !password){
return res.send("All fields are required")
}

if(password.length < 6){
return res.send("Password must be at least 6 characters")
}

// store data
users.push({name,email})

console.log(users)

res.send("User Registered Successfully!")

})

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000")
})
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",(req,res)=>{
res.render("index")
})

app.post("/submit",(req,res)=>{

const name = req.body.name
const email = req.body.email

res.send("Form Submitted Successfully! Name: " + name + " Email: " + email)

})

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000")
})
const express = require("express")
const bodyParser = require("body-parser")

const userRoutes = require("./routes/users")

const app = express()

app.set("view engine","ejs")

app.use(bodyParser.json())
app.use(express.static("public"))

app.use("/api", userRoutes)

app.get("/", (req,res)=>{
res.render("index")
})

app.listen(3000, ()=>{
console.log("Server running on http://localhost:3000")
})
const express = require("express")

const router = express.Router()

let users = []

// CREATE
router.post("/users",(req,res)=>{

const user = req.body

users.push(user)

res.json({message:"User added", users})

})

// READ
router.get("/users",(req,res)=>{

res.json(users)

})

// DELETE
router.delete("/users/:index",(req,res)=>{

users.splice(req.params.index,1)

res.json(users)

})

module.exports = router
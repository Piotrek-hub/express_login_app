const express = require("express")
const auth_router = express.Router()
var bodyParser = require('body-parser')


auth_router.get("/", (req, res) => {
    console.log("auth")
    res.render("pages/auth")
})

auth_router.post("/login", (req, res) => {
    console.log(req.body)
    res.send("LOGIN")
})

auth_router.post("/register", (req, res) => {
    console.log("LOGIN")
    res.send("LOGIN")
})


module.exports = auth_router
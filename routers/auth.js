const express = require("express")
const auth_router = express.Router()
var bodyParser = require('body-parser')
const { findOne, createUser } = require("../lib/db/user")
var crypto = require("crypto");



auth_router.get("/", (req, res) => {
    console.log("auth")
    res.render("pages/auth")
})

auth_router.post("/login", async (req, res) => {
    const { email, password } = req.body


    const user = await findOne(email)
    if (user === null) {
        return res.send("User doesnt exists")
    }

    if(user.password !== password) {
        return res.send("Password doesnt match")
    }

    res.cookie("email", user.email)

    res.redirect("/")
})

auth_router.post("/register", async (req, res) => {
    const { username, email, password } = req.body

    const users = await findOne(email, username)
    console.log(users)
    if (users !== null) {
        return res.send("User already exists")
    }

    createUser(username, email, password)

    res.send("USER CREATED")
})


module.exports = auth_router
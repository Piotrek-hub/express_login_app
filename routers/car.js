const express = require("express")
const car_router = express.Router()
const {findOne, updatePageState} = require("../lib/db/user")

const cars = [
    { name: "fiat125p", horsepower: 200, torque: 280 },
    { name: "lada1300", horsepower: 200, torque: 280 },
    { name: "dacia1300", horsepower: 200, torque: 280 },
    { name: "skoda_favorit", horsepower: 200, torque: 280 },
]

car_router.get("/:car_name", async (req, res, next) => {
    const cookies = req.cookies;
    if (cookies.email === undefined) {
        return res.send("please login")
    }

    const user = await findOne(cookies.email)
    if(user === null) {
        return res.send("user not valid")
    }

    const { car_name } = req.params
    const u = await updatePageState(user.email, car_name)
    console.log(u)

    next()
}, (req, res) => {
    const { car_name } = req.params

    if (!cars.map(car => car.name).includes(car_name)) {
        return res.send("Invalid car name")
    }

    const car = cars.filter(car => car.name == car_name)[0]

    res.render("pages/car", { car: car })
});

module.exports = car_router
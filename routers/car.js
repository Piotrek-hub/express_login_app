const express = require("express")
const car_router = express.Router()

const cars = [
    { name: "fiat125p", horsepower: 200, torque: 280 },
    { name: "lada1300", horsepower: 200, torque: 280 },
    { name: "dacia1300", horsepower: 200, torque: 280 },
    { name: "skoda_favorit", horsepower: 200, torque: 280 },
]

car_router.get("/:car_name", (req, res, next) => {
    const cookies = req.cookies;
    if (cookies.token == undefined) {
        res.send("please login")
    }

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
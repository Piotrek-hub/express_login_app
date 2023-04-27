var express = require('express');
var app = express();
var path = require("path")
var cookieParser = require("cookie-parser");
const car_router = require("./routers/car")
const auth_router = require("./routers/auth")
const initDB = require("./lib/db/init")
var bodyParser = require('body-parser')

initDB()

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.get("/", (_, res) => {
    res.render("pages/index")
});

app.use("/car/", car_router)
app.use("/auth/", auth_router)


app.listen(8080);

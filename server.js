var express = require('express');
var app = express();
var path = require("path")

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("pages/index")
});

app.listen(8080);

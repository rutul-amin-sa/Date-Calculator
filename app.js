var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    flash = require("connect-flash"),
    Date_model = require("./models/date.js"),
    routes = require("./routes");
    obj = {
        input: {
            Date:"",
            Year: "",
            Month: "",
            Days: ""
        },
        output: {   
            Date:"",
            Year: "",
            Month: "",
            Days: ""
        }
    }

mongoose.connect("mongodb://localhost:27017/date_calc", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(flash())
app.use(require("express-session")(
    {
        secret: "My name is Rutul",
        resave: false,
        saveUninitialized: false
    }
));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(function(req, res, next){
    res.locals.error = req.flash("error");
    next();
});
app.use("/", routes);

app.listen(3000, function(){
    console.log("Server Started");
});


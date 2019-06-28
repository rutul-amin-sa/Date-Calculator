var express = require("express"),
    routers = express.Router(),
    middleware_obj = require("../middleware"),
    Date_model = require("../models/date.js");

routers.get("/",function(req, res){
    res.render("index", {obj: obj});
});

routers.post("/age", middleware_obj.validate_age, function(req, res){
    setnull();
    obj.input.Date = req.body.date;
    var str = obj.input.Date;
    var date_diff_millisec = (new Date().getTime()) - (new Date(str).getTime());
    var total_days = (date_diff_millisec / 1000 / 3600 / 24);
    obj.output.Year = Math.floor(total_days / 365);
    total_days = total_days % 365;
    obj.output.Month = Math.floor(total_days / 31);
    obj.output.Days = Math.floor(total_days % 31);
    Date_model.create(obj, function(err, newdata){
        if(err){
            res.redirect("back");
        }else{
            res.redirect("/");
        }
    });
});

routers.post("/rage", middleware_obj.validate_rage, function(req, res){
    setnull();
    obj.input.Year = req.body.year;
    obj.input.Month = req.body.month;
    obj.input.Days = req.body.day;
    var total_offset = parseInt(obj.input.Year * 365) + parseInt(obj.input.Month * 31) + parseInt(obj.input.Days);
    var date = new Date();
    date.setDate(date.getDate() - total_offset);
    obj.output.Date = date.getFullYear() + "-" + (parseInt(date.getMonth()) + 1).toString() + "-" + date.getDate();
    Date_model.create(obj, function(err, newdata){
        if(err){
            res.redirect("back");
        }else{
            res.redirect("/");
        }
    });
});

routers.post("/adddays", middleware_obj.validate_adddays, function(req, res){
    setnull();
    obj.input.Date = req.body.date;
    obj.input.Days = req.body.days;
    var date = new Date(obj.input.Date);
    date.setDate(date.getDate() + parseInt(obj.input.Days));
    obj.output.Date = date.getFullYear() + "-" + (parseInt(date.getMonth()) + 1).toString() + "-" + date.getDate();
    Date_model.create(obj, function(err, newdata){
        if(err){
            res.redirect("back");
        }else{
            res.redirect("/");
        }
    });
});

function setnull(){
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
}

module.exports = routers;
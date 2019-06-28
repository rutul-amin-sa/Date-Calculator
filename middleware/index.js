var middlewareObj = {};

middlewareObj.validate_age = function(req, res, next){
    var input_date = req.body.date;
    input_date = new Date(input_date);
    var current_date = new Date();
    if(input_date <= current_date){
        next();
    }
    else{
        req.flash("error", "Please Enter Date less than current Date");
        res.redirect("/");
    }
}

middlewareObj.validate_rage = function(req, res, next){
    var input_year = req.body.year;
    if(!isNaN(input_year) && input_year > 0){
        next();
    }else{
        req.flash("error", "Please enter valid year");
        res.redirect("/");
    }
}

middlewareObj.validate_adddays = function(req, res, next){
    var input_day = req.body.days;
    if(!isNaN(input_day)){
        next();
    }else{
        req.flash("error", "Please enter valid Days");
        res.redirect("/");
    }
}

module.exports = middlewareObj;
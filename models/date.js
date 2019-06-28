var mongoose = require("mongoose");

var dateSchema = new mongoose.Schema(
    {
        input: {
            Date:String,
            Year: String,
            Month: String,
            Days: String
        },
        output: {
            Date:String,
            Year: String,
            Month: String,
            Days: String
        }
    }
);

module.exports = mongoose.model("date", dateSchema);
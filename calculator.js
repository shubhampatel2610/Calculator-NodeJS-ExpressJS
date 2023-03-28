const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
}));

//Simple calculator addition
app.get("/", function (req, res) {
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    
    var result = num1 + num2;

    res.send("The result of calculation is " + result);
});

// BMI calculator
app.post("/bmiCalculator",function (req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height*height);

    res.send("Your BMI is "+bmi);
})

app.get("/bmiCalculator",function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
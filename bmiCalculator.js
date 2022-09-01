function bmiCalculator(weight, height) {
    return Math.round(weight/(height**2));
}

var bmi = bmiCalculator (prompt("WEIGHT?"), prompt ("HEIGHT?"));

if (bmi < 16) {
    console.log ("Your BMI is: " + bmi + ": Severely Thin");
}
else if (bmi >= 16 && bmi < 17) {
    console.log ("Your BMI is: " + bmi + ": Moderae Thin");
}
else if (bmi >= 17 && bmi < 19) {
    console.log ("Your BMI is: " + bmi + ": Mildly Thin");
}
else if (bmi >= 19 && bmi < 25) {
    console.log ("Your BMI is: " + bmi + ": Normal");
}
else if (bmi >= 25 && bmi < 30) {
    console.log ("Your BMI is: " + bmi + ": Overweight");
}
else if (bmi >= 30 && bmi < 35) {
    console.log ("Your BMI is: " + bmi + ": Class 1 Obese");
}
else if (bmi >= 35 && bmi < 40) {
    console.log ("Your BMI is: " + bmi + ": Class 2 Obese");
}
else if (bmi > 40) {
    console.log ("Your BMI is: " + bmi + ": Class 3 Obese");
}

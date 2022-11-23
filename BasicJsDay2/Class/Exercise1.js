function calcBMI(weight, height) {
    var BMI = weight/(height**2);
    switch (true) {
        case BMI < 18.5:
            console.log("You are underweight");
            break;
        case BMI >= 18.5 && BMI < 25:
            console.log("You are normal weight");
            break;
        case BMI >= 25 && BMI < 30:
            console.log("You are pre-obesity");
            break;
        case BMI >= 30 && BMI < 35:
            console.log("You are obesity class 1");
            break;
        case BMI >= 35 && BMI < 40:
            console.log("You are obesity class 2");
        default:
            console.log("You are obesity class 3");
    }
}

calcBMI(58, 1.71);
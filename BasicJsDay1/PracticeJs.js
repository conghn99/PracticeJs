function countBMI(weight, height) {
    var BMI = weight/(height**2);
    if (BMI < 18.5) {
        console.log("You are underweight")
    } else if (BMI >= 18.5 && BMI < 25) {
        console.log("You are normal weight")
    } else if (BMI >= 25 && BMI < 30) {
        console.log("You are pre-obesity")
    } else if (BMI >= 30 && BMI < 35) {
        console.log("You are obesity class 1")
    } else if (BMI >= 35 && BMI < 40) {
        console.log("You are obesity class 2")
    } else {
        console.log("You are obesity class 3")
    }
}

countBMI(59, 1.71)



function calcculateFactorial(number) {
    var factorialResult = 1;
    for (var i = 1; i <= number; i++) {
        factorialResult *= i;
    }
    console.log(factorialResult);
}

calcculateFactorial(5);
function checkSpeed(speed) {
    if (speed <= 70) {
        console.log("Good safe driving");
    } else {
        var penaltyPoint = Math.ceil((speed - 70)/5);
        if (penaltyPoint <= 10) {
            console.log(`Speed Limit Crossed by ${penaltyPoint} point`)
        } else {
            console.log("License Suspended")
        }
    }
}

checkSpeed(121)
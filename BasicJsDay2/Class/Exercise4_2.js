function countRoundParameter(radius) {
    var parameter = 2 * Math.PI * radius;
    console.log("Parameter: " + parameter.toFixed(2));
}

countRoundParameter(5);

function countRoundArea(radius) {
    var area = Math.PI * (radius**2);
    console.log("Area: " + area.toFixed(2));
}

countRoundArea(5);
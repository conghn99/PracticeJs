function Airplane(name) {
    this.name = name;
    this.isFlying = function() {
        return false;
    }
}

const airPlanePrototype = {
    takeOff() {
        this.isFlying = function() {
            return true;
        }
    },
    land() {
        this.isFlying = function() {
            return false;
        }
    }
}

Airplane.prototype = airPlanePrototype;

var airPlane = new Airplane("Boing");
airPlane.isFlying();
airPlane.takeOff();
airPlane.isFlying();
airPlane.land();
airPlane.isFlying();
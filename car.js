var car = (function () {
    function car() {
    }
    car.prototype.start = function () {
        return 'Start Driving';
    };
    car.prototype.drive = function () {
        return 'Drive slowly';
    };
    car.prototype.getPosition = function () {
        return 'Get the position';
    };
    return car;
}());
var Car = new car();
document.write(Car.start());
document.write(Car.drive());
document.write(Car.getPosition());

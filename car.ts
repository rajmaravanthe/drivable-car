interface drivable{
    start();
    drive();
    getPosition();
}
class car implements drivable{

    start(){
       return 'Start Driving';
    }

    drive() {
        return 'Drive slowly';
    }

    getPosition () {
        return 'Get the position';
    }
}
var Car = new car();
document.write(Car.start());
document.write(Car.drive());
document.write(Car.getPosition());
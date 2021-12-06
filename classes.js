// declaration
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print() {

        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

let myCar = new Car('bmw', '87654k', 3030);
myCar.print();
//expression

//let car = class{

//}



class SportsCar extends Car {
    revEngine() {
        console.log('VRRRRRRRROOOOMMMM goes the ' + this.model);  
    }
}

let mySportsCar = new SportsCar('dodge', 'viper', 2033);
mySportsCar.print();
mySportsCar.revEngine();


let mySportsCar = new SportsCar('dodge', 'viper', 2011);
mySportsCar.print();
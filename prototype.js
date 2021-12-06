let originalCar = {
    make: 'bmw',
    model: '67cd8390',
    year: 2010
};

let newCar = Object.create(originalCar);

console.log(newCar.make);

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);



originalCar.doors = 4;
console.log(newCar.door);

console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty.make);
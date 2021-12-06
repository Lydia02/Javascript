let car = {
    make: 'BMW',
    model : '1112002',
    year : '2021',
    getPrice : function() {
        //perform some calculations
        return 50000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }

}

car.printDescription();
console.log(car.year);

console.log(car['year']);
//console.log(car. getPrice);

var anotherCar = {};
anotherCar.whatever = 'Bob';
console.log(anotherCar.whatever);

var a = {
    myProperty: { b: 'hi'}
};
console.log(a.myProperty.b);

var u = {
    myProperty: [
        { d: 'This'},
        { e: 'can'},
        {f: 'get'},
        {g: 'hotter'}
    ]
};
console.log(u);


let carLot = [
    { year: 2017, make: 'Toyota', model: '4Runner'},
    { year: 2014, make: 'BMW', model: '2222'},
    { year: 2021, make: 'Benz', model: 'jfjdf'},
];

let contacts = {
    customers: [
        { firstName: 'Olaniyi', lastName: 'Fortee', phoneNumbers: [ '(234) 123-4344', '(234) 3432 2323']},
        { firstName: 'Susan', lastName: 'Febbsbs', phoneNumbers: [ '(234) 523-6774', '(234) 3432 2323']} 
    ], 
    employee: [
        { firstName: 'Olivia', lastName: 'Morgan',  phoneNumbers: [ '(234) 123-8344', '(234) 3432 2323']},
        { firstName: 'Felix', lastName: 'Steve', phoneNumbers: [ '(234) 123-4344', '(234) 3432 2323']},
    ]
};


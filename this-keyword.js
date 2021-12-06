/*  var car = {
    make: 'bmw',
    model: '543345',
    year: 2003,
    getPrice: function () {
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
} 

function first() {
    return this;
}

console.log(first() === global);

//this is Nodes global object
// because that's where the first method was called

function second() {
    'use strict';

    return this;
}

console.log(second() === global);
console.log(second() === undefined);
 


let myObject = { value: 'My Object' };

//value is set on the global object

global.value = 'Global object';

function third() {
    return this.value;
}

//console.log(third());

console.log(third.call(myObject, 'bob'));
console.log(third.apply(myObject));  */






function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName: 'bob',
    lastName: 'tailor',
    print: fifth
}

let customer2 = {
    firstName: 'Shola',
    lastName: 'Shuga',
    print: fifth
}

customer1.print();
customer2.print();
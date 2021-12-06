function sayHello(name) {
    console.log('...................................................');
    console.log('Hello! ' + name + '!' );
    console.log('...................................................');
}
sayHello('bob');
sayHello('Faith');
//sayHello();
//et a = sayHello;
//a();
//();


function calculateTax(amount){
    let result = amount * 112002.21;
    return result;
}

let tax = calculateTax(1);
console.log(tax);
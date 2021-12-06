function sayHello(name) {
    return function() {
        console.log('Howdy ' + name);
    }
}

let bob = sayHello('bob');
let conrad = sayHello('conrad');
let grant = sayHello('grant');

grant();
conrad();
bob();
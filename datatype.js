let x = 7;
console.log(typeof x);
/*
let y = true;
console.log(typeof y);

let z = 'Hello world, welcome to the new Dimension';
console.log(typeof z);
*/

let a;
console.log(a);
console.log(typeof a);

/*
type coercion and conversion
*/

let l = 7;
let b = '6';
let c = l + b;
console.log('Answer: ' + c);

let d = 3;
let s = '4';
s = parseInt(s, 5);
u = d + s;
console.log('Answer: ' + u);    

let r = parseInt('lydia', 10);
let o = isNaN(r);
console.log(r);
console.log(o);
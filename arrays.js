let a  = [4,44, 5, 5, 5];
let b =['Faith', 'Tofunmi', 'Fashola'];

console.log(a[0]);
console.log(b[1]);
console.log(a);
a[1] = 9;
console.log(a);

console.log(typeof b);
console.log(typeof a);

let c = [4,'alex', true];
console.log(c)

console.log(b[4]);

console.log(a.length);//gives the actual number NOT zero based

a.push(77);
console.log(a);
console.log(a.length);
a.pop();
a.pop();
console.log(a);
console.log(a.length);
let first = 'Knowledge is power but enthusiam pull the switch';
let second = 'Do or do not. There is no try.';
let third = ' 5432,5543.4,543';

//You can even call methods on string literals
console.log('bob loves you'.toUpperCase());

//let mySplit = third.split(',');
//console.log(mySplit);

//let mySlice = second.slice(33, 18);
//console.log(mySlice);

let mySubstr = first.substr(13,5);
console.log(mySubstr);

let myEndsWith = second.endsWith('try.');
console.log(myEndsWith);

let myStartsWith = second.startsWith('Do');
console.log(myStartsWith);


let myInclude = second.includes('There');
console.log(myInclude);

let myRepeat = 'Ha! '.repeat(10);
console.log(myRepeat);



let myTrim = '   bloated   ';
console.log(myTrim.length);
console.log(myTrim.trim().length); 
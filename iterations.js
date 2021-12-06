/*
for (i = 0; i < 10; i++) {
    console.log(i);
}
*/

let a  = [ 4, 5, 6, 8, 56, 78];
for(i = 0; i < a.length; i++){
    console.log(a[i]);
}
let v = [1, 11, 2002, 3];
for (let b = 0; b < v.length; b++) {
    const c = v[b];
    console.log(c);
}

let x = 1;
while (x < 10) {
    console.log(x++);
} 
    if (y == 7) break;


let counter = 0;
function timeout(){
    setTimeout(function(){
        console.log('heyy ' + 'Lydia' + counter++);
        timeout();
    }, 2000);
}

timeout();


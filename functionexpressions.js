setTimeout(function(){
console.log('I waited two seconds');
}, 2000);

let counter = 0;
function timeout(){
    setTimeout(function(){
        console.log('heyy ' + 'Lydia' + counter++);
        timeout();
    }, 2000);
}

timeout();

//ctrl + c to stop the execution

(function(){
    console.log('immediately Invoked Function Expression(IIFE)');
})();
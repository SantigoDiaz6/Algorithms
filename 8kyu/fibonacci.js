// The Fibonacci numbers, commonly denoted F(n) form a sequence, 
// called the Fibonacci sequence, such that each number is the sum of the two preceding ones, 
// starting from 0 and 1. 

var fib = function(N) {
    let a = 0;
    let b = 1;
    let c;
    if (N === 0) {
        return a;
    }
    for ( let i = 2; i <= N; i ++ ) {
        c = a + b;
        a = b;
        b = c;
        console.log(b);
    }
    return b;
};


//------Math Sollution, not so precise when the numbers get higher --------------
// var fib = function(N) {
//     var goldenRatio = (1 + Math.sqrt(5)) / 2;
//     return Math.round(Math.pow(goldenRatio, N)/ Math.sqrt(5));
// }

console.log(fib(51));
//console.log(fib(3));
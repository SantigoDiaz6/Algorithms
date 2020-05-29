// Given a positive integer num consisting only of digits 6 and 9.
// Return the maximum number you can get by changing at most one digit 
// (6 becomes 9, and 9 becomes 6).

 

var maximum69Number  = function(num) {
    let arre = num.toString().replace('6', '9');
    let result = parseInt(arre);
    return result;
};

console.log(maximum69Number(6996996));
console.log(maximum69Number(996996));
console.log(maximum69Number(99996));
console.log(maximum69Number(999999));
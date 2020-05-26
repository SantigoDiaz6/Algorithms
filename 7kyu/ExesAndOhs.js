// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

//My Solution
// function XO(str) {
//     let minusStr = str.toLowerCase().split('');
//     let contX = 0;
//     let contO = 0;
//     for (let i = 0; i < minusStr.length; i++) {
//         if (minusStr[i] === 'x') {
//             contX += 1;
//         } else if(minusStr[i] === 'o') {
//             contO += 1;
//         }
//         // console.log(contX, contO);
//     }
//     if (contO === contX) {
//         return true;
//     }
//     return false;
// }

//------------Other Solutions------RegEx----------------
// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
// }

//-------------Other Solutions---------filter method----------------
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
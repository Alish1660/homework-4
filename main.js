//////////////////////////////////////////////////////
// 1 -misol /////////////////////////////////////////
// let num = +prompt("enter a number for num");
// const isPrime = (num) => {
//   if (num === 2) return "Kiritilgan son tub son";
//   let count = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       count++;
//     }
//   }
//   return count === 2 ? "Kirtilgan son tub son" : "Kiritilgan son tub son emas";
// };

// console.log(isPrime(num));
//
////2-misol ///////////////////////////////////////////////////////
////////////////////////////////////////////////
// let num = +prompt("Enter any kinnda number");
// const isPerfect = function (perfectNum) {
//   let total = 0;
//   for (let i = 1; i < perfectNum; i++) {
//     if (perfectNum % i == 0) {
//       total += i;
//     }
//   }
//   if (perfectNum === total) {
//     console.log(`${perfectNum} is perfect `);

//   } else {
//     console.log(`${perfectNum} is not perfect `);
//   }
// };
// isPerfect(num);
////3-misol ////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// const getAmountOfLetters = (str) => {
//   let i = 0;
//   let vowel = 0;
//   let consonant = 0;
//   while (i < str.length) {
//     if (
//       str[i] === "a" ||
//       str[i] === "u" ||
//       str[i] === "o" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o'"
//     ) {
//       vowel++;
//     } else {
//       consonant++;
//     }
//     i++;
//   }
//   return {
//     vowel,
//     consonant,
//   };
// };

// getAmountOfLetters(`alisher`);
///4-misol ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// const is_closeNumber = (a, b) => {
//   let distanceA = Math.abs(a - 5);
//   let distanceB = Math.abs(b - 5);
//   if (distanceA < distanceA) {
//     return a;
//   } else if (distanceB < distanceA) {
//     return b;
//   } else {
//     return `Same distance`;
//   }
// };
// is_closeNumber(4, 6);
////5-misol ////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// let a = +prompt(`Enter number for a`);
// let b = +prompt(`Enter number for b`);

// const rectangle = (a, b) => {
//   let area = a * b;
//   let perimetr = 2 * (a + b);
//   return { area, perimetr };
// };
// rectangle(a, b);
///////6-misol //////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// let a = +prompt(`Enter a number for a`);
// let n = +prompt(`Enter a number for n`);
// const power = (a, n) => {
//   let result = Math.pow(a, n);

//   return result;
// };
// console.log(power(a, n));
//////7 -misol /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// const sign = (n) => {
//   if (n < 0) {
//     return -1;
//   } else if (n > 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// };
// console.log(sign(0));

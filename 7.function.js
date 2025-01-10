//function

//Dry => Don't repeat yourself

//? syntax
//function functionName(){
//    some code here
//}

// we need to call a function

// function sayHI() {
//   console.log("Hi");
// }
// sayHI();

// function getSum(x, y) {
//   console.log(x + y);
// }

// getSum(2,3);
// getSum(10, 20);

// WAP which determines provided no. is odd or even

// function getnum(x) {
//   console.log(x % 2 === 0 ? "even" : "odd");
//   if (x % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }
// getnum(9);

// product of two no.

// function product(x, y) {
//   console.log(x * y);
//   let product = x * y;
//   return product;
// }
// const result = product(2, 3);
// console.log(result);

// calculate factorial of a number

// function factorial(num) {
//   let fact = 1;
//   for (let i = num; i >= 1; i--) {
//     fact = fact * i;
//   }
//   return fact;
// }
// const result = factorial(5);
// console.log(result);

//? arrow function
// syntax
// const functionName = () =>{
//some code here
//};

// const greetUser = (userName) => {
//   console.log("Good Morning" + " " + userName);
// };
// greetUser("Sujan");

//?string concatenation
// let firstName = "Sujan";
// let lastName = "Magar";
// let fullName = firstName + " " + lastName;
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

//? write an arrow function which calculates whether it is negative,positive or zero.
// const findPolarity = (num) => {
//
//   if (num > 0) {
//     return "positive";
//   } else if (num < 0) {
//     return "negative";
//   } else {
//     return "zero";
//   }
// };
// const res = findPolarity(0);
// console.log(res);

//? function that takes 5 no. and calculates average

// const averageCalculator = (a, b, c, d, e) => {
//   let sum = a + b + c + d + e;
//   let avg = sum / 5;

//   return avg;
// };

// const average = averageCalculator(5, 5, 5, 5, 5);
// console.log(average);

//? which converts rupee to paisa
// const convertRupeesToPaisa = (Rupees) => {
//   let paisa = Rupees * 100;

//   return paisa;
// };
// const convertedValue = convertRupeesToPaisa(10);
// console.log(convertedValue);

//? waf dollar to cents
// const dollarTocents = (dollar) => {
//   let cents = dollar * 100;
//   return cents;
// };
// const cents = dollarTocents(5);
// console.log(cents);

//? waf which checks whether a no. is prime or not
// const primeOrnot = (x) => {
//   if (x % 2 === 0) {
//     return "no. is not prime";
//   } else {
//     return "no. is  prime";
//   }
// };
// const itIs = primeOrnot(9);
// console.log(itIs);

//? waf which checks largest of two different numbers
// const largest = (x, y) => {
//   if (x > y) {
//     return "x is largest";
//   } else {
//     return "y is largest";
//   }
// };
// const res = largest(10, 20);
// console.log(res);

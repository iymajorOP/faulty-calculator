/* FAULTY CALCULATOR 

This faulty calculator does following :
1) It takes two number as input from the user
2) It performs wrong operations as follows :

+ ---> -
* ---> +
- ---> /
/ ---> **
 
It performs wrong operations 10%  of the times
*/
// function faultyCalculator(num1, num2, operator) {
//    // Simulate a 10% error rate
//    if (Math.random() < 0.1) {
//        // Perform wrong operation
//        switch (operator) {
//            case '+':
//                return num1 - num2;
//            case '-':
//                return num1 + num2;
//            case '*':
//                return num1 / num2;
//            case '/':
//                return Math.pow(num1, num2);
//            default:
//                console.log("Invalid operator");
//                return null;
//        }
//    } else {
//        // Perform correct operation
//        switch (operator) {
//            case '+':
//                return num1 + num2;
//            case '-':
//                return num1 - num2;
//            case '*':
//                return num1 * num2;
//            case '/':
//                return num1 / num2;
//            default:
//                console.log("Invalid operator");
//                return null;
//        }
//    }
// }

// // Example usage:
// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));
// const operator = prompt("Enter the operator (+, -, *, /):");

// const result = faultyCalculator(num1, num2, operator);

// if (result !== null) {
//    console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);
// }

//USING EVAL

let random = Math.random();
console.log(random);
let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.5) {
  // Perform correct calculation
  console.log(`The result is ${a} ${c} ${b}`);
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  // Perform wrong calculation
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}

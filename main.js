// problem 1 : feature
// var a = prompt('Enter the first number.');
// a = parseFloat(a);
// var o = prompt('Enter an arithmetic operator ( + , - , * or / ).');
// var c = prompt('Please enter the second number.');
// c = parseFloat(c);
// var result;
// switch (o) {
//     case '+':
//       result = a + c;
//       break;
//     case '-':
//       result = a - c;
//       break;
//     case '*':
//       result = a * c;
//       break;
//     case '/':
//       result = a / c;
//       break;
// }
// console.log('The result of a', o, 'b is', result);

// problem 2 : feature

/* Finds standard deviation of given numbers
accepts number as string , each separated by ':'*/

var string = prompt("Enter string of colon separated numbers:");
var nums = string.split(':');

//avg
var avg = 0;
nums = nums.map(function(char){
  avg += parseFloat(char);
  return parseFloat(char);
});
avg = (avg / nums.length);

//product
var product = nums.reduce(function(a,b){return a * b;});

//sum
var sum = nums.reduce(function(a,b){return a + b;});

//standard dev
nums = nums.map(function(n){return Math.pow((n - avg),2);});
var variance = sum / nums.length;
var stanDev = Math.sqrt(variance);

alert('sum: ' + sum +' product: ' + product + ' average: ' + avg + ' standard dev: ' + stanDev);

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
var str = prompt('Enter a string of numbers separated by ":" ');
var strArr = str.split(':');
var numArray = strArr.map(parseFloat);
var sum = 0;
numArray.forEach(function(x){sum += x;});
var product = numArray.reduce(function(previousValue, currentValue){
  return previousValue * currentValue;
});
var average = sum / numArray.length;
var squareSum = numArray.reduce(function(prev, curr){return prev + Math.pow(curr - average, 2);});
var stdev = Math.sqrt(squareSum / numArray.length);
console.log('Your sum is: ', sum);
console.log('Your product is: ', product);
console.log('Your average is: ', average);
console.log('Your standard deviation is: ', stdev);

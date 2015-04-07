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

var input = prompt("Please enter at least two numbers, separated by ':'");
input = input.split(':');
input = input.map(function(n) { return parseFloat(n); });
var sum = 0, product = 1, sumofvar = 0, stddev = 0;
for (var i = 0; i < input.length; i++) {
  sum += input[i];
  product *= input[i];
}
var avg = sum / input.length;
console.log(input.length);
for (var i = 0; i < input.length; i++) {
  sumofvar += Math.pow((input[i] - avg), 2);
}
stddev = Math.sqrt(sumofvar / input.length);
console.log('Sum:', sum, 'Product', product, 'Avg:', avg, 'Stddev:', stddev);

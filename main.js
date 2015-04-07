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

var nums = prompt("Please give me numbers, seperated by colons. ex. 3:4:5");
nums = nums.split(":");
for (var i = 0; i < nums.length; i++){
  nums[i] = parseFloat(nums[i]);
}
var sum =  0;
for (var i = 0; i < nums.length; i++){
  sum += nums[i];
}
var product = 1;
for (var i = 0; i < nums.length; i++){
  product = product * nums[i];
}
var avg = sum / nums.length;
var squares = [];
for (var i = 0; i < nums.length; i++){
  squares = (nums[i] - avg) * nums[i];
}
var variance = squares / nums.length;
var dev = Math.round(Math.sqrt(variance));
console.log("The sum is: " + sum + ", the average is: " + avg + ", the product is: " + product + ", the Standard Deviation is: " + dev);

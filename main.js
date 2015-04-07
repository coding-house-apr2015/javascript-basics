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

var a = prompt("Give me numbers seperated by a :");

nums = a.split(':');

nums = nums.map(function(n){
  return parseFloat(n);
});

var sum = 0;
	for(var i = 0; i < nums.length; i++){
	    sum += nums[i];
}

var avg = sum/nums.length;

var product = 1;
for(var i = 0; i < nums.length; i++){
    product *= nums[i];
    console.log(nums[i]);
}

nums = nums.map(function(n){return Math.pow((n - avg),2);});
var variance = sum / nums.length;
var stanDev = Math.sqrt(variance);

var variance = (nums.reduce(function(a,b){return a + b;}) / nums.length);
alert("Your sum is " + sum + " your product is " + product + " your average is "+ avg + " and your standard deviation is " + stanDev + ".");

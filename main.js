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

var raw = prompt("Give me three numbers separated by ':'");
// var raw = "5:6:7"
var numstr = raw.split(':');
var numarr = numstr.map(function(num) {
  return parseFloat(num);
});

var sum = 0;
var product = 1;
var avg = 0;
var variance = 0;
var stdev = 0;

for (var i = 0; i<numarr.length; i++) {
  sum += numarr[i];
  product *= numarr[i];
}


var n = numarr.length;
avg = sum/n;

for (var i = 0; i<numarr.length ; i++) {
  variance += Math.pow((numarr[i]-avg),2);
}
stdev =Math.sqrt(variance/n);

console.log("sum",sum,"product",product,"avg",avg,"standard deviation",stdev);

/*var a = prompt('give me a num?');
a = parseInt(a);
var b = prompt('give me a another num?');
b = parseInt(b);
var c = Math.pow(a,b);
console.log('a', a, 'b', b, 'c', c);
*/

var a = prompt('Give me a number, please');
a = parseInt(a);
var b = prompt('Would you like to add, subtract, multiply, or divide?');
if (b !== '+' || '-' || '*' || '/') {
  alert("I'm afraid I can't do that Dave");
}
var c = prompt('Another number please');
c = parseInt(c);
if (b === '*') {
  console.log(a * c);
}
else if (b === "-") {
  console.log(a - c);
}
else if (b === '+') {
  console.log(a + c);
}
else {
  console.log(a / c);
}

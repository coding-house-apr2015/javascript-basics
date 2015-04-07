var a = prompt('give me a num?');
a = parseInt(a);
var operator = prompt("give me an operator");
var b = prompt('give me a another num?');
b = parseInt(b);
var answer = 0;

if (operator === "*") {answer = a * b; }
else if (operator === "/") {answer = a / b; }
else if (operator === "-") {answer = a - b; }
else {answer = a + b; }

alert("the answer is " + answer);


//var c = Math.pow(a,b);
//console.log('a', a, 'b', b, 'c', c);

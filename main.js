var a = parseInt(prompt('Enter "A"'));
var b = parseInt(prompt('Enter "B"'));
var op = prompt('Enter an operator. ex(*,+,/,-)');
var result;

if (op === '*') { result = a * b; }
else if (op === '/') { result = a / b; }
else if (op === '-') { result = a - b; }
else if (op === '+') { result = a + b; }
else {result = "That is not an operator!";}

alert(result);

var a = prompt('give me a num?');
a = parseFloat(a);
var op = prompt('give me an operation');
var b = prompt('give me a another num?');
b = parseFloat(b);
var result;
if (op ==='+'){
  result = a + b;
}
else if (op === '-'){
  result = a - b;
}
else if (op === '/'){
  result = a / b;
}
else if (op === '*'){
  result = a * b;
}
else {
  console.log('Cannot understand your operation');
}
console.log('The result of A & B is = ' + result);

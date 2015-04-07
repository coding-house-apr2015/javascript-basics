var a = prompt('Enter the first number.');
a = parseFloat(a);
var o = prompt('Enter an arithmetic operator ( + , - , * or / ).');
var c = prompt('Please enter the second number.');
c = parseFloat(c);
var result;
switch (o) {
    case '+':
      result = a + c;
      break;
    case '-':
      result = a - c;
      break;
    case '*':
      result = a * c;
      break;
    case '/':
      result = a / c;
      break;
}
console.log('The result of a', o, 'b is', result);

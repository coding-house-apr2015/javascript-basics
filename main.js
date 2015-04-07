// Take user input and split by spaces into array of strings
var userInputs = prompt('Enter a space-separated list, alternating numbers and operators. (+-*/)').split(' ');
var numbers = [];
var operators = [];
var result;

// Split input into separate numbers and operators arrays
userInputs.forEach(function(e,i) {
  if (i % 2) {
    operators.push(e);
  } else {
    numbers.push(e);
  }
});

// Convert number strings into number type
numbers = numbers.map(parseFloat);

// Set result as first number
result = numbers.shift();

// Evaluate each operator on result in sequence on each number in sequence
operators.forEach(function(o){
  switch(o){
    case '+': result = result + numbers.shift(); break;
    case '-': result = result - numbers.shift(); break;
    case '*': result = result * numbers.shift(); break;
    case '/': result = result / numbers.shift(); break;
  }
});

alert('Result: ' + result);

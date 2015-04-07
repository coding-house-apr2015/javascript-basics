var a = prompt('give me a num?');
a = parseInt(a);
var b = prompt('give me a another num?');
b = parseInt(b);
var c = Math.pow(a,b);
console.log('a', a, 'b', b, 'c', c);

var a = prompt('give me a num?');
a = parseInt(a);
var b = prompt('give me a another num?');
b = parseInt(b);
var c = prompt("give me an operator; +, -, *, /");
if (c == "+"){
 console.log(a+b)}
else if (c == "-"){
  console.log(a-b);
}
else if (c == "/"){
  console.log(a/b);
}
else {
  console.log(a*b);
}

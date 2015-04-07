var a = parseInt(prompt("gimme an int, dawg: "));
var b = parseInt(prompt("gimme an another int: "));
var c = prompt("do what with em? (+, -, *, /)");

if (c === "+" || c === "-"){
  c === "+" ? alert(a + b) : alert (a - c);
}
else if (c === "*" || c === "/") {
  c === "*" ? alert(a * b) : alert(a / b);
}

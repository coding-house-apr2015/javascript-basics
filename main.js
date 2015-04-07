
n1 = prompt('give me a num');
n1 = parseInt(n1);
var op = prompt('give me an operator (*, /, +, -)');
var n2 = prompt('give me a another num?');
n2 = parseInt(n2);

var ans = "";

if (op==="*") {
    ans = n1*n2;
  }
else if (op==="/") {
    ans = n1/n2;
  }
else if (op==="+") {
    ans = n1+n2;
  }
else if (op==="-") {
    ans = n1-n2;
} else {
  console.log("You've entered values that are not permitted.")
}

console.log("the result of", n1, op, n2, "is", ans);

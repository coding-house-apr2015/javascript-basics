function numberPlay (str) {

    var num = inp.split(":");
    var spex = {};

    spex.sum = (num.map(function(e){return parseInt(e)})).reduce(function(a, b, i, e) {return a + b});
    spex.products = int.reduce(function(a, b, i, e) {return a * b});
    spex.avg = sum / int.length;
    spex.stdDev = Math.sqrt((int.map(function(e){return (e * e) - avg;}).reduce(function(a, b, i, e) {return a + b})) / 2);


    return spex;

}

var inp = prompt("Give me a number. (ex: n:n:n )");
numberPlay(inp);

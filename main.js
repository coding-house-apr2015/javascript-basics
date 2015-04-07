var a = prompt('NUMBER ME!');

a = parseInt(a);

var operator = prompt('WHAT DO YOU WANNA DO NOW PUNNK?');

var c = prompt('LAST NUMBER NOW SUCKER');

c = parseInt(c);

if(operator==="*"){
   retVal = a*c;
} else if(operator==="/"){
   retVal = a / c;
}
if(operator==="+"){
   retVal = a+c;
} else if(operator==="-"){
   retVal = a-c;
}

console.log(retVal);

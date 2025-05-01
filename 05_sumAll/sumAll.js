const sumAll = function(a, b) {
if (a < 0 || b < 0 ) return "ERROR"
if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"
if (a > b){
    const invert = a
    a = b 
    b = invert
}

let finalresult = 0
for (let i = a; i<= b;  i++) {
 finalresult += i
}

return finalresult
};

console.log(sumAll(2.5, 4));

// Do not edit below this line
module.exports = sumAll;

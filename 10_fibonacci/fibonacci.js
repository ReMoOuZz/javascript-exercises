const fibonacci = function(n) {

    if (typeof n === "string") {
        n = Number(n)
    } 
    
    if (n === 0) {
        return 0
    } else if (!Number.isInteger(n) || n < 0) {
        return "OOPS"
    }
    
    let a = 1
    let b = 1

    for (let i = 2; i < n; i++) {
        
        const next = a + b;
        a = b
        b = next  
    }
    return b
};

console.log(fibonacci("chien"))

// Do not edit below this line
module.exports = fibonacci;

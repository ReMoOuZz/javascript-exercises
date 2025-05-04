const palindromes = function (string) {
const stringCleaned = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")   
if (stringCleaned.split("").reverse().join("") === stringCleaned) {
    return true
} else {
    return false
}    
};
console.log(palindromes('Racecar!'));

// Do not edit below this line
module.exports = palindromes;

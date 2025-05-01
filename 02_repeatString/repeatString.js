const repeatString = function(string, number) {

if (number < 0){
    return "ERROR"
}

let resultat = ""
for (let i = 0; i < number; i++ ){
    resultat += string
}
return resultat
};

repeatString(("", 10))

// Do not edit below this line
module.exports = repeatString;

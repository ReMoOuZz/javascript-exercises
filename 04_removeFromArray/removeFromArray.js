const removeFromArray = function(array, ...other) {
    const newArray = []
    array.forEach(item => {
        if (!other.includes(item)) {
            newArray.push(item)
        }
    });
    return newArray
};

console.log(removeFromArray([1,2,2,3],"tacos"));


// Do not edit below this line
module.exports = removeFromArray;

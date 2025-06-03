const getTheTitles = function(book) {
    const titleArray = book.map(titleBook => {
      return titleBook.title  
    }) 
    return titleArray
};


// Do not edit below this line
module.exports = getTheTitles;

const fs = require('fs');

const logSearch = function(response) {
    fs.appendFile('./searchLog.txt', response, function(err){
        if (err){
            console.log(err)
        }
        console.log(response);
    })
}

module.exports = logSearch;
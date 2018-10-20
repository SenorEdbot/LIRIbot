const moment = require('moment');
const request = require('request');

const concertThis = function (artist) {
    let queryURL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;
    request(queryURL, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            jResponse = JSON.parse(body);
            console.log(jResponse.name);
        }
    })
}

module.exports = concertThis;
//https:rest.bandsintown.com/artists/eminem/events?app_id=codingbootcamp&date=upcoming
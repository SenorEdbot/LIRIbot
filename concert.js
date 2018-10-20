const moment = require('moment');
const request = require('request');
const logger = require('./logger.js');

const concertThis = function (artist) {
    let queryURL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;
    request(queryURL, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            jResponse = JSON.parse(body)[0];
            if (jResponse.venue) {
                let prettyResponse = `------------------------------
Name: ${jResponse.venue.name}
Location: ${jResponse.venue.city}, ${jResponse.venue.region}
Date: ${moment(jResponse.datetime).format('MM/DD/YYYY')}
------------------------------`
                logger(prettyResponse);
            } else {
                console.log("No upcoming concerts.");
            }
        }
    })
}

module.exports = concertThis;
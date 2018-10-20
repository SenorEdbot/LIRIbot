const request = require('request');
const moment = require('moment');
const logger = require('./logger.js');

const movieThis = function (movie) {
    let queryURL = `http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=trilogy`
    request(queryURL, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            jResponse = JSON.parse(body);
            let prettyResponse = `------------------------------
Title: ${jResponse.Title}
Release Year: ${moment(jResponse.Released, "DD-MMM-YYYY").format("YYYY")}
IMDB Rating: ${jResponse.imdbRating}
Rotten Tomatoes Rating: ${jResponse.Ratings[1].Value}
Origin Country: ${jResponse.Country}
Language: ${jResponse.Language}
Plot: ${jResponse.Plot}
Actors: ${jResponse.Actors}
------------------------------`
            logger(prettyResponse);
        }
    })
}

module.exports = movieThis;
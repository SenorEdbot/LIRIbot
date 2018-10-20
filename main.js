require('dotenv').config();
const request = require('request');
const concert = require('./concert.js');
const spotify = require('./spotify.js');

// console.log(`HOST: ${process.env.DB_HOST}`)
const userAction = process.argv[2];
const userSearch = process.argv.splice(3).join(' ');

switch (userAction) {
    case 'concert-this':
        //when the user types concer-this
        concert(userSearch);
        break;
    case 'spotify-this-song':
        spotify(userSearch);
        //when the user types spotify-this-song
        break;
    case 'movie-this':
        //when the user types movie-this
        break;
    case 'do-what-it-says':
        //when the user types do-what-it-says
        break;
    default:
        console.log('Please check your input.');
        break;
};
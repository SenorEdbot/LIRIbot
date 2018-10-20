const concert = require('./concert.js');
const spotify = require('./spotify.js');
const movie = require('./movie.js');
const fs = require('fs');

// console.log(`HOST: ${process.env.DB_HOST}`)
const userAction = process.argv[2];
const userSearch = process.argv.splice(3).join(' ');

function checkInput(action, search) {
    switch (action) {
        case 'concert-this':
            concert(search);
            break;
        case 'spotify-this-song':
            search ? spotify(search) : spotify('The Sign');
            break;
        case 'movie-this':
            search ? movie(search) : movie('Mr. Nobody');
            break;
        case 'do-what-it-says':
            fs.readFile('random.txt','utf8', function(err,data){
                if (err) {
                    return console.log(err);
                }
                let list = data.split(',');
                checkInput(list[0], list[1]);
            });
            break;
        default:
            console.log('Please check your input.');
            break;
    };
};

checkInput(userAction, userSearch);
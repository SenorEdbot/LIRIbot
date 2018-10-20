require("dotenv").config();
const Spotify = require('node-spotify-api');
const logger = require('./logger.js');

const keys = require("./keys");
const spotify = new Spotify(keys.spotify);

let spotifyThis = function(song) {
    spotify.search({ type: 'track', query: song, limit: 1}, function(err, data){
        if (err) {
            return console.log("Error occured: " + err);
        }
        let firstSong = data.tracks.items[0];
        let artists = [];
        firstSong.artists.forEach(artist => {artists.push(artist.name)});
        let prettyResposne = `------------------------------
Artist(s): ${artists}
Song Name: ${firstSong.name}
Preview Link: ${firstSong.external_urls.spotify}
Album: ${firstSong.album.name}
------------------------------`;
        logger(prettyResposne);
    })
}

module.exports = spotifyThis;

// Artist(s)
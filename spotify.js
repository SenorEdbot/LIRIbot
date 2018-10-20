require("dotenv").config();
const Spotify = require('node-spotify-api');

const keys = require("./keys");
const spotify = new Spotify(keys.spotify);

let spotifyThis = function(song) {
    spotify.search({ type: 'track', query: song, limit: 1}, function(err, data){
        if (err) {
            return console.log("Error occured: " + err);
        }
        let firstSong = data.tracks.items[0]
        console.log(firstSong.artists)
    })
}

module.exports = spotifyThis;

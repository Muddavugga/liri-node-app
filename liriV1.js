// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
// Make it so liri.js can take in one of the following commands:
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says

var request = require("request");

var keys = require('./keys.js');
var spotify = require('node-spotify-api');
var Twitter = require('twitter');

var twitterKeys = keys.twitterKeys;
var spotifyKeys = keys.spotifyKeys;


function mySportify(){
    var spotify = new spotify(spotifyKeys);
spotify.search({ type: 'track', query: 'raining blood' }, function(err, data) {
 if (err) {
   return console.log('Error occurred: ' + err);
 }
var total = data.tracks.items;
for (var index = 0; index < total.length; index++) {
  console.log('Song title: ' + total[index].name);
  console.log('album name: ' + total[index].album.name);
 console.log('artist name: ' + total[index].artists[0].name);
 console.log('url preview: ' + total[index].href);
 console.log('========================================================================');
  
  
}

// console.log(JSON.stringify(data));
//  console.log('Song title: ' + data.tracks.items[0].name);
//  console.log('Preview Link: ' + response[1].preview_url); 
})
}
// let action = process.argv[2];

// let search = process.argv[3];

// switch (action) {
//   case "my-tweets":
//   tweeter();
//   break;
//   case "spotify-this-song":
//   spotify();
//   break;
//   case "movie-this":
//   movies();
//   break;
//   case "do-what-it-says":
//   doWhatever();

// }

function tweeter() {


var client = new Twitter(twitterKeys);
var params = {screen_name: 'NotAnotherRedLight'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (!error) {
  console.log(index + 1 + '. ' + tweets[1].text);
  console.log('Created at: ' + tweets[1].created_at);
 }
 
})
}


function movies() {

  request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {
    
     
      if (!error && response.statusCode === 200) {
        console.log("The movie's title is: " + JSON.parse(body).Title);
        console.log("The movie's year of production is: " + JSON.parse(body).Year);
        console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
        console.log("The movie's rating is: " + JSON.parse(body).Ratings[1]);
        console.log("The movie's Country of production is: " + JSON.parse(body).Country);
        console.log("The movie's language is: " + JSON.parse(body).Language);
        console.log("The movie's plot is: " + JSON.parse(body).Plot);
        console.log("The movie's actors are: " + JSON.parse(body).Actors);
        
        
      }
    })
  };

  


// fs.readFile("keys.js", "utf8", function(error, data) {
//     // If the code experiences any errors it will log the error to the console.
//     if (error) {
//       return console.log(error);
//     }
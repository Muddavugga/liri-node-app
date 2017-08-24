// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
// Make it so liri.js can take in one of the following commands:
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says

var request = require("request");
var Spotify = require('node-spotify-api');
let keys = require('./keys.js');
var Twitter = require('twitter');
var twitterKeys = keys.twitterKeys;
var spotifyKeys = keys.spotifyKeys;
let action = process.argv[2];

let search = process.argv[3];
if (process.argv.length > 4){
  for (var index = 4; index < process.argv.length; index++) {
    //ar element = array[index];
    search = search +" "+process.argv[index];
   
    
  }
  console.log(search);
}


switch (action) {
  case "my-tweets":
  tweeter();
  break;
  case "spotify-this-song":
  mySportify();
  break;
  case "movie-this":
  movies();
  break;
  case "do-what-it-says":
  doWhatever();
  break;

}

function tweeter() {

var client = new Twitter(twitterKeys);
var params = {screen_name: 'DennisAlvey'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (!error) {
for (i = 0; i < tweets.length; i++){
 console.log(i + 1 + '. ' + tweets[i].text);
  console.log('Created at: ' + tweets[i].created_at);
}

 
 }
 else{
   console.log(error);
 }
 
})
}



function mySportify(){
  if (typeof search ==="undefined") {
    search = "raining blood";
  }
 var spotify = new Spotify(spotifyKeys);
spotify.search({ type: 'track', query: search }, function(err, data) {
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

function movies() {

  if (typeof search === "undefined") {
    search = "Mr. Nobody";
  }

  request("http://www.omdbapi.com/?t="+search+"&y=&plot=short&apikey=40e9cece", function(error, response, body) {
    
     
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
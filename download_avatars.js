var lola = require("./secrets.js");


var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";
  headers: {
      'User-Agent': 'request'
      curl -i -H 'Authorization: token ' https://api.github.com/repos/jquery/jquery/contributors
    }
  };



  request(url, function(err, res, body) {
    cb(err, body);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
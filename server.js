// ==============================================================================
// DEPENDENCIES
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");


//Attempting to compare the user's score with the scores in friends.js
for (var i = 0; i < friends.length; i++){
console.log(friends[i].scores)
};
/*
for(var i=0;i<friends.length;i++) {
  for(var j=0;j<friends[i].scores.length;j++) {
      var totalDifference=totalDifference+Math.abs(friends[i].scores[j]-newFriend.scores[j]);
      console.log(totalDifference);
  }
};
*/

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

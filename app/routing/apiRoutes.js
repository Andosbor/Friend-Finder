
var friendData = require("../data/friends");



module.exports = function(app) {
 

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  
  app.post("/api/friends", function(req, res) {
   
    var newFriend = req.body;

      friendData.push(newFriend);
      res.json(newFriend);
   
  });
};
//submit button should post to friends and compare to others users

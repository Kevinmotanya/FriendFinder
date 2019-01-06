//pull the list of friends
var friends = require("../data/friends");

// require path dependencies
var path = require('path');

module.exports = function(app){
    app.get("/api/friends", function(req,res) {
        res.json(friends);
        
    });

    app.post("/api/friends", function(req,res) {
        var inputFriend = req.body;
        // console.log(JSON.stringify(userInput));             
        var match = friends[0];
        var matchAvatar = '';
        var differences = [];
        //existing friends in the friends array
        for(var i=0;i<friends.length;i++){
            var differences = 0;
            for (var x=0;x<friends[i].scores.length;x++){
                var compare = Math.abs(inputFriend.scores[x] - friends[i].scores[x]);
                differences += compare;
            };
            differences.push(differences);
        };
        var least = differences.min();
        for (var i=0;i<differences.length;i++){
            if(differences[i]===least){
                match=friends[i];
                return(match);
            };
            return(match);
        };


        //push to the array a new friend input 
        friends.push(inputFriend);

        res.json({match, matchName, matchImage: matchAvatar});
    });
};

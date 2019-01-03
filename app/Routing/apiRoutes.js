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
        var diffs = [];
        for(var i=0;i<friends.length;i++){
            var totalDiff = 0;
            for (var x=0;x<friends[i].scores.length;x++){
                var compare = Math.abs(newFriend.scores[x] - friends[i].scores[x]);
                totalDiff += compare;
            };
            diffs.push(totalDiff);
        };
        var least = diffs.min();
        for (var i=0;i<diffs.length;i++){
            if(diffs[i]===least){
                match=friends[i];
                return(match);
            };
            return(match);
        };


        friends.push(inputFriend);

        res.json(match);
    });
};

//pull the list of friends and uses the list for the survey
var friends = require("../data/friends");


module.exports = function (app) {
    //a GET route that displays JSON of all possible friends
    app.get('/api/friends', function (req, res) {
        res.json(friendList);
    });

    app.post('/api/friends', function (req, res) {
        //grabs the new friend's scores to compare with friends in friendList array
        var surveyStats = req.body.scores;
        var perfectMatch = 0;
        var ArrayStats = [];
        var Allfriends = 0;


        //runs through all current friends in list
        for (var j = 0; j < friends.length; j++) {
            var statsVariation = 0;
            //run through scores to compare friends
            for (var x = 0; j < surveyStats.length; x++) {
                statsVariation += (Math.abs(parseInt(friends[j].scores[x]) - parseInt(surveyStats[x])));
            }
            //push the match comarison in ArrayStats results into statsVariation 
            ArrayStats.push(statsVariation);
        }
        // find perfect match after comparing the stats/numbers accumulated from friends responses
        for (var j = 0; j < ArrayStats.length; j++) {
            if (ArrayStats[j] <= ArrayStats[perfectMatch]) {
                perfectMatch = i;
            }

        }

        //return perfectMatch data
        // the var amigo is defined by the perfectMatch
        //our end result for the user is to find a perfectMatch or amigo
        var amigo = friends[perfectMatch];
        res.json(amigo);
        //pushes new submission into the friends array
        friends.push(req.body);
    });
};
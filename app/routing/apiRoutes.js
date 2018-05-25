// required data
var friendsData = require("../data/friends");

function compareScore(a, b) {
    c = [];

    for (var i = 0; i < b.length; i++) {
        c.push(Math.abs(a[i] - b[i]));
    }

    return c.reduce(function(acc, val) { return acc + val; });
}

// export routes
module.exports = function (app) {
    console.log("API ROUTES WORKING!");

    // get routes
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // post route: also handles comparison logic
    app.post("/api/friends", function (req, res) {
        var userInfo = req.body;
        var userScore = req.body.scores;
        var lowestDiff = 99999;
        var bestFriend;

        for (var i = 0; i < friendsData.length; i++) {

            var currentFriend = friendsData[i];
            var friendScore = currentFriend.scores;
            var totalDiff = compareScore(userScore, friendScore);

            console.log(totalDiff);

            if (totalDiff < lowestDiff) {
                lowestDiff = totalDiff;
                bestFriend = currentFriend;
            }

        }

        res.json(bestFriend);
    });
}
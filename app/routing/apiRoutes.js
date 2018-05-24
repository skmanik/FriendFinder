// required data
var friendsData = require("../data/friends");

// export routes
module.exports = function (app) {
    console.log("API ROUTES WORKING!");

    // get routes
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

}
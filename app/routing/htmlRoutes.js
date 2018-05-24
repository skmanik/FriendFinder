// required module to find HTML files
var path = require("path");

// export routes
module.exports = function (app) {
    console.log("HTML ROUTES WORKING!");

    // get routes
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // default to home if incorrect route entered
    // app.get("*", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/index.html"));
    // });

}
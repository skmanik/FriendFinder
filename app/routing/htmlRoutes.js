// required module to find HTML files
var path = require("path");

module.exports = function (app) {
    console.log("HTML ROUTES WORKING!");
    // app.get('/style.css', function ( req, res) {
    //     res.sendFile(path.join(_dirname + "../public/css/style.css"));
    // });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // default to home if incorrect route entered
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

}
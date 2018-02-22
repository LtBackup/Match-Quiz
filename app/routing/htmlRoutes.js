var path = require("path");

module.exports = function(app) {

app.get("/", function (req, res) {
    res.sendFile("root" + "index.html");
});

app.get("/survey", function (req, res) {
    res.sendFile("survey.html", {root: path.join(__dirname, "../public")});
});

}
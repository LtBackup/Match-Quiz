module.exports = function (app) {

    var fighters = require("../data/matches.js").fighters;

    app.get("/api/fighters", function (req, res) {
        return (res.json(fighters));
    });

    app.post("/api/fighters", function (req, res) {
        var responses = JSON.parse(req.body.val);
        var result = fighters[0];
        var smallestDifference = null;
        for (var i = 0; i < fighters.length; i++) {
            var difference = 0;
            for (var j = 0; j < responses.length; j++) {
                difference += Math.abs(fighters[i].scores[j] - responses[j]);
            }
            if (smallestDifference === null) {
                smallestDifference = difference;
            }
            if (difference < smallestDifference) {
                result = fighters[i];
                smallestDifference = difference;
            }
        }
        return res.json(result);
    });

};
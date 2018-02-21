module.exports = function(app) {

app.get("/api/fighters", function (req, res) {
    res.json(match);
});

app.post("/api/fighters", function(req, res) {
    var responses = req.body['scoreData[]'];
    var result = fighters[0];
    var smallestDifference;
    for(var i = 0; i < fighters.length; i++){
        var difference = 0;
        for(var j = 0; j < responses.length; j++){
            difference += Math.abs(fighters[i].scores[j]-responses[j]);
        }
        if(smallestDifference === null){
            smallestDifference = difference;
            result = fighters[i];
        }
        if(difference < smallestDifference){
            result = fighters[i];
            smallestDifference = difference;
        }
    }
    return res.json(result);
});

};
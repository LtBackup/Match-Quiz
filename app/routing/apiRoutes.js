app.get("/delete/:index?", function (req, res) {
    reservations.splice(req.params.index,1);
    reservations.push(waitlist.shift());
    res.json(reservations);
});

app.get("/reservations", function (req, res) {
    res.json(reservations);
});

app.get("/waitlist", function (req, res) {
    res.json(waitlist);
});

app.post("/reserve", function(req, res) {
    var newReservation = req.body;
    var reserved = true;
    if(reservations.length < 5){
    reservations.push(newReservation);
    console.log(reservations)
        return res.json(reserved);
    }
    else{
        waitlist.push(newReservation);
        return res.json(!reserved);
    }
  });
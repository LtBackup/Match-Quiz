function notNull(value) {
    if (value === null) return false;
}

$(document).ready(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var results = [];
        var valid = true;
        for (var i = 1; i < 11; i++) {
            if ($("#q" + i).val()) {
                results.push($("#q" + i).val());
            }
            else {
                valid = false;
                results = [];
                $("#incomplete").modal();
            }
        }
        console.log(results);
        if (valid) {
            var package = {
                val: JSON.stringify(results)
            };
            $.post("/api/fighters", package, function (data) {
                if (data) {
                    $("#charModal").modal();
                    var char = data.name;
                    var bio = data.info;
                    $("#selection").text("Your Character is " + char);
                    $("#charImage").attr("src", "images/" + char + ".png");
                    $("#description").text(bio);
                } else {
                    $("#charModal").modal();
                }
                results = [];
                $('select option:contains("Select")').prop('selected',true);
            });
        }
    });
});
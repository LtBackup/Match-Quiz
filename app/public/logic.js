$(document).ready(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var results = { val: JSON.stringify([
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ])};
        console.log(results);
        $.post("/api/fighters", results, function (data) {
            if (data) {
                //DISPLAY MODAL
                alert("Your character is " + data.name);
            } else {
                alert("ERROR");
            }
            $(".form-control").empty();
        });
    });
});
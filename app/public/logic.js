// $('.dropdown-toggle').dropdown();
$('#submit').on("click", function(){
    event.preventDefault();
    var results = [
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
    ];
    
    $.post("/api/fighters", results, function(data) {
        if (data) {
            //DISPLAY MODAL
            alert("Your character is " + data.name);
        } else {
            alert("ERROR")
        }

        $(".form-control").empty(),
    });
});
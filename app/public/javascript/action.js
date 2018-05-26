console.log("Action happening?");

$(".modal-close").on("click", function(event) {
    $(".modal").removeClass("is-active");
});

$("#survey-submit").on("click", function (event) {
    event.preventDefault();

    // loop through forms to see if they're empty
    var forms = $(".survey-form");
    var isFull = true;

    forms.each(function () {
        var e = $(this);

        if (e.val() === "") {
            isFull = false;
        }
    });

    console.log(isFull);

    if (isFull) {
        // get values from each question
        var selects = $("select");
        var selArr = [];

        selects.each(function () {
            var sel = $(this).val();
            selArr.push(sel);
        });

        var newFriend = {
            name: $("#name-input").val(),
            photo: $("#photo-input").val(),
            scores: selArr,
        }

        console.log(newFriend);

        $.post("/api/friends", newFriend, function (data) {
            $(".modal").addClass("is-active");
            $("#match-photo").css({"background-image": "url(" + data.photo + ")"}).addClass("animated bounceIn");
            $("#match-name").text(data.name).addClass("animated bounceIn");

            // clear the form bc successful submit
            forms.each(function () {
                var e = $(this);
                e.val("");
            });
        });
    } else {
        // tell user to get shit together
        alert("Hey, fill out the whole thing!");
    }
});
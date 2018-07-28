var topics = ["cats", "dogs", "afvbabies", "afvpets", "afv", "funnykids", "funny", "tackle", "afvepicfalls"];

function addBtns() {

    $("#FunnyBtn").empty();
    for (var i = 0; i < topics.length; i++) {

        var a = $("<button>");

        $(a).addClass("topics");

        $(a).attr("data-name", topics[i]);

        $(a).text(topics[i]);

        $("#FunnyBtn").append(a);


    }


}
addBtns();
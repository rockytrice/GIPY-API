var topics = ["cats", "dogs", "afv babies", "afv pets", "afv", "funny kids", "funny", "tackle", "afv epic falls"];

function addBtns() {
//  function for adding the buttons dynamically
    $("#FunnyBtn").empty();
    // looping through the array of topics
    for (var i = 0; i < topics.length; i++) {
        // creating button for every string in the array
        var a = $("<button>");
        // adding class of topics to the button
        $(a).addClass("topics");
        // adding data attribute
        $(a).attr("data-name", topics[i]);
        // this is providing the initial button text
        $(a).text(topics[i]);
        // finally we append the button to the  HTML
        $("#FunnyBtn").append(a);


    }


}
addBtns();
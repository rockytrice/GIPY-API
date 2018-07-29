$(document).ready(function () {
    // animals array for gifs
    var topics = ["cats", "dogs", "fox", "turtle", "aligator", "whales", "monkey", "pigs", "kangaroo", "owls"];



});







// functon for displaying animal data
function renderButtons() {
    //   loop through the topics array
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        // adding a class of animal-btn to the button
        a.addClass("animal-btn");
        // adding a data attribute
        a.attr("data-name", topics[i]);
        // providing the button text
        a.text(topic[i]);
        $("#animalButtons").append(a);

    }
}
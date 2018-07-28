var topics = ["cats", "dogs", "afv babies", "afv pets", "afv", "funny kids", "funny", "tackle", "afv epic falls"];

function addBtns() {
    //  function for adding the buttons dynamically
    $("#buttons").empty();
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
        $("#buttons").append(a);


    }


}
// when the button is clicked it handles the evens
$("#add-topic").on("click", function(event) {
    // prevents the buttons from submitting a form(its default behavior)
    event.preventDefault();
    // this is where the function grabs the input from the textbox
    var addTopic = $("#jokester-input").val();
// this adds a topic to the array
    topics.push(addTopic);

    console.log(topics);
    // calling the addBtns/processes the topics array
    addBtns();
})
// this displays the initial buttons
addBtns();
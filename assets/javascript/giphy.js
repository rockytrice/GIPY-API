var topics = ["cats", "dogs", "afv babies", "afv pets", "afv", "funny kids", "funny", "tackle", "afv epic falls"];

    //  function for adding the buttons dynamically
function addBtns() {
    $("#laughterButtons").empty();
    // looping through the array of topics
    for (var i = 0; i < topics.length; i++) {
        // creating button for every string in the array
        var funnyBtn = $("<button>");
        // adding class of topics to the button
        $(funnyBtn).addClass("topics");
        // adding data attribute
        $(funnyBtn).attr("data-name", topics[i]);
        // this is providing the initial button text
        $(funnyBtn).text(topics[i]);
        // finally we append the button to the  HTML
        $("#laughterButtons").append(funnyBtn);
    }
} 
// this displays the initial buttons
addBtns();
    // when the button is clicked it handles the evens
    $("#add-topic").on("click", function (event) {
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



// $(document).on("click", function () {
    // var name = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=8KlorxDnGq90aNmGgX8hb5tF5c5UGvig&limit=10";
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            
            console.log(response);




        });




// })




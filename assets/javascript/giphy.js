var topics = ["basketball", "football", "soccer", "tennis", "hockey", "baseball"];

//  function for adding the buttons dynamically
function addBtns() {
    $("#laughterButtons").empty();
    // looping through the array of topics
    for (var i = 0; i < topics.length; i++) {
        // creating button for every string in the array
        var sportBtn = $("<button>");
        // adding class of topics to the button
        $(sportBtn).addClass("topics");
        // adding data attribute
        $(sportBtn).attr("data-name", topics[i]);
        // this is providing the initial button text
        $(sportBtn).text(topics[i]);
        // finally we append the button to the  HTML
        $("#sportButtons").append(sportBtn);
    }
}
// this displays the initial buttons
addBtns();
// when the button is clicked it handles the evens
$("#add-topic").on("click", function (event) {
    // prevents the buttons from submitting a form(its default behavior)
    event.preventDefault();
    // this is where the function grabs the input from the textbox
    var addTopic = $("sports-inputs").val();
    // this adds a topic to the array
    topics.push(addTopic);

    console.log(topics);
    // calling the addBtns/processes the topics array
    addBtns();
})



$(document).on("click", function () {
            var sport = $(this).attr("data-sports");

            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=8KlorxDnGq90aNmGgX8hb5tF5c5UGvig&limit=10";
            $.ajax({
                    url: queryURL,
                    method: "GET"
                })
                .then(function (response) {

                        console.log(response);

                        var results = response.data;

                        for (var i = 0; i < results.length; i++) {

                            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                                // Creating a div with the class "item"
                                var gifDiv = $("<div class='item'>");

                                // Storing the result item's rating
                                var rating = results[i].rating;

                                // Creating a paragraph tag with the result item's rating
                                var p = $("<p>").text("Rating: " + rating);

                                // Creating an image tag
                                var gifImage = $("<img>");

                                // Giving the image tag an src attribute of a proprty pulled off the
                                // result item
                                gifImage.attr("src", results[i].images.fixed_height.url);

                                // Appending the paragraph and personImage we created to the "gifDiv" div we created
                                gifDiv.append(p);
                                gifDiv.append(gifImage);

                                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                                $("#sports-box").prepend(gifDiv);
                            }




                        };
                    });
                });
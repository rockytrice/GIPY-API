$(document).ready(function () {

    // animals array for gifs
    var topics = ["cats", "dogs", "fox", "turtle", "aligator", "whales", "monkey", "pigs", "kangaroo", "owls"];



    // functon for displaying animal data
    function renderButtons() {
        // this delets the buttons prior to adding new animals
        $("#animalButtons").empty();
        //   loop through the topics array
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            // adding a class of animal-btn to the button
            a.addClass("topic-btn");
            // adding a data attribute
            a.attr("data-name", topics[i]);
            // providing the button text
            a.text(topics[i]);
            // adding the buttons to the page
            $("#animalButtons").append(a);

        }
    }

    function rockAnimalImage() {
        // checking to see if clicked was logged to the console
        console.log("clicked");
        // making a variable named state and then store the image's data-state into it.
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");


        }
    }

    renderButtons();
    // this function handles events where one button is clicked
    $("#addAnimal").on("click", function (event) {
        event.preventDefault();

        // This line grabs the input from the textbox
        var topic = $("#animal-input").val().trim();
        // adding the search topic from the textbox to the array
        topics.push(topic);

        $(".reset").click(function() {
            $(this).closest('form').find("input[type=text], textarea").val("");
        });
        renderButtons();



    });
    renderButtons();


    function animalInfo() {

        //  the "this" keyword refers to the button that was clicked
        var animal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animal + "&api_key=8KlorxDnGq90aNmGgX8hb5tF5c5UGvig&limit=10";


        // Performing  AJAX GET request
        $.ajax({
                url: queryURL,
                method: "GET"
            })


            // After the data comes back from the API
            .then(function (response) {
                // Storing an array of results in the results variable
                var results = response.data;
                console.log(response.data);
                // Looping over every result item
                for (var i = 0; i < results.length; i++) {

                    // Only taking action if the photo has an appropriate rating
                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        // Creating a div with the class "item"
                        var gifDiv = $("<div class='item'>");

                        // Storing the result item's rating
                        var rating = results[i].rating;

                        // Creating a paragraph tag with the result item's rating
                        var p = $("<p>").text("Rating: " + rating);

                        // Creating an image tag
                        var animalImage = $("<img>");
                        var imageStill = results[i].images.fixed_width_still.url;
                        var imageAnimate = results[i].images.fixed_height.url;

                        // Giving the image tag an src attribute of a proprty pulled off the
                        //  result item
                        animalImage.attr("src", imageStill);
                        animalImage.attr("data-state", "still");
                        animalImage.attr("class", "gif");
                        animalImage.attr("data-animate", imageAnimate);
                        animalImage.attr("data-still", imageStill);



                        // Appending the paragraph and personImage we created to the "gifDiv" div we created
                        gifDiv.append(p);
                        gifDiv.append(animalImage);

                        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                        $("#gif-view").prepend(gifDiv);

                    }
                }


            });

    }
    // adding event listeners to dynamically generated elements
    $(document).on("click", ".topic-btn", animalInfo);
    $(document).on("click", ".gif", rockAnimalImage);


});
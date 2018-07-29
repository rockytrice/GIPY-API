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

            renderButtons();
            $("#addAnimal").on("click", function (event) {
                event.preventDefault();

                var topic = $("#animal-input").val().trim();

                topics.push(topic);


                //  $(document).on("click", "#addAnimal", function () {
                    renderButtons();


            });
            renderButtons();


                function animalInfo () {
                    console.log("clicked");

                // In this case, the "this" keyword refers to the button that was clicked
                var animal = $(this).attr("data-name");
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                    animal + "&api_key=8KlorxDnGq90aNmGgX8hb5tF5c5UGvig&limit=10";

                // Performing our AJAX GET request
                $.ajax({
                        url: queryURL,
                        method: "GET"
                    })


                    // After the data comes back from the API
                    .then(function (response) {
                        // Storing an array of results in the results variable
                        var results = response.data;

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

                                // Giving the image tag an src attribute of a proprty pulled off the
                                // result item
                                animalImage.attr("src", results[i].images.fixed_height.url);

                                // Appending the paragraph and personImage we created to the "gifDiv" div we created
                                gifDiv.append(p);
                                gifDiv.append(animalImage);

                                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                                $("#gif-view").prepend(gifDiv);

                            }
                        }

                        // renderButtons();
                    });

            }
        
        $(document).on("click",".topic-btn", animalInfo );

    });















            //     // After the data comes back from the API
            //     .then(function(response) {
            //       // Storing an array of results in the results variable
            //       var results = response.data;

            //       // Looping over every result item
            //       for (var i = 0; i < results.length; i++) {

            //         // Only taking action if the photo has an appropriate rating
            //         if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            //           // Creating a div with the class "item"
            //           var gifDiv = $("<div class='item'>");

            //           // Storing the result item's rating
            //           var rating = results[i].rating;

            //           // Creating a paragraph tag with the result item's rating
            //           var p = $("<p>").text("Rating: " + rating);

            //           // Creating an image tag
            //           var animalImage = $("<img>");

            //           // Giving the image tag an src attribute of a proprty pulled off the
            //           // result item
            //           animalImage.attr("src", results[i].images.fixed_height.url);

            //           // Appending the paragraph and personImage we created to the "gifDiv" div we created
            //           gifDiv.append(p);
            //           gifDiv.append(animalImage);

            //           // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            //           $("#gif-view").prepend(gifDiv);
            //         }
            //       }
            //     });
            // });



            //     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8KlorxDnGq90aNmGgX8hb5tF5c5UGvig&q=animals&limit=10&offset=0&rating=G&lang=en";

            //     $.ajax({
            //         url: queryURL,
            //         method: "GET"
            //       }).then(function (response) {

            //         console.log(queryURL);

            //         console.log(response.data);


            //       });





            // });






            //   
            //             var results = response.data;
            //             // looping through each results
            //             for (var i = 0; i < topics.length; i++)
            //                 var gifDiv = $("<div class='item'>");
            //             var rating = results[i].rating;
            //             // creating paragraph tag with the result item's rating
            //             var p = $("<p>").text("Rating: " +results[i].rating);

            //             // creating and storing the image tag
            //             var animalImage = $("<img>");
            //             // seting the src attribute of the image to a property pulled from the result item
            //             animalIgame.attr("src", results[i].images.fixed_height.url);
            //             // appending paragraph and image to the html page
            //             gifDiv.append(p);
            //             gifDiv.append(animalIgame);
            //             $("#gif-view").append(gifDiv);
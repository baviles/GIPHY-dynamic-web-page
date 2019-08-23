$(document).ready(function(){
  //array for topics
  var sports = ["nba","nfl","mlb","mls",
  "wwe","tennis"];
   //function to re-renders the HTML to display the content
  function displaySportsShow() {
      console.log()

      var sports = $(this).attr("data-sports");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=funny+"+sports+"&api_key=yDZ4mH0giBrYijngPnZvKKjOdAOnb7CO&limit=10&rating=pg";
          console.log(queryURL);

          //ajax call for the specific sports button
          $.ajax({
              url: queryURL,
              method: "GET"
            }).done(function(response){
              $("#giphyview").empty();
   
              var results = response.data;
   
              // retrieves the Rating Data
              console.log(response);
   
              // Loops the animals for a limit of  10
              for(var i = 0; i < results.length; i++) {
   
                // creates a div to hold the sports gifs
                var sportsDiv = $("<div>");
   
                // make a class for style.css
                sportsDiv.addClass("sportspictures");
   
                // creates an element for rating to be displayed
                var rating = results[i].rating;
                var p = $("<h2>").text("Rating: " + rating);
   
                // the Images can still or animate to call the class "animeImage" for click.
                var sportsImage = $("<img>");
                sportsImage.attr("src", results[i].images.fixed_height_still.url);
                sportsImage.attr("data-still", results[i].images.fixed_height_still.url);
                sportsImage.attr("data-animate", results[i].images.fixed_height.url);
                sportsImage.attr("data-state", "still");
                sportsImage.addClass('sportsImage');
   
                // Displays the rating
                sportsDiv.prepend(p);
   
                // Displays the sports Image
                sportsDiv.prepend(sportsImage);
                $("#giphyview").prepend(sportsDiv);
              }
   
     
            });        
          }
   
          // function for displaying sports data
          function renderButtons() {
           
   
            // Deletes the images prior to adding new images
 
            $("#sportsbuttons").empty();
   
            for(var i = 0; i < sports.length; i++) {
   
              // then buttons were generated for each topic on the array
             
              var sportsAdd = $("<button>");
              console.log(sportsAdd);
              // adds a class of sports to our button
              sportsAdd.addClass("sports");
   
              // added a data-attribute
              sportsAdd.attr("data-sports", sports[i]);
   
              // provided the initial button text
              sportsAdd.text(sports[i]);
   
              // added the button to the buttons-view div
              $("#sportsbuttons").append(sportsAdd);
            }
          }
   
          // this function handles events where the add sports button is clicked
          $("#add-sports").on("click", function(event){
           
            event.preventDefault();
       
            // this line of code will grab the input from the textbox
            var sportsInput = $(".sports-input").val().trim();
   
            // the sports from the textbox is added to our array
            sports.push(sportsInput);
   
            // calling renderButtons which handles the processing of our sports array
            renderButtons();
          });

          //if the variable state is equal to 'still',
            // then update the src attribute of this image to it's data-animate value,
            // and update the data-state attribute to 'animate'.
            // If state does not equal 'still', then update the src attribute of this
            // image to it's data-animate value and update the data-state attribute to 'still'

          $("#giphyview").on("click", ".sportsImage" ,function() {
            var state = $(this).attr("data-state");
            console.log(state);

            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });
          // adding click event listeners to all elements with a class of "sports"
          $(document).on("click", ".sports", displaySportsShow);
   
          // calling the renderButtons function to display the intial buttons
          renderButtons();
    });


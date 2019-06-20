$(document).ready(function(){
  ///Array for topics
var sports = ["nba","nfl","mlb","mls",
"copa america","concacaf","usa rugby","us open"];
  ///function to re-renders the HTML to display content

// =========================================================================
// Console log your input from the form.
//something .val()



$("#add-sports").on("click", function(event){
  event.preventDefault()
  console.log("TESTING_++++++++++++")
  var userInput = $("#sports-inputTEST").val().trim()
  if (userInput === "") {
    return;
} else if (sports.indexOf(userInput) == -1) {
    sports.push(userInput);
} 
  
  console.log(sports);
  buttons()
  })

// Create a function that displays your array as a button 
// .push() your input into your sports array.

function buttons(){
  $("#buttons").empty();
  for (var i = 0; i < sports.length; i++) {
  
    var buttonDiv = $("<button>");
    buttonDiv.addClass("letter-button letter letter-button-color");
    buttonDiv.attr("data-name", sports[i]);
    buttonDiv.text(sports[i]);
    $("#buttons").append(buttonDiv);
  }
      
}
buttons()



// ========================================================================


function displaySport(){
  
// input from form .val()

var sports= $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=funny+"+sports+"&api_key=yDZ4mH0giBrYijngPnZvKKjOdAOnb7CO&limit=10";
    console.log(queryURL);
  ///call for the specific sport button
    $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response){
        // $("#giphyview").empty();
        console.log (response);

// var results= response.data;
   ///retrieves rating data

  /// loops the sports for a limit of 10
// for(var i =0; i< results.length; i++) {

  ///creates a div that holds the sport gifs
    // var sportsDiv= $("<div>");

   ///makes a class for style.css
// sportsDiv.addClass("sportspictures");

   ///creates an element to display rating
// var rating= results[i].rating;
// var p = $("<h2>").text("Rating:" +rating);

   ///the images can still or animate to call the calss "sportsImage"
// var sportsImage = $("<img>");
// sportsImage.attr("src", results[i].images.fixed_height_still.url);
// sportsImage.attr("data-still", results[i].images.fixed_height_still.url);
// sportsImage.attr("data-animate",results[i].images.fixed_height.url);
// sportsImage.attr("data-state", "still");
// sportsImage.attr.addClass("sportsImage");

   ///displays the rating
// sportsDiv.prepend(p);

   ///displays the sports image
// sportsDiv.prepend(animalImage);

// $("#giphyview").prepend(sportsDiv);

// }

});

}
displaySport()

     ///function to display sports data
  // function renderButtons(){
    
  //    ///deletes images before adding new images
  //   $("#sportsbuttons").empty();
    
  //   for(var i=0; i < sports.length; i++) {
     
  //     ///buttons are generated for each topic on the array
  //     var sportsAdd = $("<button>");
  //     console.log(sportsAdd);
  //     ///adds a type of sport to our button
  //     sportsAdd.addClass("sports");

  //     ///adds a data-attribute
  //     sportsAdd.attr("data-sports", sports[i]);

  //     ///adds a button to the buttons-view div
  //     sportsAdd.text(sports[i]);

  //     $("sportsbuttons").append(sportsAdd);
    // }

  

  // $("#add-sports").on("click", function(event){
  //   event.preventDeault();

  //   // var sportsInput= $(".sports-input").val().trim();
  //   var sportsInput =  $("sports-input").eq(0). val();

  //   sports.push(sportsInput);

  //   // renderButtons();

    
  // });

//   $("#giphyview").on("click",  ".sportsImage", function() {
//     var state= $(this).attr("data-state");
//     console.log(state);

//     if (state==="still"){
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");
//   }
// });

$(document).on("click", ".sports", displaySport);

// renderButtons();

});


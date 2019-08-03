$("#search-submit").on("click", function (event) {
    event.preventDefault();
    var search = $("#search-input").val().trim();
    APIrecipe(search);
});


function APIrecipe(search) {
    var queryURL = `https://api.spoonacular.com/recipes/search?apiKey=22453c33f0b040c98babb5d7cfb70d85&query=${search}&information&number=12`
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(search);

        $(".row-recipe-render").empty();

        for (var i = 0; i <= response.results.length; i++) {

            var recipesRendered = response.results;
            var title = recipesRendered[i].title;
            var recipeImage = recipesRendered[i].image;

            // var newRow = $("<div>").addClass("row");
            var newCol = $("<div>").addClass("col-sm-12 col-md-6 col-lg-4");
            var newCard = `<div class="card">
        <img class="card-img-top" src="${response.baseUri + recipeImage}" style="width:100%; height: 100%;">
        <div class="card-body">
          <h4 class="card-title">${title}</h4>
         
          <a href="#" class="btn btn-primary d-flex justify-content-center my-recipe">View Recipe</a>
        </div>`

            newCol.append(newCard);

            $(".row-recipe-render").append(newCol);


        }
    })
};

// 1: {id: 107878, title: "Garlic Chicken", readyInMinutes: 45, servings: 4, image: "garlic-chicken-2-107878.png", …}

// on click function 

// var searchID = 635350;
// var queryURLId = `https://api.spoonacular.com/recipes/${searchID}/information?apiKey=22453c33f0b040c98babb5d7cfb70d85`;


// $.ajax({
//     url: queryURLId,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);

// })

// $("#search-submit").on("click", function (event) {
//     event.preventDefault();

//     var searchInput = $("#search-input").val().trim();
//     $("#search-input").val("");
//     var newFavorite = $("<div>");
//     newFavorite.addClass("dropdown-item")
//     newFavorite.text(searchInput);
//     newFavorite.appendTo($("#favorite-buttons"));

//     console.log(searchInput);

// });

$(document).on("click", ".my-recipe", function () {
    // var dynamicText = $(this).text();
    // var youtube = $("#youtube-input").val() + "recipe";
    event.preventDefault();
    $(".row-recipe-render").empty();

    var youtube = $("#search-input").val().trim() + "recipe";
    console.log("#search-input");
    // Here we construct our URL
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + youtube + "&maxResults=50&key=AIzaSyDzZ7TBrC8DRq0zbEsfvPXkruckwKvYuNc";
    var youtubeSite = "https://www.youtube.com/embed/";

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (youtube) {
        //code the ajax to call a function - makes it easier to read and can be used for multiple functions
        populate(youtube);
        console.log(youtube);
    });
    //what actually gets pulled from Ajax
    function populate(youtube) {
        // and display it in the div with an id of youtube-view
        // Retrieves the image
        // Math.floor(Math.random() * youtube.items.length)
        var random = Math.floor(Math.random() * youtube.items.length);
        console.log(random);
        var randomVid = youtube.items[random];
        var video = randomVid.id.videoId;
        // <iframe src="">;
        // Creates an element to hold the embeded video
        var videoDiv = $("<iframe />").attr("src", youtubeSite + video);
        // Appends the video
        $('.row-recipe-render').prepend(videoDiv);
    }

});
// $.ajax({
//     url: queryURLId,
//     method: "GET"
// }).then(function(response){
// console.log(response);

// })


<<<<<<< HEAD
<< << << < HEAD
var search = "cheeseburger";
var queryURL = `https://api.spoonacular.com/recipes/search?apiKey=22453c33f0b040c98babb5d7cfb70d85&query=${search}&information&number=1`



$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
=======
$("#search-submit").on("click", function (event) {
    event.preventDefault();
    var search = $("#search-input").val().trim();
    APIrecipe(search);
})


function APIrecipe(search) {
    var queryURL = `https://api.spoonacular.com/recipes/search?apiKey=22453c33f0b040c98babb5d7cfb70d85&query=${search}&information&number=12`
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(search);

        $(".recipe-render").empty();

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

            $(".recipe-render").append(newCol);


        }
    })
}

// 1: {id: 107878, title: "Garlic Chicken", readyInMinutes: 45, servings: 4, image: "garlic-chicken-2-107878.png", …}




>>>>>>> master


// on click function 

var searchID = 635350;
var queryURLId = `https://api.spoonacular.com/recipes/${searchID}/information?apiKey=22453c33f0b040c98babb5d7cfb70d85`;


$.ajax({
    url: queryURLId,
    method: "GET"
<<<<<<< HEAD
}).then(function(response) {
    console.log(response);

})
=======
}).then(function (response) {
    console.log(response);

})

$("#search-submit").on("click", function (event) {
    event.preventDefault();

    var searchInput = $("#search-input").val().trim();
    $("#search-input").val("");
    var newFavorite = $("<div>");
    newFavorite.addClass("dropdown-item")
    newFavorite.text(searchInput);
    newFavorite.appendTo($("#favorite-buttons"));

    console.log(searchInput);



});



$(document).on("click", ".dropdown-item", function () {
    var dynamicText = $(this).text();

    APIrecipe(dynamicText);


});
// $.ajax({
//     url: queryURLId,
//     method: "GET"
// }).then(function(response){
// console.log(response);

// })

>>>>>>> master

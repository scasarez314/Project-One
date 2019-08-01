<< << << < HEAD
var search = "cheeseburger";
var queryURL = `https://api.spoonacular.com/recipes/search?apiKey=22453c33f0b040c98babb5d7cfb70d85&query=${search}&information&number=1`



$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);

})

// on click function 

var searchID = 635350;
var queryURLId = `https://api.spoonacular.com/recipes/${searchID}/information?apiKey=22453c33f0b040c98babb5d7cfb70d85`;


$.ajax({
    url: queryURLId,
    method: "GET"
}).then(function(response) {
    console.log(response);

})
var APIkey= "668b9a941fa9096a988265ad658e599c"
var queryURL ="api.openweathermap.org/data/2.5/weather?q="


function search(){
    console.log(queryURL);
    var searchQuery = $("#field").val();
    console.log(searchQuery);
    $.ajax({
        url: queryURL +searchQuery+APIkey,
        method: "GET",
        dataType:"jsonp",
    }).then(function(response){
        console.log(response);
    })
}
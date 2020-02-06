var APIkey= "668b9a941fa9096a988265ad658e599c"
var queryURL ="http://api.openweathermap.org/data/2.5/weather?q="
 

function search(){
    console.log(queryURL);
    var searchQuery = $("#field").val();
    console.log(searchQuery);
    $.ajax({
        url: queryURL + searchQuery + "&appid=" + APIkey,
        method: "GET",
        dataType:"jsonp",
    }).then(function(response){
        console.log(response);
        $("#city").html("<h2>" + response.name + "<h2>");
        var tempF = (response.main.temp - 273.15)*1.80 + 32;
        $("#temp").html("<h3>" + "Temperature: " + tempF + "<h3>");
        })
    }




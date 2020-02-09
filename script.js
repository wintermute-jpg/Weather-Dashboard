var APIkey= "668b9a941fa9096a988265ad658e599c"
var weatherURL ="http://api.openweathermap.org/data/2.5/weather?q="
var date = moment().format("MMM Do YY");
var forecastURL = "http://api.openweathermap.org/data/2.5/forecast?q="


window.onload = function(){
 $("#searchBtn").click(function(){
    //console.log(weatherURL);
    var searchQuery = $("#field").val();
    $("#history").append("<li>"+ searchQuery+ "</li>");
    $.ajax({
        url: weatherURL + searchQuery + ",us&mode&appid=" + APIkey,
        method: "GET",
        dataType:"jsonp",
    }).then(function(response){
        console.log(response);
        var temp= (response.main.temp - 273.15)*1.80 + 32;
        var tempF = temp.toFixed(0);
        var icon = response.weather[0].icon ;
        $("#city").html("<h2>" + response.name + "(" + date + ")"+ "<img src='http://openweathermap.org/img/wn/"+icon+"@2x.png'"+"<h2>");
       console.log(icon);
        $("#temp").html("<p>" + "Temperature: " + tempF + "F"+"<p>");
        $("#humidity").html("<p>" + "Humidity: " + response.main.humidity);
        $("#wind").html("<p>" + "Wind Speed: " + response.wind.speed);
        $.ajax({
            url: forecastURL + searchQuery + "&appid=" + APIkey,
            method:"GET",
            dataType:"jsonp",
        }).then(function(response){
            console.log(response);
            var n = 0
            //create a loop that fills in thex info 
            for(var i=0; i<=5; i++) {
            //for loop that increases var i=0 by one till its equal to five.
            //var n in loop to represent index of date
            var find = response.list[n];
            var foreDate= find.dt_txt
            var foreIcon= find.weather[0].icon;
            //var date = find.dt_txt;
          //  console.log(date);
            console.log(foreIcon);
            var forTemp = ((find.main.temp - 273.15)*1.80 +32).toFixed(0);
            //console.log(forTemp);
            $("#day"+ i).html("<p>"+ foreDate + "<p>"+"<img src='http://openweathermap.org/img/wn/"+foreIcon+"@2x.png' style='width:50px;height:50px;'>"+ "<p>" + "Tempurature F: " +forTemp + "<p>"+"<p>" +"Humidity: " + find.main.humidity + "<p>");
            n ++;
            n ++;
            n ++;
            n ++;
            n ++;
            n ++;
            n ++;
            n ++;
            //increases n by 8s
            //iterates
            console.log(n);
            //console.log(i);
            }
        })
        })
    function history(){
        $("#history").append("<li>"+ searchQuery+ "</li>");
        var searchHist = $("#history").innerText;
        console.log(searchHist);
        //localStorage.setItem('preSearch', JSON.stringify(searchHist));
        
    }
    
    }
)
}




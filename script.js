$(document).ready(function(){
    $("#search").on("click", function(){
        var searchvalue = $("#city").val()
        $("#city").val("")
        //call our search weather function
        searchweather (searchvalue)
    })
    //onclick for history - local storage of cities, getting from local storage onclick
    function searchweather (searchvalue) {
        $.ajax({
            type:"GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchvalue + "&appid=33dcb1cd7bc3a96b8d8f723aa3bda2c3&units=imperial",
            dataType: "json",
            success: function (data){
                console.log(data);
                //create history links for this search
                //call our make row function
                $("#today").empty()
                var name = $("<h3>").addClass("card-title").text(data.name)
                var card = $("<div").addClass("card")
                var wind = $("<p>").addClass("card-text").text(data.wind.speed)
                var humidity = $("<p>").addClass("card-text").text(data.main.humidity)
                var temperature = $("<p>").addClass("card-text").text(data.main.temp)
                //image
            }
        })

    }
})
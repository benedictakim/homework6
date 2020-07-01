$(document).ready(function(){
    $("#search").on("click", function(){
        var searchvalue = $("#city").val()
        $("#city").val("")
        //call our search weather function
        searchweather (searchvalue)
    })
    //onclick for history - local storage of cities, getting from local storage onclick
    //for (var i = 0; i < lists.length; i++) {
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
                    var name = $("<h3>").addClass("card-title").text(data.name) //add current date mm/dd/yyyy
                    var card = $("<div>").addClass("card")
                    var temperature = $("<p>").addClass("card-text").text(data.main.temp)
                    var humidity = $("<p>").addClass("card-text").text(data.main.humidity)
                    var wind = $("<p>").addClass("card-text").text(data.wind.speed) 
                    var lat = data.coord.lat
                    var lon = data.coord.lon                      
        //     //    var imageURL = "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png"
        //     //}
        //    // })
            }
        })
        // $.ajax({
        //     type:"GET",
        //     url: "http://api.openweathermap.org/data/2.5/uvi?appid={33dcb1cd7bc3a96b8d8f723aa3bda2c3}&lat={lat}&lon={lon}",
        //     dataType: "json",
        //     success: function (data){
        //     console.log(data);
        //         // $("#today").prepend()
        //         //     var uv = $("<p>").addClass("card-text")()

        //     }
        // })
    }
})

//url: 
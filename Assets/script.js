//Date
var todaysDate = moment().format("dddd, MMMM Do YYYY");
var jumboDate = $("#currentDay");
    jumboDate.text(todaysDate);


$(document).ready(function(){
    changeColor();
    displayText();
});

function changeColor() {
    var currentTime = moment().hours();
    console.log("current time" + currentTime);


//past present future
    $(".input").each(function(){
        var scheduledTime = parseInt($(this).attr("id"));
        console.log(scheduledTime);
        
        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this.removeClass("present");
            $(this).addClass("past");

        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present"); 

        }
  });
}























    
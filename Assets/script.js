$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

$(document).ready(function() {
    // event listener
    $(".saveBtn").on("click", function() {
      // get nearby values
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // save in localStorage
      localStorage.setItem(time, value);
    });
  








    
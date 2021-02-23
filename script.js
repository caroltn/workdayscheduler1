$(document).ready(function () {//tells engine to load html then css first.
  
  //display current day & time.
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

  //assign saveBtn click listener for user input and time stamp
  $(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //set items in local storage
    localStorage.setItem(time, text);
  })
//load previously saved items via local storage
  $("#9am-row .description").val(localStorage.getItem("9am-row"));
  $("#10am-row .description").val(localStorage.getItem("10am-row"));
  $("#11am-row .description").val(localStorage.getItem("11am-row"));
  $("#12pm-row .description").val(localStorage.getItem("12pm-row"));
  $("#1pm-row .description").val(localStorage.getItem("1pm-row"));
  $("#2pm-row .description").val(localStorage.getItem("2pm-row"));
  $("#3pm-row .description").val(localStorage.getItem("3pm-row"));
  $("#4pm-row .description").val(localStorage.getItem("4pm-row"));
  $("#5pm-row .description").val(localStorage.getItem("5pm-row"));


  function hourTracker() {
    //get current number of hours
    var currentHour = moment().hour();

    //loop over time blocks
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour, currentHour)

      //check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  hourTracker();
})


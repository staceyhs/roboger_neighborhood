// Business Logic

var beepBoop = function(digit) {
  if (digit === 3) {
    return "Won't you be my neighbor?" 
  } else if (digit === 2) {
    return "Beep!";
  } else {
    return false;
  }
};

// User Logic

$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var digit = parseInt($("input#digit").val());
    var result = beepBoop(digit);
    $("#result").text(result);
  });
});
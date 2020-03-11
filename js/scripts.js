// Business Logic

var beepBoop = function(digit) {
  return false;
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
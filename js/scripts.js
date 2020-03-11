// Business Logic

var beepBoop = (digit) => {
  let returnString = '';

  for (let i = 0; i <= digit; i++) {
    var tempString = i.toString();

    if (tempString.indexOf('3') !== -1) {
      returnString += "Won't you be my neighbor?";
    } else if (tempString.indexOf('2') !== -1) {
      returnString += "Boop!";
    } else if (tempString.indexOf('1') !== -1) {
      returnString += "Beep!";
    } else {
      returnString += i.toString();
    }

    if (i !== digit) {
      returnString += ", ";
    }
  }

  return returnString;
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
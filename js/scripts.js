// Business Logic

function pigLatin(str) {
  str = str.toLowerCase()
  const vowels = ["a","e","i","o","u"];
  let vowelIndex = 0;

  if (vowels.includes(str[0])) {
    return str + "way";
  } else {
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelIndex = str.indexOf(char);
        break;
      }
    }
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }
}

// User Logic

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);
    $("#result").text(result);
  });
});
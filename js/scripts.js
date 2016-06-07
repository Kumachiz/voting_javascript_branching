$(document).ready(function() {
  var age = parseInt(prompt("Enter in your age here:"));

  if (age >= 18) {
    $('#voters').show();
  } else {
    $('#non_voters').show();
  }
});

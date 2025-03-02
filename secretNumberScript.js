var secretNumber = 4;
var points = 0;
var userNumber = prompt("Enter a valid number (between 1 and 5)");

// If the userNumber cannot be converted to a valid number, then this while loop continues to ask for a valid number
while (isNaN(userNumber)) {
  userNumber = prompt("Invalid Input! Please enter a valid number (between 1 and 5)");
}

userNumber = parseInt(userNumber);  // userNumber is converted to an Integer

/*
  If-statements that check to see if the userNumber matches the secretNumber
  If the two variables match, then a congratulatory message is displayed with the total points earned
  Else if the two variables don't match, then an apologetic message is displayed with the total points earned
*/
if (userNumber === secretNumber) {
  points += 10;
  document.write("<h2>Congratulations! You guessed the correct number!</h2>");
  document.write("<p>Points Earned: <b>" + points + "</b></p>");
}
else {
  document.write("<h2>Sorry! Your number was incorrect. Better Luck Next Time!</h2>")
  document.write("<p>Points Earned: <b>" + points + "</b></p>");
}
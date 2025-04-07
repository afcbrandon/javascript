/* Question Multi-dimensional array */
var questions = [
  ["In which movie did Harry Potter get his Firebolt broomstick?", 1,
    "The Goblet of Fire", "The Prisoner of Azkaban", "The Order of the Phoenix"],
  ["Who is called the Dark Lord in the Lord of the Rings series?", 0,
    "Sauron", "Lord Voldemort", "Saruman"],
  ["What is the name of Jack Sparrow's ship in the Pirates of the Carribbean movies?", 1,
    "The Flying Dutchman", "The Black Pearl", "The H.M.S. Endeavour"]
];

var counter = 0;

/*  Function that displays questions and answers to the player */
function playGame() {
  document.getElementById('question').innerHTML = questions[counter][0];  // Access the question
  questions[counter].shift(); //  remove the first element from the 2D array at index[counter]
  var correctIndex = questions[counter][0]; //  access the first element from the 2D array and save it into correctIndex
  questions[counter].shift();

  document.getElementById('answers').innerHTML =
    "<p>Select the best response:</p>" +
    "<li><a href=\"#\" onClick='checkAnswer(" + 0 + ", " + correctIndex + ")'>" + questions[counter][0] + "</a></li>" +
    "<li><p></p></li>" +
    "<li><a href=\"#\" onClick='checkAnswer(" + 1 + ", " + correctIndex + ")'>" + questions[counter][1] + "</a></li>" +
    "<li><p></p></li>" +
    "<li><a href=\"#\" onClick='checkAnswer(" + 2 + ", " + correctIndex + ")'>" + questions[counter][2] + "</a></li>";
}

/* Function that checks to see if player's answer is correct */
function checkAnswer(answerIndex, correctIndex) {

  if (answerIndex == correctIndex) {
    alert("Correct Answer!");
  }
  else {
    alert("Sorry, wrong answer!");
  }

  counter++;

  if (counter < 3) {  // Game moves to next question if there are more questions left in array
    document.getElementById('playButton').click();
  }
  else {  // If all questions have been asked, then player is alerted to press the restart button to replay the game
    document.getElementById('prompt').innerHTML = "<button id='restartButton' onClick='location.reload()'>Restart Game</button>";
    alert("The game has ended. Press the \"Restart Game\" button to replay the game!");
  }

}

/*  Function that lets user restart the game */
function restart() {
}

/*  Beginning Manipulating the Document */
document.getElementById('prompt').innerHTML = "<button id='playButton' onClick='playGame()'>Play Game</button>";
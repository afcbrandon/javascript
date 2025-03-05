
// Global Variables
const questions = [
  "What is the name of Harry Potter's owl?",
  "What color is Luke Skywalker's lightsaber in 'Return of the Jedi'?",
  "Who is the secret king from 'The Lord of the Rings'?"
];
const answers = [
  "Hedwig",
  "green",
  "Aragorn",
]

/* 
  Function that loops through array of questions and answers.
    The user has three 3 chances to guess the correct answer, 3 points for 1st guess, 2 points for second guess, 
      1 point for third guess. If the user fails after 3 guesses, then the user is awarded 0 points.
    Each point won is added to the points variable.
*/
function questionPoints(qArray, aArray) {

  var points = 0;

  for (i = 0; i < qArray.length; i++) {
    var attempts = 3; // attempts initialized at 3 (max points). Reset back to 3 at the start of each for loop iteration
    while (attempts > 0) { 
      var userAnswer = prompt(qArray[i]);

      // breaks out of the while loop if the user's guess is correct, 
      // conditions are both set to lowercase to allow correct answer
      //    ie: hedwig, HEDWIG, Hedwig are all correct guesses to the first question
      if (userAnswer.toLowerCase() === aArray[i].toLowerCase()) {
        break;
      }

      // decrements attempts by 1 at the end of each loop, assuming the user hasn't guessed correctly
      attempts--;
    }

    // attempts added to the points total
    points += attempts;
  }

  return points;  // return the final points value
}

var score = questionPoints(questions, answers);

// The user's score is written to the html document
document.write("<h3>TOTAL SCORE</h3>");
document.write("<p>" + score + " Points</p>");
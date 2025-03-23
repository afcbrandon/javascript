
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
// Array of five quotes
var quoteOfTheDay = [
  '"Do. Or Do Not...\nThere is no try.\n\t\t- Yoda, Empire Strikes Back (1980)"',
  '"Happiness can be found even in the darkest of times, if one only remembers to turn on the light.\n' +
    '\t\t- Albus Dumbledore, Harry Potter and the Prisoner of Azkaban (2004)"',
  '"Life moves pretty fast. If you don’t stop and look around once in awhile, you could miss it.\n' +
    '\t\t- Ferris Bueller, Ferris Bueller\'s Day Off (1986)"',
  '"What we do in life echoes in eternity.\n\t\t- General Maximus Decimus Meridius, Gladiator (2000)"',
  '"If you focus on what you left behind, you will never see what lies ahead.\n\t\t- Gusteau, Ratatouille (2007)"'];

// Function that chooses a random quote of the day
function randomQuote(quoteOfTheDay) {
  // Generate a random number between 0 and 4
  const max = 4;
  const min = 0;
  var randNum = Math.floor(Math.random() * (max - min + 1)) + min;

  // select a random quote of the day, and write it to the document
  document.writeln("<div class='quote'>");
  document.writeln("<p>" + quoteOfTheDay[randNum] + "</p>");
  document.writeln("</div>");
}

// Function that convertes the first letter of a name to uppercase
function capitalizeFirstLetter(name) {
  return String(name[0]).toUpperCase() + String(name).slice(1);
}

// Function that validates an email
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Functionat the prompts user for an email address and then writes to the html document
function promptEmail() {
  var email = prompt('Enter a valid email address, "username@domain.com":');
  while (true) {
    if (validateEmail(email)) {   // if the email is valid, break out of loop
      break;
    }

    email = prompt('ERROR! Please enter a valid email address, "username@domain.com":');
  }

  // Split the email by username and domain
  var emailArr = email.split('@');


  // Write to document
  document.writeln("<div class='email'>");
  document.writeln(`<p>${emailArr[0].toUpperCase()}\t${emailArr[1]}</p>`);
  document.writeln("</div>");
}

// Greeting function
function greeting(dateHour, name) {
    // Assign the proper greeting to variable 'greeting'
    var greeting;
    if (dateHour > 5 && dateHour < 12) {  // 6:00 am - 11:59 am is the morning
      greeting = `Good Morning, ${name}`;
    }
    else if (dateHour > 11 && dateHour < 18) {  // 12:00 pm to 5:59 pm is the afternoon 
      greeting = `Good Afternoon, ${name}`;
    }
    else {  //  6:00 pm to 5:59 am is the evening
      greeting = `Good Evening, ${name}`;
    }

    return greeting;
}

/*
  Function that gets the current date and time and prints it, in a readable format, to the console.
  Also displays a greeting based on the time: "Good Morning", "Good Afternoon", "Good Evening"
*/
function currDateTime() {
  const now = new Date();
  const dateHour = now.getHours();
  const dateMins = now.getMinutes();
  const dateDay = now.getDay();
  const dateMonth = now.getMonth();
  const year = now.getFullYear();
  const dateNumDay = now.getDate();

  // convert day to readable format
  var day;
  switch(dateDay) {
    case 1: day = "Monday"; break;
    case 2: day = "Tuesday"; break;
    case 3: day = "Wednesday"; break;
    case 4: day = "Thursday"; break;
    case 5: day = "Friday"; break;
    case 6: day = "Saturday"; break;
    default: day = "Sunday";
  }

  // convert month to readable format
  var month;
  switch (dateMonth) {
    case 1: month = "January"; break;
    case 2: month = "February"; break;
    case 3: month = "March"; break;
    case 4: month = "April"; break;
    case 5: month = "May"; break;
    case 6: month = "June"; break;
    case 7: month = "July"; break;
    case 8: month = "August"; break;
    case 9: month = "September"; break;
    case 10: month = "October"; break;
    case 11: month = "November"; break;
    default: month = "December";
  }

  // Check to see if it is AM or PM;
  var meridiem;
  if (dateHour < 12) {
    meridiem = "AM";
  }
  else {
    meridiem = "PM";
  }

  // Convert military hour to standard hour, if the hour is greater than 12 or if hour is 0 (12 am)
  var hour;
  if (dateHour > 12) {
    hour = dateHour - 12;
  }
  else if (dateHour == 0) {
    hour = 12;
  }
  else {
    hour = dateHour;
  }

  // Convert the minutes into a readable format
  var mins;
  if (dateMins < 10) {
    mins = "0" + dateMins;
  }
  else {
    mins = dateMins;
  }

  // add the proper suffix to the day, "1st", "2nd", "3rd"
  var numDay;
  switch(dateNumDay) {
    case 1:
    case 21:
    case 31:
      numDay = dateNumDay + "st"; break;
    case 2:
    case 22:
      numDay = dateNumDay + "nd"; break;
    case 3:
    case 23:
      numDay = dateNumDay + "rd"; break;
    default: numDay = dateNumDay + "th";
  }

  // Prompt the web visitor for their name, and then convert the first letter to an uppercase.
  var name = prompt("Please enter your name:");
  name = capitalizeFirstLetter(name);

  document.write("<div class='dateTime'>");
  document.write(`<p>${greeting(dateHour, name)}.</p>`);  // calls the greeting function
  document.write("<p>");
  document.write(`Today is ${day}, ${month} ${numDay}, ${year}. `);
  document.write(`It is ${hour}:${mins} ${meridiem}`);
  document.write("</p>");

  document.write("</div>");
}

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

// Write the current date and time 
// Function for greeting is called within this function
currDateTime();

// Prompt the user for their email
promptEmail();

// Generate a random quote of the day
randomQuote(quoteOfTheDay);

// The user's score is written to the html document
var score = questionPoints(questions, answers);
var percentage = ((score / 9) * 100).toFixed(2);
document.writeln("<div class='quiz-score'>");
document.writeln("<h3>TOTAL SCORE</h3>");
document.writeln(`<p> ${score} Points ${percentage}\%</p>`);
document.writeln("</div>")
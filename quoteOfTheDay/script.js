// Array of five quotes
var quoteOfTheDay = [
  '"Do. Or Do Not...\nThere is no try.\n\t\t- Yoda, Empire Strikes Back (1980)"',
  '"Happiness can be found even in the darkest of times, if one only remembers to turn on the light.\n' +
    '\t\t- Albus Dumbledore, Harry Potter and the Prisoner of Azkaban (2004)"',
  '"Life moves pretty fast. If you don’t stop and look around once in awhile, you could miss it.\n' +
    '\t\t- Ferris Bueller, Ferris Bueller\'s Day Off (1986)"',
  '"What we do in life echoes in eternity.\n\t\t- General Maximus Decimus Meridius, Gladiator (2000)"',
  '"If you focus on what you left behind, you will never see what lies ahead.\n\t\t- Gusteau, Ratatouille (2007)"'];

/* Get a number from the user, 
  divide by 5 and get the remainder,
  write the quote of the day from the quoteOfTheDay Array to the document
  */
var userNumber = prompt("Please enter a number");
userNumber = userNumber % 5;
document.write("<p><span class='quote'>" + quoteOfTheDay[userNumber]) + "</span></p>";

// Array of 3 favorite websites
var website = ["https://www.autozone.com", "https://www.youtube.com", "https://store.steampowered.com/"];

/* Prompt the user for their favorite website,
  add the user's website to the end of the array and delete the first website from the array,
  write the list of the websites to the document
  */
var userFavoriteWebsite = prompt("Enter the url of your favorite website (ignore the first 'www' part)");
website.push(userFavoriteWebsite);
website.shift();
document.write("<div class='list'><p>List of Websites</p>");
document.write("<ul><li><a href='" + website[0] + "' target='_blank'>Youtube</a></li>");
document.write("<li><a href='" + website[1] + "' target='_blank'>Steam</a></li>");
document.write("<li><a href='https://www." + website[2] + "' target='_blank'>Your Favorite Website</a></li></ul></div>");

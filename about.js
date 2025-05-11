// Custom function that switches themes
function toggleTheme() {

  let theme = document.getElementsByTagName("link")[0];
  const themeButton = document.getElementById("theme");

  if (themeButton.textContent === "Dark Mode - JavaScript Function") {
    themeButton.textContent = "Light Mode - JavaScript Function";
    theme.setAttribute('href', 'aboutDark.css');
  } else {
    themeButton.textContent = "Dark Mode - JavaScript Function";
    theme.setAttribute('href', 'aboutLight.css');
  }

}

// JQuery
$(document).ready( function() {
  console.log( "Ready!" );

  // Hides or Shows the NavBar
  $("#hideShow").click(function() {
    if ( $("#top-nav").is(":visible") ) {
      $("#top-nav").hide();
      $(this).text("Show Navbar - JQuery");
      console.log("Navbar was hidden!");
    } else {
      $("#top-nav").show();
      $(this).text("Hide Navbar - JQuery");
      console.log("Navbar was unhidden!");
    }
    
  });

  // Fades the button
  // Slides the button after 1 second delay
  $("#wildcard").click(function() {
    let aboutText = $(".about"); 

    let learnedText = $(".learned");

    let goalText = $(".goals");
    var originalSize = goalText.css("font-size");
    var increaseFactor = 1.1;

    // Slides the .about div
    aboutText.slideUp("slow", function() {
      aboutText.slideDown("slow");
    });

    // fades out and fades in the .learned div
    learnedText.fadeOut("slow", function() {
      learnedText.fadeIn("slow");
    })

    // increases text size and goes back to normal for the .goals div
    goalText.animate({
      "font-size": parseFloat(originalSize) * increaseFactor + "px"
    }, "slow", function() {
      goalText.animate({
        "font-size": originalSize
      }, "slow");
    });

  });



});
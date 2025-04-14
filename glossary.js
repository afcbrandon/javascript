$(document).ready(function() {
  console.log(  "Ready!"  );

  // Hide all botanic names
  $('.botanic').hide();

  // Hide the images
  $('.imgdiv').hide();

  // Hover event for .pic class
  $('.pic').hover(
    function(evt) {  // mouseover
      // Each picture has a title attribute that represents the name of the associated flower div. Get the title attribute and concatenate it with the # in front to create the id for the .imgdiv that you want to display. Save this as a variable.
      var picTitle = "#" + $(this).attr("title");
      console.log("Element title is " + picTitle);
      // Get the X and Y coordinates of the event and save them in variables. Add 150 to the x coordinate to move it to the right so it doesn't cover the name.
      var xPos = evt.pageX + 150;
      var yPos = evt.pageY;
      // Set the top and left css properties of the div to display (using the variable you created) to these x and y coordinates and then show the image.
      $(picTitle).css({
        "top": yPos,
        "left": xPos
      })
      $(picTitle).show();
    },
    function(evt) {  // mouseout
      var picTitle = "#" + $(this).attr("title");

      $(picTitle).hide();
    }
  );
  
  // Add a click event to the flower class that will first hide the botanic class (this is to hide any previously displayed botanic name) and then show the botanic name for the current flower only.
  $('.flower').click(function() {
    $('.botanic').hide();
    $(this).children('.botanic').show();
  });

  //  add a mouseover event to change the color of the headings, h1 and h2 using the css method. You can change them to any color that you choose.
  $('h1').mouseover(function() {
    $('h1').css("color", "#e0829d");
  });
  $('h1').mouseout(function() {
    $('h1').css("color", "darkgreen");
  })
  $('h2').mouseover(function() {
    $('h2').css("color", "#e0829d");
  });
  $('h2').mouseout(function() {
    $('h2').css("color", "darkgreen");
  })

  //  add a keypress event so that if you type in a letter, it will jump to the first flower that starts with that letter in the list.
  $(document).keypress(function(evt) {
    var keyPressed = String.fromCharCode(evt.which);
    window.location = "#" + keyPressed;
  })

});
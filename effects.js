$(document).ready(function() {
  console.log(  "Ready!"  );

  //  Hide the newSignup form when the page loads
  $('form').hide();

  //  Sign Up Link
  //  Add a click event to the signup link
  $('#signuplink').click(function() {
    //  Use the slideToggle function to show or hide the newsSignup form.
    $('form').slideToggle();

    //  If the openclose span contains a +, change the + to a -.
    if ($('#openclose').text() == "+") {
      $('#openclose').text("-");
    }
    //  Otherwise, change the - to a +.
    else {
      $('#openclose').text("+");
    }

    //  Cancel the link default action
    $('form').click(function(evt) {
      evt.preventDefault();
    });

  });

  //  Slogan
  //  Hover action for slogan
  $('#slogan').hover(
    function() {  //  on mouse over
      $(this).fadeOut("slow", "linear",
        function() {  // Callback Function to fade in new text
          $(this).text("Hand Picked Just For You").fadeIn("slow", "swing");
      });
    },
    function() {  //  on mouse out
      $(this).fadeOut("fast", "swing",
        function() {  // Callback to fade in original text
          $(this).text("The Power of Flowers").fadeIn("slow", "linear");
        }
      );
    }
  );

  //  Animated Rose
  //  Add animation in the document.ready function to move the rose element to a position of right: 100px and opacity: 1. When the page loads the rose should move into position from the right side and fade in slowly using the swing easing function.
  $('#rose').animate({
    right: '100px',
    opacity: 1
  }, "slow", "swing");

  //  Form Submission Event
  $('#newsSignup > input[type=submit]').click(function() {
    //  Display an alert message: "Thank you for registering"
    alert("Thank you for registering!");
    //  Hide the newsSignup form
    $('#newsSignup').hide();
    //  Fade the signuplink anchor tag to 30% opacity
    $('#signuplink').animate({
      opacity: .3
    });
    //  Stop the default action to submit the form
    return false;
  });

});

$(document).ready(function(){
  console.log(  "Ready!"  );

  // Create a variable to count the items in the shopping cart and initialize it to zero.
  var shopCartItems = 0;

  // Create a variable to hold some HTML to create a delete button.
  var delButton = '<span class="del">Remove</span>';

  // Add a click event to the .add class (assigned to the Add to Cart buttons on the page)
  $('.add').click(function() {

    // Increment the shopping cart count by 1
    shopCartItems++;

    // If the item is > 0, hide the '#empty' list item
    if (shopCartItems > 0) {
      $('#empty').hide();
    }

    // Get the text from the name and id attributes of the clicked element. Store these values in variables.
    var itemID = $(this).attr('id');
    var itemName = $(this).attr('name');


    // Create a list item with class of 'cartItem' and name attribute of id from clicked element above.
    // The text in the list item should be the name of the flower clicked and a span tag with class of 'del' and text of Remove.
    var cartLink = '<li class="cartItem" name="' + itemID + '">' + itemName + ' ' + delButton + '</li>';

    // Add (append) a list item to the end of the #cart ul that includes the item text from the image name attribute and the remove button variable.
    $('#cart').append(cartLink)

    // Hide the Add to Cart button
    $(this).hide();

  });

  // Delegate
  $('#cart').on('click', '.del', function() {

    // Save the name of the item into a variable to be called to show add to cart button
    var itemName = $(this).parent().attr('name');

    // Remove the parent li from the page
    $(this).parent().remove();

    // Deduct 1 from the item count
    shopCartItems--;

    // If the item count is 0, show the #empty list item.
    if (shopCartItems == 0) {
      $('#empty').show();
    }

    // Show the Add to Cart button for the associated flower.
    $('#' + itemName).show();

  });


  // For the ratings, add a click event to any of the star images inside of a span with a class of 'rating'
  $('.rating').children().click(function() {

    // Change the image source of all siblings of the clicked star to the staroff.gif image
    $(this).siblings().attr('src', 'staroff.gif');

    // TODO: Change the image source of all of the closest ('img') to the staron.gif image
    $(this).attr('src', 'staron.gif');

    // Change the image source of all of the previous stars to the staron.gif image
    $(this).prevAll().attr('src', 'staron.gif');

  });

});
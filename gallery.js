$(document).ready(function() {
  console.log(  "Ready!"  );

  // preload images
  var preloadImages = [
    "yellow_pompom_mum.jpg", "purple_single_mum.jpg", "white_double_mum.jpg",
    "pink_single_mum.jpg", "sunburst_daisy_mum.jpg", "magenta_daisy_mum.jpg"
  ]
  var imgs = [];
  for (var i = 0; i < preloadImages.length; i++) {
    imgs[i] = new Image;
    imgs[i].src = preloadImages[i];
  }

  // Add a hover effect to each of the smaller images to add a thin dark green border and box shadow when hovering over the image and remove it when you move off the image.
  //    - Create rollovers for all the thumbnail images.
  $('#thumbs img').hover(

    function mouseOver () {

      // Add a shadow to the thumbnail
      $(this).css(
        {
          "border-style": "solid",
          "border-color": "darkgreen",
          "border-width": "thin",
          "box-shadow": "3px 3px black"
        }
      );
      
    },
    function mouseOff() { 
      // Reset the CSS
      $(this).css(
        {
          "border-style": "",
          "border-color": "",
          "border-width": "",
          "box-shadow": ""
        }
      )
    }

  );

  // Add a click event to each of the smaller images to replace the src attribute of the larger image with the src attribute from the clicked image. Then take the alternate text from the small image and use it to replace the text under the large image.
  $('#thumbs img').click(

    function replaceLargeImageSource() {
      var imageText = $(this).attr('alt');
      var imageSrc = $(this).attr('src');

      $('#lgPic').attr('src', imageSrc);
      $('#lgTitle').text(imageText);
    }

  );

  // Add a click event to the large image to open it in a new window using the src attribute as the URL
  $('#lgPic').click(

    function openNewWindow () {
      var currentImageSource = $(this).attr('src');
      var currentImageName = $('#lgTitle').text();
      var newWin = open(currentImageSource, currentImageName, 'width=640 height=480 top=100 left=200')
    }

  );

});
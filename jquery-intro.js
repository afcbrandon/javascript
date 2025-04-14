// create a months array
var months = ['January', 'February','March','April','May','June','July','August','September','October','November', 'December'];
// create a tips array
var tips=["<p>Those of  us who live through our gardens know how bittersweet it can be to see the lush green growth of  summer disappear during the cold months of  winter. Hellebores are the perfect winter garden companion to plant with another winter blooming favorite, Camellias.</p><p>Visit us this season for the exciting selection of  both of  these cool season beauties and enjoy them in your garden for years to come.</p>",
"<p>Spring is a time of  renewal for both the gardener and the garden. Suggestions for this month: </p><ul><li> Transplants of  tomatoes should be planted by March 15th</li><li> Fertilize your  lawn after warm-season grasses are growing and have been mowed 2-3 times.</li><li> Release beneficial nematodes to control ticks, fleas, chiggers, and fire ants. </li></ul>",
"<p><strong>Summer is the TIME</strong><ul><li>Select rose bushes from the huge selection of  varieties we offer.</li><li>Transplants of  peppers, eggplant and tender herbs can be planted.</li><li>Plant fruit trees, shrubs, roses, perennials, herbs and colorful annuals like geraniums and snapdragons.</li></ul>",
"<p>Fall is the best time to plant in north Texas. Milder temperatures and increased rainfall mean that new plants—especially trees and shrubs—can establish root systems much more easily than during hot summer months.</p><p>Also with the changing season comes the changing of  our color plantings: petunias, dianthus, ornamental kale and mums bringing cheerful color ahead of  winter’s trusted and long-lasting pansies and violas.</p>"];
// create a specials array
var specials = ["<p>Don't forget our feathered friends!</p><p>All bird feeders and birdseed are 50% off this January.</p> ",
"<p>Roses for your sweetheart!</p><p>All roses are $24.99 this February.</p>",
"<p>Add some color to your garden!</p><p>This March all petunias are $10.99 for a flat of 16.</p>",
"<p>Time to fertilize!</p><p>All fertilizers 20% off.</p>",
"<p>Geraniums: 6 inch pot is only $6.99 all May!</p>",
"<p>These can take the heat!</p><p>Zinnias: $1.00 each for a 4 inch pot.</p>",
"<p><strong>BOGO</strong></p><p>All containers, buy one, get one of equal or lesser value 1/2 price</p>",
"<p>Cacti and succulents, 25% off</p>",
"<p>Get ready for fall!<p><p>Mums: 6 inch pot $5.99</p>",
"<p><strong>Jack-O-Lanterns</strong></p><p>Pumpkins: <br>large $8.99<br>small $5.99<br>Decorative pumpkins: <br>$7.99-11.99<br>Gourds: $6.99</p>",
"<p>Trees and shrubs: 1/2 price - in stock only.</p>",
"<p>Christmas trees!</p><p>We have sizes from 3' to 15' and lots of varieties. Find the perfect fit for your family while they last!</p>"];

// Use $(document).ready()
$(document).ready(function() {
  console.log(  "Ready!"  );    //  debug to verify jQuery working. load page and check console log (F12)
  
  //  jQuery function calls go here
  // Get the date variables
  var currentDate = new Date("2025-12-25T03:24:00");
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();

  //  Use an if statement to see if the current month is December. 
  //    If so, add an h3 tag below the h2 slogan tag that says "Happy Holidays!". (after method)
  if (month == 11) {
    $('#slogan').after("<h3>Happy Holidays!</h3>");
  }

  //  Modify the h3 tag with id='month' to include the current month name i.e. "Tips for October"
  $('#month').html(`Tips for ${months[month]}`)

  //  Append the current year to the copyright footer
  $('#copy').append(year);

  //  Modify the #specials div display the text and HTML from the specials array depending on the month
  $('#specials p').html(specials[month]);

  /*  
    Use a switch statement and modify the page dependent on the season (dependent on the month)
      - 11,1,0 (winter)
      - 2,3,4 (spring)
      - 5,6,7 (summer)
      - 8,9,10 (fall)
  */
  var seasonName = "";
  var bgImage = "null.jpg";
  var seasonColor = "#000000";
  var seasonIndex = 0;
  switch(month) {
    case 0:   //  Winter    (Dec - Feb)
    case 1:
    case 11:
      seasonName = "Winter";
      bgImage = "winterbg.jpg";
      seasonColor = "#00f"
      seasonIndex = 0;
      break;
    case 2:   //  Spring    (Mar - May)
    case 3:
    case 4:
      seasonName = "Spring";
      bgImage = "springbg.jpg";
      seasonColor = "#d7d";
      seasonIndex = 1;
      break;
    case 5:   //  Summer    (Jun - Aug)
    case 6:
    case 7:
      seasonName = "Summer";
      bgImage = "summerbg.jpg";
      seasonColor = "#006400"
      seasonIndex = 2;
      break;
    default:  //  Fall      (Sep - Nov)
      seasonName = "Fall";
      bgImage = "fallbg.jpg";
      seasonColor = "#930"
      seasonIndex = 3;
  }

  //  Change the page background to the seasonal image
  $('body').css('background-image', `url("${bgImage}")`);
 
  //  Change the strong,h1,h2,h3 tags to the season color
  $('strong').css("color", seasonColor);
  $('h1').css("color", seasonColor);
  $('h2').css("color", seasonColor);
  $('h3').css("color", seasonColor);

  //  Change the div with id=seasontips to the html and text in the tips array using the season index as the index
  $('#seasontips').html(tips[seasonIndex]);

  //  Add a class to the 'specials' id using the season as the class name
  $('#specials').addClass(seasonName);
  
});

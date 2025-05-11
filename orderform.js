$(document).ready(
  function() {
    console.log( "Ready!" );

    /* Put cursor in username field */
    $('#name').focus();

    /* Add validation to the Personal Information form fields whenever the user moves off the form field */
    // Username Validation 
    $('#name').blur( function validateName() {
      if ( $(this).val() == "" ) {
        // set error for empty field
        $('#nameErr').text('Name is required.');
      } else {
        // set error to blank in case a prior error message was displayed.
		    $('#nameErr').text('');
      }
    });

    /* Billing Address Validation */
    $('#address').blur( function validateAddress() {
        if ( $(this).val() == "" ) {
          // set error for empty field
          $("#addressErr").text("Address is required.");
        } else {
          // set error to blank in case a prior error message was displayed
          $("#addressErr").text("");
        }
      }
    )

    // City Validation
    $('#city').blur( function validateCity() {
        if ( $(this).val() == "" ) {
          // set error for empty field
          $("#cityErr").text("City is required.");
        } else {
          // set error to blank in case a prior message was displayed
          $("#cityErr").text("");
        }
    });

    // Zip Code Validation
    $("#zip").blur( function validateZip() {
        var zipValue = $(this).val();
        if ( isNaN( zipValue ) || zipValue.length !== 5 || zipValue === "" ) {
          // set error for invalid zip code
          $("#zipErr").text("Please enter a valid zip code.");
        } else {
          // set error to blank in case a prior error message was displayed
          $("#zipErr").text("");
        }
    });

    // Email Validation
    var emailRegexTest = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    $("#email").blur( function validateEmail() {
        var emailRegex = emailRegexTest.test( $("#email").val() );

        if (emailRegex === false) {
          // set error for invalid email
          $("#emailErr").text("Please enter a valid email address.");
        } else {
          // set error to blank in case a prior error message was displayed
          $("#emailErr").text("");
        }
    });
    $("#email2").blur( function validateConfirmEmail() {
        var email2Regex = emailRegexTest.test( $("#email2").val() );

        // Check to see that email is valid
        if (email2Regex === false) {
          // set error for invalid email
          $("#email2Err").text("Please enter a valid email address.");
        } else {
          $("#email2Err").text("");
        }
        
        // Check to see that both emails match one another
        if ( $("#email2").val() !== $("#email").val() ) {
          // set error if confirm email does not match original email
          $("#email2Err").text("Emails do not match.");
        } else {
          // set error to blank in case a prior error message was displayed
          $("#email2").text("");
        }
    });

    /* When the user checks the Copy addresscheckbox. */

    $("#copy").click( function checkBox () {

        if ( $("#copy").is(":checked") ) {
          $("#shipaddr").val( $("#address").val() );
          $("#shipcity").val( $("#city").val() );
          $("#shipzip").val( $("#zip").val() );
          
          $("#shipstate").val( $("#state").val() );

          // Remove errors if previously given
          if ( $("#shipaddr").val() !== "" )  $("#shipaddrErr").text("");
          if ( $("#shipcity").val() !== "" )   $("#shipcityErr").text("");
          if ( $("#shipzip").val() !== "" )  $("#shipzipErr").text("");
        }

        else {
          $("#shipaddr").val("");
          $("#shipcity").val("");
          $("#shipzip").val("");
          $("#shipstate").val("TX");
        }

      }

    );

    /*  Validate the Shipping Address Section */
    // Shipping Address
    $('#shipaddr').blur( function validateShippingAddres () {

        if ( $(this).val() === "" ) {
          $("#shipaddrErr").text("Please enter a valid address.");
        } else {
          // Reset error if previously given
          $("#shipaddrErr").text("");
        }

    });

    // Shipping City
    $('#shipcity').blur( function validateShipCity() {

        if ( $(this).val() === "" ) {
          $("#shipcityErr").text("Please enter a valid city.");
        } else {
          // Reset error if previously given
          $("#shipcityErr").text("");
        }

    });

    // Shipping Zip
    $('#shipzip').blur( function validateShipZip() {
      var zipValue = $(this).val();

      // Zip Code must be an integer, and 5 digits long
      if ( isNaN(zipValue) || zipValue.length !== 5 || zipValue === "" ) {
        $("#shipzipErr").text("Please enter a valid zip code.");
      }
      else {
        // Reset error if previously given
        $("#shipzipErr").text("");
      }

    });

    /* When the user moves off of a quantity control (class ="qty") */

    // Initialize the variables in Order Form with zeros
    $("#total1").text("0.00");
    $("#total2").text("0.00");
    $("#total3").text("0.00");
    $("#subt").text("0.00");
    $("#tax").text("0.00");
    $("#ship").text("0.00");
    $("#gTotal").text("0.00");

    // Initialize an ordertotal to 0
    // IGNORE UPPER INSTRUCTION

    // For each quantity:
    //    Get the quantity value entered. If it is not numeric, change it to 0
    //    Get id to use to identify the associated price and total
    //    Get the price text by using the id "price" + the index value
    //    Multiply price times quantity to get a total
    //    Put the total in the table cell with id "total"+index
    //    Add the total to the ordertotal

    $("input[id='1']").blur( function getMumsTotal(){

      var mumQty = $(this).val();

      if ( isNaN(mumQty) ) {
        $(this).val(0);
        mumQty = 0;
      }

      const mumPrice = $("#price1").text();
      var mumTotal = (mumPrice * mumQty);
      mumTotal = mumTotal.toFixed(2);

      $("#total1").text(mumTotal);

      // Code that Updates Subtotal, Tax, Shipping, and Order Total

      // Subtotal Section
      let price1 = $("#total1").text();
      let price2 = $("#total2").text();
      let price3 = $("#total3").text();

      let floatPrice1 = parseFloat(price1);
      let floatPrice2 = parseFloat(price2);
      let floatPrice3 = parseFloat(price3);

      let subTotal = floatPrice1 + floatPrice2 + floatPrice3;
      subTotal = subTotal.toFixed(2);
      $("#subt").text(subTotal);

      // If ship state is "TX", calculate tax of .08 times the total and put in the tax cell. Use 0 for all other states.
      if ( $("#shipstate").val() === "TX" ) {
        let taxedPrice = (subTotal * 0.08);
        taxedPrice = taxedPrice.toFixed(2);
        $("#tax").text(taxedPrice);
      } else {
        $("#tax").text("0.00");
      }

      // Add tax to ordertotal.
      // IGNORE ABOVE CODE

      // Calculate shipping  based on the shipping state and place it in the shipping cell.:  
      //    "TX": $5.00
      //    "CA" & "NY": $20
      //    all others: $10
      //    Add shipping to the ordertotal
      if ( $("#shipstate").val() === "TX" ) {
        $("#ship").text("5.00");
      }
      else if ( $("#shipstate").val() === "CA" || $("#shipstate").val() === "NY") {
        $("#ship").text("20.00");
      }
      else {
        $("#ship").text("10.00");
      }

      // Display the ordertotal in the Grand Total cell
      let subtValue = $("#subt").text();
      let taxValue = $("#tax").text();
      let shippingValue = $("#ship").text();
      let floatSubT = parseFloat(subtValue);
      let floatTax = parseFloat(taxValue);
      let floatShip = parseFloat(shippingValue);

      let ordertotal = floatSubT + floatTax + floatShip;
      ordertotal = ordertotal.toFixed(2);
      $("#gTotal").text(ordertotal);

    });

    $("input[id='2']").blur( function getPansyTotal(){

      var pansyQty = $(this).val();

      if ( isNaN(pansyQty) ) {
        $(this).val(0);
        pansyQty = 0;
      }

      const pansyPrice = $("#price2").text();
      var pansyTotal = (pansyPrice * pansyQty);
      pansyTotal = pansyTotal.toFixed(2);

      $("#total2").text(pansyTotal);

      // Code that Updates Subtotal, Tax, Shipping, and Order Total

      // Subtotal Section
      let price1 = $("#total1").text();
      let price2 = $("#total2").text();
      let price3 = $("#total3").text();

      let floatPrice1 = parseFloat(price1);
      let floatPrice2 = parseFloat(price2);
      let floatPrice3 = parseFloat(price3);

      let subTotal = floatPrice1 + floatPrice2 + floatPrice3;
      subTotal = subTotal.toFixed(2);
      $("#subt").text(subTotal);

      // If ship state is "TX", calculate tax of .08 times the total and put in the tax cell. Use 0 for all other states.
      if ( $("#shipstate").val() === "TX" ) {
        let taxedPrice = (subTotal * 0.08);
        taxedPrice = taxedPrice.toFixed(2);
        $("#tax").text(taxedPrice);
      } else {
        $("#tax").text("0.00");
      }

      // Add tax to ordertotal.
      // IGNORE ABOVE CODE

      // Calculate shipping  based on the shipping state and place it in the shipping cell.:  
      //    "TX": $5.00
      //    "CA" & "NY": $20
      //    all others: $10
      //    Add shipping to the ordertotal
      if ( $("#shipstate").val() === "TX" ) {
        $("#ship").text("5.00");
      }
      else if ( $("#shipstate").val() === "CA" || $("#shipstate").val() === "NY") {
        $("#ship").text("20.00");
      }
      else {
        $("#ship").text("10.00");
      }

      // Display the ordertotal in the Grand Total cell
      let subtValue = $("#subt").text();
      let taxValue = $("#tax").text();
      let shippingValue = $("#ship").text();
      let floatSubT = parseFloat(subtValue);
      let floatTax = parseFloat(taxValue);
      let floatShip = parseFloat(shippingValue);

      let ordertotal = floatSubT + floatTax + floatShip;
      ordertotal = ordertotal.toFixed(2);
      $("#gTotal").text(ordertotal);

    });

    $("input[id='3']").blur( function getOrnKalTotal(){

      var ornKalQty = $(this).val();

      if ( isNaN(ornKalQty) ) {
        $(this).val(0);
        ornKalQty = 0;
      }

      const ornKalPrice = $("#price3").text();
      var ornKalTotal = (ornKalPrice * ornKalQty);
      ornKalTotal = ornKalTotal.toFixed(2);

      $("#total3").text(ornKalTotal);

      // Code that Updates Subtotal, Tax, Shipping, and Order Total

      // Subtotal Section
      let price1 = $("#total1").text();
      let price2 = $("#total2").text();
      let price3 = $("#total3").text();

      let floatPrice1 = parseFloat(price1);
      let floatPrice2 = parseFloat(price2);
      let floatPrice3 = parseFloat(price3);

      let subTotal = floatPrice1 + floatPrice2 + floatPrice3;
      subTotal = subTotal.toFixed(2);
      $("#subt").text(subTotal);

      // If ship state is "TX", calculate tax of .08 times the total and put in the tax cell. Use 0 for all other states.
      if ( $("#shipstate").val() === "TX" ) {
        let taxedPrice = (subTotal * 0.08);
        taxedPrice = taxedPrice.toFixed(2);
        $("#tax").text(taxedPrice);
      } else {
        $("#tax").text("0.00");
      }

      // Add tax to ordertotal.
      // IGNORE ABOVE CODE

      // Calculate shipping  based on the shipping state and place it in the shipping cell.:  
      //    "TX": $5.00
      //    "CA" & "NY": $20
      //    all others: $10
      //    Add shipping to the ordertotal
      if ( $("#shipstate").val() === "TX" ) {
        $("#ship").text("5.00");
      }
      else if ( $("#shipstate").val() === "CA" || $("#shipstate").val() === "NY") {
        $("#ship").text("20.00");
      }
      else {
        $("#ship").text("10.00");
      }

      // Display the ordertotal in the Grand Total cell
      let subtValue = $("#subt").text();
      let taxValue = $("#tax").text();
      let shippingValue = $("#ship").text();
      let floatSubT = parseFloat(subtValue);
      let floatTax = parseFloat(taxValue);
      let floatShip = parseFloat(shippingValue);

      let ordertotal = floatSubT + floatTax + floatShip;
      ordertotal = ordertotal.toFixed(2);
      $("#gTotal").text(ordertotal);

    });

    /* When the form is submitted, re-validate all the fields. If the data is not valid, cancel submission of the form */
    
    $("#order").submit( function(event){

      if ( !validateForm() ) { // If validation fails, then prevent form from submitting.
        event.preventDefault();
        console.log(" Form prevented from submitting! ");
      }

    });

    // Function that validates all fields
    function validateForm() {
      let isValid = true;

      // Validate text fields
      if ( $("#name").val() === "" ) isValid = false;
      if ( $("#address").val() === "" ) isValid = false;
      if ( $("#city").val() === "" ) isValid = false;
      if ( $("#shipaddr").val() === "" ) isValid = false;
      if ( $("#shipcity").val() === "" ) isValid = false;

      // Validate Zip Codes
      let zipCode = $("#zip").val();
      let shipZipCode = $("#shipzip").val();
      if ( isNaN( zipCode ) || zipCode.length !== 5 ||  zipCode === "" ) isValid = false;
      if ( isNaN( shipZipCode ) || shipZipCode.length !== 5 || shipZipCode === "" ) isValid = false;

      // Validate Emails
      var emailRegexTest = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      if ( emailRegexTest.test($("#email").val() ) === false ) isValid = false;
      if ( $("#email").val() !== $("#email2").val() ) isValid = false;

      return isValid;
    }

  }

);


//calculate dollars owed
function calculateChange(){
  var total_owed = $('#amount-received').val() - $('#amount-due').val();
    $('#dollars-output').text("0")
    $('#five-output').text("0")
    $('#ten-output').text("0")
    $('#twenty-output').text("0")
    $('#quarters-output').text("0")
    $('#dimes-output').text("0")
    $('#nickels-output').text("0")
    $('#pennies-output').text("0")
  //verify total_owed is a Num
  if (isNaN(total_owed)){
    $('#change-due').text("Invalid Input! Please only input Numbers.");
  }
  //verify amount-rcvd is enough and fix $0.00
  if (total_owed < 0){
    var still_owed = Math.abs(total_owed).toFixed(2);
    $('#change-due').text("Amount still owed: $" + still_owed);
    $('#dollars-output').text("0")
    $('#five-output').text("0")
    $('#ten-output').text("0")
    $('#twenty-output').text("0")
    $('#quarters-output').text("0")
    $('#dimes-output').text("0")
    $('#nickels-output').text("0")
    $('#pennies-output').text("0")
    return;
  }
  //calculate dollars
  if (total_owed >= 1){
    //truncate change, keep only dollar amount
    var dollarChange = Math.trunc(total_owed);
    var cents = total_owed - dollarChange;
  }
  if (dollarChange >= 20){
    var twenty = Math.trunc(dollarChange / 20);
    $('#twenty-output').text(twenty);
    dollarChange = dollarChange - (twenty * 20);
  }
  if (dollarChange >= 10){
    var ten = Math.trunc(dollarChange / 10);
    $('#ten-output').text(ten);
    dollarChange = dollarChange - (ten * 10);
  }
  if (dollarChange >= 5){
    var five = Math.trunc(dollarChange / 5);
    $('#five-output').text(five);
    dollarChange = dollarChange - (five * 5);
  }
  if (dollarChange >= 1){
    var dollar = Math.trunc(dollarChange / 1);
    $('#dollars-output').text(dollar);
    dollarChange = dollarChange - (dollar * 1);
    // $('#dollars-output').text(dollar);
  }



  //calcualte change
  if (total_owed <= .99){
    var cents = Math.round(total_owed * 100) / 100;
  }
  if (cents > .24){
    var cents = Math.round(cents * 100) / 100;
    var quarters = Math.floor(cents / .25);
    cents = cents - (quarters * .25);
    $('#quarters-output').text(quarters);
  }
  if (cents > .09){
    var cents = Math.round(cents * 100) / 100;
    var dimes = Math.floor(cents / .1);
    cents = cents - (dimes * .1);
    $('#dimes-output').text(dimes);
  }
  if (cents > .04){
    var cents = Math.round(cents * 100) / 100;
    var nickels = Math.floor(cents / .05);
    cents = cents - (nickels * .05);
    cents = Math.round(cents / .01);
    $('#nickels-output').text(nickels);
  }

  // have to fix whole interger, creates x00 pennies // Number.isInterger(cents)
  if (cents > .001 ){
    var cents = Math.round(cents * 100) / 100;
    var pennies = (cents / .01);
    $('#pennies-output').text(pennies);
  }

   $('#change-due').text("$"+Math.abs(total_owed).toFixed(2));
}

function handleClickEvent(){
  $('#calculate-change').click(function(){
    calculateChange();
  });
}

$(document).ready(handleClickEvent);


// Bonus work
// Add some extra pizazz to the application with images of quarters/nickels/dimes/dollars bills.
// Animate the images and answer to slide into the screen
// Animate the numbers to go from 0 to the correct amount

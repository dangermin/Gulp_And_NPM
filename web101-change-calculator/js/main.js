//calculate dollars owed
function calculateChange(){
  var total_owed = $('#amount-received').val() - $('#amount-due').val();
  //verify total_owed is a Num
  if (isNaN(total_owed)){
    $('#change-due').text("Invalid Input! Please only input Numbers.");
  }
  //verify amount-rcvd is enough and fix $0.00
  if (total_owed < 0){
    var still_owed = Math.abs(total_owed).toFixed(2);
    $('#change-due').text("Amount still owed: $" + still_owed);
    $('#dollars-output').text("0")
    $('#quarters-output').text("0")
    $('#dimes-output').text("0")
    $('#nickels-output').text("0")
    $('#pennies-output').text("0")
    return;
  }
  //calcualte change
  if (total_owed >= 1){
    //truncate change, keep only dollar amount
    var dollarChange = Math.trunc(total_owed);
    var cents = total_owed - dollarChange;
    $('#dollars-output').text(dollarChange);
  }
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
    var dimes = Math.floor(cents / .1);
    cents = cents - (dimes * .1);
    $('#dimes-output').text(dimes);
    console.log(dimes);
  }
  if (cents > .04){
    var nickels = Math.floor(cents / .05);
    cents = cents - (nickels * .05);
    $('#nickels-output').text(nickels);
  }
  if (cents >= .01){
    var pennies = Math.floor(cents / .01);
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
// Calculate the amount of change due in dollars, include $1, $2, $5, $10, $20 dollar bills.
// Add some extra pizazz to the application with images of quarters/nickels/dimes/dollars bills.
// Animate the images and answer to slide into the screen
// Animate the numbers to go from 0 to the correct amount

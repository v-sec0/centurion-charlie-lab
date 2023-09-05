$(document).ready(function () {
    console.log("Ready to go!");
  
    // Variables Assigned
    let theGuard = $("#theGuard")
    let thePriest = $("#thePriest")
    let theMerchant = $("#theMerchant")

    // The Merchant ending
    theMerchant.click(function() {
        $("#intro").hide();
        $("#prompt").hide();
        theGuard.hide();
        thePriest.hide();
        $("#theMerchantEnding").fadeIn();
        $("#btnReload").fadeIn();
        $("#title").hide();
    });

    // The Guard ending
    theGuard.click(function() {
        $("#intro").hide();
        $("#prompt").hide();
        theMerchant.hide();
        thePriest.hide();
        $("#theGuardEnding").fadeIn();
        $("#btnReload").fadeIn();
        $("#title").hide();
    });

    // The Priest ending
    thePriest.click(function() {
        $("#intro").hide();
        $("#prompt").hide();
        theMerchant.hide();
        theGuard.hide();
        $("#thePriestEnding").fadeIn();
        $("#btnReload").fadeIn();
        $("#title").hide();
    });


    // Prompt the user for reset
    $("#btnReload").on("click", function() {
        location.reload();
    });



});
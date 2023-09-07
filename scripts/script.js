$(document).ready(function () {
    console.log("Ready to go!");
    var clickCount = 0;
    var timeout;
    
    // Introduction
    $("#btnMain").click(function() {
        clickCount++;
        switch (clickCount) {
            case 1:
                $("#welcomeMessageOne").fadeIn();
                theButton.text("Continue");
                break;   
            case 2:
                $("#welcomeMessageTwo").fadeIn();
                break;
            case 3:
                $("#concernedCitizen").fadeIn();
                break;
            case 4:
                $("#concernedDialouge").fadeIn();
                break;
            case 5:
                $("#welcomeMessageThree").fadeIn();
                theButton.text("Enter the City");
                break;
            case 6:
                $("#wholeIntro").hide();
                theScene.fadeIn();
                theButton.text("Continue");
                break;
            case 7:
                $("#sceneOne").fadeIn();
                break;
            case 8:
                $("#sceneTwo").fadeIn();
                break;
            case 9:
                $("#sceneThree").fadeIn();
                $("#scenePrompt").fadeIn();
                break;
            case 10:
                theGuard.fadeIn();
                theMerchant.fadeIn();
                thePriest.fadeIn();
                theButton.text("Reset");
                theButton.hide();
                break;  
            default:
                location.reload();  
            

        }
    });

    // Function for hover text
    $('.image-container').on('mouseenter', function() {
        // Start a timer when mouse enters
        timeout = setTimeout(function() {
            $('.hover-text').fadeIn(); // Or any other effect you want
        }, 10000); // 10000ms = 10 seconds
    }).on('mouseleave', function() {
        // If mouse leaves before 10 seconds, clear the timer
        clearTimeout(timeout);
        $('.hover-text').fadeOut(); // Ensure it hides if it had shown
    });

    // Variables Assigned
    let theGuard = $("#theGuard");
    let thePriest = $("#thePriest");
    let theMerchant = $("#theMerchant");
    let theScene = $("#wholeScene");
    let theButton = $("#btnMain")


    // The Merchant ending
    theMerchant.click(function() {
        theScene.hide();
        theGuard.hide();
        thePriest.hide();
        $("#theMerchantEnding").fadeIn();
        theButton.fadeIn();
        
    });

    // The Guard ending
    theGuard.click(function() {
        theScene.hide();
        theMerchant.hide();
        thePriest.hide();
        $("#theGuardEnding").fadeIn();
        theButton.fadeIn();
    });

    // The Priest ending
    thePriest.click(function() {
       theScene.hide();
        theMerchant.hide();
        theGuard.hide();
        $("#thePriestEnding").fadeIn();
        theButton.fadeIn();
    });


});
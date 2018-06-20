/* 1. This is a game with 4 crystals and Random Results.
   2. Every crystal needs to have a random number between 1-12.
   3. A new random number should be generated every single time we win or lost on 
   each crystal.
   4. When clicking any crystal it should be adding with the previous result.
   5. Until it === the exact same score... meaning WE WIN!!
   6. If our score is > then the random number WE LOSE :(
   7. We will increment wins++ or losses++
   */
  
   var randomResult;
   var wins = 0;
   var losses = 0;
   var previousNumber = 0;
   

   
   

   var startAndReset = function () {
       //this will reset the crystals//
       $(".crystals").empty();
       //this is where we'll store our crystal images in an array//
       var crystalImages = 
       ["../images/blue.png", 
       "../images/green.png", 
       "../images/red.png", 
       "../images/yellow.png"];
       console.log();
       
       //this is where we'll create the overall random number//
        randomResult = Math.floor((Math.random() * 101) + 19);
   
   //this is a for loop to create the four separate crystals//
    $("#randomResult").html("Number to Get: " + randomResult);
   for(i = 0; i < 4; i++) {
    
    //this is where we have the random number between 1-12 for each crystal//
    var random = Math.floor((Math.random() * 11) + 1);
       var crystal = $("<div>");
           crystal.attr({
            "class": 'crystal',
            "data-random": random
           });
           crystal.css({
             "background-image":"url('" + crystalImages[i] + "")
           })
       
       $(".crystals").append(crystal);
           
   }
}

startAndReset();
   
   //this is where we'll create our on click for each crystal//
   $(document).on("click", ".crystal", function() {
    var num = parseInt($(this).attr("data-random"));    

    previousNumber += num;
    $("#userScore").text(previousNumber);
    console.log(previousNumber);
    //this is where we determine winner or loser//
    if(previousNumber > randomResult) {

       losses++;
       $("#losses").html(losses);
       console.log(losses);
       previousNumber = 0;
       startAndReset();
       alert("Sorry you lost... try again! ")
    }

    else if(previousNumber === randomResult) {
        wins++;
        $("#wins").html(wins);
        previousNumber = 0;
        startAndReset();
        alert("Congratulations!! You Won!! ")
    }

   });
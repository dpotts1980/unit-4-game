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
   var wins;
   var losses;

   //this is where we'll create the overall random number//
   var randomResult = Math.floor((Math.random() * 101) + 19);
   //console.log(randomResult);
   
   //this is a for loop to create the four separate crystals//
    $("#randomResult").html("Number to Get: " + randomResult);
   for(i = 0; i < 4; i++) {

    //this is where we have the random number between 1-12 for each crystal//
    var random = Math.floor((Math.random() * 11) + 1);
       //console.log(random);
       var crystal = $("<div>");
           crystal.attr({
            "class": 'crystal',
            "data-random": random
           });
       $(".crystals").append(crystal);
   }

   //this is where we'll create our on click for each crystal//
   $(".crystal").on("click", function() {
    
    var num = parseInt($(this).attr("data-random"));

    var result = num + 5;
    console.log(num, ' + ', result);

   });
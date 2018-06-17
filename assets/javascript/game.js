/* 1. This is a game with 4 crystals and Random Results.
   2. Every crystal needs to have a random number between 1-12.
   3. A new random number should be generated every single time we win or lost on 
   each crystal.
   4. When clicking any crystal it should be adding with the previous result.
   5. Until it === the exact same score... meaning WE WIN!!
   6. If our score is > then the random number WE LOSE :(
   7. We will increment wins++ or losses++;

//we'll set the doc to be ready*/

$(document).ready(function()

//Before anything we need to set some variables*/


//This is  where we grab the numberToMatch element//
/*This is where we enter the random number generator ranging from 19-120*/
{
    var Random=Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#randomNumber').text(Random);
    // Appending random number to the randomNumber id in the html doc
    //
    


//This is where we enter the 4 crystals and attach an on.click method to them//


//we will also create a random number generator for each crystal ranging from 1-12//

//this is where we have the userguess counter//


//this is where we have if/else when the user === the computerNumber or goes over//





//we will create a counter to measure wins + and losses//


//we need to figure out how to reset the game as well//

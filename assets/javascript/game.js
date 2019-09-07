console.log("Hello World");

// Pseudocode
// Game with 4 cyrstals and random result
// Every crystal needs to have a random number between 1-12
// A new random number should be generated every single time after a win or loss
// to those 4 cyrstals 
// When slecting any Crystal it should be adding with the previous result 
// Until it equals the total score listed 
// If it is greater than the random result it displays a lost counter 
// If it is equal then the win counter increases

var random_result;
var lost;
var win;
random_result = Math.floor(Math.random() * 38) + 1; //hosting
console.log(random_result);

$("#result").html("Random Result:"+ random_result);

for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) +1;
    // console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal', "data-random": random
    });
    $(".cyrstals").append(crystal);


}

$(".cyrstals").on("click",function(){

    console.log($(this).attr("data-random"));
});
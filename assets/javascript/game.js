// console.log("Hello World");

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
var lost = 0;
var win = 0;
var previous = 0;
random_result = Math.floor(Math.random() * 101) + 19; //hosting
console.log(random_result);

$("#result").html("Random Result:" + random_result);

// Game with 4 cyrstals and random result
// Every crystal needs to have a random number between 1-12

for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;
    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal', "data-random": random
    });

    crystal.html(random);

    $(".crystals").append(crystal);


}

$(".crystal").on('click', function () {

    console.log("crystalclick");

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    // A new random number should be generated every single time after a win or loss
    // to those 4 cyrstals 
    // If it is greater than the random result it displays a lost counter 
    if (previous > random_result) {
        lost--;
        $("#loss").html(loss);
        console.log("you lose");
    }
    // If it is equal then the win counter increases
    else if (previous === random_result) {
        win++;
        $("#win").html(win);
        console.log("you win");
    }
    console.log(previous);
});

function newFunction() {
    return "random";
}

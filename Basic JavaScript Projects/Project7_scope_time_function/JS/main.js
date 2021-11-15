var y = 25
function Global() { //Assigned a global variable to use anwhere in the code
    document.write(y + 20)
}
Global();
document.write("<br/>")

function Local() {
     var x = 30; //Assigned a local variable that can only be used inside this function
    document.write(x - 10)
}
Local()

document.write("<br/>")
function Wrong() {
    console.log(x + 5); //Console error to show that the variable is undefined
}

Wrong()

function clock() {
    if ( new Date().getHours() < 18) { //Function to as me a question if it is befor 6:00pm
        document.getElementById("time").innerHTML = "How is your day today?";
    }
}

function Drive() {
    var age;
    age = document.getElementById("age").value; //If-Else function about if you are old enough to drive a car or not
    if (age > 16) {
        document.getElementById("can").innerHTML = ("You can drive!")
    }
    else {
        document.getElementById("can").innerHTML = ("Yu are too young to drive.")
    }
}

function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"; //Else-if function about telling me what time of day it is.
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
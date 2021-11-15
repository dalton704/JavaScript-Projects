var y = 25
function Global() {
    document.write(y + 20)
}
Global();
document.write("<br/>")

function Local() {
     var x = 30;
    document.write(x - 10)
}
Local()

document.write("<br/>")
function Wrong() {
    console.log(x + 5);
}

Wrong()

function clock() {
    if ( new Date().getHours() < 18) {
        document.getElementById("time").innerHTML = "How is your day today?";
    }
}

function Drive() {
    var age;
    age = document.getElementById("age").value;
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
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
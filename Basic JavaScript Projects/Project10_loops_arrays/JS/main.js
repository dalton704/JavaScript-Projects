function Call_Loop() { //Function that calls a while loop
    var Counter = ""
    var X = 0
    while (X < 11) { //a while loop that as long as x is less than 11 will proceded to do instructions below
        Counter += "<br>" + X; 
        X++ 
    }
    document.getElementById("Loop").innerHTML = Counter
}

function Get_Length() { //Function that Gives you how many charcters are in the written statement
    text = "How are you doing today?"
    length = text.length
    document.getElementById("here").innerHTML = length
}

var instruments = ["Trumpet", "Saxophone", "Bass Drum", "Snare Drum", "Flute", "Clarinet", "French Horn"];
var Content = " ";
var Z;
function for_Loop() { //For Loop function that displays all elements of instuments (above) on their own line.
    for (Z = 0; Z < instruments.length; Z++) {
        Content += instruments[Z] + "<br>"
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //Array function that creats an array of elemetns and then displays what is called for in the document.getelementbyid
    var Puzzles = [];
    Puzzles[0] = "100 piece";
    Puzzles[1] = "250 piece";
    Puzzles[2] = "500 piece";
    Puzzles[3] = "1000 piece";
    Puzzles[4] = "1500 piece";
    document.getElementById("Array").innerHTML = "I have three " + Puzzles[3] + " puzzles on the table next to me."
}
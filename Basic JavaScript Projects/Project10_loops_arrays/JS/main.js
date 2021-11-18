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

function array_Function() { //Array function that creats an array of elements and then displays what is called for in the document.getelementbyid
    var Puzzles = [];
    Puzzles[0] = "100 piece";
    Puzzles[1] = "250 piece";
    Puzzles[2] = "500 piece";
    Puzzles[3] = "1000 piece";
    Puzzles[4] = "1500 piece";
    document.getElementById("Array").innerHTML = "I have three " + Puzzles[3] + " puzzles on the table next to me."
}

function constant_function() { //Function that ustilizes the Constant Keyword.
    const Computer = {type:"Desktop", brand:"Alienware", RAM:"32gb"}
    Computer.type = "Laptop";
    Computer.CPU = "Intel i7";
    document.getElementById("Constant").innerHTML = "The " + Computer.type + " I bought has an " + Computer.CPU + " processing unit."
}

function Lets_Test() { //Tested the Let keyword to get different H values
    var H = "Hello"
    {
        let H = 65
        document.getElementById("test_2").innerHTML = H //H would retrun as 65 because of the curly brackets. AKA Block Scope
    }
    document.getElementById("test_1").innerHTML = H //H would return as "hello" because its outside of the block scope
}

function return_function(name) { //Return function to print Hello Dalton without the use of a button
    return "Hello " + name;
}
document.getElementById("return").innerHTML = return_function("Dalton")

let adventurer = { //Created a sentence using the return function
    Race: "Human ",
    Class: "Wizard",
    Level: "7 ",
    Name: "Kadgar",
    Journey: function() {
        return adventurer.Name + ", the level " + adventurer.Level + adventurer.Race + adventurer.Class + ", traversed many continents."
    }
};
document.getElementById("adventure").innerHTML = adventurer.Journey()

let create = ""; //Created a continue and break statment to count to 7. 
for (let D = 0; D < 7; D ++) {
    if (D === 2) {continue; } // Skips 2. goes from 1 to 3
    if (D === 5) {break; } //Stops the loop at 5. so only counts to 4
    create += "The number is " + D + "<br>";
}
document.getElementById("break").innerHTML = create
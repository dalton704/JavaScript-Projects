function Short(){ //Function to make a complete sentence using concat()
    var part_1 = "I am ";
    var part_2 = "creating a ";
    var part_3 = "sentence using ";
    var part_4 = "concat() Method.";
    var complete = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Sentence").innerHTML = complete;
}

function Split(){  //Function to slice up part of a sentence
    var sentence = "Today has been a really good day!";
    var section = sentence.slice(-9);
    document.getElementById("Spot").innerHTML = section.toUpperCase(); //Added to uppercase. MAde the slice capitalized
}

function Searching(){ //Function to search the index of yur search condition
    var Le_Text = "The rain is falling from the clouds.";
    document.getElementById("search").innerHTML = Le_Text.search("f"); //Searched for F in our srting
}

function Number_String() { //Function that changes a number to a string
    var x = 72
    document.getElementById("string").innerHTML = x.toString();
}

function Precision() { //Function that maximizes the length of a given value
    var Y = 7865.5628909454521846
    document.getElementById("rounded").innerHTML = Y.toPrecision(8); //Maximized the length of my number to 8
}

function Fixed() { //Function that maximizes how many deimcal points.
    var Z = 7865.5628909454521846
    document.getElementById("decimals").innerHTML = Z.toFixed(3); //We put the max at 3 decimals for my number
}

function Value() { //Function that returns the vaue of a string.
    var R = "Hello, World!"
    document.getElementById("hello").innerHTML = R.valueOf();
}
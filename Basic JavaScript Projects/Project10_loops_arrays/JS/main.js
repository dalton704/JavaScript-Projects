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
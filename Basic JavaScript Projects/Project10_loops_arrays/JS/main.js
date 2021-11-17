function Call_Loop() {
    var Counter = ""
    var X = 0
    while (X < 11) {
        Counter += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Counter
}

function Get_Length() {
    text = "How are you doing today?"
    length = text.length
    document.getElementById("here").innerHTML = length
}
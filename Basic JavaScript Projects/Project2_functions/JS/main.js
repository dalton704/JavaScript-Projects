function displayDate() { //Function that displays date when the Yes button is clicked
    document.getElementById("demo").innerHTML= Date(); 
}

function saidno() { //Function that displays message when the No button is clicked
    document.getElementById("boring").innerHTML = "I didn't want to tell you anyways!" 
}

function Breakfast() { //When the text is clicked it transforms into the food concatenate
    var food = "I had oatmeal";
    food += " for breakfast this morning!";
    document.getElementById("Yum").innerHTML = food
}
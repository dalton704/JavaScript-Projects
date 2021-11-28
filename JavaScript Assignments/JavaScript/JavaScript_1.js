function Food_Function() {
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value;
    var Food_String = " is very tasty!";
    switch(Foods) {
        case "Spaghetti":
            Food_Output = "Spaghetti" + Food_String;
        break;
        case "Tacos":
            Food_Output = "Tacos" + Food_String;
        break;
        case "Meatloaf":
            Food_Output = "Meatloaf" + Food_String;
        break;
        case "Sushi":
            Food_Output = "Sushi" + Food_String;
        break;
        case "Steak":
            Food_Output = "Steak" + Food_String;
        break;
        case "PB&J":
            Food_Output = "PB&J" + Food_String;
        break;
        default:
            Food_Output = "Please enter a food exactly as written in the list.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("name");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(250, 125, 75, 225, 125, 330);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250);

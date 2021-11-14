function Addition_Function() { //Adding two integers together
    var addition = 10 + 25;
    document.getElementById("Math").innerHTML = "10 + 25 = " + addition;
}

function Subtraction_Function() { //Subtracting two integers
    var subtraction = 66 - 41;
    document.getElementById("Sub").innerHTML = "66 - 41 = " + subtraction;
}

function Multiply_Function() { //Multiplying two integers
    var Multi = 34 * 9;
    document.getElementById("Mult").innerHTML = "34 * 9 = " + Multi;
}

function Divide_Function() { // Dividing two integers
    var divide = 77 / 11;
    document.getElementById("Div").innerHTML = "77 / 11 = " + divide;
}

function Math_Problem() { //When button is clicked the math equation get's solved
    var fun = (7 + 11) / 2 + ((43 - 7) / 6);
    document.getElementById("Woo").innerHTML = "(7 + 11) / 2 + ((43 - 7) / 6) = " + fun;
}

function Modulus_Function() { //Using the "%" sign gives the remainder of the equation
    var percent = 67 % 7;
    document.getElementById("Remain").innerHTML = "The remainder of 67 / 7 is: " + percent;
}

function Negation_Function() { //Making a negative number with "-"
    var y = 43
    document.getElementById("Neg").innerHTML = -y;
}

function Increment_Function() { //WHen the button is pushed the number is increased by one
    var i = 0;
    i++;
    document.getElementById("Increment").innerHTML= i;
}

function decrement_function() { //When the button is pushed the number is decreased by one
    var d = 10;
    d--;
    document.getElementById("decrease").innerHTML = d;
}

window.alert(Math.random() * 80); //Window alert box of a random number between 0 and 80

function Rounding() { //Rounds the solution of 13 / 7 to the nearest integer
    var Hoorah = Math.round(13 / 7);
    document.getElementById("Round").innerHTML = Hoorah;
}
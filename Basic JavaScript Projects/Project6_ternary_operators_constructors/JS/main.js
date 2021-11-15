function Ride_Function() { //Function that displays two different mesages depending on if the height is less than 52 or greater than
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Balloons(Color, Shape, Price) { //Created a function that made a class of balloons
    this.Balloon_Color = Color;
    this.Balloon_Shape = Shape;
    this.Balloon_Price = Price;
}
var Bill = new Balloons("Red", "Dog", "$10") //used constructors to add to the class
var Susan = new Balloons("Blue", "Round", "$5")
var Henry = new Balloons("Red", "Worm", "$7")
function new_function() { //Functio nto display message using the constructors
    document.getElementById("New_and_This").innerHTML = "Bill bought a " + Bill.Balloon_Color + " in color " + Bill.Balloon_Shape + " shaped balloon, for " + Bill.Balloon_Price
}

function Count_function() { //Nested FUnction to count from 9
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var starting = 5;
        function Plus_One() {starting += 1}
        Plus_One();
        return starting
    }
}
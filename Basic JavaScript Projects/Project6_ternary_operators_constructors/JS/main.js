function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function Balloons(Color, Shape, Price) {
    this.Balloon_Color = Color;
    this.Balloon_Shape = Shape;
    this.Balloon_Price = Price;
}
var Bill = new Balloons("Red", "Dog", "$10")
var Susan = new Balloons("Blue", "Round", "$5")
var Henry = new Balloons("Red", "Worm", "$7")
function new_function() {
    document.getElementById("New_and_This").innerHTML = "Bill bought a " + Bill.Balloon_Color + " in color " + Bill.Balloon_Shape + " shaped balloon, for " + Bill.Balloon_Price
}
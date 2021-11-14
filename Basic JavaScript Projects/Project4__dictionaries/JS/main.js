function my_First_Dictionary() { //My first Dictionary
    var Animal = {
        Species: "Cat",
        Color: "White",
        Breed: "White Tabby",
        Age: 7,
        Sound: "Meow",
    };
    delete Animal.Color; //deletes the color key and value in my Animal dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Color; //Displays the color value on the sceen. But i deleted it so it says undefined
}
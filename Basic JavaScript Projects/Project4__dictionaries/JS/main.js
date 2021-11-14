function my_First_Dictionary() {
    var Animal = {
        Species: "Cat",
        Color: "White",
        Breed: "White Tabby",
        Age: 7,
        Sound: "Meow"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Color;
}
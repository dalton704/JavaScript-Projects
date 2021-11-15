function Short(){
    var part_1 = "I am ";
    var part_2 = "creating a ";
    var part_3 = "sentence using ";
    var part_4 = "concat() Method.";
    var complete = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Sentence").innerHTML = complete;
}

function Split(){
    var sentence = "Today has been a really good day!";
    var section = sentence.slice(-9);
    document.getElementById("Spot").innerHTML = section;
}
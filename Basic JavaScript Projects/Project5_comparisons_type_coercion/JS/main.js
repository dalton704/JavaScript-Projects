document.write("11" + 1);
document.write(" ")
document.write(typeof 5)
document.write(" ")
document.write("Hello" / 75)
document.write(" ")

function isNaN_one(){
    document.getElementById("First").innerHTML = isNaN("Hello, World")
}

function isNaN_two(){
document.getElementById("Second").innerHTML = isNaN(65)
}
function infine(){
    document.getElementById("infinity").innerHTML = 3E587
}

function neg_infine(){
    document.getElementById("negative").innerHTML = -3E587
}
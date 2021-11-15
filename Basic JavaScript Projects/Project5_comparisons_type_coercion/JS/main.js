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

document.write(" ")
document.write(10 > 5)
document.write(" ")
document.write(10 <= 6)
console.log(6 * 2)
console.log((25 + 2) > (5 * 6))
document.write(" " + (25==4))
document.write(" " + (8 == 8))

a = 12
b = 12
document.write(" " + (a === b))

c = 13
document.write(" " + (a === c))

d = "12"
document.write(" " + (a === d))

e = "Hello"
document.write(" " + (a === e))


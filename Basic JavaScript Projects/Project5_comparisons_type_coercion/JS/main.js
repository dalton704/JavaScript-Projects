document.write("11" + 1); //Combining a string and a number
document.write(" ") //Added a space
document.write(typeof 5) //Displayed what type of character 5 is
document.write(" ") //Added a space
document.write("Hello" / 75) //Trying to divide a string by a integer
document.write(" ") //Added a space

function isNaN_one(){ //Determines if the string is not a number(NaN)
    document.getElementById("First").innerHTML = isNaN("Hello, World")
}

function isNaN_two(){ //Determines if the interger is not a number(NaN)
document.getElementById("Second").innerHTML = isNaN(65)
}
function infine(){ //Displays infinity
    document.getElementById("infinity").innerHTML = 3E587
}

function neg_infine(){ //Displays -infinity
    document.getElementById("negative").innerHTML = -3E587
}

document.write(" ") //Added a space
document.write(10 > 5) //Boolean true statement
document.write(" ") //Added a space
document.write(10 <= 6) //Boolean false statement
console.log(6 * 2) //Added an integer to the console log
console.log((25 + 2) > (5 * 6)) //Displays false in the console log
document.write(" " + (25==4)) //Added a space and displays false; 25 != 4
document.write(" " + (8 == 8)) //Added a space and displays true; 8 equals 8

a = 12 //Assigned a value to a
b = 12 //Assigned a value to b
document.write(" " + (a === b)) //Triple equals determines if the values and type of data is the same

c = 13 //Assigned a calue to c
document.write(" " + (a === c))

d = "12" //Assigned a value to d
document.write(" " + (a === d))

e = "Hello" //Assigned a value to e
document.write(" " + (a === e))

document.write("<br/>" + (2 < 3 && 6 > 3)) //Added a new line; used "and" to display true
document.write(" " + (2 > 3 && 10 > 4)) // Added a space; used "and" to display false
document.write(" " + (21 > 4 || 10 > 44)) //used "OR" to display true
document.write(" " + (11 > 71 || 7 < 5)) //Used "OR" to display false
document.write(" " + !(25 > 5)) //Used "NOT" to display false
document.write(" " + !(25 > 30)) //Used "NOT" to displat true



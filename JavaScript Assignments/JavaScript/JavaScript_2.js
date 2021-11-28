function validateform() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return False;
    }
    let y = document.forms["myForm"]["lname"].value;
    if (y== "") {
        alert("Last Name must be filled out");
        return False;
    }
    let z = document.forms["myForm"]["email"].value;
    if (z == "") {
        alert("Email Address must be filled out");
        return False;
    }
    let u = document.forms["myForm"]["phone"].value;
    if (u == "") {
        alert("Phone Number must be filled out");
        return False;
    }
}
function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young to vote.":"You can vote! Register now!"
    document.getElementById("vote").innerHTML = Can_Vote
}
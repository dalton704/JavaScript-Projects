function displayType(food) {
    var foodType = food.getAttribute("data-food-type");
    alert(foodType + " is categorized as a " + food.innerHTML);
}
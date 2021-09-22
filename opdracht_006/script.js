const makingPizza = function () {
    console.log("make the dough");
    console.log("put tomato sauce on the dough");
    console.log("place vegetables on the pizza");
    console.log("heat the oven to 300 degrees");
    console.log("place the pizza in the oven");
}
// het werkt nog niet omdat ik de functie nog niet heb gecalled

makingPizza();
makingPizza();
makingPizza();

const makingShushi = function () {
    console.log("place a seaweed leaf on the mat");
    console.log("put rice on the leaf");
    console.log("put shrimp on the rice");
    console.log("roll the seaweed leaf with the rice and shrimp");
    console.log("cut the roll into Shushi parts");
}

makingShushi();

// three meals of shusi and two pizza's

const order = function () {
    makingShushi();
    makingShushi();
    makingShushi();
    makingPizza();
    makingPizza();
}

order();
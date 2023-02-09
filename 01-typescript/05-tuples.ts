const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["black", true, 80];
const sprite: Drink = ["white", true, 50];
const tea: Drink = ["brown", false, 20];

//Inferences - Typescript guesses the types
//Use inference as much as possible

//Variables
let flowers = 10;

let hasPen = true;

let days = new Date();

//Array
let names = ["Mak", "Sak"];

//Classes
class Triangle {}

let triangle = new Triangle();

//Object literal
let axis: { x; y } = {
  x: 10,
  y: 20,
};

//Function
const writeName = (i: string) => {
  console.log(i);
};

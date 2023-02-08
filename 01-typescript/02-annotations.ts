//Annotations - Developers tell typescript the types

//Variables

let cars: number = 10;
let myName: string = "Mak";
let hasCar: boolean = true;

let minutes: Date = new Date();

//Array
let colors: string[] = ["red", "green", "blue"];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

//Classes
class Car {}

let car: Car = new Car();

//Object literal
let coord: { lat: number; long: number } = {
  lat: 10,
  long: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations

//1: Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

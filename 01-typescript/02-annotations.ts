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
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2: When we delare a variable on one line and initialize on other line
let nums = [1, 2, 3, 4];
let foundNum: boolean;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 3) {
    foundNum = true;
  }
}

//3: Variable whose type cannot be inferred
let numbersArray = [-10, -5, 7];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] > 0) {
    numberAboveZero = numbersArray[i];
  }
}

//More annotations around functions
const add = (x: number, y: number): number => {
  return x + y;
};

const logger = (message: string): void => {
  console.log(message);
};

//Destructuring annotations
const todaysWeather = {
  date: new Date(),
  weather: "cloudy",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

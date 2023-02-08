const fruits = ["apple", "mango", "cherry"];
const dates = [new Date(), new Date()];

const cars: string[][] = [["civic"], ["corolla"], ["swift"]];

//Help with inference when extracting values
const fruit = fruits[0];
const myFruit = fruits.pop();

//Prevent incompatible values
// fruits.push(20);

//Help with map
fruits.map((frt: string): string => {
  return frt;
});

//Flexible
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push("2030-05-25");

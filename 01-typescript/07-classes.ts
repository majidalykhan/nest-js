class Vehicle {
  drive(): void {
    console.log("Honda Civic");
  }

  honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("Honda Accord");
  }
}

const vehicle = new Vehicle();
const car = new Car();
car.drive();
car.honk();

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("black");

// class Car extends Vehicle {
//   private drive(): void {
//     console.log("Honda Accord");
//   }

//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

// const car = new Car();
// car.startDrivingProcess();

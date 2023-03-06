class Vehicle {
  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log("Honda Accord");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle();
const car = new Car();
car.startDrivingProcess();

class Vehicle {
  drive(): void {
    console.log("Honda Civic");
  }

  honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

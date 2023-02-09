interface Vehicle {
  name: string;
  color: string;
  model: number;
  broken: boolean;
  purchasedOn: Date;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  color: "black",
  model: 2006,
  broken: false,
  purchasedOn: new Date(),
  summary(): string {
    return `Summary: This is a ${this.color} Honda ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Color: ${vehicle.color}`);
  console.log(`Model: ${vehicle.model}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

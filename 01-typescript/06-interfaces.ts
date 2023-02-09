interface Vehicle {
  name: string;
  color: string;
  model: number;
  broken: boolean;
}

const oldCivic = {
  name: "civic",
  color: "black",
  model: 2006,
  broken: false,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Color: ${vehicle.color}`);
  console.log(`Model: ${vehicle.model}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

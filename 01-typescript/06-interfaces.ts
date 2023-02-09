interface Reportable {
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

const drink = {
  name: "pepsi",
  color: "black",
  sugar: 80,
  summary(): string {
    return `${this.name} has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }

  stop() {
    console.log(`${this.brand} ${this.model} is stopping...`);
  }

  carFeature(){
    console.log(`car lounched at ${this.year}, and the car name is the ${this.brand}`);
  }
}

const car1 =  new Car('maruti 800', 'merCarBrand', 2012);

car1.carFeature();
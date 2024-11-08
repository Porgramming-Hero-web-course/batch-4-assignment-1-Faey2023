class Car {
  make: string;
  model: string;
  year: number;
  currentYear: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.currentYear = new Date().getFullYear();
  }

  getCarAge(): number {
    return this.currentYear - this.year;
  }
}

const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
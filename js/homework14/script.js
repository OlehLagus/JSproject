'use strict'

class Car {
  static type = "Car"
  static staticMethod() {
    return 'This is a method for Cars';
  }
  constructor(rides, brake) {
    this.rides = true;
    this.brake = true;
  }
}

const myCar = new Car();


class Sedan extends Car {
  constructor() {
    super()
    this.doors = 4;
  }
  #inventoryNumber = 1234;
  get inventoryNumber() {
    return this.#inventoryNumber;
  }
  set inventoryNumber(value) {
    if (value < 1000) throw new Error("Это не пассажирский автомобиль");
    this.#inventoryNumber = value;
  }
}

const myCarIsSedan = new Sedan()


//Проверка результата

console.log(myCarIsSedan);
console.log(Sedan.body);
console.log(Car.staticMethod());
console.log(myCarIsSedan.inventoryNumber = 1001);
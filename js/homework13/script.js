'use strict'

class Car {
  constructor(rides, brake) {
    this.rides = true
    this.brake = true
  };
}

const myCar = new Car();
myCar


class Sedan extends Car {
  constructor() {
    super()
    this.doors = 4
  };
}

const myCarIsSedan = new Sedan()
myCarIsSedan



class PremiumSedan extends Sedan {
  constructor() {
    super()
    this.price = 'more 100000 USD'
  };
} 

const myCarIsPremiumSedan = new PremiumSedan()
myCarIsPremiumSedan


class PremiumSedanBMW extends PremiumSedan {
  constructor() {
    super()
    this.engine = 'petrol'
  };
}

const myCarIsBMW = new PremiumSedanBMW()
myCarIsBMW
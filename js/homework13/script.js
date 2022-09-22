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



class premiumSedan extends Sedan {
  constructor() {
    super()
    this.price = 'more 100000 USD'
  };
} 

const myCarIsPremiumSedan = new premiumSedan()
myCarIsPremiumSedan


class premiumSedanBMW extends premiumSedan {
  constructor() {
    super()
    this.engine = 'petrol'
  };
}

const myCarIsBMW = new premiumSedanBMW()
myCarIsBMW
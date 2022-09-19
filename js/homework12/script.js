'use strict'

let car = {
  rides: true,
  brake: true
};



let bmw = {
  verticalDors: false,
  premium: true
};

bmw.__proto__ = car

console.log(bmw)



//Варіант 2


let lamborgini = Object.create(car, {
  verticalDors: {
    value: true
  },
  premium: {
    value: true
  }
});

console.log(lamborgini.premium);
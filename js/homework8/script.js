'use strict'



let json= '{"price": 100}'

try {
  let userPrice = JSON.parse(json);
  console.log(userPrice.price); 
} catch (erorr) {
  console.log("Ошибка")
}
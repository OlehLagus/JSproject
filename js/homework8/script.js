'use strict'



let json = '{"user":"Oleh", "price": "100"}'

try {
  let usersInfo = JSON.parse(json);
  console.log(usersInfo.price)
  return usersInfo.price
  
} catch (erorr) {
  console.log(erorr.name)
  console.log(erorr.message)
  console.log(erorr.stack)
  // throw new Erorr()
}


const userPrice = '{"price": "200"}';

let userPriceInfo = JSON.parse(userPrice)
if (userPriceInfo && userPriceInfo.price) {
  console.log(userPriceInfo.price)
}



const userFirstPrice = '{"price": "300"}';
let userFirstPriceInfo = JSON.parse(userFirstPrice)
if (userFirstPriceInfo?.price) {
  console.log(userFirstPriceInfo.price)
}
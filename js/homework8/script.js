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


const userPrice = {price: 100};

if (userPrice && userPrice.price) {
  console.log(userPrice.price)
}



const userFirstPrice = {price: 100};

if (userFirstPrice?.price) {
  console.log(userFirstPrice.price)
}
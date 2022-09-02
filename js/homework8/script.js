'use strict'



let json = '{"name":"John","cart":[{"price":"1000"},{"price":"2000"}]}'

try {
  let usersInfo = JSON.parse(json);
  console.log(usersInfo)
  let newArray = usersInfo.cart.flat()
  console.log(newArray[0])

  // return usersInfo.price[0]
  
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
'use strict'

// 1.Избавится от неуникальных элементов массива


const numbersArray = [1,1,2,3,4,5,5,5,6];

const mySet = new Set(numbersArray)
console.log(mySet)

let newArrayResult = Array.from(mySet)
console.log(newArrayResult)


// 2. Создать Map который будет по переданному объекту возвращать строку привествия



const greetUser = new Map;
greetUser.set(userBob, "Hello Bob nice to see you")
greetUser.set(userJane, "How your kids doing Jane?")


console.log(greetUser.get(userBob))
console.log(greetUser.get(userJane))

// 3. Создать функцию по превращению Map в object или object в Map в зависимости от того что было передано в функцию.


let obj = {
    name: "John",
    age: 30
  };
    
let map = new Map ([
    ["price", 500],
    ["lowPrice", 350],
    ["salePrice",    50]
  ]);


function convert(object) {
    if (object instanceof Map) {
         return Object.fromEntries(object)
    } else {
        return new Map(Object.entries(object)) 
    }
  }
  
  console.log (convert (map))

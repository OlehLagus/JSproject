'use strict'


// Создать функцию которая будет принимать имя пользователя и время через которое он хочет чтоб его поприветствовали. Время пользователь хочет вводить строкой в разном формате например '10 minutes' , '20 seconds', '1 hour', '2 hours'

let userName = 'Bob'
let userTime = '10 second'

function greetUsers(name) {
  console.log(`Hello ${name}`)
 } 


function getTimer(time) {
 let timeValue = parseInt(time)
 if (time.includes('minute')) {
  return timeValue * 60 * 1000
 } else if (time.includes('hour')) {
  return timeValue * 60 * 60 * 1000
 } else if (time.includes('second')) {
  return timeValue * 1000
 }
}

let ourTime = getTimer(userTime)

setTimeout(greetUsers, ourTime, userName)










// Создать функцию которая будет или сериализировать или десериализировать объект в зависимости от того в какой форме он был передан



const usersInfo = {
  name: 'John',
  age: 30,
};


const jsonUsersInfo = JSON.stringify(usersInfo);



function getJson(argument) {
   if (typeof argument === 'string') {
    return JSON.parse(argument)
   } 
   else{
    return JSON.stringify(argument)
   }
}


console.log(getJson(jsonUsersInfo))











// Создать функцию которая вернет true или false в зависимости от того что в нее передать JSON строку или обычную строку




let student = {
  name: 'John',
  age: 30,
};

let str = 'hello world'


let json = JSON.stringify(student);


function getInf (string){
  try {
    if (JSON.parse(string)) {
    return true
  }} catch{
    return false
  }
}


console.log(getInf(json))
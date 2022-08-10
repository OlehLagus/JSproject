"use strict";

{
  const nameAdmin = 'Oleh';
  console.log(nameAdmin) //Oleh
}


{
  let nameAdmin = 'Oleh';
  nameAdmin = 'Alex';
  console.log(nameAdmin);  //Alex
}


{
  let nameAdmin = 'Oleh';
  const nameAdminSecond = 'Alex';
  nameAdmin = nameAdminSecond;
  console.log(nameAdmin);  //Alex
}


{
let user = '';
let superUser = '';
let usersStatusActive ='';
let isUserActive ='';
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, ];

let carInfo = {
  carName: 'BMW',
  carModel: 'X5',
  carYear: 2002
}


let world = 'мир';
console.log(`Привет-${world}`)



console.log(10<3); //false

console.log('hi' !='hello'); // true

console.log(1=='1'); //true

const cnst1 = null
const cnst2 ='null'
console.log(cnst1 == cnst2); //false

console.log(null === undefined); //false

console.log(1 === 1 && 'hi'); //hi

console.log(true && 'I love js'); // I love js


console.log(123 && 'hi' || 'hello'); //hi

let i = 0
console.log(i++ ? true : false); //false

console.log(1 + 1); //2

console.log( '12' + '31'); //1231

console.log(3 / '3'); //1

console.log(10 * 'hello'); //NaN





let isAdmin = false
let isSuperAdmin = true
let isUser = false

isAdmin ? console.log('Hello admin') : isSuperAdmin ? console.log('Hello super admin') : isUser ? console.log('Helli user') : console.log('Hello guest') 


const roleAdmin = true;
const roleSuperAdmin = true;
const roleUser = true;
const roleNotAuthorized = true;

if (roleAdmin) {
  console.log('Hello admin')
} else if (roleSuperAdmin) {
  console.log('Hello Super Admin')
} else if (roleUser) {
  console.log('Hello dear user')
} else if (roleNotAuthorized) {
  console.log('Hello guest')
};


const switchRole = 'admin';

switch(switchRole) {
  case 'admin':
    console.log('Hello admin');
    break;
  case 'adminSuper':
    console.log('Hello super admin');
    break;
  case 'user':
    console.log('Hello user');
    break;
  case 'guest':
    console.log('Hello guest');
    break;
  default':
    console.log('default')
    break;
}


const switchProduct = 'cabbage';

switch(switchProduct) {
  case 'apple':
  case 'orange':
  case 'peach':
  case 'pear':
    console.log('This is fruit');
    break;
  case 'cabbage':
  case 'pepper':
  case 'cucumber':
  case 'potato ':
    console.log('This is vegetable');
    break;
  default':
    console.log('default')
    break;
}

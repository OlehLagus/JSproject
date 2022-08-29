const user = {
  name: 'Bob',
  sayHi: function () {
      console.log(`Hi I am ${this.name}`)
  }
}
user.sayHi()

const greetingsFunc = user.sayHi;
greetingsFunc()
const user2 = {
  name: 'Jane',
  sayHi: greetingsFunc
};
user2.sayHi()

// Hi I am Bob - обращается к  name который находится в этом же объекте
// Hi I am undefined - так как у переменной greetingsFunc this = window
// Hi I am Jane ​ -обращается к name который находится в этом же объекте



//2 Написать функцию-конструктор для создания объектов домашних питомцев

// Пример объекта который должна возвращать функция:

function getPetInf(name, kind, color ) {
  this.name = name;
  this.kind = kind;
  this.color = color
}

let pet1 = new User("Quick", "chinchilla", "black")

console.log(pet1)
//   name: 'Quick',
//   kind: 'chinchilla',
//   color: 'black'
// }


//3 Написать рекурсивное решение для расчет суммы всех символов в числе

function sumDigits(i) {
  i = `${i}`;
  if( i.length == 1 ) return +i;
  return +i[0] + sumDigits(i.slice(1));
}

console.log(sumDigits(152092))

//
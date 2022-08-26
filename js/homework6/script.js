'use strict'

// 1. объявить переменную выше функции присвоить ей значение и вывести ее значение в функции объявленой ниже

  let userId = 1;

  function getUserId() {
    return userId
  }

  console.log(getUserId())

// 2.объявить переменную выше функции присвоить ей значение, объявить функцию ниже и в ней объявить переменную с тем же названием что и выше но с другим значением. Залогировать переменную. Какое у нее будет значение то что ниже или выше?


  let userName = 'Oleh'

  function getUserName(name) {
    let userName = 'Alex'
    return userName
  }

console.log(getUserName(userName))  //Переменная переприсваевается и рузульаттом является переменная внутри функции тоесть 'Alex' / 


// 3.Каким будет значение переменной a в консоле. Написать почему.


  var a = 10

  function foo() {
    console.log(a)
  }


  function bar() {
    var a = 20
    foo()
  }
  bar();

  console.log(a)  //Значение 10 так как функция bar вызывает функцию foo откуда и берет значение. Значение приоритетнее чем a = 20


// 4. Каким будет значение переменной a в консоле. Написать почему
var a = 10

function foo() {
  var a = 20
  console.log(a)
}
a = 30
foo()


console.log(a)  //30 так как выводится самое последнее (актуальное) значение

// 5. Починить код ниже чтоб он логировал 0,1,2,3,4,5

for (let i = 0; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  })
}


//Создать функцию которая внутри себя будет реализовывать счетчика. Из функции вернуть текущее значение счетчика и функцию чтоб его увеличить.

function getCounter() {
  let counter = 0;
  return function () {
    return counter++;
  };
}

let counter = getCounter();

console.log(counter());  //-1
console.log(counter());  //--2
console.log(counter());   //--3
console.log(counter());  //--4
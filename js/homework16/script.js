'use strict'

// Example

// let numberObj = {
//   start: 1,
//   finish: 10
// };


// numberObj[Symbol.iterator] = function() {

//   return {
//     current: this.start,
//     last: this.finish,

//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// };


// for (let num of numberObj) {
//   console.log(Math.floor(Math.random() * num));

//Exercise 1

function generateSequence(finish) {
  console.log(Math.floor(Math.random() * finish));

}


function* getNumber (){
  yield generateSequence(20)
  yield generateSequence(50)
  yield generateSequence(70)
  yield generateSequence(23)
  yield generateSequence(55)
  yield generateSequence(12)
  yield generateSequence(5)
  yield generateSequence(7)
  yield generateSequence(9)
  yield generateSequence(34)
}

for (let num of getNumber()) {
  console.log(num++)
}


//Exercise 2

async function getSchedule() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Wake up"), 1000)
  });

  let morning = await promise
  console.log(morning);
  let timeToWork = new Promise((resolve, reject) => {
    setTimeout(() => resolve("This is time for work!"), 3000)
  })

  let day = await timeToWork
  console.log(day)
  let timeToGym = new Promise((resolve, reject) => {
    setTimeout(() => resolve("This is good time for GYM"), 2000)
  })

  let evening = await timeToGym
  console.log (evening)
}

getSchedule();
'use strict'

let schedule = new Promise(function(resolve, reject) {

  setTimeout(() => resolve('Wake up!'), 1000);

}).then(function(result) {

  console.log(result);
  return new Promise ((resolve, reject) => {
    setTimeout(() => resolve('This is time for work!'), 4000);
  });

}).then(function(result) {
  console.log(result);
  return new Promise ((resolve, reject) => {
    setTimeout(() => resolve('Time to go to the gym'), 2000);
  });
}).then(function(result) {
    console.log(result);
    return new Promise ((resolve, reject) => {
      setTimeout(() => resolve('Good time to watch a movie'), 2000);
    });
  }).then(function(result) {
    console.log(result);
  });

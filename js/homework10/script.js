'use strict'

// 1.Создать функцию которая будет принимать миллисекунды и вернет true или false в зависимости от того сегодня ли то число которое было передано


function getToday(argument) {
  const currentDay = new Date()
  const dayExample = new Date(argument);
  if (currentDay.getDate() === dayExample.getDate()) {
    return true
  } else {
    return false
  }
}


console.log(getToday(1599848994894))


// Создать функцию которая вернет дату и время в формате 13.10.2022 13:13 принимая миллисекунды

function getDates(argument) {
  const currentDate = new Date(argument);
  let day = currentDate.getDate()
  let month = currentDate.getMonth()
  let year = currentDate.getFullYear()
  let time = currentDate.getTime()
  let hours = currentDate.getHours()
  let minutes = currentDate.getMinutes()

  let newDate = day + '.' + month + '.' + year + ' ' + hours + ':' + minutes
    console.log(newDate)
  return newDate
}


console.log(getDates(444844544))


// 3.Создать функцию которая принимает миллисекунды и вернет количество времени которое прошло или должно пройти с текущего момента.


function getTime(argument) {
  const currentTime = new Date()
  const resultDate = new Date(+currentTime + argument)
  console.log(currentTime)
  console.log(resultDate)
  return resultDate
}

console.log(getTime(60000))
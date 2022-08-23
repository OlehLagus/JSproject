"use strict"
//1для смены регистра всех слов в строке - hello world - Hello World


let string = 'hello world'

function capitalize(string) {
  const arr = string.split(' ');
  const newArr = [];
  arr.forEach((item) => {
  const word = item[0].toUpperCase() + item.slice(1);
  newArr.push(word);
  })
  const newString = newArr.join(' ');
  return newString;
}

console.log(capitalize(string));




// вернуть массив из длинны строк ['hi', '', 'wow', null, ['I am not a string you are looking for], 'I am', 123 ] должно выйти [2,3,4]
let arr = ['hi', '', 'wow', null, ['I am not a string you are looking for'], 'I am', 123]

function getLength(example) {
  const stringArray = []
  example.forEach((element) => {
    if (typeof element === 'string' && element) {
      let lenghtString = element.length
      stringArray.push(lenghtString)
    }
  })
  return stringArray
}

console.log(getLength(arr));




// вернуть количество гласных в строке 'Hello world' => 3
let str = 'Hello world'
function findVowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'u', 'o'];
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count += 1
    }
  }
  return count
}


console.log(findVowels(str));



// создавать объект в зависимости от переданного вида createUser('admin', Bob') => {role: 'admin', name: 'Bob }, createUser('user', Alice') => {role: 'user', name: 'Alice }

function createUser (roleUser, nameUser) {
  return {
      role: `${roleUser}`, 
      name: `${nameUser}`
  }
}

console.log(createUser('admin', 'Bob'))
console.log(createUser('user', 'Alice'))






// должна принимать 'aabbbccccd' и возвращать '2a3b4c1d'
const mainStr = 'aabbbccccd';

function getResult(string) {
  let array = string.split('')
  let a = ''
  let b = ''
  let c =''
  let d = ''
  array.forEach((elem) => {
    if (elem === 'a') {
      a += elem
    }
    else if (elem === 'b') {
      b += elem
    }
    else if (elem === 'c') {
      c += elem
    }
    else if(elem === 'd') {
      d += elem 
    }
  })
  return ((a.length+ a[0]) + (b.length + b[0]) + (c.length + c[0]) + (d.length + d[0]))
  
   }


console.log(getResult(mainStr))



// вернуть строкой количество четных и нечетных чисел [1,2,3,4,NaN, 0, 5, 10]
let numberGet = [1, 2, 3, 4, NaN, 0, 5, 10]


function getNumber(element) {
  const even = [];
  const odd = [];
  element.forEach((elems) => {
    if (elems % 2 === 0) {
      even.push(elems)
    }
    else if (elems % 2 === 1)
    odd.push(elems)
})
    return (`${even.length}, ` + `${odd.length}`)
}

console.log(getNumber(numberGet))


// конвертация валют переданное кол-во гривен в переданную валюту - convert('US', 1000) - вернуть число 27.32
function convert(сurrency, summ) {
  if (сurrency = 'US') {
    return (summ / 36.6).toFixed(2)
  }
}

console.log(convert('US', 1000))



// вернуть строку с пробелами между каждым символом 'hello world' => 'h e l l o w o r l d'
function insertSpaces(aString) {
  return aString.split("").join(" ");
}


console.log(insertSpaces('hello world'))



// вернуть количество часов принимая количество лет getSeconds('5 years') => 43800
function getSeconds(date) {
  return date[0] * 365 *24
}

console.log(getSeconds('5 years'))



// обрезать слишком длинную строку trim('hello world', 3) => 'hel...'

function trim(string, number) {
  return string.slice(0, number) + '...'
}

console.log( trim('hello world', 3))
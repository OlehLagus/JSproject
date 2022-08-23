'use strict'

const usersArray = [
  {
    name: "John",
    balance: '2000$',
    friends: [
      {
      name: "Robert",
      balance: '1000$',
      },
      {
      name: "Kate",
      balance: '0$',
      },
      ],
      },
  {
    name: "Isaac",
    balance: '20000$',
    friends: [
      {
      name: "Bob",
      balance: '2000$',
      },
      {
      name: "Robert",
      balance: '150000$',
      },
      ],
      },
  {
    name: "Jane",
      balance: '200$',
      friends: [
      {
      name: "Kate",
      balance: '5000$',
      },
      {
      name: "Anne",
      balance: '1234$',
      },
      {
      name: "Bob",
      balance: '300$',
      },
      ],
      },
  {
    name: "Russell",
    balance: '100$',
    friends: [],
    },
 ];


 const copyArray = JSON.parse(JSON.stringify(usersArray))
 const getMembers = (members) => {
  let friends = [];
  const flattenMembers = members.map(m => {
    if (m.friends && m.friends.length) {
      friends = [...friends, ...m.friends];
    }
    delete m.friends
    return m;
  });
  return flattenMembers.concat(friends.length ? getMembers(friends) : friends);
};

  const usersArrayFlat = getMembers(copyArray);
  console.log(usersArrayFlat)


//1 Вывести имя самого богатого пользователя

 const usersRichListUsers = usersArray.map((elem) => +elem.balance.substring(0, elem.balance.length -1));
 console.log(usersRichListUsers)
 
 const maxValueBalance = Math.max.apply(null, usersRichListUsers)
 console.log(maxValueBalance)
 
 const richestUser = usersArrayFlat.forEach ((element) => {
   if (element.balance === maxValueBalance + '$'){
     console.log(element.name)
   }
 }
 ) 

//2. Отсортировать пользователей по имени в алфавитном порядке

const usersSortList = usersArrayFlat.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

console.log(usersSortList)


//3. Вывести общий баланс пользователей

let arraySum = 0
usersRichListUsers.forEach((elem) => arraySum += elem)
console.log(arraySum)

// Второй вариант

const allMoney = usersRichListUsers.reduce((acc, curr) => {
  return acc += curr
}, 0)

console.log(allMoney)

// Удалить пользователя Russell
// Удалить пользователя Isaac

const indexForRussell = usersArray.findIndex(object => {
  return object.name === 'Russell'
});
  
console.log(indexForRussell)

usersArray.splice(indexForRussell, 1)
console.log(usersArray)

const indexForIsaac = usersArray.findIndex(object => {
  return object.name === 'Isaac'
});
  
console.log(indexForIsaac)

usersArray.splice(indexForIsaac, 1)
console.log(usersArray)


//6. Добавить пользователя Harry после John

const indexForJohn =  usersArrayFlat.findIndex(object => {
  return object.name === 'John'
});
console.log(indexForJohn)

usersArrayFlat.splice(indexForJohn+1, 0, {name: 'Harry', balance: '500$'})
console.log(usersArrayFlat)

usersArrayFlat.push({name: 'Conor', balance: '777$'})
console.log(usersArrayFlat)


//8. Вывести массив всех пользователей включая друзей без повторения

const filteredArr = usersArrayFlat.reduce((acc, current) => {
  const x = acc.find(item => item.name === current.name);
  if (!x) {
    return acc.concat([current]);
  } else {
    return acc;
  }
}, []);
console.log(filteredArr)



//9 Вывести массив пользователей у которых баланс больше 2000$

const filterRichestUsers = usersArrayFlat.filter ((elem) => (+elem.balance.substring(0, elem.balance.length -1)) > 2000)
console.log(filterRichestUsers)


//10 Вывести имя самого богатого пользователя(включая друзей)

const usersRichList = usersArrayFlat.map((elem) => +elem.balance.substring(0, elem.balance.length -1));
console.log(usersRichList)

const maxValueBalanceUsers = Math.max.apply(null, usersRichListUsers)
console.log(maxValueBalance)

const richestUserList = usersArrayFlat.map((element) => {
  if (element.balance === maxValueBalanceUsers + '$'){
    console.log(element.name)
  }
}
)
//11. Найти пользователей с общими друзьями



//12. Вывести одинаковы ли массивы
const arr1 = [10, 'a', '5', 5, 1]; 
const arr2 = [10, 'a', 5, 5, 1];

console.log(JSON.stringify(arr1) === JSON.stringify(arr2)) 


//13. вывести true или false в зависимости является ли строка палиндромом "искать такси", "привет мир"

let str = 'искать такси'
let str2 = str.replace(/\s/g,'') 
let str3 = str2.split('')
let str3Copy = str3.slice()
const str3CopyRevers = str3Copy.reverse()
console.log(JSON.stringify(str3) === JSON.stringify(str3CopyRevers))


let originalPhrase = 'привет мир'
let originalPhraseNotSpace = originalPhrase.replace(/\s/g,'') 
let originalPhraseNotSpaceArray = originalPhraseNotSpace.split('')
let originalPhraseNotSpaceArrayCopy = originalPhraseNotSpaceArray.slice()
const originalPhraseNotSpaceArrayCopystr3CopyRevers = originalPhraseNotSpaceArrayCopy.reverse()

console.log(JSON.stringify(originalPhraseNotSpaceArrayCopystr3CopyRevers) === JSON.stringify(originalPhraseNotSpaceArray))
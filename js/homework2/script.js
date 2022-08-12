//Задание 1

const welcomeText = "Hello world";
const upperChar = welcomeText.charAt(6);
const capitalized = welcomeText.replace(upperChar, upperChar.toUpperCase());
console.log(capitalized + "!"); 


//Задание 2
let str = "a123";
let stringValue = str.split('');
let stringNum = stringValue.map(Number);


for (let i=0; i < stringNum.length; i++) {
  if (isNaN(stringNum[i])){
          console.log('string');
} else {
  console.log("number")
}
}


let i2 = 0
while(i2 < stringNum.length) {
  if (isNaN(stringNum[i2])){
    console.log('string');
} else {
console.log("number")
}
i2++
}


let stringSecond = 'a123'; 
let strValue = ''; 

let i3 = 0; 

while (i3 < stringSecond .length) {
if (isNaN(+stringSecond [i3])) {
    strValue += 'string '
} else {
    strValue += 'number '
}
i3++
}

console.log(strValue); 

let strValue2 = '';

for (let i3= 0; i3 < stringSecond .length; i3++) {
    if (isNaN(+stringSecond [i3])) {
        strValue2 += 'string ' 
    } else (strValue2 += 'number ') ;
  }

  console.log(strValue2);



// Задание 3

for (let x=13; x>=3; x--) {
  if (x % 2 === 0) {
          console.log(x + " even");
  }
  else {
          console.log(x + " odd");
  }
}



let i = 13;
while(i >= 3) {
      if((i % 2)) {
        console.log(i + " even")
        }
      else {
        console.log(i + " odd")
      }
      i--
}




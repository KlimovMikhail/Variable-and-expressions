"use strict";

// Задача №1

let a, b, c;
a = 3;
b = a * 3;
c = a + b;
console.log( `a = ${a} b = ${b} c = ${c}` );

// Задача №2

let firstName, secondName;
firstName = prompt( "Enter your name", "" );
secondName = prompt( "Enter your surname", "" );
alert( `Wats up ${firstName} ${secondName}`);

// Задача №3

let x = Number( prompt( "Enter X", "" ) );
let y = Number( prompt( "Enter Y", "" ) );
alert( `X * Y = ${x * y}` );
alert( `X / Y = ${x / y}` );
alert( `X - Y = ${x - y}` );
alert( `X + Y = ${x + y}` );

// Задача №4

let workHours = prompt("количество рабочих часов в день", "");
let workDays = prompt("количество рабочих дней в неделе", "");
let salaryForHour = prompt("зарплата в час", "");
let weeksInMonth = 4
alert(`зарплата за июнь ${workHours * salaryForHour * workDays * weeksInMonth}`);

// Задача №5

let num = prompt( "Enter number", "" );
if(num % 2) {
  alert( `число нечетное` );
} else {
  alert( `число четное` );
}
// Задача №6

let k = Number(prompt("введите число", ""));
if(isFinite(k)) {
  alert(`это число`);
} else {
  alert(`это не число`);
}


// Задача №7

let p = Math.round((Math.random() * 100));
console.log(p);
let h = prompt("Enter number", "h");
if(p < h) {
  alert(`p = ${p} < h = ${h}`);
} else {
  alert(`p = ${p} > h = ${h}`);
}

// Задача №8

let str = prompt("","Мне нравится изучать Front-End");
let mystr = prompt("", "English");
console.log(str.includes('English'));
let substr = str.substring(0, 21);
let result = `${substr} ${mystr}`;
alert(result);
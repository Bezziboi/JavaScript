// //2я домашка по JS со звездочками:

// //1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let i = 2;
for (j = 1; j <= 10; j++) {
  console.log(i ** j);
}

// //1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function func(x) {
  let i = 2;
  for (j = 1; j <= x; j++) {
    console.log(i ** j);
  }
}
func(6);


// //2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// //Пример в консоли:
// //:)
// //:):)
// //:):):)
// //:):):):)
// //:):):):):)

let i = ':)';
for (j = 1; j <= 5; j++) {
  console.log(i.repeat(j));
}


// //2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// //e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows) {
  for (j = 1; j <= numberOfRows; j++) {
    console.log(stroka.repeat(j));
  }
}
printSmile(':)', 5)

//3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв
//Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word) {
  let w = word.toLowerCase().split('');
  let vowel = 'aeiou';
  let cons = 'bcdfghjklmnpqrstvwxyz';
  let vСount = 0;
  let cСount = 0;

  for (let x = 0; x < w.length; x++) {
    if (vowel.indexOf(w[x]) !== -1) {
      vСount++;
    }
    if (cons.indexOf(w[x]) !== -1) {
      cСount++;
    }

  }
  return (`${vСount} + ${cСount}`);

}
console.log(getWordStructure('case'));
console.log(getWordStructure('Case'));
console.log(getWordStructure('Check-list'));


//4**. Написать функцию, которая проверяет, является ли слово палиндромом
//e.g. function isPalindrom(word)
//Проверки: 'abba', 'Abba'


// первый вариант
function isPalindrom_1(word) {
  let w = word.toLowerCase().replace(/[^a-zA-Z0-9]+/i)

  for (let i = 0, j = w.length - 1; i < j; i++, j--) {
    if (w[i] != w[j]) {
      return false;
    }
  } return true;

}
console.log(isPalindrom_1('abba'));
console.log(isPalindrom_1('Abba'));

// //Второй вариант
function isPalindrom_2(word) {
  let w = word.toLowerCase().replace(/[^a-zA-Z0-9]+/i)
  let len = w.length;
  let mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (w[i] !== w[len - 1 - i]) {
      return false;
    }
  } return true;
}
console.log(isPalindrom_2('abba'));
console.log(isPalindrom_2('Abba'));
//1. Write a script that will calculate and display the result of raising 2 to the power of 10, starting from the power of 1
{
let i = 2;
for (j = 1; j <= 10; j++) {
  console.log(i ** j);
}

//1*. Convert 1 task into a function that takes as input the power to which the number 2 will be raised

function func(x) {
  let i = 2;
  for (j = 1; j <= x; j++) {
    console.log(i ** j);
  }
}
func(6);
}

//2.Write a script that will print 5 lines to the console in such a way that :) is displayed on the first line, :) :) on the second line, and so on
//Console example:
//:)
//:):)
//:):):)
//:):):):)
//:):):):):)

let i = ':)';
for (j = 1; j <= 5; j++) {
  console.log(i.repeat(j));
}


// //2*. Convert task 2 into a function that takes a string as input, which will be output to the console (as in the smiley condition), as well as the number of lines to output
// //e.g. function printSmile(line, numberOfRows)

function printSmile(line, numberOfRows) {
  for (j = 1; j <= numberOfRows; j++) {
    console.log(line.repeat(j));
  }
}
printSmile(':)', 5)

//3**.  Write a function that takes a word as input. The task of the function is to calculate and output to the console how many vowels and how many consonants are in the word.
//e.g. function getWordStructure(word)
//In console: 
//The word (word) consists of (number) vowels and (number) consonants
//Checks: 'case', 'Case', 'Check-list'

function getWordStructure(word) {
  let w = word.toLowerCase().split('');
  let vowel = 'aeiou';
  let cons = 'bcdfghjklmnpqrstvwxyz';
  let vowelСount = 0;
  let consonantСount = 0;

  for (let x = 0; x < w.length; x++) {
    if (vowel.indexOf(w[x]) !== -1) {
      vowelСount++;
    }
    if (cons.indexOf(w[x]) !== -1) {
        consonantСount++;
    }

  }
  return (`The word '${word}' consists of ${vowelСount} vowels and ${consonantСount} consonants`);

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
/*    Task 2***
Implement reading from JSON from the task2.json file using, for example, the fs module
for further use in the function described in the task
*/

const fs = require('fs');
const rawdata = fs.readFileSync('c:/Users/Meylis/OneDrive/Рабочий стол/git bash/JavaScript/javaScript_HW_3/task2.json', `utf-8`);
const idCard = JSON.parse(rawdata);

const idCardUnique = [];
function itemCheck(data) {
  if (idCardUnique.indexOf(data.name) === -1) {
    idCardUnique.push(data.name);
    return true;
  }
  return false;
}

console.log(idCard.filter((data) => itemCheck(data)));
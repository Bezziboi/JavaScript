// let firstName = "Bezirgen";
// let age = 21;
// let student = true;

// console.log("Hello " + firstName);
// console.log("You are " + age + " years old");
// console.log("Enrolled: " + student);

// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;








// let students = 20;

// students = students + 1; 
// students = students - 1; 
// students = students * 2; 
// students = students / 2; 

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;

// let extraStudents = students % 3;

//  console.log(students);
//  console.log(extraStudents)







// let userName = window.prompt("Enter your name!");
// console.log(userName);

// let userName;

// document.getElementById("myButton").onclick = function(){
//     userName = document.getElementById("myText").value;
//     console.log(userName);
//     document.getElementById("myLabel").innerHTML = "Hello " + userName + "!"
// }






// let age = window.prompt("Enter your age!");
// age = Number(age);
// age += 1;
// console.log("Happy birthday you are " + age + " now!");

// let x;
// let y;
// let z;

// x = Number("42.5");
// y = String("392.4");
// z = Boolean("Pizza");

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);







// const PI = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter radius of a circle!");
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log("Your circumference is: " + circumference);







// let x = 3.14;
// let y = 5;
// let z = 9;
// let maximum;
// let minumum;

// // x = Math.round(x);
// // x = Math.floor(x);
// // x = Math.ceil(x);
// // x = Math.sqrt(x);
// // x = Math.pow(x, 2);
// // maximum = Math.max(x, y, z);
// minumum = Math.min(x, y, z);

// console.log(minumum);








// let a;
// let b;
// let c;

// document.getElementById("submitButton").onclick = function (){
//     a = document.getElementById("aText").value;
//     a = Number(a);

//     b = document.getElementById("bText").value;
//     b = Number(b);

//     c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//     document.getElementById("cLabel").innerHTML = "Side C: " + c;
// }







// let userName = "Bezirgen Akmammedov";
// let phoneNumber = "555-043-41-15";

// // userName = userName.length;
// // userName = userName.charAt(3);
// // userName = userName.indexOf("e");
// // userName = userName.lastIndexOf("e");
// userName = userName.trim();
// // userName = userName.toUpperCase();
// // userName = userName.toLowerCase();

// phoneNumber = phoneNumber.replaceAll("-", " ");

// console.log(userName);
// console.log(phoneNumber);





// let fullName = "Bezirgen Akmammedov";
// let firstName;
// let lastName;

// // firstName = fullName.slice(0,8);
// // lastName = fullName.slice(9);

// firstName = fullName.slice(0, fullName.indexOf(" "));
// lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);


// let userName = "bezirgen";

// let letter = userName.charAt(0).toUpperCase().trim();

// console.log(letter);






// let age = 22;
// let online = true;

// if(age >= 65) {
//     console.log("You are a senior citizen!");
// }
// else if(age >= 18) {
//     console.log("You are an adult!");
// }
// else if(age <= 0) {
//     console.log("You haven't been born yet!");
// }
// else {
//     console.log("You are a child!");
// }

// if(online) {
//     console.log("You are online!");
// }
// else {
//     console.log("You are offline!");
// }








// let grade = "A";

// switch(grade) {
//     case "A" :
//         console.log("You did great!");
//         break;
//     case "B" :
//         console.log("You did good!");
//         break;
//     case "C" :
//         console.log("You did okay!");
//         break;
//     case "D" :
//         console.log("You bearly ... passed!");
//         break;
//     case "F" :
//         console.log("You FAILED!");
//         break;
//     default :
//         console.log(grade + " is NOT a letter grade!");
// }

// let grade2 = -10;

// switch(true) {
//     case grade2 >= 90 && grade2 <= 100 :
//         console.log("You did great!");
//         break;
//     case grade2 >= 80 && grade2 <= 100 :
//         console.log("You did good!");
//         break;
//     case grade2 >= 70 && grade2 <= 100 :
//         console.log("You did okay!");
//         break;
//     case grade2 >= 60 && grade2 <= 100 :
//         console.log("You bearly... passed!");
//         break;
//     case grade2 <60  && grade2 >= 0 && grade2 <= 100:
//         console.log("You FAILED!");
//         break;
//     default :
//         console.log(grade2 + ": is NOT a number grade!");
//         break;
// }















// let temp = 15;
// let sunny = true;

// if(temp >= 0 && temp <= 30 && sunny) {
//     console.log("The weather is Good!");
// }
// else {
//     console.log("The weather is Bad!");
// }









// let  userName = "";

// while(userName == "" || userName == null){
//     userName = window.prompt("Enter your name");
// }
// console.log("Hello " + userName + "!");

// let userName;

// do{
//     userName = window.prompt("Enter your name!");
// }while(userName == "" || userName == null);

// console.log("Hello " + userName + "!");









// for(let counter = 1; counter <= 10; counter++) {
//     console.log(counter);
// }
// console.log("Happy New Year!!");


// for(let i = 1; i <= 20; i++) {
//     if(i == 10) {
//         break;
//     }
// console.log(i);
// }

// for(let i = 1; i <= 20; i++) {
//     if(i == 15) {
//         continue;
//     }
//     console.log(i);
// }












// let symbol = window.prompt("Enter a symbol!"); 
// let row = window.prompt("Enter # of row!");
// let column = window.prompt("Enter # of column!");

// for(let i = 1; i <= row; i+=1) {
//     for(let j = 1; j <= column; j+=1) {
//        document.getElementById("label").innerHTML += symbol;
//     }
//     document.getElementById("label").innerHTML += "<br>";
// }









// startProgram();
// function startProgram() {
//     let userName = "Bezzi";
//     let age = 22;
    
//     happyBirthday(userName, age);
// }
// function happyBirthday(a, b){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday dear ", a, "!");
//     console.log("Happy birthday to you!");
//     console.log("You are ", b, " years old now!");
// }










// let area;
// let width;
// let height;

// width = window.prompt("Emter a width");
// height = window.prompt("Enter a heigth");

// area = getArea(width, height);

// console.log("Your area is: ", area);

// function getArea(width, height) {
//     return width * height;
// }















// let adult = checkAge(22);

// console.log(adult);

// function checkAge(age) {
   
//    return age >=18 ? true : false;
// }

// let winner = false;

// checkWinner(winner)

// function checkWinner(win) {
//     win ? console.log("You win!") : console.log("You lose!");
// }









// let myNum = 1234.567.890;

// myNum = myNum.toLocaleString("en-US");  //US English
// myNum = myNum.toLocaleString("hi-IN");  //Hindi
// myNum = myNum.toLocaleString("de-DE");  //German
// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});  //US English
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});  //Hindi
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"} ); //German
// myNum = myNum.toLocaleString("tr-TRY", {style: "currency", currency: "TRY"} );//Turkey
// myNum = myNum.toLocaleString("tm-TM", {style: "currency", currency: "TMT"} ); //Turkmenistan
// myNum = myNum.toLocaleString(undefined, {style: "percent"});                  //Percent
// myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});    //Celsius

// console.log(myNum);


















// let guessAnswer = document.getElementById("guessAnswer");
// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("guessBtn").onclick =  function() {
//     let guess = document.getElementById("guessInput").value;
//     guesses ++;
//     if(guess == answer) {
//         guessAnswer.innerHTML =`${answer} is true. It took you ${guesses} guesses.`;
//     }
//     else if(guess < answer) {
//         guessAnswer.innerHTML = "Too large";
//     }
//     else {
//         guessAnswer.innerHTML = "Too small";
//     }
// }









// let fruits = ["apple", "orange", "banana"];

// fruits[2] = "coconut"                       //update en element
// fruits.push("kiwi");                        //add an element
// fruits.pop();                               //remove last element
// fruits.unshift("mango");                    //add element to beginning
// fruits.shift();                             //remove element from beginning

// let length = fruits.length;
// let index = fruits.indexOf("coconut");

// console.log(fruits[2]);
// console.log(length);
// console.log(index);







// let prices = [5, 10, 15, 20, 25, 30];

// for(let i = 0; i < prices.length; i+=1) {
//     console.log(prices[i]);
// }

// for(let j = prices.length - 1; j >= 0; j-=1) {
//     console.log(prices[j]);
// }

// for(let price of prices) {
//     console.log(price);
// }












// let fruits = ["banana", "apple", "orange", "coconut", "mango"];

// fruits = fruits.sort();                       //from [a-z], <
// fruits = fruits.sort().reverse();             //from [z-a], >

// for(let fruit of fruits) {
//     console.log(fruit);
// }











// let fruits =     ["banana", "apple", "orange"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats =      ["eggs", "chicken", "fish"];

// let groceryList = [fruits, vegetables, meats];

// // groceryList[2][0] = "steak";

// for(let list of groceryList) {
//     for(let food of list) {
//         console.log(food)
//     }
// }









// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let maximum = Math.max(...number);
// // console.log(maximum);

//  let class1 = ["Spongebob", "Patrick", "Sandy"];
//  let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

//  class1.push(...class2);

//  console.log(...class1);









// let a = 1;
// let b = 1;
// let c = 1;
// let d = 1;
// let e = 1;

// console.log(sum(a ,b, c, d));

// function sum(...numbers) {
// let total = 0
// for(let number of numbers) {
//     total += number;
// }
// return total;
// }











// sum(1, 1, displayDOM);

// function sum(a, b, callBack) {
//     let result = a + b;
//     callBack(result);
// }

// function displayConsole(output) {
//     console.log(output);
// }
// function displayDOM(output) {
//     document.getElementById("a").innerHTML = output;
// }









// let students = ["spongebob", "atrick", "sandy"];

// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array) {
//     array[index] = element[0].toUpperCase() + element.substring(1);
// }

// function print(element) {
//     console.log(element);
// }








// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// numbers.forEach(print);
// squares.forEach(print);
// cubes.forEach(print);

// function square(element) {
//     return Math.pow(element, 2);
// }
// function cube(element) {
//     return Math.pow(element, 3);
// }
// function print(element) {
//     console.log(element)
// }









// let ages = [7, 15, 32, 18, 21, 17];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element) {
//     return element >=18;
// }
// function print(element) {
//     console.log(element);
// }







// let prices = [10, 30, 15, 20, 5];
// let total = prices.reduce(checkOut);

// console.log(`Your total is: $${total}`);

// function checkOut(total, element) {
//     return total + element;
// }








// let grades = [100, 40, 70, 90, 50, 60];
// grades = grades.sort(ascendingSort);

// grades.forEach(print)

// function descendingSort(x, y) {
//     return y - x;
// }
// function ascendingSort(x, y) {
//     return x - y;
// }
// function print(element) {
//     console.log(element);
// }












// const functionWithOutName = function() {
//     console.log("hello");
// }
// functionWithOutName();



// let count = 0;

// document.getElementById("increase").onclick = function() {
//     count += 1;
//     document.getElementById("myLabel").innerHTML = count;
// }
// document.getElementById("decrease").onclick = function() {
//     count -= 1;
//     document.getElementById("myLabel").innerHTML = count;
// }












// const sayHi = userName => console.log(`Hello ${userName}`);

// sayHi("Bezzi");



// const percent = (x, y) => x / y * 100;
// console.log(`${percent(30, 50)}%`);



// let grades = [70, 50, 100, 90, 80, 60];

// grades.sort((x, y) => y - x);
// grades.forEach(element => console.log(element));













// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K"];

// shuffle(cards);

// cards.forEach(card => console.log(card));

// function shuffle(array) {
//     let currentIndex = array.length;
//     while(currentIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * array.length);
//         currentIndex -= 1;
        
//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp;
//     }
//     return array;
// }








// let userName = "Bezzi";
// let userInbox = 2;

// login()

// function login() {
//     Name()
//     Inbox()

//     function Name() {
//         console.log(`Hello ${userName}!`);
//     }
//     function Inbox() {
//         console.log(`Yoy have ${userInbox} messages`);
//     }
// }









// const store = new Map([
//     ["t-shirt", 30],
//     ["jeans", 40],
//     ["sucks", 10],
//     ["underwear", 20]
// ])

// store.set("hat", 20);               //add element
// store.delete("hat");                //delete element
// console.log(store.get("sucks"));    //get element from Map
// console.log(store.has("hat"));      //check element from Map
// console.log(store.size);            //.size = .length  but for Map

// store.forEach((value, key) => console.log(`${key} $${value}`));

// let shoppingCart = 0;
// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("jeans");
// console.log(`Your total is $${shoppingCart}`)









// const car1 = {
//     name: "Mustang",
//     color: "Red",
//     year: 2010,

//     drive : function() {
//         console.log(`You drive the ${this.name}`);
//     },
//     brake : function() {
//         console.log("You step on the brakes");
//     }
// }
// console.log(car1.name);
// console.log(car1.color);
// console.log(car1.year);
// car1.drive();
// car1.brake();

// const car2 = {
//     name: "Corvette",
//     color: "Blue",
//     year: 2015,

//     drive : function() {
//         console.log(`You drive the ${this.name}`);
//     },
//     brake : function() {
//         console.log("You step on the brakes");
//     }
// }
// console.log(car2.name);
// console.log(car2.color);
// console.log(car2.year);
// car2.drive();
// car2.brake();













// class Player {
//     score = 0;

//     pause() {
//         console.log("paused the game");
//     }
//     exit() {
//         console.log("exited the game");
//     }
// }

// let player1 = new Player;
// let player2 = new Player;

// player1.score += 1;

// console.log(player1.score);
// player1.pause();
// console.log(player2.score);
// player2.exit();










// class Student {

//     constructor(name, age, gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }

//     study() {
//         console.log(`${this.name} is studying`);
//     }
// }

// const student1 = new Student("Sponggbob", 30, 4.0);
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// student1.study();

// const student2 = new Student("Patrick", 35, 1.7);
// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);
// student2.study();

// const student3 = new Student("Sandy", 27, 2.9);
// console.log(student3.name);
// console.log(student3.age);
// console.log(student3.gpa);
// student3.study();















// class Car {
    
//     static numberOfCars = 0;
    
//     constructor(model) {
//         this.model = model;
//         Car.numberOfCars += 1;
//     }
//     static race() {
//         console.log("3...2...1...GO!");
//     }
// }

// const car1= new Car("Mustang");
// const car2= new Car("Corvette");
// const car3= new Car("BMW");
// const car4= new Car("Ferrari");

// console.log(Car.numberOfCars);
// Car.race();












// class Animal {
//     alive = true;

//     eat() {
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep() {
//         console.log(`This ${this.name} is sleeping`);
//     }
// }
// class Rabbit extends Animal {
//     name = "rabbit"

//     run() {
//         console.log(`This ${this.name} is running`);
//     }
// }
// class Fish extends Animal {
//     name = "fish"

//     swim() {
//         console.log(`This ${this.name} is swimming`);
//     }
// }
// class Hawk extends Animal {
//     name = "hawk"

//     fly() {
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();










// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Rabbit extends Animal {
    
//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
// }

// class Fish extends Animal {
    
//     constructor(name, age, swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
// }

// class Hawk extends Animal {
    
//     constructor(name, age,flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
// }

// const rabbit = new Rabbit("rabbit", 1, 20);
// const fish = new Fish("fish", 2, 30);
// const hawk = new Hawk("hawk", 3, 50);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);










// class Car {

//     constructor(power) {
//         this._gas = 30;
//         this._power = power;
//     }
//     get power() {
//         return `${this._power}hp`
//     }
//     get gas() {
//         return `${this._gas}L (${this._gas / 60 * 100}%)`
//     }
//     set gas(value) {
//         if(value > 60) {
//             value = 60;
//         }
//         else if(value < 0) {
//             value = 0;
//         }
//         this._gas = value;
//     }

// }

// const car = new Car(260);

// car.gas = 1000000;

// console.log(car.power);
// console.log(car.gas);









// class Car {
//     constructor(model , year, color) {
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// const car1 = new Car("Mustang", 2010, "red");
// const car2 = new Car("Corvette", 2020, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");

// changeColor(car2, "black");
// checkInfo(car2);

// function checkInfo(car) {
//     console.log(car.model);
//     console.log(car.year);
//     console.log(car.color);
// }
// function changeColor(car, color) {
//     car.color = color;
// }












// class Car {
//     constructor(model , year, color) {
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
//     drive() {
//         console.log(`You drive the ${this.model}`);
//     }
// }

// const car1 = new Car("Mustang", 2010, "white");
// const car2 = new Car("Corvette", 2020, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");
// const car4 = new Car("Ferrari", 2012, "red");

// const cars = [car1, car2, car3, car4];

// console.log(cars[0].model);
// console.log(cars[0].year);
// console.log(cars[0].color);
// startRace(cars);

// function startRace(cars) {
//     for(let car of cars) {
//         car.drive();
//     }
// }
















// class Card {
//     constructor(value, suit) {
//         this.value = value;
//         this.suit = suit;
//     }
// }

// let cards = [new Card("A", "Hearts"),
//              new Card("A", "Spands"),
//              new Card("A", "Diamonds"),
//              new Card("A", "Clubs"),
//              new Card("2", "Hearts"),
//              new Card("2", "Spands"),
//              new Card("2", "Diamonds"),
//              new Card("2", "Clubs")];

// cards.forEach(card => console.log(card.value, card.suit));













// try {
//     let x = window.prompt("Enter a #");
//     x = Number(x);
    
//     if(isNaN(x)) throw console.log("That wasn't a number");
//     if(x == "") throw console.log("That was empty");

//     console.log(`${x} is a number`);
//     console.g();                                             //
// }
// catch(error) {                                               //
//     console.log("at 1309 - 'console.g();' is error");        //
// }
// finally {
//     console.log("This always executes");
// }






// let item = "cryptocurency";
// let price = 423.76;

// let timer1 = setTimeout(firstMessage, 5000, item, price);  //setTimeout(x, milliseconds, arguments);
// let timer2 = setTimeout(secondMessage, 10000);
// let timer3 = setTimeout(thirdMessage, 15000);

// function firstMessage(item, price) {
//     alert(`Buy this ${item} for ${price} !!!`);
// }

// function secondMessage() {
//     alert('This is not a scam!!!');
// }

// function thirdMessage() {
//     alert('DO IT !!!');
// }
// document.getElementById("clearTimeout").onclick = function() {
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert('Thanks for buying!))');
// }











// let count = 0;
// let max = window.prompt("Count up to what # ?");
// max = Number(max);

// const myTimer = setInterval(countUp);

// function countUp() {
//     count += 1;
//     console.log(count);
//     if(count >= max) {
//         clearInterval(myTimer)
//     }
// }









// let date = new Date();

// let year = date.getFullYear();
// let month = date.getMonth();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let milliSeconds = date.getMilliseconds();

// date.setFullYear(2000);
// date.setMonth(8);
// date.setDate(14);
// date.setHours(24);
// date.setMinutes(30);
// date.setSeconds(20);
// date.setMilliseconds(120);

// date = date.toLocaleString();

// console.log(formatDate(date));
// console.log(formatTime(date));

// function formatDate(date) {
//     let year = date.getFullYear();
//     let month = date.getMonth() + 1;
//     let dayOfMonth = date.getDate();
//     return `${dayOfMonth}/${month}/${year}`
// }
// function formatTime(date) {
//     let hour = date.getHours();
//     let minutes = date.getMinutes(); 
//     let seconds = date.getSeconds();
//     let amOrPm = hour >= 12 ? "pm" : "am";

//     hour = (hour % 12) || 12;

//     return `${hour}:${minutes}:${seconds} ${amOrPm}`;
// }









// const myLabel = document.getElementById("myLabel");

// update();
// setInterval(update, 1000);

// function update() {
//     let date = new Date;
//     myLabel.innerHTML = formateDate(date);

//     function formateDate(date) {
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let amOrPm = hours >= 12 ? "pm" : "am";

//         hours = (hours % 12) || 12;

//         hours = formatZeroes(hours);
//         minutes = formatZeroes(minutes);
//         seconds = formatZeroes(seconds);

//         return `${hours}:${minutes}:${seconds} ${amOrPm}`;
//     }
//     function formatZeroes(time) {
//         time = time.toString();
//         return time.length < 2 ? "0" + time : time;
//     }
// }










// console.time("Response time");     //start

// console.timeEnd("Response time");  //end










// const promise = new Promise((resolve, reject) => {
//     let fileLoaded = false;
   
//     if(fileLoaded) {
//         resolve (console.log("File loaded"));
//     }
//     else {
//         reject (console.log("File NOT loaded"));
//     }
// })

// promise.then(value => console.log(value))
//        .catch(error => console.log(error));


// const wait = time => new Promise(resolve => {
//     setTimeout(resolve, time);
// })

// wait(3000).then(() => console.log("Thanks for waiting!"));










// async function loadFile() {
    
//     let fileLoaded = true;

//     if(fileLoaded) {
//         return "File loaded";
//     }
//     else {
//         throw "File NOT loaded";
//     }
// }


// loadFile().then(value => console.log(value))
//           .catch(error => console.log(error));










// async function loadFile() {
    
//     let fileLoaded = false;

//     if(fileLoaded) {
//         return "File loaded";
//     }
//     else {
//         throw "File NOT loaded";
//     }
// }

// async function startProcess() {
//     try {
//         let message = await loadFile(); 
//         console.log(message);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// startProcess();











// import {things to import from another file} from "file name";
// import * as importName from "file name";









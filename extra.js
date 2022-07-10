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









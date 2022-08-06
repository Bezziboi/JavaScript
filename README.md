# JavaScript

<h3 align="center">Variables</h3>

 A variable is a container for storing data
 A variable behaves as if it was the value that it contains

 Two steps:
 1. Declaration (var, let, const)
 2. Assignment ( = assignment operator)
 
```js
let firstName = "Bezzi"; //strings
let age = 22; //number
let student = true; //booleans

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
```

<h3 align="center">Arithmetic expressions</h3>

 
arithmetic expression is a combination of...

- operands (values, variables, etc.)
- operators (+ - * / %)
- that can be evaluated to a value
- ex. y = x + 5;

```js

let students = 20;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
let extraStudents = students % 2;
students = students ** 2;


students += 1;
students -= 1;
students *= 2;
students /= 2;
```

operator precedence
    
- parenthesis ()
- exponents
- multiplication & division
- addition & subtraction

```js
let result = (1 + 2) * (3 + 4);
```

<h3 align="center">Type conversion</h3>

 type conversion: change the datatype of a value to another
                                 (strings, numbers, booleans)

```js
let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
age += 1;

console.log("Happy Birthday! You are", age, "years old");


let x;
let y;
let z;

x = Number("pizza");
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x); //NaN
console.log(y, typeof y); //String
console.log(z, typeof z); //False

```
<h3 align="center">var vs let</h3>

 variable scope = where a variable is accessible

- let = variables are limited to block scope {}
- var = variables are limited to a function(){}

```js
for(let i = 1; i <= 3; i+=1){
    //console.log(i);
}
for(var i = 1; i <= 3; i+=1){
    //console.log(i);
}
console.log(i);
```

<h3 align="center">Const</h3>

const = a variable that can't be changed

```js
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

//PI = 420.69;

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);
```

<h3 align="center">Math methods</h3>

Math =  an intrinsic object that provides basic mathematics functionality and constants

```js
let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x, 2);
x = Math.sqrt(x);
x = Math.abs(x);
maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);
x = Math.PI;
```

<h3 align="center">String properties & methods</h3>
useful string properties & methods

```js
let userName = "Bezzi";
let phoneNumber = "123-456-7890";

console.log(userName.length); // 5
console.log(userName.charAt(0)); // B
console.log(userName.indexOf("z")); // 2
console.log(userName.lastIndexOf("z")); // 3
userName = userName.trim(); //Bezzi
userName = userName.toUpperCase(); //BEZZI
userName = userName.toLowerCase(); //bezzi

phoneNumber = phoneNumber.replaceAll("-", ""); //123456789
```

<h3 align="center">String slicing</h3>

  slice() extracts a section of a string 
             and returns it as a new string, 
             without modifying the original string

```js
let fullName = "Snoop Dogg";
let firstName;
let lastName;

//firstName = fullName.slice(0, 3);
//lastName = fullName.slice(4);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName); // Snoop
console.log(lastName); // Dogg
```

<h3 align="center">Method chaining</h3>

 method chaining = calling one method after another
                   in one continuous line of code

```js
let userName = "bezzi";

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter); // B
```

<h3 align="center">if statements</h3>

  if statement = a basic form of decision making
                 if a condition is true, then do something
                 if not, then don't do it!

```js
let age = 21;

if(age >= 65){
    console.log("You are a senior citizen!");
}
else if(age >= 18){
    console.log("You are an adult!");
}
else if(age < 0){
    console.log("YOU HAVEN'T BEEN BORN YET!");
}
else{
    console.log("You are a child!");
}


let online = false;

if(online){
    console.log("You are online!");
}
else{
    console.log("You are offline!");
}
```

<h3 align="center">Swhitches</h3>

 switch = statement that examines a value 
                for a match against many case clauses.
                More efficient that many "else if" statements


```js
let grade = "A";

switch(grade){
 
    case "A":
      console.log("You did great!");
      break;
   
    case "B":
      console.log("You did good!");
      break;
 
    case "C":
      console.log("You did okay!");
      break;
 
    case "D":
      console.log("You passed ... barely");
      break;
 
    case "F":
      console.log("YOU FAILED!");
      break;
 
    default:
      console.log(grade, "is not a letter grade");
}


let grade = 95;

switch(true){

    case grade >= 90:
        console.log("You did great!");
        break;

    case grade >= 80:
        console.log("You did good!");
        break;

    case grade >= 70:
        console.log("You did okay!");
        break;

    case grade >= 60:
        console.log("You passed ... barely");
        break;

    case grade > 60:
        console.log("You FAILED!");
        break;

    default:
        console.log(grade, "is not a letter grade!");
}
```

<h3 align="center">Strict equality operator</h3>

 - = assignment operator
 - == comparison operator
 - === strict equality operator

```js
let x = "3.14";

if(x === 3.14){
    console.log("That is pi");
}
else{
    console.log("That is NOT pi");
}
```

<h3 align="center">&& AND || OR operators</h3>

- Gives us the ability to check more than 1 condition concurrently
- && AND (BOTH conditions must be true)
- || OR (Either condition can be true)

```js
let temp = 15;
let sunny = false;

if(temp > 0 && temp < 30 && sunny){
    console.log('The weather is good!');
}
else{
    console.log('The weather is bad!');
}
```

<h3 align="center">NOT logical operator</h3>

 ! NOT logical operator
 typically used to reverse a condition's boolean value
 - true -> false  
 - false -> true

```js
let temp = 15;
let sunny = false;

if(!(temp > 0)){
    console.log("It's cold outside");
}
else{
    console.log("It's warm outside");
}

if(!sunny){
    console.log("It's cloudy outside");
}
else{
    console.log("It's sunny outside");
}
```

<h3 align="center">While loops</h3>

while loop = repeat some code 
                       while some condition is true
                       potentially infinite

```js
let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name");
}

console.log("Hello", userName);
```

<h3 align="center">Do while loops</h3>

 do while loop = do something,
                             then check the condition,
                             repeat if condition is true

```js
let userName;

do{
    userName = window.prompt("Enter your name");
}while(userName == "")

console.log("Hello", userName);
```

<h3 align="center">For loops</h3>

 for loop = repeat some code a 
            certain amount of times

```js
for(let i = 1; i <= 10; i+=1){
    console.log(i);
}

for(let i = 10; i > 0; i-=1){
    console.log(i);
}
```

<h3 align="center">Break and continue statements</h3>

- break = breaks out of a loop entirely
- continue = skip an iteration of a loop

```js
for(let i = 1; i <= 20; i+=1){
    if(i == 13){
        //break;
        //continue;
    }
  console.log(i);
}
```

<h3 align="center">Functions</h3>

function = Define code once, and use it many times.
                   To perform some code, call the function name.

```js
startProgram();

function startProgram(){
    let userName = "Bezzi";
    let age = 22;
    
    happyBirthday(userName, age);
}

function happyBirthday(userName, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName);
    console.log("Happy birthday to you!");
    console.log("You are", age,"years old!");
}
```

<h3 align="center">Return statement</h3>

 return = returns a value back to the place 
               where you invoked a function

```js
let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("The area is:", area);

function getArea(width, height){
    return width * height;
}
```

<h3 align="center">Ternary operator</h3>

ternary operator = Shortcut for an 'if / else statement'

 Takes 3 operands

 - a condition with ?
 - expression if True :
 - expression if False
```js 
 condition ? exprIfTrue : exprIfFalse
```

<h3 align="center">Format currency</h3>

JavaScript toLocaleString() currency

toLocaleString() = returns a string with a language 
                                sensitive representation of this number

 number.toLocaleString(locale, {options});

 - 'locale' = specify that language (undefined = default set in browser)
 - 'options' = object with formatting options

```js
 let myNum = 1234.567.890;

 myNum = myNum.toLocaleString("en-US");  //US English
 myNum = myNum.toLocaleString("hi-IN");  //Hindi
 myNum = myNum.toLocaleString("de-DE");  //German
 myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});  //US English
 myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});  //Hindi
 myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"} ); //German
 myNum = myNum.toLocaleString("tr-TRY", {style: "currency", currency: "TRY"} );//Turkey
 myNum = myNum.toLocaleString("tm-TM", {style: "currency", currency: "TMT"} ); //Turkmenistan
 myNum = myNum.toLocaleString(undefined, {style: "percent"});                  //Percent
 myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});    //Celsius
```

<h3 align="center">Arrays</h3>

array = think of it as a variable 
             that can store multiple values

```js
let fruits = ["apple", "orange", "banana"];

fruits[2] = "coconut";

fruits.push("lemon");      //add an element
fruits.pop();              //removes last element
fruits.unshift("mango");   //add element to beginning
fruits.shift();            //removes element from beginning

let length = fruits.length;
let index = fruits.indexOf("kiwi");

console.log(fruits);
```

<h3 align="center">Loop through an array</h3>

```js
let prices = [5, 10, 15, 20, 25];


for(let i = 0; i < prices.length; i+=1){
    console.log(prices[i]);
}

for(let i in price){
    console.log(prices[i]);
}

for(let price of prices){
    console.log(price);
}
```

<h3 align="center">2D arrays</h3>

2D array = An array of arrays

```js
let fruits =     ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =      ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[2][2] = "steak";

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}
```

<h3 align="center">Spread operator</h3>

 spread operator ``` ... ``` = allows an iterable such as an 
 array or string to be expanded 
 in places where zero or more 
 arguments are expected
 (unpacks the elements)

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers);
console.log(maximum);


let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
class1.push(...class2);
console.log(...class1);
```

<h3 align="center">Rest parametres</h3>

 rest parameters = represents an indefinite number of parameters (packs arguments into an array)

```js
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}
```

<h3 align="center">Callbacks</h3>

callback = a function passed as an argument
                   to another function.

   Ensures that a function is not going to run before a task is completed.
   
   Helps us develop asynchronous code.
   
   (When one function has to wait for another function)
   
   that helps us avoid errors and potential problems
   
   Ex. Wait for a file to load

```js
sum(2, 3, displayConsole);

function sum(x, y, callBack){
  let result = x + y;
  callBack(result);
}

function displayConsole(output){
  console.log(output);
}

function displayDOM(output){
  document.getElementById("myLabel").innerHTML = output;
}
```

<h3 align="center">forEach</h3>

array.forEach() = executes a provided callback function once for each array element

```js
let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}
```

<h3 align="center">Map</h3>

array.map() = executes a provided callback function
  once for each array element
  AND creates a new array

```js
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

numbers.forEach(print);
squares.forEach(print);
cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}
function print(element){
    console.log(element);
}
```

<h3 align="center">Filter</h3>

array.filter() = creates a new array with all elements 
  that pass the test provided by a function

```js
let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element >= 18;
}
function print(element){
    console.log(element);
}
```

<h3 align="center">Reduce</h3>

array.reduce() = reduces an array to a single value            

```js
let prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce(checkOut);

console.log(`The total is: $${total}`);

function checkOut(total, element){
    return total + element;
}
```

<h3 align="center">Sort</h3>

sort an array of numbers

```js
let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort(x, y){
    return y - x;
}
function ascendingSort(x, y){
    return x - y;
}
```

<h3 align="center">Arrow function</h3>

 arrow function expression ``` => ``` = compact alternative to a traditional function expression

```js
const grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));
```

<h3 align="center">Nested function</h3>

nested functions = Functions inside other functions.
- Outer functions have access to inner functions.
- Inner functions are "hidden" from outside.

```js
let userName = "Bro";
let userInbox = 0;

login();

function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}
```

<h3 align="center">Maps</h3>

 Map = object that holds key-value pairs of any data type

```js
const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50]
]);

store.get("t-shirt");
store.set("hat", 40);
store.delete("hat");
console.log(store.has("underwear"));
console.log(store.size);

store.forEach((value, key) => console.log(`${key} $${value}`));
```

<h3 align="center">Objects-</h3>

 object = A group of properties and methods
- properties = what an object has
- methods = what an object can do
- use ``` . ``` to access properties/methods

```js
const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}
const car2 = {
    model:"Corvette",
    color:"blue",
    year:2024,

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.drive();
car1.brake();

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);
car2.drive();
car2.brake();
```

<h3 align="center">this keyword</h3>

this = reference to a particular object the object depends on the immediate context

```js
const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}
const car2 = {
    model:"Corvette",
    color:"blue",
    year:2024,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    }
}

car1.drive();
car2.drive();
```

<h3 align="center">Classes</h3>

 class = a blueprint for creating objects
 define what properties and methods they have
 use a constructor for unique properties

```js
class Player{

    score = 0;

    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();
```

<h3 align="center">Constructors</h3>

constructor = a special method of a class, accepts arguments and assigns properties

```js 
class Student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);
const student3 = new Student("Sandy", 27, 4.0);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();
```

<h3 align="center">Static</h3>

static = belongs to the class, not the objects
 - properties: useful for caches, fixed-configuration
 - methods:    useful for utility functions

```js
class Car{

    static numberOfCars = 0;

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);
Car.startRace();
```

<h3 align="center">Inheritance</h3>

inheritance = a child class can inherit all the  methods and properties from another class

```js
class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{

    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{

    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{

    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
```

<h3 align="center">super keyword</h3>

super = Refers to the parent class.   Commonly used to invoke constructor of a parent class

```js
class Animal{
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
```

<h3 align="center">getters & setters</h3>

- get = binds an object property to a function 
          when that property is accessed
- set = binds an object property to a function
          when that property is assigned a value

```js
class Car{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas(value){
        if(value > 50){
            value = 50;
        }
        else if(value < 0){
            value = 0;
        }
        this._gas = value;
    }
}

let car = new Car(400);

car.gas = 100;

console.log(car.power);
console.log(car.gas);
```

<h3 align="center">Error handling</h3>

- error = object with a description of 
             something that went wrong

- throw = executes a user-defined error

```js
try{
  let x = window.prompt("Enter a #");
  x = Number(x);

  if(isNaN(x)) throw "That wasn't a number!";
  if(x == "") throw "That was empty!";

  console.log(`${x} is a number`);
}
catch(error){
  console.log(error);
}
finally{
  console.log("This always executes");
}
```

<h3 align="center">setTimeout</h3>

 setTimeout() = invokes a function after a number of milliseconds asynchronous function (doesn't pause execution) 

```js
let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price){
    alert(`Buy this ${item} for $${price}`);
}
function secondMessage(){
    alert(`This is not a scam!`);
}
function thirdMessage(){
    alert(`DO ITT!`);
}
document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying!`);
}
```

<h3 align="center">setInterval</h3>

setInterval() = invokes a function repeatedly after no. of milliseconds asynchronous function (doesn't pause execution) 

```js
let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);
const myTimer = setInterval(countUp, 1000);

function countUp(){
    count+=1;
    console.log(count);
    if(count >= max){
        clearInterval(myTimer);
    }
}
```

<h3 align="center">Date objects</h3>

 The Date object is used to work with dates & times

```js
let date = new Date();
let date = new Date(0);
let date = new Date(2023, 0, 1, 2, 3, 4, 5);
let date = new Date("January 1, 2023 00:00:00");

let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();

date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);


date = date.toLocaleString();
document.getElementById("myLabel").innerHTML = date;

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`
}
function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}
```

<h3 align="center">Date objects</h3>

 - synchronous code = In an ordered sequence. Step-by-step linear instructions (start now, finish now)

- asynchronous code = Out of sequence. Ex. Access a database  Fetch a file Tasks that take time (start now, finish sometime later)

```js
// synchronous
console.log("START");

// asynchronous
setTimeout(() => console.log("This is asynchronous"), 5000);

// synchronous
console.log("END");
```

<h3 align="center">Console.time</h3>

 console.time() = Starts a timer you can use to  track how long an operation takes. Give each timer a unique name.

```js
//start
console.time("Response time");

alert("CLICK THE OK BUTTON!");
//setTimeout(() => console.log("HELLO!"), 3000);

//end
console.timeEnd("Response time");
```

<h3 align="center">Promises</h3>

 promise = object that encapsulates the result of an asynchronous operation
                   let asynchronous methods return values like synchronous methods
                   "I promise to return something in the future"

  the STATE is 'pending' then: 'fulfilled' or 'rejected'
  the RESULT is what can be returned
  2 parts producing & consuming

```js
// ------------- Example 1 -------------
const promise = new Promise((resolve, reject) => {
 
    let fileLoaded = false;
 
    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
});
 
promise.then(value => console.log(value))
              .catch(error => console.log(error));

// ------------- Example 2 -------------
const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting!"));
```

<h3 align="center">Async</h3>

 async = makes a function return a Promise
 
```js
  async function loadFile(){
    let fileLoaded = true;
 
    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File NOT loaded";
    }
  }
 
loadFile().then(value => console.log(value))
          .catch(error => console.log(error));
```

<h3 align="center">Await</h3>

await = makes a function wait for a Promise

```js
async function loadFile(){

  const promise = new Promise((resolve, reject) => {
    let fileLoaded = true;

    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
  })

  try{
    document.getElementById("myH1").innerHTML = await promise;
  }
  catch(error){
    document.getElementById("myH1").innerHTML = error;
  }
}
loadFile();
```

<h3 align="center">ES6 Modules</h3>

```js
// ********************** index.js **********************
//import {PI, getCircumference, getArea} from "./math_util.js";
import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);

// ********************** math_util.js **********************
export const PI = 3.14159;
 
export function getCircumference (radius) {
    return  2 * PI * radius
}
export function getArea (radius) {
    return  PI * radius * radius;
}
```

<h3 align="center">element selectors</h3>

```js
document.getElementById()
document.getElementsByName()
document.getElementsByTagName()
document.getElementsByClassName()
document.querySelector()
document.querySelectorAll()
```

<h3 align="center">DOM traversal</h3>

```js
 .firstElementChild
 .lastElementChild
 .parentElement
 .nextElementSibling
 .previousElementSibling
 .children[]
 Array.from(.children)
```

<h3 align="center">Events</h3>

```js
element.onclick = doSomething;
element.onload = doSomething;
element.onchange = doSomething;
element.onmouseover = doSomething;
element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething(){
    alert("You did something!");
    element.style.backgroundColor = "red";
}
function doSomethingElse(){
    alert("You did something!");
    element.style.backgroundColor = "lightgreen";
}
```

<h3 align="center">addEventListener</h3>

 .addEventListener(event, function, useCapture)
 You can add many event handlers to one element.
 Even the same event that invokes different functions

```js
const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

function changeBlue(){
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "lightblue"
}
```

<h3 align="center">Window</h3>

 window = interface used to talk to the web browser
  the DOM is a property of the window

```js
const myButton = document.querySelector("#myButton");

console.dir(window);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.scrollX);
console.log(window.scrollY);

console.log(window.location.href);
window.location.href = "https://google.com";
console.log(window.location.hostname);
console.log(window.location.pathname);

myButton.addEventListener("click", () => window.open("https://google.com"));
myButton.addEventListener("click", () => window.close());
myButton.addEventListener("click", () => window.print());

window.alert("Hello!");
window.confirm("Press OK to coninue!");


let age = window.prompt("Enter your age");
if(age < 18){
    window.alert("You must be 18+ to visit this site");
    window.close();
}
```

<h3 align="center">Cookie</h3>

cookie = a small text file stored on your computer
 used to remember information about the user
 saved in name=value pairs
 
 ```js
console.log(navigator.cookieEnabled);
document.cookie = "firstName=Spongebob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
document.cookie = "lastName=Squarepants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
let allCookies = document.cookie;
console.dir(allCookies);
```

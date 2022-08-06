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

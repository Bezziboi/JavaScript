//Create a variable “item_1”
//Assign the variable item_1 the number 5
//Output item_1 to the console
let item_1 = 5
console.log(item_1)

//Create variable “item_2”
//Assign the variable item_2 the number 3
//Output item_2 to the console
let item_2 = 3
console.log(item_2)

//Create variable “item_3”
//Assign the item_3 variable the addition of item_1 and item_2
//Output item_3 to the console
let item_3 = item_1 + item_2
console.log(item_3)

//Create variable “item_4”
//Assign the string “Yolochka” to the variable item_4
//Output item_4 to the console
let item_4 = "Yolochka"
console.log(item_4)

//Output the addition of item_3 and item_4 to the console
//Output the multiplication of item_3 and item_4 to the console
console.log(item_3 + item_4)
console.log(item_3 * item_4)

//Create variable “item_5”
//Assign item_5 to item_3
let item_5 = item_3

//Create variable item_6
//Create variable item_6_type
let item_6
let item_6_type

//Assign the variable item_6 to 15
//Assign item_6_type variable the type of item_6 variable
item_6 = 15
item_6_type = typeof(item_6)

//Print the item_6 data type to the console as —— “item_6 == ” item_6, “item_6_type == ” item_6_type ——
console.log("item_6 == " + item_6, "item_6_type == " + item_6_type)

//Create variable item_7 and convert item_6 to String in it
let item_7 = String(item_6)

//Create variable item_7_type
//Assign item_7_type variable the type of item_7 variable
let item_7_type = typeof(item_7)

//Print the item_7 data type to the console as —— “item_7 == ” item_7, “item_7_type == ” item_7_type ——
console.log("item_7 == " + item_7, "item_7_type == " + item_7_type)

//Create a variable "age_1" and assign the value 10 to it
//Create variable “age_2” and assign value 18 to it
//Create variable “age_3” and assign value 60 to it
let age_1 = 10
let age_2 = 18
let age_3 = 60

//Create an if in which you will check the value of the variable age_1
//If age_1 < age_2, print to console “You don’t have access cause your age is” + age_1 + “It’s less then”
//If age_1 >= age_2 and age_1 < age_3, output “Welcome!”
//If age_1 > age_3, output “Keep calm and look Culture channel” to the console
//Otherwise print "Technical work"
if(age_1 < age_2) { 
    console.log("You don't have access cause your age is " + age_1 + " It's less then " + age_2) 
}
else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome !")
}
else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel")
}
else {
    console.log("Technical work")
}
console.log('1*============================================================')
/*
Create a variable "age_1" and assign the value 10 to it
Create variable “age_2” and assign value 18 to it
Create variable “age_3” and assign value 60 to it
Create an if in which you will check the value of the variable age_1
If age_1 < age_2, print to console “You don’t have access cause your age is” + age_1 + “It’s less then”
If age_1 >= age_2 and age_1 < age_3, output “Welcome!”
If age_1 > age_3, output “Keep calm and look Culture channel” to the console
Otherwise print "Technical work"
*/

/*   .1*
Convert the written tasks above into a function that takes age as input
      Example:const checkAge = function(age) {
      Your transformations
      }
Output to the console the result of the function with ages 17, 18, 61
*/

    const checkAge1 = function(age){
if(age < 18) { 
    console.log("You don't have access 'cause your age is " + age + " It's less than " + 18) 
}
else if (age >= 18 && age < 61) {
    console.log("Welcome !")
}
else if (age > 60) {
    console.log("Keep calm and look Culture channel")
}
else {
    console.log("Invalid input")
}
}
checkAge1(17)
checkAge1(18)
checkAge1(61)
checkAge1()

console.log('2*============================================================')
/*   .2*
Convert assignment 1* so that the data type is checked first in the function 
And if it is not a number, an error was thrown
*/

const checkAge2 = function(age){
    if (!age || (typeof (age) != "number")) {
    console.log("Invalid input")
    }
    else if(age < 18) { 
        console.log("You don't have access 'cause your age is " + age + " It's less than " + 18) 
    }
    else if (age >= 18 && age < 61) {
        console.log("Welcome !")
    }
    else if (age > 60) {
        console.log("Keep calm and look Culture channel")
    }
    }
    checkAge2('qwe')
    checkAge2('')
    checkAge2(true)
    checkAge2(false)
    checkAge2('2')
    checkAge2(17)
    checkAge2(18)
    checkAge2(61)       


    console.log('3*============================================================')
    /*    .3*
Convert 2* so the value '2' (the string containing ONLY a NUMBER) 
was skipped when converted to a number
*/

    const checkAge3 = function(age){
    if (isNaN(age) || age ==true || age ==false) {
    console.log("Invalid input")
    }
    else if(age < 18) { 
        console.log("You don't have access 'cause your age is " + age + " It's less than " + 18) 
    }
    else if (age >= 18 && age < 61) {
        console.log("Welcome !")
    }
    else if (age > 60) {
        console.log("Keep calm and look Culture channel")
    }
    }
    checkAge3('qwe')
    checkAge3('')
    checkAge3(true)
    checkAge3(false)
    checkAge3('2')
    checkAge3(17)
    checkAge3(18)
    checkAge3(61)
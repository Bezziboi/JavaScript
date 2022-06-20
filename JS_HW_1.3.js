/*
You need to print numbers from 1 to 100 to the console.
If the number is divisible by 3 without a remainder, then print “number is divisible by 3” to the console.
If the number is divisible by 5 without a remainder, then print “number is divisible by 5” to the console.
If the number is divisible by both 3 and 5 without a remainder, then print to the console “number is divisible by 3 by 5”.
The number 15 is evenly divisible by 3 and 5 -- an example of a message in the console.
*/

for (let a = 1; a <= 100; a++) {
    if (a % 3 == 0 && a % 5 == 0) {
        console.log("Число", a, "- делится без остатка и на 3 и на 5")
    } else if (a % 3 == 0) {
        console.log("Число", a, "- делится без остатка на 3")
    } else if (a % 5 == 0) {
        console.log("Число", a, "- делится без остатка на 5")
    }
}
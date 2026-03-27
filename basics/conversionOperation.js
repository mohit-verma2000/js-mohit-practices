let score = "33"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//*********Operation************

let str1 = "Hello"
let str2 = " Mohit"
let str3 = str1 + str2
console.log(str3);

let num1,num2,num3
num1 = num2 = num3 = 2+2
let gameCounter = 100
gameCounter++;
console.log(gameCounter);


// === "strict check"

// Primitive -> 7 types: String, Number, boolean, Null, Symbol, BigInt

// Reference (Non Primitive)-> array, Object, Functions

//Memories
//1.Stack (primitive)(copy), 2.Heap (Non-Primitive)(original)

let myYoutubename = "AlphaGuruGaming"

let anothername = myYoutubename
anothername = "Guru Gaming"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi:"user@xyz"
}

let userTwo = userOne
userTwo.email = "alpha@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
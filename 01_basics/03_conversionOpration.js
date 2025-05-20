 
//  let score = 33
 // now if write in string

//  let score = "33" 
 // suppose now number is write in number and alphabet too

//  let score = "33abc"

// if null is given
// let score = null 

// let score = undefined

// if in boolean
 // let score = true 

//if string is given and value is not number
 let score = "Anjali"

 //console.log(typeof score)
 //console.log(typeof(score));

 // now we know that our value is in number 
 let valueInNumber = Number(score)
 //console.log(valueInNumber)

// NaN stands for not a number it's also a type that can be checked that what is value.

// if value is not converted so in null it is 0, in undefined it is NaN, in alphabet and number
 // it is NaN  

// Notes
// "33" => 33
// "33abc" => NaN
// boolean => true => 1;, false => 0;

// let isLoggedIn = 1 

// if empty string
// let isLoggedIn = "" 
let isLoggedIn = "Anjali"



let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//  1 => true, 0 => false
// "" => false
// "Anjali" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ###################### Operations #######################

let value = 3
let negvalue = -value
// console.log(negvalue);

// Operation => it means addition, subtraction, divide, multiplication, remainder

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// tricky things

let str1 = "Hello"
let str2 = " Anjali"

let str3 = str1 + str2
// console.log(str3); 

// problem is here

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + " 2");
// console.log("1" + 2 + 2);

// if write in first string then all conversion would be treat in string
// console.log(1 + 2 + "2"); 

// if write in last string then conversion will be done before values

// console.log( (3 + 4 ) * 5 % 3); // this syntax shoulnd't use

// console.log(( 3 + 5 ) * (2*3) / (16)); 

// for this type of code we should use this type of strcture specially parenthesis

// console.log(+true);
// console.log(+"");

// these should't use
let num1, num2, num3                                

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

// presidence oprator agar prefix karte hai to kya hota hai aur postfix karte hai to kya hota hai.
// prefix ke andar values pehle incriment ho jati hai, aur postfix ke andar usage ke baad incriment hoti
// hai.


 









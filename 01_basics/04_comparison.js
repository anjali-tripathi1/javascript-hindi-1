// nmbers ke around comparison

//  console.log( 2 > 1);
//  console.log( 2 >= 1);
//  console.log( 2 < 1);
//  console.log( 2 == 1);
//  console.log( 2 != 1);
 
// same datatype ko compare na karne par problem hoti hai
// console.log( "2" > 1);
// console.log( "02" > 1);

// automatically javascript 2 ko number mein convert kar dega.
// Jab hum is tarah ka conversion karte hai to comparison kai baar predictable result nahi deta hai.
// Jab bhi compare kare values to yeh ensure kare ke dono ka datatype same ho.

// typescipt bhi language hai aur yeh allow hi nahi karta ki aap do diffrent datatypes ko compare karo.

// isi tarah jab boolean compare karte hai to comparable/predictable result nahi ata to iss baat ka 
// dhyan rakhnge.

// some more comparsion which create sometimes problem. 

console.log( null > 0);
console.log( null == 0);
console.log( null >= 0);

// iske andar value convert hoti hai jo null greater equal then hai uske andar conversion ka problem aa
// jata hai. ab aisa nahin hai ki value sahi mein greater ya equal to hai but jo predictable
// result nahi aata. yaha sabse important yeh hai ki yaha jo comparsion oprator hai or equality
// opreator hai javascript mein in dono je kam karne ka tarika thoda sa diffrent hai.
// null ko convert kar diya 0 mein isi tarah se conversion hai kuch NaN  mein convert hote hai kuch 0 mein
// yeh opreation iss tarah se nahi hone cahiye

// The reason is that an equality check == and comparisons > <>= <= work diifrently.
// Comparisons convert null to a number, treating it as 0.
// that'swhy (3) null >= 0 is true and (1) null > 0 is false. 

// issi tarah undefined mein bhi hota hai but iss mein tino mein false value hi deta hai. 

console.log( undefined == 0);
console.log( undefined > 0);
console.log( undefined < 0);

// Javascript ke andar comparison aur equality check do alag-alag cheez hai yeh (==) alag
 //  tarike se kaam karta hai kyoki iska ek special method hai (==) aur (===) inka thoda sa alag syntax hai
 // aur less than equal to inka ek alag syntax hota hai


 // strict check => iska matlab simply triple equal se check karna hota hai. triple equal na sirf value ko check karta hai
 // but strictly values check karta hai yani ki uske datatypes ko bhi check karta hai.

 console.log( "2" == 2); 
 // to double equal isko true kar dega kynki isme conversion ho jayega.

 console.log( "2" === 2);
 // to triple equal se check karenge to conversion nahi hoga ab yeh datatype ko bhi check karega
 // to yeh check karta hai ki yeh string hai aur yeh number hai to conversion karu ya nahi 
 // dono alag hai to conversion nahi karna hai kyuki triple equal hai aur yeh dono same hai hi nahi dono ke datatype alag
 // hai 
 
// summary
// same datatype basic mein koi problem nahi hoti hai problem alag datatype mein hoti hai 
// jaha ek jagah string datatype aur doosri value boolean ya number ho to datatype change hote hi problem hoti
// hai.

// null aur undefined mein jaise hi hum isse conversion karte hai to kabhi to NaN mein convert hota hai to
// kabhi 0 mein uske baad jab comparison karte hai to problem aati hai.

// null aur undefined wale code kabhi bhi confusion mein dal sakte hai but most cases mein hum iss tarah ke 
// comparison ko avoid karte hai to clean code hi likhba chaiye.

 



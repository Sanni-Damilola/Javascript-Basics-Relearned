// let Name = "damilola";
// let second_name = "Sanni";
// let otherValue = Name.toUpperCase();
// let otherValue1 = second_name.toLocaleUpperCase();
// console.log(otherValue);

// // replace
// let time = "2:00 2:00";
// let NewTime = time.replace(time, "4554");
// console.log(NewTime);

/* 
Page | 1
Q. Answer the following questions. Also, explain why do you think that your answer is 
correct.
var mStr = "This is my test string to practice the JavaScript string function concepts. 
This is gonna be fun."
1. Find the length of the first sentence in the string.
2. Find the length of the second sentence in the string.
3. Find the first and last occurrence of the word "This".
4. Find the sub-string with length 12 from the START of the string mStr.
5. Find the sub-string with length 12 from the END of the string mStr.
Codepen URL: https://codepen.io/qaifikhan/pen/ZwKELb
My Twitter Handle: @qaifikhan
Resources
JavaScript – In-built String Functions – Part 1
Practice Problems
All the Best!
EdYoda Digital University https://www.edyoda.com
*/

var mStr =
  "This is my test string to practice the JavaScript string function concepts. This is gonna be fun.";

// 1
let slicefirst = mStr.indexOf("T");
let stophere = mStr.indexOf(".");
// console.log("first:", mStr.slice(slicefirst, stophere));
// 2
var mStr =
  "This is my test string to practice the JavaScript string function concepts. This is gonna be fun.";
let slice2nd = mStr.slice(mStr.indexOf(".") + 2, mStr.length);
// console.log("second sentence:", slice2nd);
// 3

// console.log(mStr.trim());

//  Answe 1
// var start = mStr.indexOf("T");
// var end = mStr.indexOf(".",) +1;

// var NewmStr = mStr.slice(start, end);
// console.log(NewmStr);

// //  Answer 2
// var start1 = mStr.indexOf(".") +2;
// console.log(start1);
// var _2ndSentence = mStr.slice(start1);
// console.log(_2ndSentence);
// var sentence_length = _2ndSentence.length;
// console.log(sentence_length);

// // Answe 3
// var NewmStr = mStr.charAt(0);
// var snd = mStr.charAt(3);
// console.log(NewmStr,snd);

//  Answer 4
var mStr =
  "This is my test string to practice the JavaScript string function concepts. This is gonna be fun.";
var NewmStr = mStr.substring(0, 12);
// console.log(NewmStr);
// console.log(NewmStr.length);

// Answer 5
// var NewmStr = mStr.lastIndexOf(".") -11;
// console.log(NewmStr);
// var index_of = mStr.substring(NewmStr)
// console.log(index_of);
// console.log(index_of.length);

// // correct but it is not the best process
// var NewmStr = mStr.lastIndexOf(".") -11;
// console.log(NewmStr);
// var length_from_the_end = mStr.slice(NewmStr)
// console.log(length_from_the_end);
// console.log(length_from_the_end.length);

// var mStr = "This is my test string to practice the JavaScript string function concepts. This is gonna be fun.";
// console.log(mStr.toLocaleUpperCase());
// console.log(mStr.charAt(9));
// console.log(mStr.charCodeAt(9));
// console.log(mStr.codePointAt(1));
// console.log(mStr.endsWith());
// console.log(mStr.includes("T"));
// console.log(mStr.localeCompare(1, 9));
// console.log(mStr.match(mStr));
// console.log(mStr.matchAll(mStr));
// console.log(mStr.search("h"));

// let pra = "i am a man"
// console.log(pra.charAt(9));
// console.log(pra.endsWith(""));
// console.log(pra.includes("a"));
// console.log(pra.repeat(2));
// console.log(pra.match(/i/g));
// console.log(pra.matchAll(/m/g, RegExp));
// console.log(pra.replace(/i/g, ("I")));
// console.log(pra.search("i"));
// console.log(pra.startsWith("i"));
// console.log(pra.substring(0, 4));
// console.log(pra.normalize());
// console.log(pra.localeCompare("i"));
// console.log(pra.valueOf());

// let pra2 = "    space   "
// console.log(pra2);
// console.log(pra2.trim());
// console.log(pra);

let value = "sanni";
// ?
// value.localeCompare()
// value.normalize()
// value.valueOf()

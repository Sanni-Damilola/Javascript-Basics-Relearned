// array methods

// is array
// let theArray = [9,3,4,5,7,4,2,0,3]

// console.log(Array.isArray(theArray));

// // The Reverse Methods
// let _2ndarray = [ 4, "goal", [1,2,3,] ]
// console.log(_2ndarray[1].split("").reverse().toString().replaceAll(",", ""));

// let numbers = [1, "two", "4", 5, "another", 8, 9]

// console.log(numbers[4].split("").reverse().toString().replaceAll(",", ""))

// // reverse this
// let _3rdarray = [ "colin" ];
// console.log(_3rdarray);

// let tostring = _3rdarray.toString();
// console.log(tostring);

// let _split = tostring.split("");
// console.log(_split);

// let reverse = _split.reverse();
// console.log(reverse);

// let _tosting = reverse.toString()
// console.log(_tosting);

// let _2ndtosting = _tosting.replaceAll(",", "")
// console.log(_2ndtosting);

// // shortway
// console.log("here is the reverse of colin:",_3rdarray.toString().split("").reverse().toString().replaceAll(",", ""));

// // push method
// let pushArray = theArray.push(4, "goal", [1,2,3])
// console.log(pushArray);
// console.log(theArray[11][0]);

// // unshift Method
// console.log(theArray.unshift("ronaldo", 7));

/*
javascript banndings
javascript scope
*/

let theArray = [9, 3, 4, 5, 7, 4, 2, 0, 3];
// console.log(theArray.sort())
// console.log(theArray.sort(function(start, end) {return start-end} ));
// console.log(theArray.sort(function(start, end) {return end-start} ));
// console.log(theArray.sort((a, b) => a - b));

// console.log(theArray.toLocaleString(1));
// console.log(theArray.join(" - ")); // join anything
// console.log(theArray.pop()); // remove last element
// console.log(theArray.concat()); // add arrays
// console.log(theArray.slice(2, )); // slice chracter
// console.log(theArray.length);
// console.log(theArray.fill([4,4]));
// console.log(theArray.find());
// console.log(theArray.reverse());
// console.log()

// 3
// const shopingCart = [ "Milk", "Coffee", "Tea", "Honey" ]
// console.log(shopingCart.unshift("Meat"));
// console.log(shopingCart);

// console.log(shopingCart.push("sugar"));
// console.log(shopingCart);

// console.log(shopingCart.indexOf("Honey"))
// console.log(shopingCart);

// shopingCart[4] = "Green Tea"
// console.log(shopingCart);

// // 6
const companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// let num = [1, 4]
// console.log(num.reduce((a , b) => {return a + b}))

// const array1 = [0];
// // const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
// //   initialValue
// );
// console.log(sumWithInitial);

// // 7
// console.log(companies)

// // 8
// // console.log(companies.length);

// // 9
// const first_middle_last = () => {
//     let first = companies[0]
//     let middle = companies[3]
//     let last = companies.pop()
//     console.log(`this are the first middle and last companies => ${first} ${middle} ${last}`);
// }
// first_middle_last()

// // 10
// console.log(companies.toString());
// console.log(companies.toString().split());

// // 11
// console.log(companies.toString().toUpperCase());

// // 12
// const sentense = () => {
//     let convert = companies
//     console.log(`${convert} are big companies`);
// }

// sentense()

// 13
// let include = companies.includes("Apple") ? console.log("Apple") : console.log("not found");

// // 14
// console.log(companies)

// // 15
// console.log(companies.sort()) // start to end
// console.log(companies.sort(function(start, end) {return start-end} )); // also start to end
// console.log(companies.sort(function(start, end) {return end-start} ));  // back to start
// console.log(companies);

// // 16

// // console.log(companies.toString().indexOf("o", 0).length);

// // 17
// console.log(companies.slice(3));

// // 18
// console.log(companies.slice(0, 3));

// // 19
// console.log(companies.slice(2, 4));

// const obj = {
//   one: 5,
//   two: 15,
//   three: 45,
// };

// const obj1 = {
//   one: 5,
//   two: 15,
//   three: 45,
// };

// // 👇️
// const values = Object.keys(obj);
// console.log(values)

// const sum = values.reduce((a, value) => {
//   return a + value;
// }, 0);

// console.log(sum); // 👉️ 65
const points1 = [3, 3, 4, 5, 6, 6, 3];

console.log(points1);

console.log(points1.slice(1, 4));

// console.log(points1);

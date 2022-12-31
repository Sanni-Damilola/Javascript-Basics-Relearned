// let sayName = function(x){
//     console.log(x);
// }

// sayName("sanni")

// // const power = (base, exponent) => {
// //    return  base ** exponent;
// // }
// // console.log(power(10, 2));

function ran(x) {
  return Math.floor(Math.random() * x);
}
// console.log(ran(10));

// // let Name = function (name) {
// //     console.log(name);
// // }
// // Name("sanni")

// // const NName = (first, second) => {
// //     return first - second
// // }
// // console.log(NName (3, 9));

// 1
const change = (name) => {
  console.log(name.toUpperCase());
};

// change("sss");

// change([ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ])

// 2

// 3
const change_to_reverse = (convert) => {
  //   console.log(
  //     convert.split().toString().split("").reverse().join("").replaceAll(" ", "")
  //   );
  console.log(convert.split("").reverse().join("").replaceAll(" ", ""));
};
// change_to_reverse("colin is a man");

// 1
const sum = (...a) => {
  console.log(a.reduce((a, b) => a + b));
};
// sum(1, 4, 5);

// 2
const extract_last_3 = (string) => {
  console.log(string.slice(-3));
};
// extract_last_3("sabni");

// // 3 unable to solve!
// const nth = (cal) => {
//   let sub = cal + cal
//   console.log(sub);
// }

// nth("da")

// // 4
// const check_even_odd = (number) => {
//   if (number % 2 === 0 ) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// check_even_odd(4)

// // 5
const check_if_equal = (a, b) => {
  let check = a === b ? console.log(true) : console.log(false);
};
// check_if_equal(5, 5);

// // 6
const half = (string) => {
  console.log(string.slice(Math.floor(string.length / 2)));
  console.log(string.length);
  //   old
  let len_gth = string.length / 2;
  let extract_result = string.slice(len_gth);
  console.log(extract_result);
};
// half("sanni");

const arraytouppercase = (x) => {
  let thearray = x;
  thearray
    .join(",")
    .toUpperCase()
    .split(",")
    .forEach((element) => {
    //   console.log(element);
    });
  //   new
  x.map((a) => {
    // console.log(a.toUpperCase());
  });
};
// }
arraytouppercase([
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
]);

const checkifstring = (x, y) => {
  let theArray = x;
  let theString = y;
//   theArray.includes(theString) ? console.log(theString) : console.log("The company is not found");
}
checkifstring([ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"], "Google")

// const filter_oo = (arr, fn) => {
//   let filter_the_array = [];
//   for(let i = 0; i<arr.lengt; i++ ) {
//     if(fn(arr[i]) === true) {
//       filter_the_array.push(arr[i])
//     }
//   }
//   return filter_the_array
// }

// let re1 = new RegExp("oo")
// function check_item_in_array (str) {
//   return re1.test(str);
// }

// const arr =  ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// console.log(filter_oo(arr, check_item_in_array));

// const reversenum = (x) => {
//     rev = Number(String(x).split("").reverse().join(""))
//     console.log(rev);
// }

// reversenum(32)

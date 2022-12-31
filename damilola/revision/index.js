// const hold = (x) => console.log(x);

// const obj = {
//     message: "This can be added to",
//     take(x) {console.log((x))},
//     fun: hold,
//     collect: (x) => {console.log(x)}
// }

// obj.take("sanni")
// obj.fun("damiloa")
// obj.collect("collect")
// console.log(obj.message);



const obj = {
    name(x) {console.log((`name: ${"sanni"}`))},
    color(x) {console.log((`color: ${"black"}`))},
    age(x) {console.log((`age: ${10}`))},
}

obj.age()


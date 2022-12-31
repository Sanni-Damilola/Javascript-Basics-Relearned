/*
banndings---
As JavaScript engine executes the code, 
variables and function names gets added to the Environment Record. 
This phenomenon is known as Binding in JavaScript.
 Binding helps associate the identifiers (variables, function names)
  with the this keyword for an execution context. 
*/


const say_Name = () => {
    let first_name = "sanni"
    let second_name = "damilola"
    console.log(`yor name is ${first_name} ${second_name}`);
}

say_Name()

/* 
Scope in JavaScript defines accessibility of variables,
 objects and functions. There are two types of scope in JavaScript. 
 Variables declared outside of any function become global variables. 
 Global variables can be accessed and modified from any function.
*/

/* 
difference between banndings and scope
The model in parent scope is linked to the model in the directive’s isolated scope.
 & binding is for passing a method into your directive’s scope so that it can be called within your directive.
  When we are setting scope: true in directive, Angular js will create a new scope for that directive.
*/



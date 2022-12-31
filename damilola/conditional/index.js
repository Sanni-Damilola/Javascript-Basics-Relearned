let saved_username = "sanni";
let saved_password = "dennis";


let login_username_input = "sanni";
let log_Inpassword_Input = "dennis";

if (saved_username === login_username_input && saved_password === log_Inpassword_Input) {
    console.log("login successful");
} else if (saved_username !== login_username_input && saved_password !== log_Inpassword_Input ) {
    console.log("your input are incorrect");
} else if (saved_password !== log_Inpassword_Input) {
    console.log("password not correct");
} else if (saved_username !== login_username_input) {
    console.log("username not correct");
} else {
    console.log("login failed");
}





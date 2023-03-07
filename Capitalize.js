// Program to check 
// Capitalize
// You are building a form where users can enter their names. You want to make sure that the first letter of the
// name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
// string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
// returns the modified string. Otherwise, it returns the original string without any changes
let username="steve";
function containsUppercase(str) {
    return /[A-Z]/.test(str[0]);
  }
let b=containsUppercase(username);
b==true?console.log(username):console.log(username[0].toUpperCase()+username.slice(1));


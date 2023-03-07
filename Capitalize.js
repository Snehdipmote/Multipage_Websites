let username="steve";
function containsUppercase(str) {
    return /[A-Z]/.test(str[0]);
  }
let b=containsUppercase(username);
b==true?console.log(username):console.log(username[0].toUpperCase()+username.slice(1));


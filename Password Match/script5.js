// Function to check Whether both passwords
// is same or not.
function checkPassword(form1) {
    password1 = form1.pass.value;
    password2 = form1.confirm.value;
    // If password not entered
    if (password1 == '')
        alert ("Please enter Password");
          
    // If confirm password not entered
    else if (password2 == '')
        alert ("Please enter confirm password");
          
    // If Not same return False.    
    else if (password1 != password2) {
        alert ("\nPassword didn't match. Password validation unsuccessful")
        return false;
    }
    // If same return True.
    else{
        alert("Password Matched. Password validation Successful.")
        return true;
    }
}

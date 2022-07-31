let regexp = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g;

document.getElementById("signupform").addEventListener("input", ()=>{
    let usrname = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("confirmpassword").value;

    if(!regexp.test(usrname) && usrname != "" && regexp.test(password) && password == cpassword){
        document.getElementById("submit").disabled = false;
    }else{
        document.getElementById("submit").disabled = true;
    }
})
document.getElementById("signupform").addEventListener("submit", event => {
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let usrname = document.getElementById("username").value;
    let cpassword = document.getElementById("confirmpassword").value;
    console.log(`First Name: ${firstname}`);
    console.log(`Last Name : ${lastname}`);
    console.log(`User Name : ${usrname}`);
    console.log(`Password  : ${cpassword}`);
})

//validation for firstname and lastname to not take any special characters

document.getElementById("namediv").addEventListener("input", () => {
    document.getElementById("firstname").value = document.getElementById("firstname").value.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");
    document.getElementById("lastname").value = document.getElementById("lastname").value.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");
})

//validation for username

document.querySelector("#username").addEventListener("input", event => {
    let usrvalue = event.target.value;
    if(regexp.test(usrvalue)){
        document.getElementById("warn1").style.color = "#EA8024";
    }
    else{
        document.getElementById("warn1").style.color = "rgb(72, 121, 75)";
    }
})

//password validation to check if the both password fields are getting matched with each other

document.getElementById("passdiv").addEventListener("input", () => {
    let pvalue = document.getElementById("password").value;
    let cpvalue = document.getElementById("confirmpassword").value;
    if(cpvalue != pvalue && cpvalue != ""){
        document.getElementById("confirmpassword").style.border = "2px solid red";
    }else{
        document.getElementById("confirmpassword").style.border = "0px solid transparent";
    }
})

//To warn the user if there are is no special character included in the password field

document.getElementById("password").addEventListener("input", event => {
    let pvalue = event.target.value;
    if(!regexp.test(pvalue) && pvalue != ""){
        document.getElementById("warn").style.color = "red";
    }else{
        document.getElementById("warn").style.color = "transparent";
    }
})


let regexp = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?\/]/g;
let regexpdom01 = /@gmail.com/;
let regexpdom02 = /@yahoo.com/;
let regexpdom03 = /@hotmail.com/;

document.getElementById("signupform").addEventListener("input", ()=>{
    let usrname = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("confirmpassword").value;
    let emailid = document.getElementById("emailid").value;

    if(!regexp.test(usrname) && usrname != "" && regexp.test(password) && password == cpassword && regexpdom01.test(emailid) || regexpdom02.test(emailid) || regexpdom03.test(emailid)){
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
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;

    if(regexp.test(fname) || regexp.test(lname)){
        alert("No special characeters allowed in here");
    }

    document.getElementById("firstname").value = document.getElementById("firstname").value.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");
    document.getElementById("lastname").value = document.getElementById("lastname").value.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");
})

//To convert any uppercase character into lowercase and to validate the email id's

document.getElementById("emailid").addEventListener("input", () =>{
    document.getElementById("emailid").value = document.getElementById("emailid").value.toLowerCase();
    document.querySelector("#emailid").value = document.getElementById("emailid").value.replace(/[\~\!\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\<\>\?\/]/g, "");
    let eid = document.getElementById("emailid").value;

    if(!regexpdom01.test(eid) && !regexpdom02.test(eid) && !regexpdom03.test(eid) && eid != ""){
        document.getElementById("emailid").style.border = "2px solid red";
    }else{
        document.getElementById("emailid").style.border = "0px solid transparent";
    }
})

//validation for username

document.querySelector("#username").addEventListener("input", () => {
    let usrname = document.getElementById("username").value;
    if(regexp.test(usrname)){
        alert("No special characters allowed in here")
    }

    document.getElementById("username").value = document.getElementById("username").value.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");
})

//To warn the user if there are is no special character included in the password field

document.getElementById("password").addEventListener("change", event => {
    let pvalue = event.target.value;
    if(!regexp.test(pvalue) && !pvalue == ""){
        document.getElementById("password").style.border = "2px solid red"
    }else if(regexp.test(pvalue) && !pvalue == ""){
        document.getElementById("password").style.border = "0px solid transparent"
    }else{
        document.getElementById("password").style.border = "0px solid transparent"
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
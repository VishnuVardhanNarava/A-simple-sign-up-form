let regexp = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?\/]/g;
let regexpdom01 = /@gmail.com/;
let regexpdom02 = /@yahoo.com/;
let regexpdom03 = /@hotmail.com/;

document.getElementById("signupform").addEventListener("input", ()=>{
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let emailid = document.getElementById("emailid").value;
    let usrname = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("confirmpassword").value;

    if(regexp.test(fname) || regexp.test(lname)){
        alert("No special characeters allowed in here");
    }
    if(regexp.test(usrname)){
        alert("No special characters allowed in here")
    }

    document.getElementById("firstname").value = fname.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");
    document.getElementById("lastname").value = lname.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");
    document.getElementById("emailid").value = emailid.toLowerCase();
    document.querySelector("#emailid").value = emailid.replace(/[\~\!\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\<\>\?\/]/g, "");
    document.getElementById("username").value = document.getElementById("username").value.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");

    if(!regexp.test(password) && password != ""){
        document.getElementById("password").style.border = "2px solid red"
        document.getElementById("confirmpassword").disabled = true;
    }else if(regexp.test(password) || password == ""){
        document.getElementById("password").style.border = "0px solid transparent"
        document.getElementById("confirmpassword").disabled = false;
    }else{
        document.getElementById("password").style.border = "0px solid transparent"
        document.getElementById("confirmpassword").disabled = false;
    }
    
    if(!regexpdom01.test(emailid) && !regexpdom02.test(emailid) && !regexpdom03.test(emailid) && emailid != ""){
        document.getElementById("emailid").style.border = "2px solid red";
    }else{
        document.getElementById("emailid").style.border = "0px solid transparent";
    }

    if(!regexp.test(usrname) && usrname != "" && regexp.test(password) && password == cpassword && regexpdom01.test(emailid) || regexpdom02.test(emailid) || regexpdom03.test(emailid)){
        document.getElementById("submit").disabled = false;
    }else{
        document.getElementById("submit").disabled = true;
    }

    if(cpassword != password && cpassword != ""){
        document.getElementById("confirmpassword").style.border = "2px solid red";
    }else{
        document.getElementById("confirmpassword").style.border = "0px solid transparent";
    }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("signupform").addEventListener("submit", event => {
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let usrname = document.getElementById("username").value;
    let cpassword = document.getElementById("confirmpassword").value;
    alert(`First Name: ${firstname}
Last Name: ${lastname}
UserName: ${usrname}
Password: ${cpassword}`);
})
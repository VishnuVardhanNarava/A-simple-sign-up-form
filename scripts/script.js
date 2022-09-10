const regexp = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?\/]/;
let regexpdom01 = /@gmail.com/;
let regexpdom02 = /@yahoo.com/;
let regexpdom03 = /@hotmail.com/;
let firstname = document.getElementById("firstname").value;
let lastname = document.getElementById("lastname").value;
let emailid = document.getElementById("emailid").value;
let username = document.getElementById("username").value;
let password = document.getElementById("setpassword").value;
let cpassword = document.getElementById("confirmpassword").value;

function warningmessage(para, message, margin){
    let warn = document.createElement("span");
    warn.id = "warnspan";
    warn.textContent = message;
    warn.style.color = "#C2432E";
    warn.style.textAlign = "left";
    warn.style.marginLeft = margin;
    warn.style.fontSize = "13px";
    let a = document.getElementById(para);
    let parentelement = a.parentNode;
    parentelement.insertBefore(warn, a.nextSibling);
}

function deletewarningmessage(){
    let delwarn = document.getElementById("warnspan");
    delwarn.remove();
}


////////////////////////////////////Full Name////////////////////////////////////////////

document.getElementById("fullname").addEventListener("input", ()=>{
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;

    if(document.getElementById("warnspan")){
        deletewarningmessage();
    }
    if(regexp.test(firstname)){
        warningmessage("firstnamediv", "\u24D8 Special characters are not allowed in here", "-55px");
    }
    if(regexp.test(lastname)){
        warningmessage("lastnamediv", "\u24D8 Special characters are not allowed in here", "-55px")
    }
});


///////////////////////////////////////Email//////////////////////////////////////////////

document.getElementById("emaildiv").addEventListener("input", () =>{
    let emailid = document.getElementById("emailid").value;

    if(document.getElementById("warnspan")){
        deletewarningmessage();
        document.getElementById("emailid").style.border = "0px solid transparent";
    }

    if(!regexpdom01.test(emailid) && !regexpdom02.test(emailid) && !regexpdom03.test(emailid) && emailid != ""){
        document.getElementById("emailid").style.border = "2px solid #C2432E";
        warningmessage("emaildiv", "\u24D8 Enter valid email id", "-185px");
    }
});


///////////////////////////////Username/////////////////////////////////////////

document.getElementById("usernamediv").addEventListener("input", ()=>{
    let username = document.getElementById("username").value;

    if(document.getElementById("warnspan")){
        deletewarningmessage();
        document.getElementById("username").style.border = "2px solid transparent";
    }
    if(regexp.test(username)){
        document.getElementById("username").style.border = "2px solid #C2432E";
        warningmessage("usernamediv", "\u24D8 Special characters are not allowed", "-100px");
    }

})


//////////////////////////////////////////Password//////////////////////////////////////////////

document.getElementById("password").addEventListener("input", ()=>{
    let password = document.getElementById("setpassword").value;
    let cpassword = document.getElementById("confirmpassword").value;

    if(document.getElementById("warnspan")){
        deletewarningmessage();
        document.getElementById("setpassword").style.border = "0px solid transparent";
        document.getElementById("confirmpassword").style.border = "0px solid transparent"
    }

    if(!regexp.test(password) && password != ""){
        document.getElementById("setpassword").style.border = "2px solid #C2432E";
        warningmessage("setpassworddiv", "\u24D8 password should contain atleast one special character", "12px");
    }

    if(cpassword != password && cpassword != ""){
        document.getElementById("confirmpassword").style.border = "2px solid #C2432E";
        warningmessage("confirmpassworddiv", "\u24D8 password didn't match", "-170px");
    }
})


/////////////////////////////////////Submit///////////////////////////////////////////

document.getElementById("signupform").addEventListener("input", ()=>{

    if(!regexp.test(firstname) && firstname != "" && !regexp.test(lastname) && lastname != "" && !regexp.test(username) && username != "" && regexp.test(password) && password != "" && cpassword == password && cpassword != "" && regexpdom01.test(emailid) || regexpdom02.test(emailid) || regexpdom03.test(emailid) && emailid != ""){
        document.getElementById("submit").disabled = false;
    }else{
        document.getElementById("submit").disabled = true;
    }
});

document.getElementById("signupform").addEventListener("submit", event=>{
    event.preventDefault();
    alert("Submitted successfully");
}); 

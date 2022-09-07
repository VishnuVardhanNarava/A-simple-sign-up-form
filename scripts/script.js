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

document.getElementById("emailid").addEventListener("change", () =>{
    let emailid = document.getElementById("emailid").value;

    function createwarn(){
        const warn0 = document.createElement("span");
        warn0.id = "warnspan";
        warn0.textContent = `\u24D8 Enter valid email id`;
        warn0.style.marginLeft = "-185px";
        warn0.style.color = "#C2432E";
        warn0.style.fontSize = "13px"
        let a = document.getElementById("usernamediv");
        let parentelement = a.parentNode;
        parentelement.insertBefore(warn0, a);
    }

    function deletewarn(){
        let delwarn0 = document.getElementById("warnspan");
        delwarn0.remove();
    }

    if(document.getElementById("warnspan")){
        deletewarn();
        document.getElementById("emailid").style.border = "0px solid transparent";
    }

    if(!regexpdom01.test(emailid) && !regexpdom02.test(emailid) && !regexpdom03.test(emailid) && emailid != ""){
        document.getElementById("emailid").style.border = "2px solid #C2432E";
        createwarn();
    }
});

document.getElementById("password").addEventListener("change", ()=>{
    let password = document.getElementById("password").value;

    function createwarn(){
        let warn1 = document.createElement("span");
        warn1.id = "warnspan1";
        warn1.textContent = `\u24D8 password should contain atleast one special character`;
        warn1.style.color = "#C2432E";
        warn1.style.marginLeft = "12px"
        warn1.style.fontSize = "13px"
        let a = document.getElementById("confirmpassworddiv");
        let parentelement = a.parentNode;
        parentelement.insertBefore(warn1, a);
    }

    function deletewarn(){
        let delwarn1 = document.getElementById("warnspan1");
        delwarn1.remove();
    }

    if(document.getElementById("warnspan1")){
        deletewarn();
        document.getElementById("password").style.border = "0px solid transparent";
    }

    if(!regexp.test(password) && password != ""){
        document.getElementById("password").style.border = "2px solid #C2432E";
        document.getElementById("confirmpassword").disabled = true;
        createwarn();
    }
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("signupform").addEventListener("submit", event => {
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let emailid = document.getElementById("emailid").value;
    let usrname = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("confirmpassword").value;
    alert(`First Name: ${firstname}
Last Name: ${lastname}
UserName: ${usrname}
Password: ${cpassword}`);
    document.getElementById("firstname").value = "";
})

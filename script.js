let regexp = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g;

document.getElementById("signupform").addEventListener("submit", event => {
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let usrname = document.getElementById("username").value;
    let password = document.getElementById("confirmpassword").value;
    console.log(`First Name: ${firstname}`);
    console.log(`Last Name : ${lastname}`);
    console.log(`User Name : ${usrname}`);
    console.log(`Password  : ${password}`);
})

document.getElementById("namediv").addEventListener("input", () => {
    let fvalue = document.getElementById("firstname").value;
    let lvalue = document.getElementById("lastname").value;
    
    if(regexp.test(fvalue) || regexp.test(lvalue)){
        let val1 = fvalue.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");
        let val2 = lvalue.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");
        document.getElementById("firstname").value = val1;
        document.getElementById("lastname").value = val2;
    }else{
        return true;
    }
})

document.querySelector("#username").addEventListener("input", event => {
    let usrvalue = event.target.value;
    let usrlength = event.target.value.length;
    if(usrlength < 6 && usrvalue != ""){
        document.getElementById("warn1").style.color = "#EA8024";
    }else{
        document.getElementById("warn1").style.color = "transparent";
    }
})

document.getElementById("passdiv").addEventListener("input", () => {
    let pvalue = document.getElementById("password").value;
    let cpvalue = document.getElementById("confirmpassword").value;
    if(cpvalue != pvalue && cpvalue != ""){
        document.getElementById("confirmpassword").style.border = "2px solid red";
    }else{
        document.getElementById("confirmpassword").style.border = "0px solid transparent";
    }

    if(cpvalue == pvalue && cpvalue != ""){
        document.getElementById("submit").disabled = false;
    }
})

document.getElementById("password").addEventListener("input", () => {
    let pvalue = document.getElementById("password").value;
    if(pvalue.length == 9){
    if(!regexp.test(pvalue)){
        document.getElementById("warn2").style.color = "#EA8024";
    }else{
        document.getElementById("warn2").style.color = "transparent";
    }
}
})


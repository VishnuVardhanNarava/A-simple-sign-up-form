let regexp = /[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g;

document.getElementById("loginform").addEventListener("input", () =>{
    let usrnamelth = document.getElementById("username").value.length;
    let pswordlth = document.getElementById("password").value.length;
    
    if(usrnamelth == 9 && pswordlth == 9){
        document.getElementById("submit").disabled = false;
    }else{
        document.getElementById("submit").disabled = true;
    }
})

document.getElementById("loginform").addEventListener("submit", event =>{
    event.preventDefault();
    let username = event.target.UserName.value;
    let password = event.target.Password.value;
    console.log(username);
    console.log(password);
})

document.getElementById("username").addEventListener("input", () => {
    document.getElementById("username").value = document.getElementById("username").value.replace(/[\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\<\>\?]/g, "");
})
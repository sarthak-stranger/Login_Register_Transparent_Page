let title = document.getElementById("title");
let forgotpass = document.getElementById("forgotpass");
let loginbtn = document.getElementById("loginbtn");
let newaccount = document.getElementById("newaccount");
let register = document.getElementById("register");
let terms = document.getElementById("terms");
let user = document.getElementById("user");
let login = document.getElementById("login"); 
let name = document.getElementById("name"); 
let formbox = document.getElementById("formbox"); 
let cnfpass = document.getElementById("cnfpass"); 
let pass = document.getElementById("pass"); 
let pass2 = document.getElementById("pass2"); 
let Name = document.getElementById("Name"); 
let backtologin = document.getElementById("backtologin"); 
 

/*-------------------Functionality what changes after clicking on register link----------------------------------*/

 
register.addEventListener("click", function(){
    event.preventDefault(); // Prevent the default anchor tag behaviour before this page dissapear after a very short time
    title.innerHTML = "Register";
    forgotpass.classList.add("disable");
    terms.classList.remove("disable"); 
    loginbtn.innerHTML = "Register";
    newaccount.classList.add("disable");
    user.placeholder = "Create User Id"; // to change text of placeholder
    login.classList.remove("disable");
    name.style.maxHeight = "55px";
    name.style.border = "2px solid rgba(255, 248, 239, 0.6)";
    cnfpass.style.maxHeight = "55px";
    cnfpass.style.border = "2px solid rgba(255, 248, 239, 0.6)";
    // Remove Backround Color
    loginbtn.style.backgroundColor = "white";
    formbox.style.top = "6%";
 
});


/*-----------------------Functionality what happens after clicking on Back to Login Button -----------------------------*/


login.addEventListener("click", function(){
    event.preventDefault(); // Prevent the default anchor tag behaviour before this page dissapear after a very short time
    title.innerHTML = "Login";
    forgotpass.classList.remove("disable");
    terms.classList.add("disable"); 
    loginbtn.innerHTML = "Login";
    newaccount.classList.remove("disable");
    user.placeholder = "Enter Your User Id";
    login.classList.add("disable");
    loginbtn.style.backgroundColor = "rgb(255, 159, 42)";
    name.style.maxHeight = "0px";
    name.style.border = "none";
    cnfpass.style.maxHeight = "0px";
    cnfpass.style.border = "none";
    formbox.style.top = "15%";
 
});
 
/*----------------Genrate a message if any input value empty with msg ---------------------------*/


loginbtn.addEventListener("click", function(){
    if(title.innerHTML === "Login"){
        loginbtn.type = "button";
        if(user.value === ''){
            alert("Enter Your User id");
        }
        else if(pass.value === ''){
            alert("Enter Your Password");
        }
        else{
            loginbtn.type = "submit";
        }
    }
    else if(title.innerHTML === "Register"){
        loginbtn.type = "button";
        if(Name.value === ''){
            alert("Enter Your Name");
        }
        else if(user.value === ''){
            alert("Create Your User Id");
        }
        else if(pass.value === ''){
            alert("Create Your Password");
        }
        else if(pass2.value === ''){
            alert("Enter Confirm Password");
        }
        else{
            loginbtn.type = "submit";
        }
         
    }
});

 /*-------------------clear input values after clicking on Back to login button----------------------*/

// Attach the click event listener to the "backtologin" button
document.getElementById('backtologin').onclick = function() {
    // Trigger the form submission when "backtologin" is clicked
    document.getElementById('formbody').reset();
};


/*-------------------Clear input values after clicking on Register Link --------------------------------*/

document.getElementById('register').onclick = function(){
    document.getElementById('formbody').reset();
};
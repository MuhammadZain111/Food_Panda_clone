var heading = document.querySelector(".heading");
var input1 = document.querySelector(".signup-entities input:nth-child(1)");
var input2 = document.querySelector(".signup-entities input:nth-child(2)");
var input3 = document.querySelector(".signup-entities input:nth-child(3)");
var input4 = document.querySelector(".signup-entities input:nth-child(4)");
var submit = document.getElementById("submit");

var p1 = document.querySelector(".condition p:nth-child(1)");
var p2 = document.querySelector(".condition p:nth-child(2)");

var signupbtn = document.querySelector(".signupbtn");
var signinbtn = document.querySelector(".signinbtn");
var myform = document.querySelector(".form");

signinbtn.addEventListener('click' , ()=>{
    heading.innerHTML = "SignIn";
    input2.style.display = "none";
    input4.style.display = "none";
    submit.value = "Log in";
    p1.style.display = "none";
    p2.style.display = "block";
    signinbtn.style.background = "aqua";
    signupbtn.style.background = "transparent";

})

signupbtn.addEventListener('click' , ()=>{
    heading.innerHTML = "SignUp";
    input2.style.display = "inline-block";
    input4.style.display = "inline-block";
    submit.value = "Create Account";
    p1.style.display = "block";
    p2.style.display = "none";
    signinbtn.style.background = "transparent";
    signupbtn.style.background = "aqua";
})

const form = document.querySelector("form");
const container1 = document.getElementById("formContainer");
const container2= document.getElementById("formSuccess") ;
const userEmail = document.getElementById("userEmail");
const inputBox = document.querySelector("input");
let validRegex= /^[a-zA-Z0-9+._]+@[a-zA-Z]+(?:\.[a-zA-Z0-9-]+)*$/;
form.addEventListener("submit", (e) => {
    
    let emailId = inputBox.value;
    let errMsg = document.getElementById("errorMsg");
    if (emailId.match(validRegex))
    {
        e.preventDefault();
        container1.classList.add("hide");
        container2.classList.remove("hide");
        userEmail.innerHTML= emailId;
    }
    else
    {
        e.preventDefault();
        errMsg.innerHTML="Valid email required";
        inputBox.style.backgroundColor = "rgba(255,0,0,0.1)";
        inputBox.classList.add("in");
        inputBox.style.borderColor= 'red';

    }
    
})
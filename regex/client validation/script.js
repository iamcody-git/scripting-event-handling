let signUp = document.forms.signUp;
let nameInput = signUp.name;
let emailInput = signUp.email;
let password = signUp.password;
let confirmPassword = signUp.confirmPassword;
let submit =document.getElementById('submit1')
hasError = false;


submit.addEventListener("click", function(e){
    e.preventDefault();
    if (nameInput.value.trim()==""){
        let nameGroup= document.getElementById("name-group");
        let nameMessage = document.querySelector("#name-group .message");
       
        nameGroup.classList.add("error");
        nameMessage.textContent ="name is required";
        hasError = true;
    }

    if(emailInput.value.trim()==""){
        let emailGroup = document.getElementById("email-group");
        let emailMessage = document.querySelector("#email-group .message");

        emailGroup.classList.add("error");
        emailMessage.textContent ="email is required";
        hasError = true;
    }
    let isEmail = /^\w+@\w+.\w{3}$/.test(emailInput.value);
    if (!isEmail){
        let emailGroup = document.getElementById("email-group");
        let emailMessage = document.querySelector("#email-group .message");

        emailGroup.classList.add("error");
        emailMessage.textContent ="must be email format";  
        hasError = true;
    }

       let isValid = /^[a-zA-Z0-9!@#$%^&+]{6,16}$/.test(password.value);
        if(password.value != confirmPassword.value){

        let passwordGroup = document.getElementById("password-group");
        let passwordMessage = document.querySelector("#password-group .message");

        passwordGroup.classList.add("error");
        passwordMessage.textContent ="password must me same";
        
    }
    if(! hasError){
    signUp.submit();
    }

});


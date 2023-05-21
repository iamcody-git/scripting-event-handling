let signUp = document.forms.signUp;
let firstInput = signUp.first;
let lastInput = signUp.last;
let emailInput = signUp.email;
let password = signUp.password;
let address = signUp.address;
let submit =document.getElementById('submit1')
hasError = false;


submit.addEventListener("click", function(e){
    e.preventDefault();

    // to validate first name

    if (firstInput.value.trim()==""){
        let firstGroup= document.getElementById("first-group");
        let firstMessage = document.querySelector("#first-group .message");
        firstGroup.classList.add("error");
        firstMessage.textContent ="* first name is required";
        hasError = true;
    }
     // to validate last name

    if (lastInput.value.trim()==""){
        let lastGroup= document.getElementById("last-group");
        let lastMessage = document.querySelector("#last-group .message");
        lastGroup.classList.add("error");
        lastMessage.textContent =" *last name is required";
        hasError = true;
    }

    //  to validate address

    if (address.value.trim()==""){
        let addressGroup= document.getElementById("address-group");
        let addressMessage = document.querySelector("#address-group .message");
        addressGroup.classList.add("error");
        addressMessage.textContent ="* address is required";
        hasError = true;
    }

      // to validate email

    if(emailInput.value.trim()==""){
        let emailGroup = document.getElementById("email-group");
        let emailMessage = document.querySelector("#email-group .message");
        emailGroup.classList.add("error");
        emailMessage.textContent ="*email is required";
        hasError = true;
    }
    let isEmail = /^\w+@\w+.\w{3}$/.test(emailInput.value);
    if (!isEmail){
        let emailGroup = document.getElementById("email-group");
        let emailMessage = document.querySelector("#email-group .message");
        emailGroup.classList.add("error");
        emailMessage.textContent ="*must be email format";  
        hasError = true;
    }

     // to validate password

       let isValid = /^[a-zA-Z0-9!@#$%^&+]{6,16}$/.test(password.value);
        if(isValid = true){
        let passwordGroup = document.getElementById("password-group");
        let passwordMessage = document.querySelector("#password-group .message");
        passwordGroup.classList.add("error");
        passwordMessage.textContent ="*password must be strong";
        
    }

    // to validate phone number

    let numValid = /^\d{10}$/.test(password.value);
        if(numValid = true){
        let numGroup = document.getElementById("phone-group");
        let numMessage = document.querySelector("#phone-group .message");
        numGroup.classList.add("error");
        numMessage.textContent ="*NUmber must be 10 digit";
        
    }
        
    if(! hasError){
    signUp.submit();
    }

});


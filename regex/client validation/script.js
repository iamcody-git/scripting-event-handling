let signUp = document.forms.signUp;
let nameInput = signUp.name;
let emailInput = signUp.email;
let password = signUp.password;
let confirmPassword = signUp.confirmPassword;
let submit =document.getElementById('submit')


submit.addEventListener("click", function(e){
    e.preventDefault();
    if (nameInput.value ==""){
        let nameGroup= document.getElementById("name-group");
        let nameMessage = document.querySelector("#name-group .message");
       
        nameGroup.classList.add("error");
        nameMessage.textContent ="name is required";
    }
})


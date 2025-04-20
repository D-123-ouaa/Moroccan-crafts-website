let myForm = document.getElementById("formContact");
let nom = document.getElementById("lastname");
let prenom = document.getElementById("name");
let email = document.getElementById("email");
let tele = document.getElementById("telephone");
let message = document.getElementById("message");

let regExNom = /^[a-zA-Z\s-]+$/;
let regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regExTele = /^[0-9]{10}$/;
let regExMessage = /^[a-zA-Z0-9\s.,!?]{1,50}$/;


myForm.addEventListener("submit", function(event){
    
    let hasError = false;

    if (nom.value.trim() === "") {
        nom.style.border = "2px solid red";
        hasError = true;
    } else {
        nom.style.border = "2px solid #ccc";
    }

    if (prenom.value.trim() === "") {
      prenom.style.border = "2px solid red";
      hasError = true;
    } else {
        prenom.style.border = "2px solid #ccc";
    }

    if (email.value.trim() === "") {
      email.style.border = "2px solid red";
      hasError = true;
    } else {
        email.style.border = "2px solid #ccc";
    }

    if (tele.value.trim() === "") {
      tele.style.border = "2px solid red";
      hasError = true;
    } else {
        tele.style.border = "2px solid #ccc";
    }

    if (message.value.trim() === "") {
      message.style.border = "2px solid red";
      hasError = true;
    } else {
        message.style.border = "2px solid #ccc";
    }

    if (!regExNom.test(nom.value)) {
      nom.style.border = "2px solid red";
      hasError = true;
    }
    if (!regExNom.test(prenom.value)) {
      prenom.style.border = "2px solid red";
      hasError = true;
    }
    if (!regExNom.test(prenom.value)) {
      prenom.style.border = "2px solid red";
      hasError = true;
    }
    if (!regExTele.test(tele.value)) {
      tele.style.border = "2px solid red";
      hasError = true;
    } 
    if (!regExMessage.test(message.value)) {
      message.style.border = "2px solid red";
      hasError = true;
    } 

    if(hasError){
      event.preventDefault();
    }

})

//Validation nom
nom.addEventListener("input", function() {
    if (regExNom.test(nom.value)) {
        nom.style.border = "2px solid #860101";
    } else {
        nom.style.border = "2px solid red";
    }
});

//Validation prenom
prenom.addEventListener("input", function() {
    if (regExNom.test(prenom.value)) {
        prenom.style.border = "2px solid #860101";
    } else {
        prenom.style.border = "2px solid red";
    }
});

//Validation email
email.addEventListener("input", function() {
    if (regExEmail.test(email.value)) {
        email.style.border = "2px solid #860101";
    } else {
        email.style.border = "2px solid red";
    }
});

//Validation telephone
tele.addEventListener("input", function() {
    if (regExTele.test(tele.value)) {
        tele.style.border = "2px solid #860101";
    } else {
        tele.style.border = "2px solid red";
    }
});

//Validation message
message.addEventListener("input", function() {
    if (regExMessage.test(message.value)) {
        message.style.border = "2px solid #860101";
    } else {
        message.style.border = "2px solid red";
    }
});

//blur event
nom.addEventListener("blur", function() {
    if (nom.value.trim() === "") {
        nom.style.border = "2px solid red";
    } else {
        nom.style.border = "2px solid #ccc";
    }
});
prenom.addEventListener("blur", function() {
    if (prenom.value.trim() === "") {
        prenom.style.border = "2px solid red";
    } else {
        prenom.style.border = "2px solid #ccc";
    }
});
email.addEventListener("blur", function() {
    if (email.value.trim() === "") {
        email.style.border = "2px solid red";
    } else {
        email.style.border = "2px solid #ccc";
    }
});
tele.addEventListener("blur", function() {
    if (tele.value.trim() === "") {
        tele.style.border = "2px solid red";
    } else {
        tele.style.border = "2px solid #ccc";
    }
});
message.addEventListener("blur", function() {
    if (message.value.trim() === "") {
        message.style.border = "2px solid red";
    } else {
        message.style.border = "2px solid #ccc";
    }
});

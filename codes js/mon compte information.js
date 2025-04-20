let myForm = document.getElementById("FormInfo");
let sexe = document.querySelectorAll("input[name='sexe']");
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let password = document.getElementById("password");


myForm.addEventListener("submit", function(event){

  let hasError = false;

  if (email.value.trim() === "") {
    email.style.border = "2px solid red";
    hasError = true;
  }else{
    email.style.border = "2px solid #ccc";
  }
  if (password.value.trim() === "") {
    password.style.border = "2px solid red";
    hasError = true;
  }else{
    password.style.border = "2px solid #ccc";
  }
  

  let isChecked = false;
  sexe.forEach(radio => {
      if(radio.checked) isChecked = true;
  });

  let existingError = document.querySelector(".error-sexe");
  if(existingError) existingError.remove();

  if(!isChecked) {
      let errorText = document.createElement("p");
      errorText.className = "error-sexe";
      errorText.textContent = "Veuillez choisir un sexe !";
      errorText.style.cssText = "color:red;font-size:13px;margin-top:5px;";
      document.querySelector(".sexes").appendChild(errorText);
      hasError = true;
  }


  if(!regExEmail.test(email.value.trim())){
    email.style.border = "2px solid red";
    hasError = true;
  }
  if(!regExPassword.test(password.value.trim())){
    password.style.border = "2px solid red";
    hasError = true;
  }

  if(hasError){
    event.preventDefault(); 
  };


});

//validation nom et prenom
let regExNom = /^[a-zA-Z\s-,]+$/;
nom.addEventListener("input", function(){
  if(!regExNom.test(nom.value.trim())){
    nom.style.border = "2px solid red";
  }else{
    nom.style.border = "2px solid #860101";
  }
})
prenom.addEventListener("input", function(){
  if(!regExNom.test(prenom.value.trim())){
    prenom.style.border = "2px solid red";
  }else{
    prenom.style.border = "2px solid #860101";
  }
})

//validation email
let regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
email.addEventListener("input", function(){
  if(!regExEmail.test(email.value.trim())){
    email.style.border = "2px solid red";
  }else{
    email.style.border = "2px solid #860101";
  }
})

//validation password
let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
password.addEventListener("input", function(){
  if(!regExPassword.test(password.value.trim())){
    password.style.border = "2px solid red";
  }else{
    password.style.border = "2px solid #860101";
  }
})

//blur event
nom.addEventListener("blur", function(){
  if(!regExNom.test(nom.value.trim())){
    nom.style.border = "2px solid red";
  }else{
    nom.style.border = "2px solid #ccc";
  }
})
prenom.addEventListener("blur", function(){
  if(!regExNom.test(prenom.value.trim())){
    prenom.style.border = "2px solid red";
  }else{
    prenom.style.border = "2px solid #ccc";
  }
})
email.addEventListener("blur", function(){
  if(!regExEmail.test(email.value.trim())){
    email.style.border = "2px solid red";
  }else{
    email.style.border = "2px solid #ccc";
  }
})
password.addEventListener("blur", function(){
  if(!regExPassword.test(password.value.trim())){
    password.style.border = "2px solid red";
  }else{
    password.style.border = "2px solid #ccc";
  }
})

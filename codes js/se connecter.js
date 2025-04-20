let myForm =  document.getElementById("FormConnecter");
let email = document.getElementById("email");
let password = document.getElementById("password");

myForm.addEventListener("submit", function(event){
  
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let hasError = false;

  if(email.value.trim() === ""){
    email.style.border = "1px solid red";
    email.style.borderRadius = "5px";
    hasError = true;    
  }else{
    email.style.border = "none";
    email.style.borderBottom = "2px solid white";
    email.style.borderRadius = "0px";
  }

  if(password.value.trim() === ""){
    password.style.border = "1px solid red";
    password.style.borderRadius = "5px";
    hasError = true;    
  }else{
    password.style.border = "none";
    password.style.borderBottom = "2px solid white";
    password.style.borderRadius = "0px";
  }

  
  if (hasError) {
    event.preventDefault();
  }

});

//Validation de l'email
email.addEventListener("input", function(){
  let regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if(!regExEmail.test(email.value.trim())){
    let existingError = document.querySelector("#forEmail p");
      if (!existingError) {
      let errorPlace = document.createElement("p");
      let errorText = document.createTextNode("Email non valide!");
      errorPlace.appendChild(errorText);
      errorPlace.style.color = "red";
      errorPlace.style.fontSize = "13px";
      errorPlace.style.marginTop = "-25px";
      errorPlace.style.marginLeft = "20px";
      errorPlace.style.fontFamily = "Arial, sans-serif";
      let div = document.getElementById("forEmail");
      div.appendChild(errorPlace);
    }
  }else {
    let existingError = document.querySelector("#forEmail p");
    if (existingError) {
      existingError.remove();
    }
  }
})

//Validation password
password.addEventListener("input", function(){
  let regExPassword = /^[a-zA-Z0-9\w_]{8,}$/;

  if(!regExPassword.test(password.value.trim())){
    let existingError = document.querySelector("#forPassword p");
    if(!existingError){
      let errorPlace = document.createElement("p");
      errorPlace.innerHTML = "Le mot de passe doit comprendre au moins 8 caractères!";
      errorPlace.style.color = "red";
      errorPlace.style.fontSize = "13px";
      errorPlace.style.marginTop = "-25px";
      errorPlace.style.marginLeft = "20px";
      errorPlace.style.marginBottom = "25px";
      errorPlace.style.fontFamily = "Arial, sans-serif";
      let div = document.getElementById("forPassword");
      div.appendChild(errorPlace);
    }
  }else{
    let existingError = document.querySelector("#forPassword p");
    if(existingError){
      existingError.remove();
    }
  }
})




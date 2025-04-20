let myForm = document.getElementById("FormAdresse");
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let adresse = document.getElementById("adresse");
let cp = document.getElementById("CP");
let ville = document.getElementById("ville");
let pays = document.getElementById("pays");
let telephone = document.getElementById("tele");
let email = document.getElementById("email");
let societe = document.getElementById("societe");
let tva = document.getElementById("tva");

myForm.addEventListener("submit", function(event){

  let hasError = false;

  // Les champs obligatoires
  if (nom.value.trim() === "") {
    nom.style.border = "2px solid red";
    hasError = true;
  }else{
    nom.style.border = "2px solid #ccc";
  }
  if (prenom.value.trim() === "") {
    prenom.style.border = "2px solid red";
    hasError = true;
  }else{
    prenom.style.border = "2px solid #ccc";
  }
  if (adresse.value.trim() === "") {
    adresse.style.border = "2px solid red";
    hasError = true;
  }else{
    adresse.style.border = "2px solid #ccc";
  }
  if (cp.value.trim() === "") {
    cp.style.border = "2px solid red";
    hasError = true;
  }else{
    cp.style.border = "2px solid #ccc";
  }
  if (ville.value.trim() === "") {
    ville.style.border = "2px solid red";
    hasError = true;
  }else{
    ville.style.border = "2px solid #ccc";
  }
  if (pays.value.trim() === "") {
    pays.style.border = "2px solid red";
    hasError = true;
  }else{
    pays.style.border = "2px solid #ccc";
  }
  if (telephone.value.trim() === "") {
    telephone.style.border = "2px solid red";
    hasError = true;
  }else{
    telephone.style.border = "2px solid #ccc";
  }
  if (email.value.trim() === "") {
    email.style.border = "2px solid red";
    hasError = true;
  }else{
    email.style.border = "2px solid #ccc";
  }
  if (societe.value.trim() === "") {
    societe.style.border = "2px solid red";
    hasError = true;
  }else{
    societe.style.border = "2px solid #ccc";
  }
  if (tva.value.trim() === "") {
    tva.style.border = "2px solid red";
    hasError = true;
  }else{
    tva.style.border = "2px solid #ccc";
  }

  if (!regExNom.test(nom.value)) {
    nom.style.border = "2px solid red";
    hasError = true;
  }
  if (!regExNom.test(prenom.value)) {
    prenom.style.border = "2px solid red";
    hasError = true;
  }
  if (!regExEmail.test(email.value)) {
    email.style.border = "2px solid red";
    hasError = true;
  }
  if (!regExNom.test(societe.value)) {
    societe.style.border = "2px solid red";
    hasError = true;
  }
  if (!regExAdresse.test(adresse.value)) {
    adresse.style.border = "2px solid red";
    hasError = true;
  }
  if (!regExCP.test(cp.value)) {
    cp.style.border = "2px solid red";
    hasError = true;
  }
  if (!regExVille.test(ville.value)) {
    ville.style.border = "2px solid red";
    hasError = true;
  }
  if (!regExTele.test(telephone.value)) {
    telephone.style.border = "2px solid red";
    hasError = true;
  }
  

  if(hasError) {
    event.preventDefault(); 
  }

})


// validation nom
let regExNom = /^[a-zA-Z\s-]+$/;
nom.addEventListener("input", function() {
  if (!regExNom.test(nom.value)) {
    nom.style.border = "2px solid red";
  } else {
    nom.style.border = "2px solid #860101";
  }
});

//validation prenom
prenom.addEventListener("input", function() {
  if (!regExNom.test(prenom.value)) {
    prenom.style.border = "2px solid red";
  } else {
    prenom.style.border = "2px solid #860101";
  }
});

//validation email
let regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
email.addEventListener("input", function() {
  if (!regExEmail.test(email.value)) {
    email.style.border = "2px solid red";
  } else {
    email.style.border = "2px solid #860101";
  }
});

//validation societe
societe.addEventListener("input", function() {
  if(!regExNom.test(societe.value)) {
    societe.style.border = "2px solid red";
  }
  else {
    societe.style.border = "2px solid #860101";
  }
});

//validation tva
let regExTva = /^([A-Z]{2}\s?[\dA-Z]{2,12}|[A-Z]{1,3}\s?\d{5,11})$/;
tva.addEventListener("input", function() {
  if (!regExTva.test(tva.value)) {
    tva.style.border = "2px solid red";
  } else {
    tva.style.border = "2px solid #860101";
  }
});

//validation adresse
let regExAdresse = /^[a-zA-Z0-9\s.,-]+$/;
adresse.addEventListener("input", function() {
  if (!regExAdresse.test(adresse.value)) {
    adresse.style.border = "2px solid red";
  } else {
    adresse.style.border = "2px solid #860101";
  }
});

//validation code postal
let regExCP = /^[0-9]{3,6}$/;
cp.addEventListener("input", function() {
  if (!regExCP.test(cp.value)) {
    cp.style.border = "2px solid red";
  } else {
    cp.style.border = "2px solid #860101";
  }
});

//validation ville
let regExVille = /^[a-zA-Z\s-]+$/;
ville.addEventListener("input", function() {
  if (!regExVille.test(ville.value)) {
    ville.style.border = "2px solid red";
  } else {
    ville.style.border = "2px solid #860101";
  }
});

//validation telephone
let regExTele = /^[0-9]{10}$/;
telephone.addEventListener("input", function() {
  if (!regExTele.test(telephone.value)) {
    telephone.style.border = "2px solid red";
  } else {
    telephone.style.border = "2px solid #860101";
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
adresse.addEventListener("blur", function() {
  if (adresse.value.trim() === "") {
    adresse.style.border = "2px solid red";
  } else {
    adresse.style.border = "2px solid #ccc";
  }
});
cp.addEventListener("blur", function() {
  if (cp.value.trim() === "") {
    cp.style.border = "2px solid red";
  } else {
    cp.style.border = "2px solid #ccc";
  }
});
ville.addEventListener("blur", function() {
  if (ville.value.trim() === "") {
    ville.style.border = "2px solid red";
  } else {
    ville.style.border = "2px solid #ccc";
  }
});
pays.addEventListener("blur", function() {
  if (pays.value.trim() === "") {
    pays.style.border = "2px solid red";
  } else {
    pays.style.border = "2px solid #ccc";
  }
});
telephone.addEventListener("blur", function() {
  if (telephone.value.trim() === "") {
    telephone.style.border = "2px solid red";
  } else {
    telephone.style.border = "2px solid #ccc";
  }
});
email.addEventListener("blur", function() {
  if (email.value.trim() === "") {
    email.style.border = "2px solid red";
  } else {
    email.style.border = "2px solid #ccc";
  }
});
societe.addEventListener("blur", function() {
  if (societe.value.trim() === "") {
    societe.style.border = "2px solid red";
  } else {
    societe.style.border = "2px solid #ccc";
  }
});
tva.addEventListener("blur", function() {
  if (tva.value.trim() === "") {
    tva.style.border = "2px solid red";
  } else {
    tva.style.border = "2px solid #ccc";
  }
});






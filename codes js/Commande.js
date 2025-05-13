// Première partie (gestion du panier) - inchangée
document.addEventListener('DOMContentLoaded', function () {
    const panier = JSON.parse(localStorage.getItem("panier")) || [];
    const bodyTable = document.getElementById("commande-body");
    const nbArticles = document.getElementById("nb-articles");

    const totalArticles = document.querySelector('#table2 .f');
    const totalPrix = document.querySelector('#table2 .g');
    const totalGlobal = document.querySelector('#table2 .title8 td:last-child');

    let total = 0;
    let quantiteTotale = 0;

    panier.forEach(produit => {
        const quantite = produit.quantite || 1;
        const prix = parseFloat(produit.prix);
        const sousTotal = prix * quantite;

        total += sousTotal;
        quantiteTotale += quantite;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${produit.image}" alt="" class="photo" width="50" height="50"></td>
            <td>${produit.nom}</td>
            <td>${prix} DH</td>
            <td><i class='bx bxs-trash-alt'></i></td>
        `;
        bodyTable.appendChild(tr);
    });

    nbArticles.textContent = `${quantiteTotale} article(s)`;
    totalArticles.textContent = `${quantiteTotale} article(s)`;
    totalPrix.textContent = `${total.toFixed(2)} DH`;
    totalGlobal.textContent = `${total.toFixed(2)} DH`;
});

// Deuxième partie (validation du formulaire) - inchangée
let myForm = document.getElementById("formCommande");
let btnVerif = document.getElementById("btnVerif");
let regExNom = /^[a-zA-Z\s-\d]+$/;
let regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let regExTele = /^[0-9]{10}$/;
let regExAdresse = /^[a-zA-Z0-9\s.,-]+$/;
let regExPostal = /^[0-9]{5}$/;
let regExVille = /^[a-zA-Z\s-]+$/;
let nom = document.getElementById("Nom");
let email = document.getElementById("email");
let adresse = document.getElementById("adresse");
let ville = document.getElementById("ville");
let postal = document.getElementById("postal");
let pays = document.getElementById("pays");
let tel = document.getElementById("tel");
let payment = document.getElementById("payment-method");

function verifierForm(){
    let isValid = true;
    
    if (nom.value.trim() === "" || !regExNom.test(nom.value.trim())) {
        nom.style.border = "2px solid red";
        isValid = false;
    } else {
        nom.style.border = "2px solid #ccc";
    }
    if(email.value.trim() === "" || !regExEmail.test(email.value.trim())) {
        email.style.border = "2px solid red";
        isValid = false;
    }
    else {
        email.style.border = "2px solid #ccc";
    }
    if(adresse.value.trim() === "" || !regExAdresse.test(adresse.value.trim())) {
        adresse.style.border = "2px solid red";
        isValid = false;
    }
    else {
        adresse.style.border = "2px solid #ccc";
    }
    if(ville.value.trim() === ""|| !regExVille.test(ville.value.trim())) {
        ville.style.border = "2px solid red";
        isValid = false;
    }
    else {
        ville.style.border = "2px solid #ccc";
    }
    if(postal.value.trim() === "" || !regExPostal.test(postal.value.trim())) {
        postal.style.border = "2px solid red";
        isValid = false;
    }
    else {
        postal.style.border = "2px solid #ccc";
    }
    if(pays.value.trim() === "" || !regExVille.test(pays.value.trim())) {
        pays.style.border = "2px solid red";
        isValid = false;
    }
    else {
        pays.style.border = "2px solid #ccc";
    }
    if(tel.value.trim() === "" || !regExTele.test(tel.value.trim())) {
        tel.style.border = "2px solid red";
        isValid = false;
    }
    else {
        tel.style.border = "2px solid #ccc";
    }
    return isValid;
}

btnVerif.addEventListener("click", function(){
    if(verifierForm()){
        alert("Formulaire valide, veuillez confirmer votre commande!");
    } else {
        alert("Veuillez remplir le formulaire correctement.");
    }
})

myForm.addEventListener("submit", function(event){
    if(payment.value.trim() === "" || !regExVille.test(payment.value.trim())) {
        payment.style.border = "2px solid red";
        event.preventDefault();
    }
    else {
        payment.style.border = "2px solid #ccc";
    }

    if(!verifierForm()){
        event.preventDefault();
    }
})

nom.addEventListener("input", function(){
    if(regExNom.test(nom.value.trim())){
        nom.style.border = "2px solid #860101";
    } else {
        nom.style.border = "2px solid red";
    }
})
email.addEventListener("input", function(){
    if(regExEmail.test(email.value.trim())){
        email.style.border = "2px solid #860101";
    } else {
        email.style.border = "2px solid red";
    }
})
adresse.addEventListener("input", function(){
    if(regExAdresse.test(adresse.value.trim())){
        adresse.style.border = "2px solid #860101";
    } else {
        adresse.style.border = "2px solid red";
    }
})
ville.addEventListener("input", function(){
    if(regExVille.test(ville.value.trim())){
        ville.style.border = "2px solid #860101";
    } else {
        ville.style.border = "2px solid red";
    }
})
postal.addEventListener("input", function(){
    if(regExPostal.test(postal.value.trim())){
        postal.style.border = "2px solid #860101";
    } else {
        postal.style.border = "2px solid red";
    }
})
pays.addEventListener("input", function(){
    if(regExVille.test(pays.value.trim())){
        pays.style.border = "2px solid #860101";
    } else {
        pays.style.border = "2px solid red";
    }
})
tel.addEventListener("input", function(){
    if(regExTele.test(tel.value.trim())){
        tel.style.border = "2px solid #860101";
    } else {
        tel.style.border = "2px solid red";
    }
})
payment.addEventListener("input", function(){
    if(regExVille.test(payment.value.trim())){
        payment.style.border = "2px solid #860101";
    } else {
        payment.style.border = "2px solid red";
    }
})

nom.addEventListener("blur", function(){
    if(nom.value.trim() === ""){
        nom.style.border = "2px solid red";
    } else {
        nom.style.border = "2px solid #ccc";
    }
})
email.addEventListener("blur", function(){
    if(email.value.trim() === ""){
        email.style.border = "2px solid red";
    } else {
        email.style.border = "2px solid #ccc";
    }
})
adresse.addEventListener("blur", function(){
    if(adresse.value.trim() === ""){
        adresse.style.border = "2px solid red";
    } else {
        adresse.style.border = "2px solid #ccc";
    }
})
ville.addEventListener("blur", function(){
    if(ville.value.trim() === ""){
        ville.style.border = "2px solid red";
    } else {
        ville.style.border = "2px solid #ccc";
    }
})
postal.addEventListener("blur", function(){
    if(postal.value.trim() === ""){
        postal.style.border = "2px solid red";
    } else {
        postal.style.border = "2px solid #ccc";
    }
})
pays.addEventListener("blur", function(){
    if(pays.value.trim() === ""){
        pays.style.border = "2px solid red";
    } else {
        pays.style.border = "2px solid #ccc";
    }
})
tel.addEventListener("blur", function(){
    if(tel.value.trim() === ""){
        tel.style.border = "2px solid red";
    } else {
        tel.style.border = "2px solid #ccc";
    }
})
payment.addEventListener("blur", function(){
    if(payment.value.trim() === ""){
        payment.style.border = "2px solid red";
    } else {
        payment.style.border = "2px solid #ccc";
    }
})
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
document.addEventListener('DOMContentLoaded', function() {
  // Animation d'entrée
  animatePageEntrance();

  // Configuration du formulaire
  setupForm();

  // Gestion de la soumission
  const enregistrerButton = document.querySelector('.Enregitrer');
  if (enregistrerButton) {
      enregistrerButton.addEventListener('click', handleSubmit);
  }


  function animatePageEntrance() {
      const form = document.querySelector('.nouvelle form');
      if (!form) return;

      form.style.opacity = '0';
      form.style.transform = 'translateY(30px)';
      form.style.transition = 'all 0.6s ease';

      setTimeout(() => {
          form.style.opacity = '1';
          form.style.transform = 'translateY(0)';
      }, 200);

      const fields = form.querySelectorAll('input, select');
      fields.forEach((field, index) => {
          field.style.opacity = '0';
          field.style.transform = 'translateX(-20px)';
          field.style.transition = all 0.4s ease ${index * 0.1}s;

          setTimeout(() => {
              field.style.opacity = '1';
              field.style.transform = 'translateX(0)';
          }, 300 + (index * 100));
      });
  }

  function setupForm() {
      const enregistrerBtn = document.querySelector('.Enregitrer');
      if (!enregistrerBtn) return;

      enregistrerBtn.addEventListener('mouseenter', () => {
          enregistrerBtn.style.transform = 'scale(1.05)';
          enregistrerBtn.style.transition = 'transform 0.2s ease';
      });

      enregistrerBtn.addEventListener('mouseleave', () => {
          enregistrerBtn.style.transform = 'scale(1)';
      });
  }

  function handleSubmit(e) {
      e.preventDefault();

      const adresseInput = document.querySelector('input[name="adresse"]');
      const villeInput = document.querySelector('input[name="ville"]');
      const codePostalInput = document.querySelector('input[name="code_postal"]');
      const paysSelect = document.querySelector('select[name="pays"]');

      // Champs optionnels mais utiles à récupérer
      const nomInput = document.querySelector('input[name="nom"]');
      const prenomInput = document.querySelector('input[name="prenom"]');
      const societeInput = document.querySelector('input[name="societe"]');
      const tvaInput = document.querySelector('input[name="tva"]');
      const telephoneInput = document.querySelector('input[name="telephone"]');


      // Validation simple pour les champs requis pour l'adresse
      if (!adresseInput.value.trim() || !villeInput.value.trim() || !codePostalInput.value.trim()) {
          showNotification('Veuillez remplir Adresse, Ville et Code postal.', 'error');
          shakeEmptyFields();
          return;
      }

      const fullAddress = ${adresseInput.value.trim()}, ${codePostalInput.value.trim()} ${villeInput.value.trim()}, ${paysSelect.value};
      
      // Créer un objet adresse plus complet
      const newAddressObject = {
          id: Date.now().toString(36) + Math.random().toString(36).substr(2, 9), // ID plus unique
          nom: nomInput ? nomInput.value.trim() : '',
          prenom: prenomInput ? prenomInput.value.trim() : '',
          societe: societeInput ? societeInput.value.trim() : '',
          tva: tvaInput ? tvaInput.value.trim() : '',
          adresse: adresseInput.value.trim(),
          code_postal: codePostalInput.value.trim(),
          ville: villeInput.value.trim(),
          pays: paysSelect.value,
          telephone: telephoneInput ? telephoneInput.value.trim() : '',
          fullAddressString: fullAddress, // Garder la chaîne formatée pour affichage simple
          isDefault: false,
          date: new Date().toISOString()
      };


      const enregistrerBtn = document.querySelector('.Enregitrer');
      enregistrerBtn.value = 'Enregistrement...';
      enregistrerBtn.style.opacity = '0.7';
      enregistrerBtn.disabled = true;

      setTimeout(() => {
          let addresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
          addresses.unshift(newAddressObject); // Ajoute au début de la liste

          localStorage.setItem('userAddresses', JSON.stringify(addresses));

          enregistrerBtn.style.backgroundColor = '#4CAF50';
          enregistrerBtn.value = '✓ Enregistré !';

          showSuccessNotification(() => {
              window.location.href = 'Gestion des adresses.html';
          });
      }, 1000);
  }

  function shakeEmptyFields() {
      // Ciblez spécifiquement les champs requis pour l'adresse
      const requiredAddressFields = [
          document.querySelector('input[name="adresse"]'),
          document.querySelector('input[name="ville"]'),
          document.querySelector('input[name="code_postal"]')
      ];
      
      requiredAddressFields.forEach(field => {
          if (field && !field.value.trim()) { // Vérifie si le champ existe et est vide
              field.style.animation = 'shake 0.5s';
              field.style.borderColor = '#f44336';

              setTimeout(() => {
                  field.style.animation = '';
                  field.style.borderColor = '';
              }, 500);
          }
      });
  }

  function showNotification(message, type) {
      const notification = document.createElement('div');
      notification.textContent = message;

      Object.assign(notification.style, {
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '15px 25px',
          color: 'white',
          borderRadius: '4px',
          zIndex: '10000',
          backgroundColor: type === 'error' ? '#f44336' : '#4CAF50',
          opacity: '0',
          transform: 'translateX(100%)',
          transition: 'all 0.4s ease',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      });

      document.body.appendChild(notification);

      setTimeout(() => {
          notification.style.opacity = '1';
          notification.style.transform = 'translateX(0)';
      }, 100);

      setTimeout(() => {
          notification.style.opacity = '0';
          setTimeout(() => notification.remove(), 400);
      }, 3000);
  }

  function showSuccessNotification(callback) {
      const notification = document.createElement('div');
      notification.innerHTML = `
          <div style="display: flex; align-items: center;">
              <svg style="width:24px;height:24px;margin-right:10px;" viewBox="0 0 24 24">
                  <path fill="white" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
              </svg>
              <span>Adresse enregistrée avec succès!</span>
          </div>
      `;

      Object.assign(notification.style, {
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '15px 25px',
          backgroundColor: '#4CAF50',
          color: 'white',
          borderRadius: '4px',
          zIndex: '10000',
          opacity: '0',
          transform: 'translateY(-30px)',
          transition: 'all 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      });

      document.body.appendChild(notification);

      setTimeout(() => {
          notification.style.opacity = '1';
          notification.style.transform = 'translateY(0)';
      }, 100);

      setTimeout(() => {
          notification.style.opacity = '0';
          setTimeout(() => {
              notification.remove();
              if (callback) callback();
          }, 400);
      }, 2000);
  }
});


let myForm = document.getElementById('myForm');
let nom = document.getElementById('nom');
let message = document.getElementById('message');
let afficherDiv = document.getElementById('afficher');
let rechercheInput = document.getElementById('recherche');

myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let hasError = false;
    let regexNom = /^[A-Za-z0-9]{3,}$/;

    // Validation des champs
    if (nom.value.trim() === "") {
        nom.style.border = "2px solid red";
        hasError = true;
    } else if (!regexNom.test(nom.value.trim())) {
        nom.style.border = "2px solid red";
        hasError = true;
    } else {
        nom.style.border = "2px solid #ccc";
    }

    if (message.value.trim() === "") {
        message.style.border = "2px solid red";
        hasError = true;
    } else {
        message.style.border = "2px solid #ccc";
    }

    if (!hasError) {
        let wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.style.marginBottom = '15px';

        let commentaireDiv = document.createElement('div');
        commentaireDiv.classList.add('C1');

        commentaireDiv.innerHTML = `
            <div style="display: flex; align-items: flex-start; gap: 10px;">
                <img src="photos accueil/profil 2.jpg" alt="Profil" style="width: 50px; height: 50px; border-radius: 50%;">
                <div>
                    <p style="margin: 0 0 -20px 20px;"><strong>Nom: </strong><span class="nomAffiche">${nom.value.trim()}</span></p>
                    <p style="margin: 20px;"><span class="messageAffiche">${message.value.trim()}</span></p>
                </div>
            </div>
            <div style="text-align: right; margin-top: 5px;">
                <span class="modifier" style="color: rgb(71, 16, 16); cursor: pointer; margin-right: 15px;">Modifier</span>
                <span class="supprimer" style="color: rgb(71, 16, 16); cursor: pointer;">Supprimer</span>
            </div>
        `;

        let dateDiv = document.createElement('div');
        dateDiv.textContent = new Date().toLocaleString();
        dateDiv.style.fontSize = '12px';
        dateDiv.style.color = 'gray';
        dateDiv.style.textAlign = 'right';
        dateDiv.style.marginTop = '5px';

        wrapper.appendChild(commentaireDiv);
        wrapper.appendChild(dateDiv);
        afficherDiv.appendChild(wrapper);

        // Gestion de la modification
        commentaireDiv.querySelector(".modifier").addEventListener("click", function() {
            let currentNom = commentaireDiv.querySelector(".nomAffiche").textContent;
            let currentMessage = commentaireDiv.querySelector(".messageAffiche").textContent;
            
            let newNom = prompt("Modifier le nom:", currentNom);
            if (newNom !== null) {
                commentaireDiv.querySelector(".nomAffiche").textContent = newNom.trim();
            }
            
            let newMessage = prompt("Modifier le message:", currentMessage);
            if (newMessage !== null) {
                commentaireDiv.querySelector(".messageAffiche").textContent = newMessage.trim();
            }
            
            // Mise à jour de la date
            dateDiv.textContent = "Modifié: " + new Date().toLocaleString();
        });

        // Gestion de la suppression
        commentaireDiv.querySelector(".supprimer").addEventListener("click", function() {
            if (confirm("Voulez-vous vraiment supprimer ce commentaire ?")) {
                afficherDiv.removeChild(wrapper);
            }
        });

        myForm.reset();
    }
});

// Fonction de recherche
// Sélectionnez l'input de recherche d'article
let rechercheArticleInput = document.querySelector('.A1 .recherche input');

// Fonction de recherche d'article
rechercheArticleInput.addEventListener("input", function() {
    let searchTerm = this.value.toLowerCase();
    let articles = document.querySelectorAll('.A1:not(:first-child)'); // Exclut le premier A1 qui contient les boutons et la recherche

    for (let article of articles) {
        let articleContent = '';
        
        // Récupère le contenu textuel de l'article
        if (article.querySelector('.text')) {
            articleContent = article.querySelector('.text').textContent.toLowerCase();
        }
        
        // Récupère le titre de l'article
        let articleTitle = '';
        if (article.querySelector('.p1')) {
            articleTitle = article.querySelector('.p1').textContent.toLowerCase();
        }
        
        // Vérifie si le terme de recherche correspond à un mot-clé ou est contenu dans le texte
        if (searchTerm === '' || 
            articleContent.includes(searchTerm) || 
            articleTitle.includes(searchTerm) ||
            (searchTerm === 'marrakech' && (articleContent.includes('marrakech') || articleTitle.includes('marrakech'))) ||
            (searchTerm === 'hotel' && (articleContent.includes('hotel') || articleTitle.includes('hotel'))) ||
            (searchTerm === 'amazighs' && (articleContent.includes('amazighs') || articleTitle.includes('amazighs'))) ||
            (searchTerm === 'agadir' && (articleContent.includes('agadir') || articleTitle.includes('agadir')))) {
            article.style.display = 'flex';
        } else {
            article.style.display = 'none';
        }
    }
});
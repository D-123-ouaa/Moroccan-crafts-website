let myForm = document.getElementById('myForm');
let nom = document.getElementById('nom');
let message = document.getElementById('message');
let afficherDiv = document.getElementById('afficher');
let rechercheInput = document.getElementById('recherche');

// Fonction pour sauvegarder les commentaires dans localStorage
function sauvegarderCommentaire(commentaire) {
    let commentaires = JSON.parse(localStorage.getItem("commentaires")) || [];
    commentaires.push(commentaire);
    localStorage.setItem("commentaires", JSON.stringify(commentaires));
}

// Fonction pour afficher un commentaire
function afficherCommentaire(nomValue, messageValue, dateValue) {
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
                <p style="margin: 0 0 -20px 20px;"><strong>Nom: </strong><span class="nomAffiche">${nomValue}</span></p>
                <p style="margin: 20px;"><span class="messageAffiche">${messageValue}</span></p>
            </div>
        </div>
        <div style="text-align: right; margin-top: 5px;">
            <span class="modifier" style="color: rgb(71, 16, 16); cursor: pointer; margin-right: 15px;">Modifier</span>
            <span class="supprimer" style="color: rgb(71, 16, 16); cursor: pointer;">Supprimer</span>
        </div>
    `;

    let dateDiv = document.createElement('div');
    dateDiv.textContent = dateValue;
    dateDiv.style.fontSize = '12px';
    dateDiv.style.color = 'gray';
    dateDiv.style.textAlign = 'right';
    dateDiv.style.marginTop = '5px';

    wrapper.appendChild(commentaireDiv);
    wrapper.appendChild(dateDiv);
    afficherDiv.appendChild(wrapper);

    commentaireDiv.querySelector(".modifier").addEventListener("click", function () {
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

        dateDiv.textContent = "Modifié: " + new Date().toLocaleString();
    });

    commentaireDiv.querySelector(".supprimer").addEventListener("click", function () {
        if (confirm("Voulez-vous vraiment supprimer ce commentaire ?")) {
            afficherDiv.removeChild(wrapper);
        }
    });
}

myForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let hasError = false;
    let regexNom = /^[A-Za-z0-9]{3,}$/;

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
        let nomValue = nom.value.trim();
        let messageValue = message.value.trim();
        let dateValue = new Date().toLocaleString();

        afficherCommentaire(nomValue, messageValue, dateValue);

        sauvegarderCommentaire({ nom: nomValue, message: messageValue, date: dateValue });

        myForm.reset();
    }
});

// Chargement des commentaires au démarrage
window.addEventListener("DOMContentLoaded", () => {
    let commentaires = JSON.parse(localStorage.getItem("commentaires")) || [];
    commentaires.forEach(comment => {
        afficherCommentaire(comment.nom, comment.message, comment.date);
    });
});

// Fonction de recherche
let rechercheArticleInput = document.querySelector('.A1 .recherche input');
rechercheArticleInput.addEventListener("input", function () {
    let searchTerm = this.value.toLowerCase();
    let articles = document.querySelectorAll('.A1:not(:first-child)');

    for (let article of articles) {
        let articleContent = '';
        if (article.querySelector('.text')) {
            articleContent = article.querySelector('.text').textContent.toLowerCase();
        }

        let articleTitle = '';
        if (article.querySelector('.p1')) {
            articleTitle = article.querySelector('.p1').textContent.toLowerCase();
        }

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
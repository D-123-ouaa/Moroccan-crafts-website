window.addEventListener('scroll', function() {
const upperHeader = document.querySelector('.upperheader');
const menuLinks = document.querySelectorAll(".upperheader .container2 ul li a");
const navButton = document.querySelector("#loginbtn");
const registerButton = document.querySelector("#registerbtn");
const navButtonIcon = document.querySelector(".nav-button a i");
const panier = document.getElementById("panierA");
const panierIcon = document.getElementById("panierI");
const langue = document.getElementById("langueA");
const langueIcon = document.getElementById("langueI");

if (window.scrollY > 50) {
    upperHeader.style.backgroundColor = 'rgba(249, 230, 196, 0.85)';
    upperHeader.style.backdropFilter = 'blur(5px)';
    upperHeader.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';

    menuLinks.forEach(link => {
    link.style.color = 'rgb(57, 10, 10)';
    });

    if (navButton) navButton.style.color = 'black';
    if (registerButton) registerButton.style.color = 'black';
    if (navButtonIcon) navButtonIcon.style.color = 'black';
    if (panier) panier.style.color = 'black';
    if (panierIcon) panierIcon.style.color = 'black';
    if (langue) langue.style.color = 'black';
    if (langueIcon) langueIcon.style.color = 'black';

} else {
    upperHeader.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    upperHeader.style.backdropFilter = 'none';
    upperHeader.style.boxShadow = 'none';

    menuLinks.forEach(link => {
    link.style.color = 'burlywood';
    });

    if (navButton) navButton.style.color = 'white';
    if (registerButton) registerButton.style.color = 'white';
    if (navButtonIcon) navButtonIcon.style.color = 'white';
    if (panier) panier.style.color = 'white';
    if (panierIcon) panierIcon.style.color = 'white';
    if (langue) langue.style.color = 'white';
    if (langueIcon) langueIcon.style.color = 'white';
}
});

// Animation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  if (!header) return;
  
  header.style.opacity = '0';
  header.style.transform = 'translateY(-20px)';
  header.style.transition = 'all 0.5s ease';
  
  setTimeout(() => {
      header.style.opacity = '1';
      header.style.transform = 'translateY(0)';
  }, 100);
  
  // Animation des produits au défilement
  const observerOptions = {
      threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, observerOptions);
  
  document.querySelectorAll('.produit-phare > div, .sous-cover > div, .sous-cover2 > div, .sous-cover3 > div, .sous-cover4 > div, .sous-cover5 > div').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.5s ease';
      observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("forAvis");
    const nomProduit = document.getElementById("nomP");
    const commentaire = document.getElementById("Cavis");
    const avisContainer = document.querySelector(".commentaires");
    const boutonVoirPlus = document.querySelector(".voirplus");

    // Récupère les avis depuis localStorage
    let avisStockes = JSON.parse(localStorage.getItem("avisClients")) || [];

    // Valeurs par défaut si aucun avis
    if (avisStockes.length === 0) {
        avisStockes = [
            {
                nom: "Tapis berbère fait main",
                texte: "Je suis absolument ravi de mon tapis berbère !...",
                date: "Le 03 décembre 2024"
            },
            {
                nom: "Vases en poterie marocains",
                texte: "Les vases sont magnifiques et bien fabriqués...",
                date: "Le 20 août 2024"
            },
            {
                nom: "Coussin brodé à la main",
                texte: "Le coussin que j'ai acheté est magnifique !...",
                date: "Le 14 décembre 2024"
            }
        ];
        localStorage.setItem("avisClients", JSON.stringify(avisStockes));
    }

    // Créer un bloc HTML d'avis
    function creerBlocAvis(avisObj, index) {
        const avisDiv = document.createElement("div");
        avisDiv.classList.add("avis");

        avisDiv.innerHTML = `
            <div class="profil d-flex flex-row">
                <div class="photo">
                    <img src="photos accueil/profil inconnu.png" alt="photo" class="photo">
                </div>
                <div class="nom">
                    <p class="h5 mx-2 my-1">Utilisateur</p>
                    <span class="small">Inconnu</span>
                </div>
            </div>
            <div class="produit">
                <p class="mt-3 produit-nom">${avisObj.nom}</p>
            </div>
            <div class="comment">
                <p class="commentaire-texte">${avisObj.texte}</p>
            </div>
            <div class="date">
                <p class="small">${avisObj.date}</p>
            </div>
            <div class="actions mt-2">
                <button class="modifier">Modifier</button>
                <button class="supprimer">Supprimer</button>
            </div>
        `;

        // Supprimer l'avis
        avisDiv.querySelector(".supprimer").addEventListener("click", () => {
            avisStockes.splice(index, 1);
            localStorage.setItem("avisClients", JSON.stringify(avisStockes));
            avisDiv.remove();
        });

        // Modifier l'avis
        avisDiv.querySelector(".modifier").addEventListener("click", () => {
            const nouveauNom = prompt("Modifier le nom du produit :", avisObj.nom);
            const nouveauTexte = prompt("Modifier votre avis :", avisObj.texte);

            if (nouveauNom && nouveauTexte) {
                avisObj.nom = nouveauNom;
                avisObj.texte = nouveauTexte;
                avisStockes[index] = avisObj;
                localStorage.setItem("avisClients", JSON.stringify(avisStockes));

                avisDiv.querySelector(".produit-nom").textContent = nouveauNom;
                avisDiv.querySelector(".commentaire-texte").textContent = nouveauTexte;
            }
        });

        return avisDiv;
    }

    // Affiche tous les avis
    function afficherTousLesAvis() {
        avisStockes.forEach((avis, index) => {
            const avisElement = creerBlocAvis(avis, index);
            avisContainer.insertBefore(avisElement, boutonVoirPlus);
        });

        if (avisStockes.length <= 3) {
            boutonVoirPlus.style.display = "none"; // Masquer le bouton si moins de 4 avis
        }
    }

    afficherTousLesAvis();

    // Bouton "Voir Plus" affiche tous les avis restants (si besoin)
    boutonVoirPlus.addEventListener("click", () => {
        const nbAffiches = document.querySelectorAll(".avis").length;
        const avisRestants = avisStockes.slice(nbAffiches);

        avisRestants.forEach((avis, i) => {
            const avisElement = creerBlocAvis(avis, nbAffiches + i);
            avisContainer.insertBefore(avisElement, boutonVoirPlus);
        });

        boutonVoirPlus.style.display = "none"; // Cacher après affichage
    });

    // Soumission du formulaire
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nom = nomProduit.value.trim();
        const avisTexte = commentaire.value.trim();

        if (nom === "" || avisTexte === "") {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        const date = `Le ${new Date().toLocaleDateString("fr-FR", {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })}`;

        const nouvelAvis = { nom, texte: avisTexte, date };
        avisStockes.unshift(nouvelAvis);
        localStorage.setItem("avisClients", JSON.stringify(avisStockes));

        const avisElement = creerBlocAvis(nouvelAvis, 0);
        const firstAvis = avisContainer.querySelector(".avis");
        avisContainer.insertBefore(avisElement, firstAvis);

        form.reset();
        boutonVoirPlus.style.display = "block"; // Réactiver le bouton au besoin
    });
});
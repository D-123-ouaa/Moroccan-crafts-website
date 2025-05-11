$(document).ready(function() {
    // 1. Récupération des données
    const produits = JSON.parse(localStorage.getItem("produits"));
    const productId = parseInt(new URLSearchParams(window.location.search).get('id'));
    const produit = produits.find(p => p.id === productId);

    // 2. Normalisation des images (transformer les strings en array si nécessaire)
    if (produit && typeof produit.images === 'string') {
        produit.images = [produit.images];
    }

    // 3. Animation d'entrée
    $(".fiche .container").hide().fadeIn(1000).slideDown(600);

    // 4. Affichage du produit
    if (produit) {
        // Partie Images (Carousel)
        let carouselItems = "";
        if (produit.images && produit.images.length > 0) {
            produit.images.forEach((img, index) => {
                // Correction des chemins d'accès
                const correctedImg = img.replace("../", "");
                carouselItems += `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <img src="${correctedImg}" class="d-block w-100" alt="${produit.nom}" id="photo">
                    </div>
                `;
            });
        }

        // Partie Infos produit
        $('#product-details').html(`
            <div class="row d-flex">
                <div class="col-md-6" id="produit1">
                    ${produit.images && produit.images.length > 0 ? `
                    <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner" id="carousel-images">
                            ${carouselItems}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Précédent</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Suivant</span>
                        </button>
                    </div>
                    ` : '<p>Aucune image disponible</p>'}
                </div>
                <div class="col-md-6" id="info1">
                    <p class="titre-produit">${produit.nom}</p>
                    <p class="discription-produit">${produit.description}</p>
                    <h3 class="prix-produit">
                        <span class="text-muted text-decoration-line-through">${produit.prixAncien}</span>
                        <span>${produit.prixNouveau}</span>
                    </h3>
                    <div class="d-flex align-items-center quantitee">
                        <label for="quantity" class="me-3">Quantité</label>
                        <input type="number" id="quantity" class="w-30" value="1" min="1" max="100">
                    </div>
                    <div class="mt-4">
                        // Modifiez le bouton "Ajouter au panier" dans votre template HTML généré :
                        <button class="au-panier">Ajouter au panier</button>
                        <button class="au_wishlist"><a href="#">Ajouter à la wishlist</a></button>
                    </div>
                    <div class="mt-5 avis">
                        <h4>Avis Clients</h4>
                        <div class="reaction">
                            <i class='bx bxs-star' style='color:#f79404'></i>
                            <i class='bx bxs-star' style='color:#f79404'></i>
                            <i class='bx bxs-star' style='color:#f79404'></i>
                            <i class='bx bxs-star' style='color:#f79404'></i>
                            <i class='bx bx-star' style='color:#f79404'></i>
                            <span>(4,7/5) - 85 avis</span>
                        </div>
                        <button class="btn btn-link">Écrire un avis</button>
                    </div>
                </div>
            </div>
        `);

        // 5. Produits similaires
        if (produit.similaires && produit.similaires.length > 0) {
            let similairesHTML = '<h2>Produits similaires</h2><div class="row">';
            
            produit.similaires.forEach(similaire => {
                // Correction des chemins pour les produits similaires
                const correctedImage = similaire.image.replace("photos fiche de produit/", "photos_fiche_de_produit/");
                similairesHTML += `
                    <div class="col-md-3 card">
                        <img src="${correctedImage}" class="card-img-top" alt="${similaire.nom}">
                        <div class="card-body">
                            <h5 class="card-title">${similaire.nom}</h5>
                            <p class="card-prix">${similaire.prix}</p>
                            <button class="btn btn-primary"><a href="Fiche de produit.html?id=${similaire.id}">Voir le produit</a></button>
                        </div>
                    </div>
                `;
            });

            similairesHTML += '</div>';
            $('#S').html(similairesHTML);
        }

        // 6. Interactions
        $("#productCarousel img").hover(
            () => $(this).css("transform", "scale(1.05)"),
            () => $(this).css("transform", "scale(1)")
        );

        $("#S .card").css("opacity", 0);
        $(window).on('scroll', function() {
            $("#S .card").each(function(i) {
                if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 50) {
                    $(this).delay(i * 150).animate({ opacity: 1 }, 200);
                }
            });
        });
    } else {
        $('#product-details').html('<p class="text-danger">Produit introuvable</p>');
    }
});


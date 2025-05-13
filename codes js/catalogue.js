document.addEventListener('DOMContentLoaded', function() {
    // Animation des covers
    const covers = document.querySelectorAll('[class^="cover-"]');
    
    covers.forEach(cover => {
        cover.addEventListener('mouseenter', function() {
            this.style.letterSpacing = '3px';
            this.style.fontWeight = 'bold';
            this.style.transition = 'all 0.3s ease';
        });
        
        cover.addEventListener('mouseleave', function() {
            this.style.letterSpacing = 'normal';
            this.style.fontWeight = 'normal';
        });
    });

    // Système de recherche
    const searchInput = document.getElementById('a-search');
    const coversMap = {
        tapis: document.querySelector('.cover-tapis'),
        coussin: document.querySelector('.cover-coussin'),
        poterie: document.querySelector('.cover-poterie'),
        beaute: document.querySelector('.cover-beaute'),
        accessoire: document.querySelector('.cover-accessoire')
    };
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = this.value.trim().toLowerCase();
            const hasSearch = searchTerm.length > 0;
            
            Object.values(coversMap).forEach(cover => {
                if (cover) {
                    cover.style.opacity = hasSearch ? '0' : '1';
                    setTimeout(() => {
                        cover.style.display = hasSearch ? 'none' : 'block';
                    }, hasSearch ? 300 : 0);
                }
            });
            
            if (hasSearch) filterProducts(searchTerm);
            else resetProductsDisplay();
        }, 300);
    });
    
    function filterProducts(searchTerm) {
        let foundAny = false;
        document.querySelectorAll('.produit').forEach(produit => {
            const nom = produit.querySelector('.nom').textContent.toLowerCase();
            const visible = nom.includes(searchTerm);
            produit.style.display = visible ? 'block' : 'none';
            if (visible) foundAny = true;
        });
        updateNoResultsMessage(searchTerm, foundAny);
    }
    
    function resetProductsDisplay() {
        document.querySelectorAll('.produit').forEach(prod => {
            prod.style.display = 'block';
        });
        document.querySelector('.no-results-message')?.remove();
    }
    
    function updateNoResultsMessage(term, foundAny) {
        const container = document.querySelector('.produits');
        let message = container.querySelector('.no-results-message');
        
        if (!foundAny && term) {
            if (!message) {
                message = document.createElement('div');
                message.style.color = "red";
                message.className = 'no-results-message';
                container.appendChild(message);
            }
            message.textContent = `Aucun produit trouvé pour '${term}'`;
        } else if (message) {
            message.remove();
        }
    }

    // Filtrage par prix avec gestion des covers
    const priceSlider = document.querySelector('.min-prix');
    const minValueDisplay = document.getElementById('min-value');
    const productElements = document.querySelectorAll('.produit');

    if (priceSlider && minValueDisplay && productElements.length > 0) {
        function extractPrice(priceText) {
            return parseFloat(
                priceText.replace('Prix:', '')
                       .replace('Dh', '')
                       .replace(/\s/g, '')
                       .replace(',', '.')
            );
        }

        function filterProductsByPrice() {
            const minPrice = parseInt(priceSlider.value);
            let hasVisibleProducts = false;

            // Cache tous les produits d'abord
            productElements.forEach(product => {
                product.style.display = 'none';
            });

            // Affiche seulement les produits qui correspondent au filtre de prix
            productElements.forEach(product => {
                try {
                    const priceElement = product.querySelector('.prix');
                    if (!priceElement) return;

                    const price = extractPrice(priceElement.textContent);
                    if (isNaN(price)) return;

                    if (price >= minPrice) {
                        product.style.display = 'block';
                        hasVisibleProducts = true;
                    }
                } catch (error) {
                    console.error('Erreur traitement produit', product, error);
                }
            });

            // Gestion de l'affichage des covers
            const categoryVisibility = {
                tapis: false,
                coussin: false,
                poterie: false,
                beaute: false,
                accessoire: false
            };

            // Vérifie quelles catégories ont des produits visibles
            document.querySelectorAll('.produit[style*="display: block"]').forEach(product => {
                const container = product.closest('.Tapies, .Coussins, .Poterie, .Beauté, .Accessoire');
                if (!container) return;

                if (container.classList.contains('Tapies')) categoryVisibility.tapis = true;
                else if (container.classList.contains('Coussins')) categoryVisibility.coussin = true;
                else if (container.classList.contains('Poterie')) categoryVisibility.poterie = true;
                else if (container.classList.contains('Beauté')) categoryVisibility.beaute = true;
                else if (container.classList.contains('Accessoire')) categoryVisibility.accessoire = true;
            });

            // Affiche ou cache les covers en fonction des catégories visibles
            if (coversMap.tapis) coversMap.tapis.style.display = categoryVisibility.tapis ? 'block' : 'none';
            if (coversMap.coussin) coversMap.coussin.style.display = categoryVisibility.coussin ? 'block' : 'none';
            if (coversMap.poterie) coversMap.poterie.style.display = categoryVisibility.poterie ? 'block' : 'none';
            if (coversMap.beaute) coversMap.beaute.style.display = categoryVisibility.beaute ? 'block' : 'none';
            if (coversMap.accessoire) coversMap.accessoire.style.display = categoryVisibility.accessoire ? 'block' : 'none';
        }

        priceSlider.addEventListener('input', function() {
            minValueDisplay.textContent = this.value + ' Dh';
            filterProductsByPrice();
        });

        filterProductsByPrice();
    }

    // Filtrage par catégorie
    const categoryCheckboxes = document.querySelectorAll('input[name="categories"]');
    const allCovers = document.querySelectorAll('[class^="cover-"]');
    const allProducts = document.querySelectorAll('.produit');
    
    const categoryMap = {
        'cat1': 'Tapies',
        'cat2': 'Coussins',
        'cat3': 'Poterie', 
        'cat4': 'Beauté',
        'cat5': 'Accessoires'
    };

    function filterProductsByCategory() {
        const selectedCategories = Array.from(categoryCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.id);

        allCovers.forEach(cover => cover.style.display = 'none');
        allProducts.forEach(product => {
            product.style.display = 'none';
            product.style.fontWeight = 'normal';
        });

        if (selectedCategories.length === 0) {
            allCovers.forEach(cover => cover.style.display = 'block');
            allProducts.forEach(product => product.style.display = 'block');
            return;
        }

        selectedCategories.forEach(catId => {
            const categoryClass = categoryMap[catId];
            if (!categoryClass) return;
            
            const cover = document.querySelector(`.cover-${categoryClass.toLowerCase()}`);
            if (cover) cover.style.display = 'block';
            
            document.querySelectorAll(`.${categoryClass} .produit`).forEach(product => {
                product.style.display = 'block';
                product.style.fontWeight = 'bold';
            });
        });
    }

    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProductsByCategory);
    });

    filterProductsByCategory();

    // Fonction de tri qui conserve les produits dans leurs conteneurs
    document.getElementById('select').addEventListener('change', function(e) {
        const sortBy = e.target.value;
        
        // Liste des conteneurs de catégories
        const categoriesContainers = [
            '.Tapies',
            '.Coussins',
            '.Poterie',
            '.Beauté',
            '.Accessoire'
        ];

        categoriesContainers.forEach(containerSelector => {
            const container = document.querySelector(containerSelector);
            if (!container) return;

            // Sélectionne seulement les produits visibles dans ce conteneur
            const products = Array.from(container.querySelectorAll('.produit[style*="display: block"], .produit:not([style*="display: none"])'));

            if (sortBy === 'Prix Croissant' || sortBy === 'Prix Décroissant') {
                products.sort((a, b) => {
                    const priceA = parseFloat(
                        a.querySelector('.prix').textContent
                            .replace('Prix:', '')
                            .replace('Dh', '')
                            .replace(/\s/g, '')
                            .replace(',', '.')
                    );
                    const priceB = parseFloat(
                        b.querySelector('.prix').textContent
                            .replace('Prix:', '')
                            .replace('Dh', '')
                            .replace(/\s/g, '')
                            .replace(',', '.')
                    );
                    
                    return sortBy === 'Prix Croissant' ? priceA - priceB : priceB - priceA;
                });
                
                // Réorganiser les produits dans leur conteneur d'origine
                products.forEach(product => {
                    container.appendChild(product);
                });
            }
        });
    });

    
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

    document.querySelectorAll('.produit').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });

    document.querySelectorAll('.cover-tapis, .cover-coussin, .cover-poterie, .cover-beaute, .cover-accessoire').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });

    document.querySelectorAll('.catalogue > div').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });
});
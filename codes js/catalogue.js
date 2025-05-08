document.addEventListener('DOMContentLoaded', function() {
  // Sélectionne tous les éléments avec classe commençant par "cover-"
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
});

// Système de recherche
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('a-search');
  const covers = {
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
          
          Object.values(covers).forEach(cover => {
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
});

// Filtrage par prix avec double curseur
document.addEventListener('DOMContentLoaded', function() {
  // 1. Sélection des éléments
  const priceSlider = document.querySelector('.min-prix');
  const minValueDisplay = document.getElementById('min-value');
  const productElements = document.querySelectorAll('.produit');

  // 2. Vérification des éléments
  if (!priceSlider || !minValueDisplay || productElements.length === 0) {
      console.error("Éléments manquants");
      return;
  }

  // 3. Fonction pour extraire le prix numérique
  function extractPrice(priceText) {
      // Convertit "499,99 Dh" en 499.99
      return parseFloat(
          priceText.replace('Prix:', '')
                 .replace('Dh', '')
                 .replace(/\s/g, '')
                 .replace(',', '.')
      );
  }

  // 4. Fonction principale de filtrage
  function filterProducts() {
      const minPrice = parseInt(priceSlider.value);
      let hasVisibleProducts = false;

      productElements.forEach(product => {
          try {
              const priceElement = product.querySelector('.prix');
              if (!priceElement) {
                  console.warn('Élément de prix manquant', product);
                  return;
              }

              const price = extractPrice(priceElement.textContent);
              if (isNaN(price)) {
                  console.warn('Prix invalide', priceElement.textContent);
                  return;
              }

              if (price >= minPrice) {
                  product.style.display = 'block';
                  hasVisibleProducts = true;
              } else {
                  product.style.display = 'none';
              }
          } catch (error) {
              console.error('Erreur traitement produit', product, error);
          }
      });

      if (!hasVisibleProducts) {
          console.log("Aucun produit ne correspond au filtre");
      }
  }

  // 5. Événements
  priceSlider.addEventListener('input', function() {
      minValueDisplay.textContent = this.value + ' Dh';
      filterProducts();
  });

  // 6. Initialisation
  filterProducts();
});
document.addEventListener('DOMContentLoaded', function() {
  const categoryCheckboxes = document.querySelectorAll('input[name="categories"]');
  const allCovers = document.querySelectorAll('[class^="cover-"]');
  const allProducts = document.querySelectorAll('.produit');
  
  // Map des catégories
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

      // 1. Masquer tous les covers et produits d'abord
      allCovers.forEach(cover => cover.style.display = 'none');
      allProducts.forEach(product => {
          product.style.display = 'none';
          product.style.fontWeight = 'normal';
      });

      // 2. Si aucune catégorie sélectionnée, tout afficher normalement
      if (selectedCategories.length === 0) {
          allCovers.forEach(cover => cover.style.display = 'block');
          allProducts.forEach(product => product.style.display = 'block');
          return;
      }

      // 3. Afficher seulement les produits des catégories sélectionnées
      selectedCategories.forEach(catId => {
          const categoryClass = categoryMap[catId];
          if (!categoryClass) return;
          
          // Afficher les produits de cette catégorie en gras
          document.querySelectorAll(`.${categoryClass} .produit`).forEach(product => {
              product.style.display = 'block';
              product.style.fontWeight = 'bold';
          });
      });
  }

  // Écouteurs d'événements
  categoryCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', filterProductsByCategory);
  });

  // Initialisation
  filterProductsByCategory();
});
// Animation du panier
function animateCart() {
  const cartIcon = document.querySelector('.icon-panier a');
  if (!cartIcon) return;
  
  cartIcon.style.transform = 'scale(1.3)';
  cartIcon.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
  
  setTimeout(() => {
      cartIcon.style.transform = 'scale(1)';
  }, 300);
}

// Animation des boutons "Ajouter au panier"
document.querySelectorAll('.produit button').forEach(button => {
  button.addEventListener('click', function(e) {
      e.preventDefault();
      animateCart();
      
      // Mettre à jour le compteur du panier
      const cartCountElement = document.querySelector('.icon-panier a');
      if (cartCountElement) {
          // Extraire le nombre actuel (0 dans votre HTML)
          let currentText = cartCountElement.textContent;
          let currentCount = parseInt(currentText) || 0;
          
          // Mettre à jour le compteur
          cartCountElement.innerHTML = `<i class="bi bi-cart"></i>${currentCount + 1}`;
          
          // Animation du compteur
          cartCountElement.style.display = 'inline-block';
          cartCountElement.style.transform = 'scale(1.5)';
          cartCountElement.style.transition = 'transform 0.3s ease';
          
          setTimeout(() => {
              cartCountElement.style.transform = 'scale(1)';
          }, 300);
      }
      
      // Animation de confirmation sur le produit
      const productCard = this.closest('.produit');
      if (productCard) {
          productCard.style.boxShadow = '0 0 15px rgba(73, 11, 11, 0.8)';
          setTimeout(() => {
              productCard.style.boxShadow = 'none';
          }, 1000);
      }
  });
});

// Fonctionnalité de filtre par prix
const minSlider = document.getElementById('min-slider');
const maxSlider = document.getElementById('max-slider');
const minValue = document.getElementById('min-value');
const maxValue = document.getElementById('max-value');

function updatePriceRange() {
    minValue.textContent = minSlider.value + ' Dh';
    maxValue.textContent = maxSlider.value + ' Dh';
    
    // Ici vous devriez ajouter la logique pour filtrer les produits
    // en fonction de la fourchette de prix
}

minSlider.addEventListener('input', updatePriceRange);
maxSlider.addEventListener('input', updatePriceRange);

// Initialisation
updatePriceRange();

// Fonctionnalité de recherche
document.getElementById('search').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    document.querySelectorAll('.produit').forEach(product => {
        const productName = product.querySelector('.nom').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Fonctionnalité de tri
document.getElementById('select').addEventListener('change', function(e) {
    const sortBy = e.target.value;
    const productsContainer = document.querySelector('.Tapies, .Coussins, .Poterie, .Beauté, .Accessoire');
    const products = Array.from(productsContainer.querySelectorAll('.produit'));
    
    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.prix').textContent.replace('Prix: ', '').replace(' Dh', ''));
        const priceB = parseFloat(b.querySelector('.prix').textContent.replace('Prix: ', '').replace(' Dh', ''));
        
        if (sortBy === 'Prix Croissant') {
            return priceA - priceB;
        } else if (sortBy === 'Prix Décroissant') {
            return priceB - priceA;
        }
        // Ajouter d'autres critères de tri si nécessaire
        return 0;
    });
    
    // Vider et réinsérer les produits triés
    productsContainer.innerHTML = '';
    products.forEach(product => {
        productsContainer.appendChild(product);
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

// Appliquer l'animation aux éléments de produits
document.querySelectorAll('.produit').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.5s ease';
  observer.observe(el);
});

// Appliquer l'animation aux sections de couverture
document.querySelectorAll('.cover-tapis, .cover-coussin, .cover-poterie, .cover-beaute, .cover-accessoire').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.5s ease';
  observer.observe(el);
});

// Appliquer l'animation aux titres des catégories
document.querySelectorAll('.catalogue > div').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.5s ease';
  observer.observe(el);
});
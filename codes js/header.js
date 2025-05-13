//Le menu deroulant
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.nav-menu a');
  const dropdownMenu = document.querySelector('.menu .sous');

  if (menuToggle && dropdownMenu) {
      dropdownMenu.style.transition = 'all 0.3s ease';
      
      menuToggle.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          if (dropdownMenu.style.display === 'block') {
              dropdownMenu.style.opacity = '0';
              dropdownMenu.style.transform = 'translateY(-20px)';
              
              setTimeout(() => {
                  dropdownMenu.style.display = 'none';
              }, 300);
          } else {
              // Animation d'ouverture
              dropdownMenu.style.display = 'block';
              
              setTimeout(() => {
                  dropdownMenu.style.opacity = '1';
                  dropdownMenu.style.transform = 'translateY(0)';
              }, 10);
          }
      });

      document.addEventListener('click', function(e) {
          if (!dropdownMenu.contains(e.target) && !menuToggle.contains(e.target)) {
              dropdownMenu.style.opacity = '0';
              dropdownMenu.style.transform = 'translateY(-20px)';
              
              setTimeout(() => {
                  dropdownMenu.style.display = 'none';
              }, 300);
          }
      });
      dropdownMenu.addEventListener('click', function(e) {
          e.stopPropagation();
      });
  }
});


// Fonction de recherche
function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    
    if (searchTerm.length < 2) {
        resultsContainer.style.display = 'none';
        return;
    }
    
    // Récupérer tous les produits de la page
    const productItems = document.querySelectorAll('.produit-item');
    const results = [];
    
    productItems.forEach(item => {
        const productName = item.querySelector('p').textContent.toLowerCase();
        const productPrice = item.querySelector('.prix').textContent;
        const productLink = item.querySelector('a').href;
        const productImage = item.querySelector('img').src;
        
        if (productName.includes(searchTerm)) {
            results.push({
                name: productName,
                price: productPrice,
                link: productLink,
                image: productImage
            });
        }
    });
    
    displayResults(results);
}


document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const searchIcon = document.querySelector('.nav-search i');
    
    // Stocker les valeurs display originales
    const originalDisplays = new Map();
    
    // Configuration des catégories
    const categories = [
        { 
            name: 'tapis',
            element: document.querySelector('.Produit1'),
            keywords: ['tapis', 'tapie', 'berbère']
        },
        { 
            name: 'poterie',
            element: document.querySelector('.Produit2'),
            keywords: ['poterie', 'céramique', 'vase']
        },
        { 
            name: 'accessoires',
            element: document.querySelector('.Produit3'),
            keywords: ['accessoire', 'sac', 'collier']
        },
        { 
            name: 'beauté',
            element: document.querySelector('.Produit4'),
            keywords: ['beauté', 'argan', 'khôl']
        },
        { 
            name: 'coussin',
            element: document.querySelector('.Produit5'),
            keywords: ['coussin', 'canapé', 'méditation']
        }
    ];

    categories.forEach(cat => {
        if (cat.element) {
            originalDisplays.set(cat.element, window.getComputedStyle(cat.element).display);
        }
    });
    const popularOriginalDisplay = window.getComputedStyle(document.querySelector('.produit-phare')).display;

    function performSearch() {
        const term = searchInput.value.trim().toLowerCase();
        hideNoResultsMessage();

        if (term.length < 2) {
            resetDisplays();
            return;
        }

        categories.forEach(cat => {
            if (cat.element) cat.element.style.display = 'none';
        });
        document.querySelector('.produit-phare').style.display = 'none';

        let found = false;
        categories.forEach(cat => {
            if (cat.element && (cat.name.includes(term) || 
                cat.keywords.some(kw => kw.includes(term)))) {
                cat.element.style.display = originalDisplays.get(cat.element);
                found = true;
            }
        });

        if (!found) {
            showNoResultsMessage();
            resetDisplays();
        }
    }

    function resetDisplays() {
        categories.forEach(cat => {
            if (cat.element) cat.element.style.display = originalDisplays.get(cat.element);
        });
        document.querySelector('.produit-phare').style.display = popularOriginalDisplay;
    }

    function showNoResultsMessage() {
        const msg = document.createElement('div');
        msg.id = 'no-results-message';
        msg.textContent = 'Aucun résultat trouvé';
        document.querySelector('.nouveau').prepend(msg);
    }

    function hideNoResultsMessage() {
        const msg = document.getElementById('no-results-message');
        if (msg) msg.remove();
    }


    searchInput.addEventListener('input', performSearch);
    searchIcon.addEventListener('click', performSearch);
    updateCartCount();
});
class LanguageSwitcher {
    constructor() {
      this.translations = {
        fr: {
          // Menu
          'menu_home': 'Accueil',
          'menu_catalog': 'Catalogue de produits',
          'menu_payment': 'Commande et paiement',
          'menu_blog': 'Blog',
          'menu_contact': 'Contact',
          
          // Produits
          'welcome_message': 'Bienvenue à l\'artisanat du Maroc',
          'popular_products': 'PRODUITS POPULAIRES',
          'new_products': 'Produits Nouveautés et Catégories',
          
          // Footer
          'site_map': 'Plan de site',
          'about_us': 'Qui sommes nous?'
        },
        ar: {
          // Menu
          'menu_home': 'الصفحة الرئيسية',
          'menu_catalog': 'كتالوج المنتجات',
          'menu_payment': 'الطلبات والدفع',
          'menu_blog': 'المدونة',
          'menu_contact': 'اتصل بنا',
          
          // Produits
          'welcome_message': 'مرحبا بكم في الحرف المغربية',
          'popular_products': 'المنتجات الشعبية',
          'new_products': 'منتجات جديدة وأقسام',
          
          // Footer
          'site_map': 'خريطة الموقع',
          'about_us': 'من نحن؟'
        }
      };
  
      this.init();
    }
  
    init() {
      // Détection automatique (navigateur ou sauvegardée)
      const browserLang = navigator.language.startsWith('ar') ? 'ar' : 'fr';
      this.currentLang = localStorage.getItem('preferredLanguage') || browserLang;
      
      this.applyLanguage(this.currentLang);
      this.setupEventListeners();
    }
  
    applyLanguage(lang) {
      // 1. Mettre à jour l'HTML
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      
      // 2. Appliquer les traductions
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (this.translations[lang] && this.translations[lang][key]) {
          el.textContent = this.translations[lang][key];
        }
      });
      
      // 3. Traduire les placeholders
      const searchInput = document.getElementById('search');
      if (searchInput) {
        searchInput.placeholder = lang === 'ar' ? 'ابحث في منتجاتنا' : 'Rechercher dans nos produits';
      }
      
      // 4. Sauvegarder la préférence
      localStorage.setItem('preferredLanguage', lang);
      this.currentLang = lang;
      
      // 5. Mettre à jour l'interface
      this.updateUI();
    }
  
    setupEventListeners() {
      // Écouteurs pour le sélecteur de langue
      document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.applyLanguage(btn.dataset.lang);
        });
      });
    }
  
    updateUI() {
      // Mettre à jour le sélecteur visuel
      const langDisplays = document.querySelectorAll('#langueA, .language-display');
      langDisplays.forEach(el => {
        el.textContent = this.currentLang === 'ar' ? 'العربية' : 'Français';
      });
      
      // Ajouter/supprimer classe RTL
      document.body.classList.toggle('rtl-layout', this.currentLang === 'ar');
    }
  }
  
  // Initialisation au chargement
  document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
    updateCartCount();
  });




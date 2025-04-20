// Animation du header au scroll
window.addEventListener('scroll', function() {
  const upperHeader = document.querySelector('.upperheader');
  const menuLinks = document.querySelectorAll(".upperheader .container2 ul li a");
  const navButton = document.querySelector(".nav-button span a");
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
      if (navButtonIcon) navButtonIcon.style.color = 'white';
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
document.querySelectorAll('.panier').forEach(button => {
  button.addEventListener('click', function(e) {
      e.preventDefault();
      animateCart();
      
      // Mettre à jour le compteur du panier sans supprimer l'icône
      const cartCountElement = document.querySelector('.icon-panier a');
      if (cartCountElement) {
          // Trouver l'élément span qui contient le nombre ou le créer
          let countSpan = cartCountElement.querySelector('.cart-count');
          
          if (!countSpan) {
              // Si le span n'existe pas, le créer et l'insérer après l'icône
              const cartIcon = cartCountElement.querySelector('i');
              countSpan = document.createElement('span');
              countSpan.className = 'cart-count';
              countSpan.textContent = '0';
              cartIcon.insertAdjacentElement('afterend', countSpan);
          }
          
          // Mettre à jour le compteur
          const currentCount = parseInt(countSpan.textContent) || 0;
          countSpan.textContent = currentCount + 1;
          
          // Animation du compteur
          countSpan.style.display = 'inline-block';
          countSpan.style.transform = 'scale(1.5)';
          countSpan.style.transition = 'transform 0.3s ease';
          
          setTimeout(() => {
              countSpan.style.transform = 'scale(1)';
          }, 300);
      }
      
      // Animation de confirmation
      const productCard = this.closest('.lines, .lien');
      if (productCard) {
          productCard.style.boxShadow = '0 0 15px rgba(10, 1, 1, 0.5)';
          setTimeout(() => {
              productCard.style.boxShadow = 'none';
          }, 1000);
      }
  });
});
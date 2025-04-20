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

// Animation de la barre de recherche
const searchIcon = document.querySelector('.nav-search i');
const searchInput = document.getElementById('search');

if (searchIcon && searchInput) {
  searchIcon.addEventListener('click', function() {
      searchInput.focus();
  });
  
  searchInput.addEventListener('focus', function() {
      this.style.width = '250px';
      this.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
  });
  
  searchInput.addEventListener('blur', function() {
      if (!this.value) {
          this.style.width = '70%';
          this.style.backgroundColor = 'rgba(255, 255, 255, 0.664)';
      }
  });
}



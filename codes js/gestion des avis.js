document.addEventListener('DOMContentLoaded', function() {
  // 1. Ajout du CSS dynamiquement
  const style = document.createElement('style');
  style.textContent = `
      .comments-list {
          transition: all 0.4s ease;
      }

      .comment {
          background: #f9f9f9;
          padding: 15px;
          margin-bottom: 15px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
          transform: translateY(10px);
      }

      .comment.show {
          opacity: 1;
          transform: translateY(0);
      }

      .loading-spinner {
          text-align: center;
          padding: 20px;
          color: #666;
      }

      .loading-spinner i {
          animation: spin 1s linear infinite;
          margin-right: 10px;
      }

      @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
      }

      .no-comments, .error {
          text-align: center;
          padding: 20px;
          color: #666;
      }

      #showCommentsBtn {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
      }

      #showCommentsBtn:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 5px;
          height: 5px;
          background: rgba(255,255,255,.5);
          opacity: 0;
          border-radius: 100%;
          transform: scale(1, 1) translate(-50%);
          transform-origin: 50% 50%;
      }

      #showCommentsBtn:focus:not(:active)::after {
          animation: ripple 1s ease-out;
      }

      @keyframes ripple {
          0% {
              transform: scale(0, 0);
              opacity: 1;
          }
          20% {
              transform: scale(25, 25);
              opacity: 1;
          }
          100% {
              opacity: 0;
              transform: scale(40, 40);
          }
      }
  `;
  document.head.appendChild(style);

  // 2. Sélection des éléments avec vérification
  const elements = {
      showBtn: document.getElementById('showCommentsBtn'),
      container: document.getElementById('commentsContainer'),
      list: document.getElementById('commentsList')
  };

  if (!elements.showBtn || !elements.container || !elements.list) {
      console.error("Éléments manquants dans le DOM");
      return;
  }

  // 3. Configuration
  const config = {
      storageKey: 'blog_commentaires',
      defaultKey: 'commentaires',
      animationSpeed: 400
  };

  // 4. Fonction pour mettre à jour le bouton avec icône œil
  function updateButton(isVisible) {
      // Icônes Font Awesome pour œil ouvert/fermé
      const eyeIcon = isVisible ? '🔒' : '🔓'; // Emojis comme solution de repli
      const iconClass = isVisible ? 'fa-eye-slash' : 'fa-eye';
      
      elements.showBtn.innerHTML = `
          <span class="eye-icon">
              <i class="fas ${iconClass}"></i> <!-- Version Font Awesome -->
              ${eyeIcon} <!-- Version emoji si Font Awesome échoue -->
          </span>
          <span class="btn-text">${isVisible ? 'Masquer les avis' : 'Afficher les avis'}</span>
      `;
      elements.showBtn.classList.toggle('active', isVisible);
  }

  // 5. Gestion du clic avec animations jQuery
  elements.showBtn.addEventListener('click', function() {
      const willShow = !$(elements.container).is(':visible');
      
      if (willShow) {
          // Animation pour afficher le conteneur
          $(elements.container).slideDown(config.animationSpeed, function() {
              updateButton(true);
              loadComments();
          });
      } else {
          // Animation pour masquer le conteneur
          $(elements.container).slideUp(config.animationSpeed, function() {
              updateButton(false);
          });
      }
  });

  // 6. Fonction de chargement des commentaires avec animation
  function loadComments() {
      try {
          // Ajout d'un indicateur de chargement
          $(elements.list).html('<div class="loading-spinner"><i class="bi bi-arrow-repeat"></i> Chargement...</div>');
          
          // Simulation d'un délai pour l'animation (peut être supprimé en production)
          setTimeout(function() {
              const rawData = localStorage.getItem(config.storageKey) || 
                             localStorage.getItem(config.defaultKey) || '[]';
              const comments = JSON.parse(rawData);
              
              if (comments.length) {
                  let html = '';
                  // Animation d'apparition séquentielle des commentaires
                  $.each(comments, function(index, comment) {
                      html += `
                          <div class="comment" style="display:none;">
                              <strong>${comment.nom || 'Anonyme'}</strong>
                              <p>${comment.message}</p>
                              <small>${new Date(comment.date).toLocaleString()}</small>
                          </div>
                      `;
                  });
                  
                  $(elements.list).html(html);
                  // Animation d'apparition des commentaires un par un
                  $(elements.list).find('.comment').each(function(i) {
                      $(this).delay(i * 150).fadeIn(300);
                  });
              } else {
                  $(elements.list).html('<p class="no-comments">Aucun commentaire</p>')
                      .hide().fadeIn(300);
              }
          }, 500); // Délai artificiel pour démontrer l'animation
          
      } catch (error) {
          $(elements.list).html('<p class="error">Erreur de chargement</p>')
              .hide().fadeIn(300);
      }
  }

  // Initialisation
  updateButton(false);
  $(elements.container).hide();
});
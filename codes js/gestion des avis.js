document.addEventListener('DOMContentLoaded', () => {
    // Animation du titre h1 lettre par lettre
    const title = document.querySelector('.AVIS h1');
    const originalText = title.textContent;
    title.textContent = ''; // Vide le titre
    
    // Crée un span pour chaque lettre avec un délai
    originalText.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? ' ' : char; // Remplace les espaces par des espaces insécables
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        span.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
        
        // Position initiale aléatoire pour un effet plus dynamique
        const randomX = (Math.random() * 20 - 10);
        const randomY = (Math.random() * 20 - 10);
        span.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        title.appendChild(span);
        
        // Animation d'apparition
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translate(0, 0)';
        }, 100 + index * 100);
    });

    // Le reste de votre code existant...
    const commentsContainer = document.getElementById('commentsContainer');
    const commentsList = document.getElementById('commentsList');
    const showCommentsBtn = document.getElementById('showCommentsBtn');

    // Fonction pour animer l'apparition des éléments
    function fadeIn(element, duration = 300) {
        element.style.opacity = 0;
        element.style.display = 'block';
        let start = null;
        
        function animate(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.min(progress / duration, 1);
            element.style.opacity = opacity;
            if (progress < duration) {
                window.requestAnimationFrame(animate);
            }
        }
        window.requestAnimationFrame(animate);
    }

    // Fonction pour animer la disparition des éléments
    function fadeOut(element, duration = 300) {
        let start = null;
        
        function animate(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.max(1 - progress / duration, 0);
            element.style.opacity = opacity;
            if (progress < duration) {
                window.requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        }
        window.requestAnimationFrame(animate);
    }

    // Fonction pour afficher les commentaires avec animation
    function afficherCommentaires() {
        const commentaires = JSON.parse(localStorage.getItem('blogCommentaires')) || [];
        commentsList.innerHTML = '';

        if(commentaires.length === 0) {
            commentsList.innerHTML = '<p class="no-comments">Aucun commentaire trouvé.</p>';
            fadeIn(commentsList);
            return;
        }

        commentaires.forEach((comment, index) => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment-item';
            commentElement.style.opacity = '0';
            commentElement.style.transform = 'translateY(20px)';
            commentElement.style.transition = `all 0.3s ease ${index * 0.1}s`;
            
            commentElement.innerHTML = `
                <div class="comment-header">
                    <strong>${comment.nom}</strong>
                    <span class="comment-date">${comment.date}</span>
                </div>
                <div class="comment-content">${comment.message}</div>
                <div class="comment-actions">
                    <button class="btn-delete" data-id="${comment.id}">Supprimer</button>
                </div>
            `;
            commentsList.appendChild(commentElement);
            
            // Animation d'apparition
            setTimeout(() => {
                commentElement.style.opacity = '1';
                commentElement.style.transform = 'translateY(0)';
            }, 100);
        });

        // Ajouter les événements de suppression avec animation
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', function() {
                const commentItem = this.closest('.comment-item');
                commentItem.style.transition = 'all 0.3s ease';
                commentItem.style.opacity = '0';
                commentItem.style.height = '0';
                commentItem.style.padding = '0';
                commentItem.style.margin = '0';
                commentItem.style.overflow = 'hidden';
                
                setTimeout(() => {
                    const id = parseInt(this.getAttribute('data-id'));
                    supprimerCommentaire(id);
                }, 300);
            });
        });
    }

    // Fonction pour supprimer un commentaire
    function supprimerCommentaire(id) {
        let commentaires = JSON.parse(localStorage.getItem('blogCommentaires')) || [];
        commentaires = commentaires.filter(comment => comment.id !== id);
        localStorage.setItem('blogCommentaires', JSON.stringify(commentaires));
        afficherCommentaires();
    }

    // Bouton pour afficher/masquer les commentaires avec animation
    function toggleComments() {
        if(commentsContainer.style.display === 'none' || !commentsContainer.style.display) {
            // Animation du bouton
            showCommentsBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                showCommentsBtn.style.transform = 'scale(1)';
            }, 100);
            
            fadeIn(commentsContainer, 400);
            showCommentsBtn.innerHTML = 'Masquer les avis 🔒';
            afficherCommentaires();
        } else {
            // Animation du bouton
            showCommentsBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                showCommentsBtn.style.transform = 'scale(1)';
            }, 100);
            
            fadeOut(commentsContainer, 400);
            showCommentsBtn.innerHTML = 'Afficher les avis 🔓';
        }
    }

    // Initialiser le bouton avec animation
    showCommentsBtn.innerHTML = 'Afficher les avis 🔓';
    showCommentsBtn.style.transition = 'all 0.2s ease';
    showCommentsBtn.addEventListener('click', toggleComments);
    showCommentsBtn.addEventListener('mouseenter', () => {
        showCommentsBtn.style.transform = 'scale(1.05)';
    });
    showCommentsBtn.addEventListener('mouseleave', () => {
        showCommentsBtn.style.transform = 'scale(1)';
    });

    // Chargement initial si visible
    if(commentsContainer.style.display === 'block') {
        toggleComments();
    }

    // Écouter les changements de localStorage (pour les autres onglets)
    window.addEventListener('storage', (e) => {
        if(e.key === 'blogCommentaires') {
            afficherCommentaires();
        }
    });
});
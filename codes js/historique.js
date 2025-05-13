document.addEventListener('DOMContentLoaded', function() {
    // Animation du titre h1 lettre par lettre de gauche à droite
    const title = document.querySelector('.HISTORIQUE h1');
    if (title) {
        const originalText = title.textContent;
        title.textContent = ''; // Vide le contenu du h1
        
        // On split en gardant les espaces comme éléments séparés
        const words = originalText.split(/(\s+)/); // Split sur les espaces en les conservant
        
        let totalCharIndex = 0; // Compteur global de caractères
        
        words.forEach(function(word) {
            // Pour chaque mot (y compris les espaces)
            const wordContainer = document.createElement('span');
            wordContainer.style.whiteSpace = 'pre-wrap';
            wordContainer.style.display = 'inline-block';
            
            // Si c'est un espace ou une suite d'espaces
            if (word.trim() === '') {
                wordContainer.innerHTML = '&nbsp;'.repeat(word.length);
                title.appendChild(wordContainer);
                totalCharIndex += word.length; // On compte les espaces
                return; // continue
            }
            
            // Pour chaque caractère du mot
            word.split('').forEach(function(char) {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.opacity = '0';
                span.style.display = 'inline-block';
                span.style.transform = 'translateX(-20px)'; // Départ à gauche
                span.style.transition = `opacity 0.4s ease ${totalCharIndex * 0.1}s, transform 0.4s ease ${totalCharIndex * 0.1}s`;
                
                wordContainer.appendChild(span);
                
                // Animation après un délai
                setTimeout(function() {
                    span.style.opacity = '1';
                    span.style.transform = 'translateX(0)';
                }, 100 + totalCharIndex * 80);
                
                totalCharIndex++;
            });
            
            title.appendChild(wordContainer);
        });
    }
});
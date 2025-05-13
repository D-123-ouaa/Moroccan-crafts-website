$(document).ready(function() {
    // 1. Ajuste l'espacement avant l'animation
    $('.COMPTE').css('padding', '20px 0');
    
    // 2. Animation du titre avec l'effet lettre par lettre
    const title = $('.COMPTE h1');
    const originalText = title.text();
    title.text('');
    
    // Création des spans pour chaque lettre
    originalText.split('').forEach((char, index) => {
        const span = $('<span>').text(char === ' ' ? ' ' : char)
            .css({
                'opacity': '0',
                'display': 'inline-block',
                'transition': `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`,
                'transform': `translate(${(Math.random() * 20 - 10)}px, ${(Math.random() * 20 - 10)}px)`
            });
        
        title.append(span);
        
        // Animation des lettres
        setTimeout(() => {
            span.css({
                'opacity': '1',
                'transform': 'translate(0, 0)'
            });
        }, 100 + index * 100);
    });

    // 3. Animation des boutons (plus serrée)
    $('.COMPTE .buttons button').css({
        'opacity': '0',
        'transform': 'translateY(20px)',
        'margin': '8px'
    }).each(function(i) {
        $(this).delay(200 * i).animate({
            opacity: 1,
            transform: 'translateY(0)'
        }, 600);
    });

    // 4. Ajustement final après animation
    setTimeout(function() {
        $('.COMPTE .buttons').css('margin-top', '20px');
    }, 1000);
});
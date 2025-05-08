$(document).ready(function() {
  // 1. Ajuste l'espacement avant l'animation
  $('.COMPTE').css('padding', '20px 0'); // Réduit l'espace global

  // 2. Animation du titre (plus rapide)
  $('.COMPTE h1').css({
      'opacity': '0',
      'margin-bottom': '30px' // Espacement réduit sous le titre
  }).animate({
      opacity: 1
  }, 500);

  // 3. Animation des boutons (plus serrée)
  $('.COMPTE .buttons button').css({
      'opacity': '0',
      'transform': 'translateY(20px)', // Distance réduite
      'margin': '8px' // Espacement réduit entre boutons
  }).each(function(i) {
      $(this).delay(200 * i).animate({
          opacity: 1,
          transform: 'translateY(0)'
      }, 600);
  });

  // 4. Ajustement final après animation
  setTimeout(function() {
      $('.COMPTE .buttons').css('margin-top', '20px'); // Espacement final réduit
  }, 1000);
});
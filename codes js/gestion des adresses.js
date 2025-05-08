$(document).ready(function() {
  // Animation d'entrée du titre h1
  $('.GESTION h1').each(function() {
      var $h1 = $(this);
      
      $h1
          .css({
              'opacity': '0',
              'letter-spacing': '0',
              'transition': 'all 1s ease-out',
              'display': 'inline-block',
              'white-space': 'nowrap'
          })
          .delay(300)
          .queue(function(next) {
              $(this)
                  .css('opacity', '1')
                  .animate({
                      'letter-spacing': '10px'
                  }, 800, function() {
                      $(this).animate({
                          'letter-spacing': '3px'
                      }, 400);
                  });
              next();
          });
  });

  // Animation d'entrée des boutons
  $('.gestion button').each(function(index) {
      $(this)
          .css({
              'opacity': '0',
              'transform': 'scale(0.8)',
              'transition': 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) ' + (index * 0.1 + 0.3) + 's'
          })
          .delay(300 + index * 100)
          .queue(function(next) {
              $(this).css({
                  'opacity': '1',
                  'transform': 'scale(1)'
              });
              next();
          });
  });

  // Boutons Modifier/Supprimer
  $('.gestion button:not(.b)').hover(
      function() {
          $(this).stop().animate({
              'transform': 'scale(1.1) translateY(-3px)',
              'box-shadow': '0 5px 15px rgba(0,0,0,0.2)',
              'background-color': $(this).text().trim() === 'Modifier' ? '#3498db' : '#e74c3c'
          }, 200);
      },
      function() {
          $(this).stop().animate({
              'transform': 'scale(1) translateY(0)',
              'box-shadow': '0 2px 5px rgba(0,0,0,0.1)',
              'background-color': '#f8f9fa'
          }, 200);
      }
  ).click(function() {
      var btn = $(this);
      
      btn.stop().animate({
          'transform': 'scale(0.9) translateY(2px)',
          'opacity': 0.8
      }, 100)
      .animate({
          'transform': 'scale(1.1) translateY(-5px)',
          'opacity': 1
      }, 150)
      .animate({
          'transform': 'scale(1) translateY(0)'
      }, 100, function() {
          var addressElement = btn.siblings('p').first();
          
          if (btn.text().trim() === 'Modifier') {
              var newAddress = prompt("Modifier l'adresse:", addressElement.text());
              if (newAddress !== null) {
                  addressElement.hide().text(newAddress).fadeIn(300)
                      .css('color', '#27ae60') // Vert au début
                      .animate({'color': '#000000'}, 1000); // Devient noir
              }
          } 
          else if (btn.text().trim() === 'Supprimer') {
              if (confirm('Voulez-vous vraiment supprimer cette adresse ?')) {
                  addressElement.fadeOut(300, function() {
                      $(this).text("Aucune adresse définie").fadeIn(300)
                          .css('font-style', 'italic')
                          .css('color', '#95a5a6');
                  });
              }
          }
      });
  });

  // Bouton "Ajouter une adresse" - LAISSÉ INTACT
  $('.gestion .b').hover(
      function() {
          $(this).stop().animate({
              'letter-spacing': '2px',
              'box-shadow': '0 5px 20px rgba(46, 204, 113, 0.4)',
              'transform': 'translateY(-3px)'
          }, 300);
      },
      function() {
          $(this).stop().animate({
              'letter-spacing': 'normal',
              'box-shadow': 'none',
              'transform': 'translateY(0)'
          }, 300);
      }
  ).click(function(e) {
      e.preventDefault();
      var btn = $(this);
      
      btn.stop().animate({
          'transform': 'scale(0.95) translateY(5px)',
          'opacity': 0.7
      }, 100)
      .animate({
          'transform': 'scale(1.1) translateY(-10px)',
          'opacity': 1
      }, 150)
      .animate({
          'transform': 'scale(1) translateY(0)'
      }, 200, function() {
          window.location.href = btn.find('a').attr('href');
      });
  });
});
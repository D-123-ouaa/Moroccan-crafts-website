$(document).ready(function() {
  // Animation d'entrée pour la fiche produit
  $(".fiche .container").css("display", "none").fadeIn(1000).slideDown(600);

  // Effet zoom sur les images du carousel au survol
  $("#productCarousel .carousel-item img").hover(
      function() {
          $(this).css({
              transform: "scale(1.05)",
              transition: "transform 0.3s ease"
          });
      }, 
      function() {
          $(this).css({
              transform: "scale(1)",
              transition: "transform 0.3s ease"
          });
      }
  );

  // Animation douce au scroll pour les produits similaires
  $("#S .card").css("opacity", 0);
  $(window).on('scroll', function() {
      $("#S .card").each(function(i) {
          let cardTop = $(this).offset().top;
          let scrollTop = $(window).scrollTop() + $(window).height();
          if (scrollTop > cardTop + 50) {
              $(this).delay(i * 150).animate({opacity: 1}, 200);
          }
      });
  });
});
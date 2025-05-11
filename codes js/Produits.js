const produits = [
  {
    id: 1,
    nom: "Tapis en jute",
    description: "Fabriqué à partir de jute 100% naturel, ce tapis est parfait pour un intérieur écologique et rustique. Sa texture brute et ses tons neutres s'adaptent particulièrement bien à un style scandinave ou naturel. Disponible en formats rond ou rectangulaire, il convient aux salons, chambres ou même cuisines.",
    images: ["photos catalogue/Tapie 1.jpg"],
    prixAncien: "599,99 DH",
    prixNouveau: "499,99 DH",
    similaires: [
      { id: 4, nom: "Tapis berbère en coton", prix: "350,99 DH", image: "photos_fiche_de_produit/tapie2.jpg" },
      { id: 5, nom: "Tapis moderne en fibres synthétiques", prix: "400,99 DH", image: "photos_fiche_de_produit/Tapie4.jpg" },
      { id: 2, nom: "Tapis en laine tissée à la main", prix: "599,99 DH", image: "photos_fiche_de_produit/tapie3.jpg" },
      { id: 3, nom: "Tapis extérieur en polypropylène", prix: "600,99 DH", image: "photos_fiche_de_produit/tapie5.jpg" }
    ]
  },
  {
    id: 2,
    nom: "Tapis en laine tissée à la main",
    description: "Ce tapis est fabriqué artisanalement à partir de laine 100% naturelle. Chaque pièce est unique, avec des motifs classiques ou abstraits qui s'intègrent parfaitement dans des intérieurs élégants ou traditionnels. La laine offre une douceur incomparable et une excellente isolation thermique. Disponible en plusieurs tailles, allant de petits formats pour des espaces confinés à de grands tapis pour des salons spacieux.",
    images: ["photos catalogue/tapie3.jpg"],
    prixAncien: "659,99 DH",
    prixNouveau: "599,99 DH",
    similaires: [
      { id: 3, nom: "Tapis extérieur en polypropylène", prix: "600,99 DH", image: "photos_fiche_de_produit/tapie5.jpg" },
      { id: 7, nom: "Tapis en bambou naturel", prix: "399,99 DH", image: "photos_fiche_de_produit/tapie7.jpg" },
      { id: 5, nom: "Tapis moderne en fibres synthétiques", prix: "400,99 DH", image: "photos_fiche_de_produit/Tapie4.jpg" },
      { id: 1, nom: "Tapis en jute naturel", prix: "499,99 DH", image: "photos_fiche_de_produit/Tapie1.jpg" }
    ]
  },
  {
    id: 3,
    nom: "Tapis extérieur en polypropylène",
    description: "Ce tapis est conçu avec des fibres synthétiques comme le polypropylène, ce qui le rend léger, durable et facile à entretenir. Il est disponible dans une large gamme de motifs géométriques modernes et de couleurs neutres ou vives. Idéal pour un salon ou une chambre, il résiste aux taches et aux déversements, ce qui en fait un choix parfait pour les familles avec enfants ou animaux.",
    images: "photos catalogue/tapie5.jpg",
    prixAncien: "650,99 DH",
    prixNouveau: "600,99 DH",
    similaires: [
      { id: 6, nom: "Tapis en sisal avec bordure en coton", prix: "500,99 DH", image: "photos_fiche_de_produit/tapie6.jpg" },
      { id: 9, nom: "Tapis d'extérieur tissé à plat", prix: "300,99 DH", image: "photos_fiche_de_produit/tapie9.jpg" },
      { id: 7, nom: "Tapis en bambou naturel", prix: "399,99 DH", image: "photos_fiche_de_produit/tapie7.jpg" },
      { id: 4, nom: "Tapis en fausse fourrure", prix: "550,99 DH", image: "photos_fiche_de_produit/tapie8.jpg" }
    ]
  },
  {
    id: 4,
    nom: "Tapis berbère en coton",
    description: "Inspiré de l'artisanat marocain, ce tapis est tissé à la main avec du coton naturel. Il est léger, lavable et présente des motifs tribaux authentiques. Disponible en tailles variées, il s'adapte aussi bien aux petits espaces comme un bureau qu'aux grandes pièces de vie. Il apporte une touche bohème et chaleureuse à n'importe quel intérieur.",
    images: "photos catalogue/tapie2.jpg",
    prixAncien: "400,99 DH",
    prixNouveau: "350,99 DH",
    similaires: [
      { id: 6, nom: "Tapis en sisal avec bordure en coton", prix: "500,99 DH", image: "photos_fiche_de_produit/tapie6.jpg" },
      { id: 9, nom: "Tapis d'extérieur tissé à plat", prix: "300,99 DH", image: "photos_fiche_de_produit/tapie9.jpg" },
      { id: 7, nom: "Tapis en bambou naturel", prix: "399,99 DH", image: "photos_fiche_de_produit/tapie7.jpg" },
      { id: 8, nom: "Tapis en fausse fourrure", prix: "550,99 DH", image: "photos_fiche_de_produit/tapie8.jpg" }
    ]
  },
  {
    id: 5,
    nom: "Tapis moderne en fibres synthétiques",
    description: "Ce tapis est conçu avec des fibres synthétiques comme le polypropylène, ce qui le rend léger, durable et facile à entretenir. Il est disponible dans une large gamme de motifs géométriques modernes et de couleurs neutres ou vives. Idéal pour un salon ou une chambre, il résiste aux taches et aux déversements, ce qui en fait un choix parfait pour les familles avec enfants ou animaux.",
    images: "photos catalogue/Tapie 4.jpg",
    prixAncien: "550,99 DH",
    prixNouveau: "400,99 DH",
    similaires: [
      { id: 9, nom: "Tapis d'extérieur tissé à plat", prix: "300,99 DH", image: "photos_fiche_de_produit/tapie9.jpg" },
      { id: 2, nom: "Tapis en laine tissée à la main", prix: "599,99 DH", image: "photos_fiche_de_produit/tapie3.jpg" },
      { id: 1, nom: "Tapis en jute naturel", prix: "499,99 DH", image: "photos_fiche_de_produit/Tapie1.jpg" },
      { id: 3, nom: "Tapis extérieur en polypropylène", prix: "600,99 DH", image: "photos_fiche_de_produit/tapie5.jpg" }
    ]
  },
  {
    id: 6,
    nom: "Tapis en sisal avec bordure en coton",
    description: "Ce tapis en sisal naturel est robuste et élégant, parfait pour les zones à fort passage comme les entrées ou les salons. La bordure en coton apporte une touche de contraste et d'élégance. Le sisal est connu pour sa résistance et sa durabilité, tout en étant écologique. Disponible en plusieurs couleurs de bordure (noir, beige, gris).",
    images: "photos catalogue/tapie6.jpg",
    prixAncien: "600,99 DH",
    prixNouveau: "500,99 DH",
    similaires: [
      { id: 9, nom: "Tapis d'extérieur tissé à plat", prix: "300,99 DH", image: "photos_fiche_de_produit/tapie9.jpg" },
      { id: 7, nom: "Tapis en bambou naturel", prix: "399,99 DH", image: "photos_fiche_de_produit/tapie7.jpg" },
      { id: 1, nom: "Tapis en jute naturel", prix: "499,99 DH", image: "photos_fiche_de_produit/Tapie1.jpg" },
      { id: 3, nom: "Tapis extérieur en polypropylène", prix: "600,99 DH", image: "photos_fiche_de_produit/tapie5.jpg" }
    ]
  },
  {
    id: 7,
    nom: "Tapis en bambou naturel",
    description: "Ce tapis en bambou est idéal pour des espaces comme les cuisines, salles de bains ou balcons. Fabriqué en bambou durable et respectueux de l'environnement, il est facile à nettoyer avec un chiffon humide. Il est doté d’un dessous antidérapant pour assurer la sécurité. Son design minimaliste s’intègre parfaitement aux intérieurs modernes et naturels.",
    images: "photos catalogue/tapie7.jpg",
    prixAncien: "450,99 DH",
    prixNouveau: "399,99 DH",
    similaires: [
      { id: 4, nom: "Tapis berbère en coton", prix: "350,99 DH", image: "photos_fiche_de_produit/tapie2.jpg" },
      { id: 3, nom: "Tapis extérieur en polypropylène", prix: "600,99 DH", image: "photos_fiche_de_produit/tapie5.jpg" },
      { id: 2, nom: "Tapis en laine tissée à la main", prix: "599,99 DH", image: "photos_fiche_de_produit/tapie3.jpg" },
      { id: 9, nom: "Tapis d'extérieur tissé à plat", prix: "300,99 DH", image: "photos_fiche_de_produit/tapie9.jpg" }
    ]
  },
  {
    id: 8,
    nom: "Tapis en fausse fourrure",
    description: "Ce tapis en fausse fourrure ultra-douce ajoute une touche luxueuse à n'importe quelle pièce. Disponible en différentes couleurs (blanc, gris, rose, noir) et tailles, il est parfait pour un salon, une chambre ou même une chaise. Le dessous est antidérapant, ce qui le maintient en place. Facile à nettoyer, il peut être lavé en machine à basse température.",
    images: "photos catalogue/tapie8.jpg",
    prixAncien: "650,99 DH",
    prixNouveau: "550,99 DH",
    similaires: [
      { id: 9, nom: "Tapis d'extérieur tissé à plat", prix: "300,99 DH", image: "photos_fiche_de_produit/tapie9.jpg" },
      { id: 1, nom: "Tapis en jute naturel", prix: "499,99 DH", image: "photos_fiche_de_produit/Tapie1.jpg" },
      { id: 4, nom: "Tapis berbère en coton", prix: "350,99 DH", image: "photos_fiche_de_produit/tapie2.jpg" },
      { id: 3, nom: "Tapis extérieur en polypropylène", prix: "600,99 DH", image: "photos_fiche_de_produit/tapie5.jpg" }
    ]
  },
  {
    id: 9,
    nom: "Tapis d'extérieur tissé à plat",
    description: "Ce tapis en sisal naturel est robuste et élégant, parfait pour les zones à fort passage comme les entrées ou les salons. La bordure en coton apporte une touche de contraste et d'élégance. Le sisal est connu pour sa résistance et sa durabilité, tout en étant écologique. Disponible en plusieurs couleurs de bordure (noir, beige, gris).",
    images: "photos catalogue/tapie9.jpg",
    prixAncien: "400,99 DH",
    prixNouveau: "300,99 DH",
    similaires: [
      { id: 8, nom: "Tapis en fausse fourrure", prix: "550,99 DH", image: "photos_fiche_de_produit/tapie8.jpg" },
      { id: 4, nom: "Tapis berbère en coton", prix: "350,99 DH", image: "photos_fiche_de_produit/tapie2.jpg" },
      { id: 3, nom: "Tapis extérieur en polypropylène", prix: "600,99 DH", image: "photos_fiche_de_produit/tapie5.jpg" },
      { id: 1, nom: "Tapis en jute naturel", prix: "499,99 DH", image: "photos_fiche_de_produit/Tapie1.jpg" }
    ]
  },
  {
    id: 10,
    nom: "Coussin pour canapé en tissu chenille",
    description: "Un coussin moelleux et doux au toucher, fabriqué en tissu chenille résistant. Son design uni le rend idéal pour compléter des canapés modernes ou classiques.",
    images: "photos catalogue/coussin1.jpg",
    prixAncien: "250,99 DH",
    prixNouveau: "160,99 DH",
    similaires: [
      { id: 13, nom: "Coussin de méditation rond", prix: "290,99 DH", image: "photos_fiche_de_produit/coussin2.jpg" },
      { id: 11, nom: "Coussin en maille tricotée", prix: "220,99 DH", image: "photos_fiche_de_produit/coussin3.jpg" },
      { id: 14, nom: "Coussin pour côtée", prix: "140,99 DH", image: "photos_fiche_de_produit/coussin4.jpg" },
      { id: 12, nom: "Coussin carré en coton bio", prix: "180,99 DH", image: "photos_fiche_de_produit/coussin5.jpg" }
    ]
  },
  {
    id: 11,
    nom: "Coussin en maille tricotée",
    description: "Ce coussin tricoté apporte une ambiance cosy et chaleureuse à un salon ou une chambre. Fabriqué en acrylique doux avec une finition texturée, il est parfait pour les soirées d'hiver.",
    images: "photos catalogue/coussin3.jpg",
    prixAncien: "300,99 DH",
    prixNouveau: "220,99 DH",
    similaires: [
      { id: 18, nom: "Coussin à franges bohème", prix: "210,99 DH", image: "photos_fiche_de_produit/coussin9.jpg" },
      { id: 10, nom: "Coussin pour canapé en tissu chenille", prix: "160,99 DH", image: "photos_fiche_de_produit/coussin1.jpg" },
      { id: 12, nom: "Coussin carré en coton bio", prix: "180,99 DH", image: "photos_fiche_de_produit/coussin5.jpg" },
      { id: 16, nom: "Coussin décoratif classique", prix: "500,99 DH", image: "photos_fiche_de_produit/coussin7.jpg" }
    ]
  },
  {
    id: 12,
    nom: "Coussin carré en coton bio",
    description: "Ce coussin écologique est fabriqué en coton biologique, parfait pour ceux qui cherchent une option durable et naturelle. Son design simple le rend polyvalent pour tout type de décoration intérieure.",
    images: "photos catalogue/coussin5.jpg",
    prixAncien: "250,99 DH",
    prixNouveau: "180,99 DH",
    similaires: [
      { id: 16, nom: "Coussin décoratif classique", prix: "500,99 DH", image: "photos_fiche_de_produit/coussin7.jpg" },
      { id: 11, nom: "Coussin en maille tricotée", prix: "220,99 DH", image: "photos_fiche_de_produit/coussin3.jpg" },
      { id: 17, nom: "Coussin pour banc ou banquette", prix: "340,99 DH", image: "photos_fiche_de_produit/coussin8.jpg" },
      { id: 10, nom: "Coussin pour canapé en tissu chenille", prix: "160,99 DH", image: "photos_fiche_de_produit/coussin1.jpg" }
    ]
  },
  {
    id: 13,
    nom: "Coussin de méditation rond",
    description: "Un coussin moelleux et doux au toucher, fabriqué en tissu chenille résistant. Son design uni le rend idéal pour compléter des canapés modernes ou classiques.",
    images: "photos catalogue/coussin2.jpg",
    prixAncien: "300,99 DH",
    prixNouveau: "290,99 DH",
    similaires: [
      { id: 15, nom: "Coussin pour lit à motifs floraux", prix: "240,99 DH", image: "photos_fiche_de_produit/coussin6.jpg" },
      { id: 16, nom: "Coussin décoratif classique", prix: "500,99 DH", image: "photos_fiche_de_produit/coussin7.jpg" },
      { id: 17, nom: "Coussin pour banc ou banquette", prix: "340,99 DH", image: "photos_fiche_de_produit/coussin8.jpg" },
      { id: 18, nom: "Coussin à franges bohème", prix: "210,99 DH", image: "photos_fiche_de_produit/coussin9.jpg" }
    ]
  },
  {
    id: 14,
    nom: "Coussin pour côtée",
    description: "Conçu pour ajouter du confort aux chaises de salle à manger, ce coussin est fabriqué en tissu résistant avec des attaches pour le maintenir en place. Disponible en différentes couleurs.",
    images: "photos catalogue/coussin4.jpg",
    prixAncien: "200,99 DH",
    prixNouveau: "140,99 DH",
    similaires: [
      { id: 17, nom: "Coussin pour banc ou banquette", prix: "340,99 DH", image: "photos_fiche_de_produit/coussin8.jpg" },
      { id: 15, nom: "Coussin pour lit à motifs floraux", prix: "240,99 DH", image: "photos_fiche_de_produit/coussin6.jpg" },
      { id: 16, nom: "Coussin décoratif classique", prix: "500,99 DH", image: "photos_fiche_de_produit/coussin7.jpg" },
      { id: 18, nom: "Coussin à franges bohème", prix: "210,99 DH", image: "photos_fiche_de_produit/coussin9.jpg" }
    ]
  },
  {
    id: 15,
    nom: "Coussin pour lit à motifs floraux ",
    description: "Un coussin moelleux et doux au toucher, fabriqué en tissu chenille résistant. Son design uni le rend idéal pour compléter des canapés modernes ou classiques.",
    images: "photos catalogue/coussin6.jpg",
    prixAncien: "300,99 DH",
    prixNouveau: "240,99 DH",
    similaires: [
      { id: 17, nom: "Coussin pour banc ou banquette", prix: "340,99 DH", image: "photos_fiche_de_produit/coussin8.jpg" },
      { id: 18, nom: "Coussin à franges bohème", prix: "210,99 DH", image: "photos_fiche_de_produit/coussin9.jpg" },
      { id: 11, nom: "Coussin en maille tricotée", prix: "220,99 DH", image: "photos_fiche_de_produit/coussin3.jpg" },
      { id: 10, nom: "Coussin pour canapé en tissu chenille", prix: "160,99 DH", image: "photos_fiche_de_produit/coussin1.jpg" }
    ]
  },
  {
    id: 16,
    nom: "Coussin décoratif classique",
    description: "Ce coussin rectangulaire est parfait pour habiller un canapé ou un lit. Fabriqué en coton doux, il est disponible en couleurs neutres comme le beige, le gris et le blanc cassé, avec des motifs subtils qui ajoutent une touche d'élégance.",
    images: "photos catalogue/coussin7.jpg",
    prixAncien: "600,99 DH",
    prixNouveau: "500,99 DH",
    similaires: [
      { id: 12, nom: "Coussin carré en coton bio", prix: "180,99 DH", image: "photos_fiche_de_produit/coussin5.jpg" },
      { id: 17, nom: "Coussin pour lit à motifs floraux", prix: "240,99 DH", image: "photos_fiche_de_produit/coussin6.jpg" },
      { id: 18, nom: "Coussin à franges bohème", prix: "210,99 DH", image: "photos_fiche_de_produit/coussin9.jpg" },
      { id: 10, nom: "Coussin pour canapé en tissu chenille", prix: "160,99 DH", image: "photos_fiche_de_produit/coussin1.jpg" }
    ]
  },
  {
    id: 17,
    nom: "Coussin pour banc ou banquette",
    description: "Ce coussin long et rectangulaire est spécialement conçu pour les bancs ou banquettes. Il est fabriqué en tissu résistant avec un rembourrage ferme pour un confort optimal.",
    images: "photos catalogue/coussin8.jpg",
    prixAncien: "500,99 DH",
    prixNouveau: "340,99 DH",
    similaires: [
      { id: 14, nom: "Coussin pour côtée", prix: "140,99 DH", image: "photos_fiche_de_produit/coussin4.jpg" },
      { id: 15, nom: "Coussin pour lit à motifs floraux", prix: "240,99 DH", image: "photos_fiche_de_produit/coussin6.jpg" },
      { id: 18, nom: "Coussin à franges bohème", prix: "210,99 DH", image: "photos_fiche_de_produit/coussin9.jpg" },
      { id: 13, nom: "Coussin de méditation rond", prix: "290,99 DH", image: "photos_fiche_de_produit/coussin2.jpg" }
    ]
  },
  {
    id: 18,
    nom: "Coussin à franges bohème",
    description: "Un coussin moelleux et doux au toucher, fabriqué en tissu chenille résistant. Son design uni le rend idéal pour compléter des canapés modernes ou classiques.",
    images: "photos catalogue/coussin9.jpg",
    prixAncien: "300,99 DH",
    prixNouveau: "220,99 DH",
    similaires: [
      { id: 14, nom: "Coussin pour côtée", prix: "140,99 DH", image: "photos_fiche_de_produit/coussin4.jpg" },
      { id: 12, nom: "Coussin carré en coton bio", prix: "180,99 DH", image: "photos_fiche_de_produit/coussin5.jpg" },
      { id: 17, nom: "Coussin pour banc ou banquette", prix: "340,99 DH", image: "photos_fiche_de_produit/coussin8.jpg" },
      { id: 10, nom: "Coussin pour canapé en tissu chenille", prix: "160,99 DH", image: "photos_fiche_de_produit/coussin1.jpg" }
    ]
  },
  {
    id: 19,
    nom: "Carafes en céramique émaillée",
    description: "ces carafes en céramique émaillée est idéale pour servir de l’eau ou comme pièce décorative. Elle dispose d’une poignée ergonomique et d’un bec verseur. Disponible en blanc, bleu et vert olive.",
    images: "photos catalogue/Poterie 1.jpg",
    prixAncien: "450,99 DH",
    prixNouveau: "340,99 DH",
    similaires: [
      { id: 22, nom: "Vase en céramique émaillée", prix: "250,99 DH", image: "photos_fiche_de_produit/poterie2.jpg" },
      { id: 20, nom: "Tajine en poterie vernissée", prix: "350,99 DH", image: "photos_fiche_de_produit/poterie3.jpeg" },
      { id: 23, nom: "Plat décoratif en terre cuite", prix: "299,99 DH", image: "photos_fiche_de_produit/poterie4.jpg" },
      { id: 21, nom: "Pot de fleurs en argile naturelle", prix: "399,99 DH", image: "photos_fiche_de_produit/poterie5.jpg" }
    ]
  },
  {
    id: 20,
    nom: "Tajine en poterie vernissée",
    description: "Ce tajine artisanal, disponible en différentes tailles, est idéal pour servir des plats ou comme décoration. L’extérieur mat contraste avec un intérieur vernissé de couleur vive.",
    images: "photos catalogue/poterie 3.jpeg",
    prixAncien: "450,99 DH",
    prixNouveau: "350,99 DH",
    similaires: [
      { id: 19, nom: "Carafes en céramique", prix: "350,99 DH", image: "photos_fiche_de_produit/Poterie1.jpg" },
      { id: 23, nom: "Plat décoratif en terre cuite", prix: "299,99 DH", image: "photos_fiche_de_produit/poterie4.jpg" },
      { id: 26, nom: "Lampe en céramique ajourée", prix: "490,99 DH", image: "photos_fiche_de_produit/poterie8.jpg" },
      { id: 21, nom: "Pot de fleurs en argile naturelle", prix: "399,99 DH", image: "photos_fiche_de_produit/poterie5.jpg" }
    ]
  },
  {
    id: 21,
    nom: "Pot de fleurs en argile naturelle",
    description: "Ce pot de fleurs en argile brute est parfait pour les plantes d'intérieur. Sa finition mate donne un style minimaliste et naturel, tandis que son matériau poreux permet un drainage optimal pour les plantes.",
    images: "photos catalogue/poterie5.jpg",
    prixAncien: "600,99 DH",
    prixNouveau: "399,99 DH",
    similaires: [
      { id: 22, nom: "Vase en céramique émaillée", prix: "250,99 DH", image: "photos_fiche_de_produit/poterie2.jpg" },
      { id: 25, nom: "Service de vaisselle en grès", prix: "790,99 DH", image: "photos_fiche_de_produit/poterie7.jpg" },
      { id: 27, nom: "Tasse en céramique artisanale", prix: "150,99 DH", image: "photos_fiche_de_produit/poterie9.jpg" },
      { id: 19, nom: "Carafes en céramique", prix: "350,99 DH", image: "photos_fiche_de_produit/Poterie1.jpg" }
    ]
  },
  {
    id: 22,
    nom: "Vase en céramique émaillée",
    description: "ces carafes en céramique émaillée est idéale pour servir de l’eau ou comme pièce décorative. Elle dispose d’une poignée ergonomique et d’un bec verseur. Disponible en blanc, bleu et vert olive.",
    images: "photos catalogue/poterie 2.jpg",
    prixAncien: "350,99 DH",
    prixNouveau: "250,99 DH",
    similaires: [
      { id: 24, nom: "Tajine décorative en céramique", prix: "220,99 DH", image: "photos_fiche_de_produit/poterie6.jpg" },
      { id: 25, nom: "Service de vaisselle en grès", prix: "790,99 DH", image: "photos_fiche_de_produit/poterie7.jpg" },
      { id: 23, nom: "Plat décoratif en terre cuite", prix: "299,99 DH", image: "photos_fiche_de_produit/poterie4.jpg" },
      { id: 26, nom: "Lampe en céramique ajourée", prix: "490,99 DH", image: "photos_fiche_de_produit/poterie9.jpg" }
    ]
  },
  {
    id: 23,
    nom: "Plat décoratif en terre cuite",
    description: "Ce plat en terre cuite fait main est idéal comme pièce centrale pour une table ou pour exposer des fruits. Son aspect rustique et ses motifs gravés à la main en font un objet unique.",
    images: "photos catalogue/poterie 4.jpg",
    prixAncien: "350,99 DH",
    prixNouveau: " 299,99 DH",
    similaires: [
      { id: 21, nom: "Pot de fleurs en argile naturelle", prix: "399,99 DH", image: "photos_fiche_de_produit/poterie5.jpg" },
      { id: 26, nom: "Lampe en céramique ajourée", prix: "490,99 DH", image: "photos_fiche_de_produit/poterie9.jpg" },
      { id: 22, nom: "Vase en céramique émaillée", prix: "250,99 DH", image: "photos_fiche_de_produit/poterie2.jpg" },
      { id: 19, nom: "Carafes en céramique", prix: "350,99 DH", image: "photos_fiche_de_produit/Poterie1.jpg" }
    ]
  },
  {
    id: 24,
    nom: "Tajine décorative en céramique",
    description: "Cette petite tajine en céramique représente une forme abstraite ou une figure minimaliste, parfaite pour un bureau, une étagère ou une table basse.",
    images: "photos catalogue/poterie6.jpg",
    prixAncien: "350,99 DH",
    prixNouveau: "220,99 DH",
    similaires: [
      { id: 22, nom: "Vase en céramique émaillée", prix: "250,99 DH", image: "photos_fiche_de_produit/poterie2.jpg" },
      { id: 23, nom: "Plat décoratif en terre cuite", prix: "299,99 DH", image: "photos_fiche_de_produit/poterie4.jpg" },
      { id: 19, nom: "Carafes en céramique", prix: "350,99 DH", image: "photos_fiche_de_produit/Poterie1.jpg" },
      { id: 27, nom: "Tasse en céramique artisanale", prix: "150,99 DH", image: "photos_fiche_de_produit/poterie9.jpg" }
    ]
  },
  {
    id: 25,
    nom: "Service de vaisselle en grès",
    description: "Ce service artisanal comprend des assiettes, bols et tasses fabriqués en grès émaillé. Chaque pièce est légèrement différente, témoignant de leur fabrication à la main.",
    images: "photos catalogue/poterie7.jpg",
    prixAncien: "1000,99 DH",
    prixNouveau: "790,99 DH",
    similaires: [
      { id: 27, nom: "Tasse en céramique artisanale", prix: "150,99 DH", image: "photos_fiche_de_produit/poterie9.jpg" },
      { id: 19, nom: "Carafes en céramique", prix: "350,99 DH", image: "photos_fiche_de_produit/Poterie1.jpg" },
      { id: 22, nom: "Vase en céramique émaillée", prix: "250,99 DH", image: "photos_fiche_de_produit/poterie2.jpg" },
      { id: 20, nom: "Tajine en poterie vernissée", prix: "350,99 DH", image: "photos_fiche_de_produit/poterie3.jpeg" }
    ]
  },
  {
    id: 26,
    nom: "Lampe en céramique ajourée",
    description: "Cette lampe de table est fabriquée en céramique avec des motifs ajourés qui créent un effet lumineux subtil et chaleureux. Disponible en finition blanche ou beige.",
    images: "photos catalogue/poterie8.jpg",
    prixAncien: "600,99 DH",
    prixNouveau: "490,99 DH",
    similaires: [
      { id: 27, nom: "Tasse en céramique artisanale", prix: "150,99 DH", image: "photos_fiche_de_produit/poterie9.jpg" },
      { id: 20, nom: "Tajine en poterie vernissée", prix: "350,99 DH", image: "photos_fiche_de_produit/poterie3.jpeg" },
      { id: 25, nom: "Service de vaisselle en grès", prix: "790,99 DH", image: "photos_fiche_de_produit/poterie7.jpg" },
      { id: 21, nom: "Pot de fleurs en argile naturelle", prix: "399,99 DH", image: "photos_fiche_de_produit/poterie5.jpg" }
    ]
  },
  {
    id: 27,
    nom: "Tasse en céramique artisanale",
    description: "Fabriquée à la main, cette tasse en céramique offre un style rustique avec un émail légèrement irrégulier qui témoigne de son caractère unique. Parfaite pour un café ou un thé.",
    images: "photos catalogue/poterie9.jpg",
    prixAncien: "350,99 DH",
    prixNouveau: "140,99 DH",
    similaires: [
      { id: 23, nom: "Plat décoratif en terre cuite", prix: "299,99 DH", image: "photos_fiche_de_produit/poterie4.jpg" },
      { id: 21, nom: "Pot de fleurs en argile naturelle", prix: "399,99 DH", image: "photos_fiche_de_produit/poterie5.jpg" },
      { id: 20, nom: "Tajine en poterie vernissée", prix: "350,99 DH", image: "photos_fiche_de_produit/poterie3.jpeg" },
      { id: 24, nom: "Tajine décorative en céramique", prix: "220,99 DH", image: "photos_fiche_de_produit/poterie6.jpg" }
    ]
  },
  {
    id: 28,
    nom: "Huile d'Argan Douce",
    description: "L'huile d'argan, également appelée 'or liquide', est une huile précieuse originaire du Maroc. Elle est extraite des noix de l'arganier, un arbre endémique de la région. Riche en nutriments, elle est réputée pour ses bienfaits dans les domaines de la beauté, de la santé et de la cuisine.",
    images: "photos catalogue/beaute 1.jpg",
    prixAncien: "400,99 DH",
    prixNouveau: "300,99 DH",
    similaires: [
      { id: 35, nom: "Huile d'Amonde", prix: "300,99 DH", image: "photos_fiche_de_produit/beaute8.jpg" },
      { id: 31, nom: "Huile de Rose Musquée", prix: "399,99 DH", image: "photos_fiche_de_produit/beauté2.jpg" },
      { id: 36, nom: "Huile Essentielle de Lavande", prix: "199,99 DH", image: "photos_fiche_de_produit/beauté9.jpg" },
      { id: 30, nom: "Huile de Jojoba", prix: "200,99 DH", image: "photos_fiche_de_produit/beauté5.jpg" }
    ]
  },
  {
    id: 29,
    nom: "Huile de Coco Douce",
    description: "L'huile de coco, extraite de la pulpe fraîche de la noix de coco, est un produit naturel aux multiples bienfaits. Elle est largement utilisée pour ses propriétés hydratantes, réparatrices et nourrissantes. Son parfum exotique et sa texture fondante en font un favori pour les soins de la peau, des cheveux et même pour des usages culinaires.",
    images: "photos catalogue/beauté3.jpg",
    prixAncien: "200,99 DH",
    prixNouveau: "150,99 DH",
    similaires: [
      { id: 32, nom: "Pack Hammam", prix: "2000,99 DH", image: "photos_fiche_de_produit/beauté4.png" },
      { id: 28, nom: "Huile d'Argan", prix: "300,99 DH", image: "photos_fiche_de_produit/beaute1.jpg" },
      { id: 36, nom: "Huile Essentielle de Lavande", prix: "199,99 DH", image: "photos_fiche_de_produit/beauté9.jpg" },
      { id: 34, nom: "Aker Fassi", prix: "200,99 DH", image: "photos_fiche_de_produit/beauté7.jpg" }
    ]
  },
  {
    id: 30,
    nom: "Huil de Jojobaa pour la peau et le visage",
    description: "Grâce à sa composition similaire au sébum, elle équilibre la production naturelle de la peau, aidant ainsi à prévenir les imperfections et l'acné.",
    images: "photos catalogue/beauté5.jpg",
    prixAncien: "300,99 DH",
    prixNouveau: "150,99 DH",
    similaires: [
      { id: 35, nom: "Huile d'Amonde", prix: "300,99 DH", image: "photos_fiche_de_produit/beaute8.jpg" },
      { id: 31, nom: "Huile de Rose Musquée", prix: "399,99 DH", image: "photos_fiche_de_produit/beauté2.jpg" },
      { id: 36, nom: "Huile Essentielle de Lavande", prix: "199,99 DH", image: "photos_fiche_de_produit/beauté9.jpg" },
      { id: 28, nom: "Huile d'Argan", prix: "300,99 DH", image: "photos_fiche_de_produit/beaute1.jpg" }
    ]
  },
  {
    id: 31,
    nom: "Huile de Rose Musquée-L'Élixir Naturel pour la Peau",
    description: "L’huile de rose musquée est une huile précieuse extraite des graines du fruit de l’églantier (Rosa moschata ou Rosa rubiginosa), un arbuste qui pousse principalement en Amérique du Sud, notamment au Chili. Appréciée pour ses nombreuses vertus régénérantes et réparatrices, cette huile est un indispensable des soins naturels pour la peau.",
    images: "photos catalogue/beauté2.jpg",
    prixAncien: "300,99 DH",
    prixNouveau: "250,99 DH",
    similaires: [
      { id: 34, nom: "Aker Fassi", prix: "150,99 DH", image: "photos_fiche_de_produit/beauté7.jpg" },
      { id: 29, nom: "Huile de Coco", prix: "200,99 DH", image: "photos_fiche_de_produit/beauté3.jpg" },
      { id: 36, nom: "Huile Essentielle de Lavande", prix: "199,99 DH", image: "photos_fiche_de_produit/beauté9.jpg" },
      { id: 28, nom: "Huile d'Argan", prix: "300,99 DH", image: "photos_fiche_de_produit/beaute1.jpg" }
    ]
  },
  {
    id: 32,
    nom: "Pack Hammam - Calène bio",
    description: "Ce coffret complet offre une expérience de soin luxueuse et holistique pour une peau éclatante, nourrie et hydratée. Il contient un gommage nila, un gommage aker lfassi, de la tabrima et du savon noir.",
    images: "photos catalogue/beauté4.png",
    prixAncien: "2900,99 DH",
    prixNouveau: "2000,99 DH",
    similaires: [
      { id: 33, nom: "Khôl artisanal", prix: "100,99 DH", image: "photos_fiche_de_produit/beauté6.jpg" },
      { id: 36, nom: "Huile Essentielle de Lavande", prix: "199,99 DH", image: "photos_fiche_de_produit/beauté9.jpg" },
      { id: 28, nom: "Huile d'Argan", prix: "300,99 DH", image: "photos_fiche_de_produit/beaute1.jpg" },
      { id: 34, nom: "Aker Fassi", prix: "150,99 DH", image: "photos_fiche_de_produit/beauté7.jpg" }
    ]
  },
  {
    id: 33,
    nom: "Khôl artisanal - 100% Naturelle",
    description: "le khôl marocain est un produit de beauté ancestral qui séduit par sa composition naturelle et ses bienfaits pour les yeux. Disponible à des prix abordables, il constitue une alternative intéressante aux cosmétiques conventionnels pour celles et ceux en quête d'authenticité.",
    images: "photos catalogue/beauté6.jpg",
    prixAncien: "300,99 DH",
    prixNouveau: "250,99 DH",
    similaires: [
      { id: 34, nom: "Aker Fassi", prix: "150,99 DH", image: "photos_fiche_de_produit/beauté7.jpg" },
      { id: 32, nom: "Pack Hammam", prix: "2000,99 DH", image: "photos_fiche_de_produit/beauté4.png" },
      { id: 36, nom: "Huile Essentielle de Lavande", prix: "199,99 DH", image: "photos_fiche_de_produit/beauté9.jpg" },
      { id: 29, nom: "Huile de Coco", prix: "200,99 DH", image: "photos_fiche_de_produit/beauté3.jpg" }
    ]
  },
  {
    id: 34,
    nom: "Aker Fassi Rouge à Lèvre Marocaine - 100% Naturelle",
    description: "l'Aker Fassi est un cosmétique traditionnel marocain offrant une alternative naturelle aux produits de maquillage modernes, avec des propriétés bénéfiques pour la peau et une esthétique authentique.",
    images: "photos catalogue/beauté7.jpg",
    prixAncien: "350,99 DH",
    prixNouveau: "250,99 DH",
    similaires: [
      { id: 33, nom: "Khôl artisanal", prix: "100,99 DH", image: "photos_fiche_de_produit/beauté6.jpg" },
      { id: 31, nom: "Huile de Rose Musquée", prix: "399,99 DH", image: "photos_fiche_de_produit/beauté2.jpg" },
      { id: 32, nom: "Pack Hammam", prix: "2000,99 DH", image: "photos_fiche_de_produit/beauté4.png" },
      { id: 30, nom: "Huile de Jojoba", prix: "200,99 DH", image: "photos_fiche_de_produit/beauté5.jpg" }
    ]
  },
  {
    id: 35,
    nom: "Huile d'Amande Douce - 100% Pure et Naturelle",
    description: "L'huile d'amande douce est un véritable soin naturel pour la peau et les cheveux. Extraite des amandes mûries au soleil, elle est riche en acides gras essentiels, en vitamines et en minéraux. Douce, nourrissante et non grasse, elle pénètre rapidement sans laisser de film huileux.",
    images: "photos catalogue/beaute 8.jpg",
    prixAncien: "400,99 DH",
    prixNouveau: "300,99 DH",
    similaires: [
      { id: 29, nom: "Huile de Coco", prix: "200,99 DH", image: "photos_fiche_de_produit/beauté3.jpg" },
      { id: 30, nom: "Huile de Jojoba", prix: "200,99 DH", image: "photos_fiche_de_produit/beauté5.jpg" },
      { id: 31, nom: "Huile de Rose Musquée", prix: "399,99 DH", image: "photos_fiche_de_produit/beauté2.jpg" },
      { id: 36, nom: "Huile Essentielle de Lavande", prix: "199,99 DH", image: "photos_fiche_de_produit/beauté9.jpg" }
    ]
  },
  {
    id: 36,
    nom: "Huile Essentielle de Lavande bio- 100% Pure et Naturelle",
    description: "L'huile essentielle de lavande douce, également appelée lavande fine ou lavande vraie (Lavandula angustifolia), est réputée pour ses multiples bienfaits thérapeutiques et son parfum apaisant.",
    images: "photos catalogue/beauté9.jpg",
    prixAncien: "300,99 DH",
    prixNouveau: "199,99 DH",
    similaires: [
      { id: 30, nom: "Huile de Jojoba", prix: "200,99 DH", image: "photos_fiche_de_produit/beauté5.jpg" },
      { id: 31, nom: "Huile de Rose Musquée", prix: "399,99 DH", image: "photos_fiche_de_produit/beauté2.jpg" },
      { id: 29, nom: "Huile de Coco", prix: "200,99 DH", image: "photos_fiche_de_produit/beauté3.jpg" },
      { id: 33, nom: "Khôl artisanal", prix: "100,99 DH", image: "photos_fiche_de_produit/beauté6.jpg" }
    ]
  },
  {
    id: 37,
    nom: "Pack des accessoires traditionnelle",
    description: "Les packs d'accessoires traditionnels marocains sont des ensembles soigneusement sélectionnés qui reflètent la richesse et la diversité de l'artisanat marocain. Ils peuvent inclure des articles tels que des sacs, des bijoux, des ceintures, des pochettes et d'autres objets artisanaux.",
    images: "photos catalogue/accessoire1.jpg",
    prixAncien: "2000,99 DH",
    prixNouveau: "900,99 DH",
    similaires: [
      { id: 40, nom: "Cherbil Marocaine", prix: "1500,99 DH", image: "photos_fiche_de_produit/accessoire2.jpg" },
      { id: 38, nom: "Collier en or", prix: "1240,99 DH", image: "photos_fiche_de_produit/accessoire3.jpg" },
      { id: 41, nom: "Sac Marocaine", prix: "1500,99 DH", image: "photos_fiche_de_produit/accessoire4.jpg" },
      { id: 39, nom: "Bague anneau en argent", prix: "570,99 DH", image: "photos_fiche_de_produit/accessoire5.jpg" }
    ]
  },
  {
    id: 38,
    nom: "Collier en or",
    description: "un collier en or est un investissement durable et élégant. Prenez le temps de comparer les options disponibles et choisissez un design qui correspond à votre style personnel.",
    images: "photos catalogue/accessoire 3.jpg",
    prixAncien: "12000,99 DH",
    prixNouveau: "10240,99 DH",
    similaires: [
      { id: 40, nom: "Cherbil Marocaine", prix: "1500,99 DH", image: "photos_fiche_de_produit/accessoire2.jpg" },
      { id: 45, nom: "La mdamma en or et agate", prix: "5800,99 DH", image: "photos_fiche_de_produit/accessoire9.jpg" },
      { id: 42, nom: "Bijeaux Traditionnels", prix: "1500,99 DH", image: "photos_fiche_de_produit/accessoire6.jpg" },
      { id: 44, nom: "La mdamma en or Marocaine", prix: "5000,99 DH", image: "photos_fiche_de_produit/accessoire8.jpg" }
    ]
  },
  {
    id: 39,
    nom: "Bague anneau - 100% en argent",
    description: "Cette bague en argent sterling est ornée d'une pierre de labradorite, ajoutant une touche de couleur. Disponible sur Amazon, elle est proposée . Les clients apprécient son design unique et la qualité de la pierre. ",
    images: "photos catalogue/accessoire5.jpg",
    prixAncien: "2000,99 DH",
    prixNouveau: "570,99 DH",
    similaires: [
      { id: 38, nom: "Collier en or", prix: "1240,99 DH", image: "photos_fiche_de_produit/accessoire3.jpg" },
      { id: 44, nom: "La mdamma en or Marocaine", prix: "5000,99 DH", image: "photos_fiche_de_produit/accessoire8.jpg" },
      { id: 45, nom: "La mdamma en or et agate", prix: "5800,99 DH", image: "photos_fiche_de_produit/accessoire9.jpg" },
      { id: 37, nom: "Pack des accessoires", prix: "900,99 DH", image: "photos_fiche_de_produit/accessoire1.jpg" }
    ]
  },
  {
    id: 40,
    nom: "Le cherbil traditionnelle marocaine",
    description: "Le cherbil est une chaussure traditionnelle marocaine, souvent portée lors de cérémonies et d'événements spéciaux. Fabriqué en cuir ou en velours, il est généralement orné de broderies élaborées, reflétant le riche patrimoine artisanal du Maroc.",
    images: "photos catalogue/accessoire 2.jpg",
    prixAncien: "2000,99 DH",
    prixNouveau: " 1500,99 DH",
    similaires: [
      { id: 42, nom: "Bijeaux Traditionnels", prix: "1500,99 DH", image: "photos_fiche_de_produit/accessoire6.jpg" },
      { id: 43, nom: "Collier Mala en Agate", prix: "2500,99 DH", image: "photos_fiche_de_produit/accessoire7.jpg" },
      { id: 44, nom: "La mdamma en or Marocaine", prix: "5000,99 DH", image: "photos_fiche_de_produit/accessoire8.jpg" },
      { id: 45, nom: "La mdamma en or et agate", prix: "5800,99 DH", image: "photos_fiche_de_produit/accessoire9.jpg" }
    ]
  },
  {
    id: 41,
    nom: "Sac en or traditionnelle Marocaine ",
    description: "Les sacs traditionnels marocains sont réputés pour leur artisanat raffiné et leurs designs authentiques. Bien que les sacs entièrement en or ne soient pas courants en raison du poids et du coût élevés, il existe des sacs en cuir ou en tissu ornés de broderies dorées ou de fils d'or, reflétant le riche patrimoine culturel du Maroc.",
    images: "photos catalogue/accessoire4.jpg",
    prixAncien: "18000,99 DH",
    prixNouveau: " 15000,99 DH",
    similaires: [
      { id: 40, nom: "Cherbil Marocaine", prix: "1500,99 DH", image: "photos_fiche_de_produit/accessoire2.jpg" },
      { id: 44, nom: "La mdamma en or Marocaine", prix: "5000,99 DH", image: "photos_fiche_de_produit/accessoire8.jpg" },
      { id: 42, nom: "Bijeaux Traditionnels", prix: "1500,99 DH", image: "photos_fiche_de_produit/accessoire6.jpg" },
      { id: 37, nom: "Pack des accessoires", prix: "900,99 DH", image: "photos_fiche_de_produit/accessoire1.jpg" }
    ]
  },
  {
    id: 42,
    nom: "Bijeaux Traditionnels Marocaine",
    description: "un collier traditionnel marocain est un accessoire élégant qui reflète le riche patrimoine culturel du Maroc, tout en ajoutant une touche sophistiquée à votre tenue.",
    images: "photos catalogue/accessoire6.jpg",
    prixAncien: "2000,99 DH",
    prixNouveau: " 1500,99 DH",
    similaires: [
      { id: 43, nom: "Collier Mala en Agate", prix: "2500,99 DH", image: "photos_fiche_de_produit/accessoire7.jpg" },
      { id: 37, nom: "Pack des accessoires", prix: "900,99 DH", image: "photos_fiche_de_produit/accessoire1.jpg" },
      { id: 38, nom: "Collier en or", prix: "1240,99 DH", image: "photos_fiche_de_produit/accessoire3.jpg" },
      { id: 39, nom: "Bague anneau en argent ", prix: "570,99 DH", image: "photos_fiche_de_produit/accessoire5.jpg" }
    ]
  },
  {
    id: 43,
    nom: "Collier Mala en Agate Marocaine",
    description: "Ce collier mala est composé de perles d'agate noire, une pierre réputée pour ses vertus protectrices et énergisantes. Il est entièrement fabriqué à la main, offrant ainsi une pièce unique. Disponible en plusieurs tailles, il est proposé.",
    images: "photos catalogue/accessoire7.jpg",
    prixAncien: "3000,99 DH",
    prixNouveau: "2500,99 DH",
    similaires: [
      { id: 37, nom: "Pack des accessoires", prix: "900,99 DH", image: "photos_fiche_de_produit/accessoire1.jpg" },
      { id: 38, nom: "Collier en or", prix: "1240,99 DH", image: "photos_fiche_de_produit/accessoire3.jpg" },
      { id: 41, nom: "Sac Marocaine", prix: "1500,99 DH", image: "photos_fiche_de_produit/accessoire7.jpg" },
      { id: 40, nom: "Cherbil Marocaine", prix: "1500,99 DH", image: "photos_fiche_de_produit/accessoire2.jpg" }
    ]
  },
  {
    id: 44,
    nom: "La mdamma en or traditionnelle Marocaine",
    description: "La mdamma est une ceinture traditionnelle marocaine, souvent portée avec le caftan lors de cérémonies ou de mariages. Elle est généralement fabriquée en métal précieux, tel que l'or ou l'argent, et ornée de motifs complexes et de pierres précieuses.",
    images: "photos catalogue/accessoire8.jpg",
    prixAncien: "6000,99 DH",
    prixNouveau: "5000,99 DH",
    similaires: [
      { id: 38, nom: "Collier en or", prix: "1240,99 DH", image: "photos_fiche_de_produit/accessoire3.jpg" },
      { id: 41, nom: "Sac Marocaine", prix: "1500,99 DH", image: "photos_fiche_de_produit/accessoire7.jpg" },
      { id: 40, nom: "Cherbil Marocaine", prix: "1500,99 DH", image: "photos_fiche_de_produit/accessoire2.jpg" },
      { id: 37, nom: "Pack des accessoires", prix: "900,99 DH", image: "photos_fiche_de_produit/accessoire1.jpg" }
    ]
  },
  {
    id: 45,
    nom: "La mdamma en or et agate traditionnelle Marocaine",
    description: "la mdamma en or et agate est un accessoire emblématique de la mode traditionnelle marocaine, alliant beauté, symbolisme et artisanat de qualité. ",
    images: "../photos catalogue/accessoire9.jpg",
    prixAncien: "7000,99 DH",
    prixNouveau: "5800,99 DH",
    similaires: [
      { id: 44, nom: "La mdamma en or Marocaine", prix: "5000,99 DH", image: "photos_fiche_de_produit/accessoire8.jpg" },
      { id: 41, nom: "Sac Marocaine", prix: "1500,99 DH", image: "photos_fiche_de_produit/accessoire7.jpg" },
      { id: 40, nom: "Cherbil Marocaine", prix: "1500,99 DH", image: "photos_fiche_de_produit/accessoire2.jpg" },
      { id: 37, nom: "Pack des accessoires", prix: "900,99 DH", image: "photos_fiche_de_produit/accessoire1.jpg" }
    ]
  },
];

localStorage.setItem("produits", JSON.stringify(produits));



/* =====================================================================
   FRAMEON AGENCY — DONNÉES DU PORTFOLIO
   ---------------------------------------------------------------------
   ⚠️  Tous les projets ci-dessous sont FICTIFS (contenu de démonstration).
   Remplacez-les par vos vrais projets en gardant la même structure.

   Pour ajouter un projet : copiez un bloc { ... }, changez le "slug"
   (identifiant unique, sans espace ni accent), et remplissez les champs.
   La page dédiée sera automatiquement accessible via :
       projet.html?p=<slug>

   Champs :
   - slug          : identifiant dans l'URL
   - titre         : titre du projet
   - client        : nom du client
   - secteur       : secteur d'activité
   - categorie     : doit correspondre à un filtre de la page Réalisations
                     ("Événementiel" | "Marque employeur" |
                      "Témoignages clients" | "Film de marque")
   - annee, livrables, duree
   - accroche      : une phrase résumé (carte + haut de page)
   - cover         : image principale
   - galerie       : liste d'images
   - video         : { type: "fichier", src: "..." }
                     ou { type: "youtube", id: "XXXXXXXXXXX" }
                     ou { type: "vimeo", id: "123456789" }
   - resultats     : chiffres clés [{ valeur, label }]  (les 2 premiers
                     s'affichent sur la carte du portfolio)
   - contexte, attentes[], contraintes[], pistes[], solution,
     production { tournage, montage, equipe }, temoignage { ... }
   - misEnAvant    : true pour l'afficher sur la page d'accueil
   ===================================================================== */

window.FRAMEON_PROJETS = [
  {
    slug: "inauguration-centre-formation-alimak",
    url: "projet-inauguration-centre-formation-alimak.html",
    titre: "Inauguration du nouveau centre de formation : valoriser l'expertise et fédérer les équipes",
    client: "Groupe Alimak",
    secteur: "Industrie & solutions d'accès vertical",
    categorie: "Événementiel",
    annee: "2025",
    livrables: "Film événementiel + reportage photo complet (10+ visuels HD)",
    duree: "Tournage 1 jour · Livraison rapide",
    accroche:
      "Faire rayonner l'inauguration officielle du nouveau centre de formation du Groupe Alimak auprès des clients, partenaires et filiales en France et à l'international.",
    cover: "assets/img/alimak-1.jpg",
    galerie: [
      "assets/img/alimak-1.jpg",
      "assets/img/alimak-2.jpg",
      "assets/img/alimak-6.jpg",
      "assets/img/alimak-5.jpg",
      "assets/img/alimak-3.jpg",
      "assets/img/alimak-8.jpg",
      "assets/img/alimak-4.jpg",
      "assets/img/alimak-7.jpg",
      "assets/img/alimak-9.jpg",
      "assets/img/alimak-10.jpg"
    ],
    video: { type: "fichier", src: "https://pub-6c9e8bcb056c47b68cb0cc7cf6d4802c.r2.dev/alimak.mp4", poster: "assets/img/alimak-1.jpg" },
    misEnAvant: true,
    resultats: [
      { valeur: "+42%", label: "d'engagement sur LinkedIn & réseaux" },
      { valeur: "100%", label: "des temps forts couverts (vidéo + photo)" },
      { valeur: "x3", label: "de visibilité pour le centre de formation" },
      { valeur: "10+", label: "visuels HD livrés pour la presse et le groupe" }
    ],
    contexte:
      "Pour accompagner la montée en compétences de ses équipes et de ses clients sur ses solutions d'accès vertical (Alimak, Tractel, Scanclimber), le Groupe Alimak inaugurait son tout nouveau centre de formation. L'événement réunissait la direction internationale, les équipes techniques, les partenaires et des représentants institutionnels autour de démonstrations en conditions réelles.",
    attentes: [
      "Immortaliser les temps forts institutionnels (coupure du ruban, prises de parole, plantation symbolique de l'olivier)",
      "Mettre en valeur les infrastructures techniques et les démonstrations en hauteur sur les mâts et plateformes",
      "Traduire la convivialité et la fierté des équipes réunies pour l'ouverture du site",
      "Fournir un film dynamique et une banque d'images complète réutilisables en communication interne et externe"
    ],
    contraintes: [
      "Événement en direct sur une seule journée : aucune seconde prise possible sur les gestes inauguraux",
      "Tournage en extérieur sous fort ensoleillement et captation d'installations de grande hauteur",
      "Double exigence : couvrir à la fois le protocole officiel et la technicité industrielle des équipements",
      "Respect strict des règles de sécurité sur les zones de démonstration"
    ],
    pistes: [
      {
        nom: "Le reportage purement institutionnel",
        idee: "Un film centré sur les discours officiels et la cérémonie protocolaire d'inauguration.",
        retenue: false
      },
      {
        nom: "L'alliance de l'humain et de la hauteur technique",
        idee: "Croiser l'émotion des temps forts officiels (ruban, plantation, échanges) avec des plans spectaculaires des structures d'accès vertical en action pour montrer concrètement la vocation du centre.",
        retenue: true
      },
      {
        nom: "Le focus 100 % démonstration technique",
        idee: "Une vidéo orientée uniquement sur les équipements et les parcours de formation pratique.",
        retenue: false
      }
    ],
    solution:
      "Nous avons retenu la piste mêlant dimension humaine et démonstration industrielle. Tout au long de la journée, nous avons alterné la captation sur le vif des moments symboliques (coupure du ruban, plantation de l'olivier, poignées de main, visites) et la mise en valeur esthétique des tours, ascenseurs de chantier et plateformes d'accès vertical. Le film final et le reportage photo donnent immédiatement envie aux clients et collaborateurs de venir se former sur place.",
    production: {
      tournage: "Captation vidéo et photo sur une journée complète avec caméras et optiques professionnelles, prises de vues au sol et en contre-plongée sur les structures.",
      montage: "Montage rythmé mêlant temps forts officiels, démonstrations techniques et ambiance conviviale, avec étalonnage soigné aux couleurs d'Alimak Group.",
      equipe: "Équipe agile vidéo & photographie dédiée sur toute la durée de l'inauguration."
    },
    temoignage: {
      citation:
        "FrameOn a su capter à la fois la dimension officielle de cette inauguration et la réalité technique de notre nouveau centre de formation. Le film et les photos valorisent parfaitement notre savoir-faire auprès de tout le groupe.",
      auteur: "Direction Communication",
      poste: "Groupe Alimak"
    }
  },

  {
    slug: "aftermovie-cabaret-sauvage-paris",
    url: "projet-aftermovie-cabaret-sauvage-paris.html",
    titre: "Aftermovie au Cabaret Sauvage : capter l'énergie de la soirée et faire rayonner l'événement",
    client: "Cabaret Sauvage · Divine Musique & 1.2.3. Sauvage",
    secteur: "Événementiel & spectacle vivant",
    categorie: "Événementiel",
    annee: "2025",
    livrables: "Aftermovie officiel (50 s) + déclinaisons réseaux sociaux",
    duree: "Tournage 1 soirée · Livraison rapide",
    accroche:
      "Restituer toute l'intensité d'une soirée au Cabaret Sauvage à Paris en un aftermovie immersif de 50 secondes, pensé pour engager la communauté et amplifier les prochaines dates.",
    cover: "assets/img/cabaret-1.jpg",
    galerie: [
      "assets/img/cabaret-1.jpg",
      "assets/img/cabaret-3.jpg",
      "assets/img/cabaret-5.jpg",
      "assets/img/cabaret-2.jpg"
    ],
    video: { type: "fichier", src: "https://pub-6c9e8bcb056c47b68cb0cc7cf6d4802c.r2.dev/cabaret-sauvage.mp4", poster: "assets/img/cabaret-1.jpg" },
    misEnAvant: true,
    resultats: [
      { valeur: "+65%", label: "de partages et d'interactions sur les réseaux" },
      { valeur: "85%", label: "de taux de rétention vidéo jusqu'à la fin" },
      { valeur: "x2,5", label: "de portée organique auprès du public parisien" },
      { valeur: "50 s", label: "de condensé d'énergie prêt à diffuser" }
    ],
    contexte:
      "À l'occasion d'une soirée réunissant Divine Musique et 1.2.3. Sauvage sous le chapiteau emblématique du Cabaret Sauvage à Paris, les organisateurs souhaitaient un aftermovie percutant. L'objectif : prolonger l'émotion de la soirée auprès des participants présents et donner immédiatement envie à ceux qui l'avaient manquée de réserver pour la prochaine édition.",
    attentes: [
      "Retranscrire l'atmosphère unique du Cabaret Sauvage, entre jeux de lumières et proximité avec les artistes",
      "Mettre en valeur à la fois la performance aux platines et la ferveur du public",
      "Livrer un format nerveux, immersif et parfaitement calibré pour Instagram et les réseaux sociaux",
      "Renforcer l'image et la désirabilité des événements signés Divine Musique & 1.2.3. Sauvage"
    ],
    contraintes: [
      "Conditions de très basse lumière avec éclairages stroboscopiques et néons à forts contrastes",
      "Foule dense et mouvements permanents autour de la scène et dans la fosse",
      "Captation sur le vif, sans jamais gêner les artistes ni l'expérience du public",
      "Montage ultra-rythmé exigeant une synchronisation millimétrée avec la bande-son"
    ],
    pistes: [
      {
        nom: "Le récapitulatif linéaire de la soirée",
        idee: "Suivre chronologiquement l'ouverture des portes jusqu'à la fin de la nuit.",
        retenue: false
      },
      {
        nom: "L'immersion sensorielle au cœur du chapiteau",
        idee: "Plonger le spectateur dès la première seconde entre les mains des DJ, les regards du public et les jeux de lumière, avec une montée en puissance calée sur le drop musical.",
        retenue: true
      },
      {
        nom: "Focus exclusif sur la scène",
        idee: "Un film centré uniquement sur les performances des artistes aux platines.",
        retenue: false
      }
    ],
    solution:
      "Nous avons retenu la piste de l'immersion sensorielle. En jouant avec des optiques lumineuses à grande ouverture, nous avons alterné plans très serrés sur les platines, silhouettes découpées dans les faisceaux rouges et bleus du Cabaret Sauvage, et réactions spontanées au cœur de la foule. Le montage en 50 secondes monte progressivement en intensité pour maximiser le taux de complétion et les partages.",
    production: {
      tournage: "Captation nocturne mobile au cœur de la scène et du public avec caméras et optiques professionnelles à grande ouverture.",
      montage: "Montage dynamique synchronisé au tempo, travail de transitions et étalonnage soigné mettant en valeur les teintes néon et l'ambiance du chapiteau.",
      equipe: "Réalisateur-cadreur et monteur dédiés à l'événement."
    },
    temoignage: {
      citation:
        "L'aftermovie capte exactement l'énergie qu'il y avait sous le chapiteau ce soir-là. C'est devenu notre meilleur atout pour annoncer nos prochaines dates.",
      auteur: "Équipe organisatrice",
      poste: "Soirée Cabaret Sauvage · Divine Musique & 1.2.3. Sauvage"
    }
  },

  {
    slug: "evenement-interne-agences-foncia",
    url: "projet-evenement-interne-agences-foncia.html",
    titre: "Réunion inter-agences & direction : fédérer les équipes autour d'un événement interne",
    client: "Foncia",
    secteur: "Immobilier & services résidentiels",
    categorie: "Événementiel",
    annee: "2025",
    livrables: "Aftermovie officiel + reportage photo complet (jour & soirée)",
    duree: "Livraison selon les deadlines client",
    accroche:
      "Captation vidéo et reportage photo d'une journée et soirée réunissant plusieurs agences Foncia et la direction pour renforcer la cohésion des équipes.",
    cover: "assets/img/foncia-5.jpg",
    galerie: [
      "assets/img/foncia-5.jpg",
      "assets/img/foncia-8.jpg",
      "assets/img/foncia-7.jpg",
      "assets/img/foncia-1.jpg",
      "assets/img/foncia-2.jpg",
      "assets/img/foncia-3.jpg",
      "assets/img/foncia-4.jpg",
      "assets/img/foncia-6.jpg",
      "assets/img/foncia-11.jpg",
      "assets/img/foncia-12.jpg"
    ],
    video: { type: "fichier", src: "https://pub-6c9e8bcb056c47b68cb0cc7cf6d4802c.r2.dev/foncia.mp4", poster: "assets/img/foncia-5.jpg" },
    misEnAvant: true,
    resultats: [
      { valeur: "98%", label: "de retours positifs en interne" },
      { valeur: "250+", label: "photos HD livrées (jour & nuit)" },
      { valeur: "+42%", label: "d'engagement sur la communication interne & RH" },
      { valeur: "Multi-agences", label: "collaborateurs & direction réunis" }
    ],
    contexte:
      "Plusieurs agences Foncia ainsi que la direction se réunissaient à l'occasion d'un grand événement interne organisé par leurs soins. L'enjeu était d'immortaliser à la fois les temps d'échange de la journée et l'énergie festive de la soirée, afin de renforcer le sentiment d'appartenance entre les agences et de nourrir la marque employeur.",
    attentes: [
      "Fédérer les collaborateurs de plusieurs agences et la direction autour d'un souvenir commun",
      "Restituer la convivialité de la journée comme l'ambiance festive de la soirée",
      "Disposer d'un aftermovie fédérateur et d'une banque d'images incarnées pour la communication interne",
      "Capter des sourires et des interactions authentiques sans jamais figer les échanges"
    ],
    contraintes: [
      "Couverture continue du jour jusqu'à la nuit avec de forts changements de lumière",
      "Multiplicité des moments forts (accueil, repas convivial, échanges informels, soirée dansante)",
      "Savoir rester discret pour laisser les équipes profiter pleinement de leur événement",
      "Double exigence : assurer simultanément la captation vidéo et un reportage photo complet"
    ],
    pistes: [
      {
        nom: "Un compte-rendu purement institutionnel",
        idee: "Un film centré sur les discours et les aspects formels de la rencontre inter-agences.",
        retenue: false
      },
      {
        nom: "Un clip uniquement axé sur la soirée",
        idee: "Ne couvrir que la fête du soir, au risque de perdre l'esprit d'équipe et les échanges de la journée.",
        retenue: false
      },
      {
        nom: "Un aftermovie solaire & fédérateur du jour à la nuit",
        idee: "Un récit progressif qui démarre sous le soleil avec les retrouvailles inter-agences et les moments de partage, avant de monter en intensité jusqu'à la soirée.",
        retenue: true
      }
    ],
    solution:
      "Nous avons retenu la troisième piste : accompagner l'événement du jour jusqu'à la nuit en privilégiant l'humain et la spontanéité. En mêlant portraits naturels, photos de groupe inter-agences et plans d'ambiance dynamiques, l'aftermovie et le reportage photo retranscrivent fidèlement la proximité entre les équipes et la direction.",
    production: {
      tournage: "Couverture jour et nuit en immersion au cœur des équipes, avec caméras et optiques professionnelles adaptées aussi bien au plein soleil qu'aux basses lumières de soirée.",
      montage: "Montage évolutif suivant le fil de la journée jusqu'à la piste de danse, étalonnage chaleureux et sélection-retouche de plus de 250 photos HD.",
      equipe: "Équipe photo & vidéo dédiée sur l'ensemble de l'événement."
    },
    temoignage: {
      citation:
        "Les vidéos et les photos reflètent exactement l'état d'esprit de cette journée : de la proximité, de la bonne humeur et une vraie cohésion entre nos agences et la direction.",
      auteur: "Équipe organisatrice",
      poste: "Événement inter-agences · Foncia"
    }
  },

  {
    slug: "campagne-social-media-sochic-paris",
    url: "projet-campagne-social-media-sochic-paris.html",
    titre: "Campagne réseaux sociaux : sublimer le luxe de seconde main au cœur de Paris",
    client: "SoChic Paris",
    secteur: "Mode & luxe de seconde main",
    categorie: "Publicité & réseaux sociaux",
    annee: "2025",
    livrables: "2 films verticaux (Lifestyle Outdoor & Mode Indoor) + shooting photo éditorial (12 visuels)",
    duree: "Livraison selon les deadlines client",
    accroche:
      "Une campagne publicitaire vidéo et photo pensée pour les réseaux sociaux afin d'incarner l'élégance parisienne et valoriser des pièces de luxe de seconde main.",
    cover: "assets/img/sochic-cover.jpg",
    galerie: [
      "assets/img/sochic-1.jpg",
      "assets/img/sochic-2.jpg",
      "assets/img/sochic-3.jpg",
      "assets/img/sochic-4.jpg",
      "assets/img/sochic-5.jpg",
      "assets/img/sochic-6.jpg",
      "assets/img/sochic-7.jpg",
      "assets/img/sochic-8.jpg",
      "assets/img/sochic-9.jpg",
      "assets/img/sochic-10.jpg",
      "assets/img/sochic-11.jpg",
      "assets/img/sochic-12.jpg"
    ],
    video: {
      type: "fichier",
      src: "https://pub-6c9e8bcb056c47b68cb0cc7cf6d4802c.r2.dev/sochic-lifestyle.mp4",
      poster: "assets/img/sochic-lifestyle-poster.jpg",
      vertical: true
    },
    videos: [
      {
        type: "fichier",
        src: "https://pub-6c9e8bcb056c47b68cb0cc7cf6d4802c.r2.dev/sochic-lifestyle.mp4",
        poster: "assets/img/sochic-lifestyle-poster.jpg",
        label: "01 · Film Lifestyle Outdoor — Paris",
        vertical: true
      },
      {
        type: "fichier",
        src: "https://pub-6c9e8bcb056c47b68cb0cc7cf6d4802c.r2.dev/sochic-indoor.mp4",
        poster: "assets/img/sochic-indoor-poster.jpg",
        label: "02 · Film Mode Indoor — Silhouettes & accessoires",
        vertical: true
      }
    ],
    misEnAvant: false,
    resultats: [
      { valeur: "+38%", label: "de taux d'engagement sur Instagram & Reels" },
      { valeur: "2 films", label: "publicitaires verticaux (Outdoor & Indoor)" },
      { valeur: "+26%", label: "de clics vers le catalogue en ligne" },
      { valeur: "12+", label: "visuels éditoriaux déclinés pour les réseaux" }
    ],
    contexte:
      "SoChic Paris est une entreprise spécialisée dans la revente de vêtements et d'accessoires de luxe de seconde main. Pour accélérer sa visibilité sur les réseaux sociaux et séduire une clientèle exigeante, la marque souhaitait une campagne publicitaire capable d'associer les codes des grandes maisons de couture à la fraîcheur des formats courts.",
    attentes: [
      "Créer des contenus vidéo et photo à forte désirabilité pour les réseaux sociaux (Reels, TikTok, campagnes sponsorisées)",
      "Mettre en valeur l'authenticité et l'état irréprochable des pièces de seconde main (sacs iconiques, foulards en soie, bijoux, prêt-à-porter)",
      "Ancrer l'ADN de la marque dans un univers résolument parisien et raffiné",
      "Varier les ambiances entre extérieur lifestyle et intérieur feutré pour multiplier les points de contact"
    ],
    contraintes: [
      "Enchaîner plusieurs décors parisiens (terrasse de café, bouche de métro Art nouveau, architecture haussmannienne, intérieur) sur un temps de tournage maîtrisé",
      "Sublimer les matières nobles (cuir grainé Épi, toile monogramme, soie, métal précieux) malgré les variations de lumière",
      "Concevoir un cadrage natif pensé dès la prise de vue pour les formats verticaux des réseaux sociaux",
      "Produire simultanément deux films publicitaires distincts et une série photographique cohérente"
    ],
    pistes: [
      {
        nom: "Un catalogue studio sur fond neutre",
        idee: "Présenter les pièces une par une en studio sur fond uni : lisible mais trop froid pour capter l'attention dans un fil social media.",
        retenue: false
      },
      {
        nom: "Un format micro-trottoir ou haul face caméra",
        idee: "Un format parlé très spontané, mais moins aligné avec le positionnement haut de gamme et l'élégance attendue dans l'univers du luxe.",
        retenue: false
      },
      {
        nom: "Un diptyque éditorial : Lifestyle Parisien & Mode Indoor",
        idee: "Deux films complémentaires : une déambulation solaire dans les lieux iconiques de Paris et une séquence indoor feutrée centrée sur l'attitude, les détails et les accessoires.",
        retenue: true
      }
    ],
    solution:
      "Nous avons retenu le diptyque éditorial afin d'offrir à SoChic Paris une campagne complète : le film « Lifestyle » capte immédiatement l'attention grâce aux décors parisiens (terrasse, voiture de collection, bouche de métro Metropolitain), tandis que le film « Mode Indoor » installe une atmosphère plus intimiste et couture. La série photo prolonge la campagne sur le feed et les annonces publicitaires.",
    production: {
      tournage: "Tournage en extérieur dans Paris et en intérieur avec mannequin, stylisme soigné, caméras et optiques professionnelles à grande ouverture.",
      montage: "Deux montages rythmés calibrés pour la rétention sur les réseaux sociaux, étalonnage éditorial respectant la fidélité des couleurs des pièces de luxe.",
      equipe: "Réalisateur-cadreur, photographe, direction artistique et mannequin."
    },
    temoignage: {
      citation:
        "La campagne donne immédiatement une dimension couture à nos pièces de seconde main. Les deux ambiances vidéo et la série photo nous ont permis d'alimenter nos réseaux avec une vraie cohérence visuelle.",
      auteur: "Équipe SoChic Paris",
      poste: "Campagne publicitaire réseaux sociaux · Luxe seconde main"
    }
  },

  {
    slug: "instant-parisien-influence-reseaux-sociaux",
    url: "projet-instant-parisien-influence-reseaux-sociaux.html",
    titre: "« Instant Parisien » : développer l'audience d'une créatrice et séduire les marques",
    client: "Yen · Créatrice de contenu",
    secteur: "Influence, mode & lifestyle",
    categorie: "Publicité & réseaux sociaux",
    annee: "2025",
    livrables: "Film court vertical 4K (Reels / TikTok) + déclinaisons visuelles",
    duree: "Livraison selon les deadlines client",
    accroche:
      "Un film court à l'esthétique éditoriale tourné de nuit dans Paris pour générer des vues, développer l'audience et attirer l'attention de marques partenaires.",
    cover: "assets/img/yen-cover.jpg?v=2",
    galerie: [
      "assets/img/yen-3.jpg?v=2",
      "assets/img/yen-5.jpg",
      "assets/img/yen-2.jpg",
      "assets/img/yen-1.jpg"
    ],
    video: {
      type: "fichier",
      src: "https://pub-6c9e8bcb056c47b68cb0cc7cf6d4802c.r2.dev/instant-parisien.mp4",
      poster: "assets/img/yen-3.jpg?v=2",
      vertical: true
    },
    misEnAvant: false,
    resultats: [
      { valeur: "+48%", label: "de portée organique sur Reels & TikTok" },
      { valeur: "+1 300", label: "nouveaux abonnés qualifiés" },
      { valeur: "3x", label: "plus de prises de contact de marques" },
      { valeur: "4K 9:16", label: "qualité éditoriale native mobile" }
    ],
    contexte:
      "Pour franchir un cap sur les réseaux sociaux, cette influenceuse souhaitait sortir des contenus filmés au smartphone et proposer une courte vidéo à l'esthétique magazine. Le double objectif était clair : maximiser les vues pour élargir son audience, tout en démontrant aux marques de mode, de joaillerie et de lifestyle sa capacité à incarner un univers haut de gamme.",
    attentes: [
      "Augmenter l'audience et générer un fort volume de vues organiques sur Instagram Reels et TikTok",
      "Attirer l'attention de marques potentielles (mode, accessoires, horlogerie, joaillerie) pour décrocher des partenariats",
      "Sublimer la créatrice ainsi que les pièces portées (bijoux, montre, pochette, silhouettes) dans un décor parisien iconique",
      "Se démarquer immédiatement dans le flux grâce à une image et un montage dignes d'une campagne de marque"
    ],
    contraintes: [
      "Tournage nocturne en extérieur face à la Tour Eiffel et dans le métro parisien avec très peu de lumière ambiante",
      "Capter l'attention dès les 2 premières secondes pour maximiser le taux de complétion sur les algorithmes",
      "Équilibre subtil entre plans larges d'atmosphère parisienne et plans rapprochés valorisant les détails (bagues, montre, matières)",
      "Équipe légère et agile pour tourner rapidement dans plusieurs lieux emblématiques de Paris"
    ],
    pistes: [
      {
        nom: "Une vidéo « Get Ready With Me » en intérieur",
        idee: "Un format face caméra classique montrant la préparation de la tenue : familier mais moins différenciant auprès des marques premium.",
        retenue: false
      },
      {
        nom: "Un lookbook statique en journée",
        idee: "Une succession de poses mode en plein jour, esthétique mais manquant de tension narrative et de cinéma.",
        retenue: false
      },
      {
        nom: "« Instant Parisien » : une errance nocturne cinématographique",
        idee: "Une capsule visuelle rythmée alternant couleur et noir & blanc, mêlant l'énergie du métro parisien, l'élégance des détails bijoux/accessoires et la magie de la Tour Eiffel illuminée.",
        retenue: true
      }
    ],
    solution:
      "La piste « Instant Parisien » a été retenue pour son fort pouvoir d'attraction : elle fonctionne à la fois comme un contenu viral à forte rétention et comme une véritable carte de visite auprès des directeurs artistiques de marques. Le jeu de contrastes entre le noir et blanc intemporel et l'or de la Tour Eiffel donne immédiatement une signature visuelle mémorable.",
    production: {
      tournage: "Tournage de nuit dans Paris (abords de la Tour Eiffel, quais et station de métro) avec caméras et optiques professionnelles lumineuses en 4K verticale.",
      montage: "Montage dynamique calé sur la musique, alternance artistique couleur / noir & blanc, étalonnage soigné mettant en valeur les teintes chair et l'éclat des bijoux.",
      equipe: "Réalisateur-cadreur et monteur-étalonneur dédiés."
    },
    temoignage: {
      citation:
        "Cette vidéo a complètement changé la perception de mon profil : au-delà des vues et des nouveaux abonnés, plusieurs marques m'ont contactée directement après l'avoir vue.",
      auteur: "Yen",
      poste: "Créatrice de contenu · Projet « Instant Parisien »"
    }
  },

  {
    slug: "presentation-complexe-padel-95",
    url: "projet-presentation-complexe-padel-95.html",
    titre: "Présentation du complexe Padel 95 : promouvoir le club sur les réseaux et sur écran géant en entrée",
    client: "Padel 95 Pontoise",
    secteur: "Complexe sportif & loisirs indoor",
    categorie: "Film de marque",
    annee: "2025",
    livrables: "Film de présentation 4K vertical (écran géant LED d'accueil & réseaux sociaux)",
    duree: "Livraison selon les deadlines client",
    accroche:
      "Un film de présentation immersif conçu à la fois pour les réseaux sociaux et pour tourner en boucle sur un immense panneau vidéo à l'entrée du complexe.",
    cover: "assets/img/padel-cover.jpg?v=3",
    galerie: [
      "assets/img/padel-4.jpg?v=3",
      "assets/img/padel-1.jpg",
      "assets/img/padel-2.jpg",
      "assets/img/padel-3.jpg",
      "assets/img/padel-5.jpg",
      "assets/img/padel-6.jpg"
    ],
    video: {
      type: "fichier",
      src: "https://pub-6c9e8bcb056c47b68cb0cc7cf6d4802c.r2.dev/padel95.mp4",
      poster: "assets/img/padel-4.jpg?v=3",
      vertical: true
    },
    misEnAvant: false,
    resultats: [
      { valeur: "100%", label: "diffusion continue sur l'écran géant d'entrée" },
      { valeur: "+35%", label: "de réservations de terrains via les réseaux" },
      { valeur: "4K LED", label: "rendu calibré grand format & mobile" },
      { valeur: "360°", label: "terrains, coaching & club-house valorisés" }
    ],
    contexte:
      "Ce complexe de Padel souhaitait une vidéo de présentation complète de ses installations. L'objectif était double : promouvoir le club et l'expérience joueur sur les réseaux sociaux pour attirer de nouveaux pratiquants, mais aussi et surtout diffuser le film en boucle sur un immense panneau vidéo vertical installé dès l'entrée du complexe.",
    attentes: [
      "Créer un film spectaculaire capable d'habiller en continu l'immense panneau vidéo à l'entrée du complexe",
      "Décliner et utiliser ce même contenu pour promouvoir le club sur les réseaux sociaux (Instagram, TikTok, Facebook)",
      "Montrer l'ensemble de l'expérience : qualité des pistes indoor, intensité du jeu, accompagnement par les coachs et convivialité du club-house / bar",
      "Fonctionner parfaitement avec le son sur les réseaux sociaux, comme sans le son en affichage dynamique dans le hall d'accueil"
    ],
    contraintes: [
      "Exigence de netteté et de contraste en 4K verticale pour un affichage sur panneau LED géant sans aucune perte de qualité",
      "Éclairage mixte complexe entre les projecteurs zénithaux des terrains bleus et l'ambiance feutrée du salon lounge",
      "Capter la vitesse de jeu et les échanges de padel tout en conservant une image fluide et lisible de loin",
      "Concevoir un montage qui se prête à une lecture en boucle continue (loop) à l'accueil du club"
    ],
    pistes: [
      {
        nom: "Une visite guidée descriptive avec voix off",
        idee: "Un tour du propriétaire commenté : pertinent sur le web, mais inutilisable en boucle sans le son sur le panneau vidéo d'entrée.",
        retenue: false
      },
      {
        nom: "Un clip 100 % sportif centré uniquement sur les matchs",
        idee: "Montrer uniquement des échanges sur le terrain, au risque d'occulter l'espace détente, le bar et la convivialité qui font la force du complexe.",
        retenue: false
      },
      {
        nom: "Une immersion complète : du terrain au club-house",
        idee: "Un film visuel ultra-rythmé, pensé en 4K verticale native, qui alterne vues architecturales des terrains, coaching, points spectaculaires et moments de détente au lounge.",
        retenue: true
      }
    ],
    solution:
      "Nous avons retenu l'immersion complète : un film 100 % visuel et rythmé qui capte immédiatement le regard des visiteurs dès leur arrivée devant le panneau vidéo géant, tout en performant sur les réseaux sociaux. Le parcours montre la hauteur sous plafond des pistes, l'énergie des joueurs et des coachs, ainsi que l'espace lounge et bar pour l'après-match.",
    production: {
      tournage: "Captation en 4K verticale à haute cadence (slow-motion sur les frappes et échanges), plans d'ensemble en hauteur et mise en valeur du club-house avec caméras et optiques professionnelles.",
      montage: "Montage dynamique pensé pour tourner en boucle fluide sur écran géant LED comme en format Reels, étalonnage contrasté sublimant le bleu des pistes et la chaleur du lounge.",
      equipe: "Réalisateur-cadreur et monteur-étalonneur dédiés."
    },
    temoignage: {
      citation:
        "Sur l'écran géant de l'entrée, la vidéo fait son effet dès que les joueurs franchissent la porte, et elle nous apporte régulièrement de nouvelles réservations via Instagram.",
      auteur: "Direction Padel 95",
      poste: "Complexe Padel 95 Pontoise"
    }
  },

  {
    slug: "presentation-cowool-cergy-coliving-coworking",
    url: "projet-presentation-cowool-cergy-coliving-coworking.html",
    titre: "Présentation de CoWool Cergy : un film vertical attractif au cœur du coliving & coworking",
    client: "CoWool Cergy",
    secteur: "Coliving, coworking & hospitalité",
    categorie: "Film de marque",
    annee: "2025",
    livrables: "Film de présentation 4K vertical (9:16) + déclinaisons réseaux sociaux",
    duree: "Livraison selon les deadlines client",
    accroche:
      "Une vidéo verticale rythmée et chaleureuse conçue pour faire découvrir en une minute l'ensemble des espaces de vie, de travail, de sport et de restauration de CoWool Cergy.",
    cover: "assets/img/cowool-cover.jpg",
    galerie: [
      "assets/img/cowool-1.jpg",
      "assets/img/cowool-2.jpg",
      "assets/img/cowool-3.jpg",
      "assets/img/cowool-5.jpg",
      "assets/img/cowool-6.jpg",
      "assets/img/cowool-7.jpg"
    ],
    video: {
      type: "fichier",
      src: "https://pub-6c9e8bcb056c47b68cb0cc7cf6d4802c.r2.dev/cowool.mp4",
      poster: "assets/img/cowool-2.jpg",
      vertical: true
    },
    misEnAvant: false,
    resultats: [
      { valeur: "6 espaces", label: "mis en scène dans un parcours fluide" },
      { valeur: "+44%", label: "de taux de complétion sur les réseaux" },
      { valeur: "4K 9:16", label: "format vertical natif pensé mobile" },
      { valeur: "100%", label: "de l'esprit « Cosyliving & Cosyworking »" }
    ],
    contexte:
      "CoWool Cergy réunit dans un même lieu hybride du coliving (« Cosyliving ») et du coworking (« Cosyworking »), complétés par des salles de réunion, un espace fitness et un espace restauration / bar (F&B). L'objectif était de créer une vidéo verticale immédiatement attractive, capable de faire ressentir l'énergie du lieu et la diversité de ses espaces en à peine une minute.",
    attentes: [
      "Présenter de façon claire, vivante et incarnée tous les espaces clés : coworking, salles de réunion, espace cool, fitness et bar F&B",
      "Adopter un format vertical natif parfaitement adapté aux réseaux sociaux (Instagram Reels, TikTok, LinkedIn) et à la consultation mobile",
      "Retranscrire l'atmosphère lumineuse sous la verrière et l'esprit communautaire « Be Cool, Be CoWool »",
      "Donner envie aussi bien aux télétravailleurs et entreprises qu'aux futurs résidents de pousser la porte du lieu"
    ],
    contraintes: [
      "Multiplicité des décors et des ambiances lumineuses (grande verrière zénithale, salle de sport, bar feutré, espaces de travail)",
      "Rythme soutenu pour présenter l'ensemble de l'offre en 60 secondes sans jamais perdre le spectateur",
      "Coordination des figurants et des mises en situation (travail collaboratif, sport, service au bar) pour un rendu naturel",
      "Habillage graphique et titrages intégrés directement dans le cadre vertical 9:16"
    ],
    pistes: [
      {
        nom: "Une visite architecturale sans présence humaine",
        idee: "Filmer uniquement les espaces vides en plans larges : esthétique, mais trop froid pour traduire l'esprit de communauté propre à CoWool.",
        retenue: false
      },
      {
        nom: "Une interview classique de l'équipe dirigeante",
        idee: "Un format parlé explicatif, moins immédiat et moins engageant pour capter l'attention sur les réseaux sociaux.",
        retenue: false
      },
      {
        nom: "Un parcours immersif incarné à travers la journée d'un résident-coworker",
        idee: "Une visite rythmée et solaire où l'on suit des visages réels passant du coworking à la salle de réunion, puis de l'espace fitness au bar F&B, ponctuée de repères visuels clairs.",
        retenue: true
      }
    ],
    solution:
      "Nous avons retenu le parcours immersif incarné : dès l'ouverture sous la verrière iconique, le spectateur découvre chaque facette de CoWool Cergy à travers des scènes de vie dynamiques, des transitions fluides et un titrage épuré qui identifie chaque espace (Coworking, Espace Cool, Salle de réunion, Espace Fitness, Espace F&B).",
    production: {
      tournage: "Tournage en 4K verticale sur l'ensemble du site de CoWool Cergy avec mouvements stabilisés, lumière naturelle sous verrière et appoint lumineux dans les espaces intérieurs.",
      montage: "Montage dynamique au rythme de la bande-son, intégration des bandeaux typographiques par espace et étalonnage lumineux valorisant le bois, le végétal et l'architecture.",
      equipe: "Réalisateur-cadreur, monteur-étalonneur et figurants sur site."
    },
    temoignage: {
      citation:
        "La vidéo résume parfaitement l'ADN de CoWool Cergy en une minute : on y voit à la fois la qualité de nos espaces de travail et la vraie convivialité du lieu.",
      auteur: "Équipe CoWool Cergy",
      poste: "Cosyliving & Cosyworking · Cergy"
    }
  },

  {
    slug: "reportage-photo-showroom-securite-i-lynx",
    url: "projet-reportage-photo-showroom-securite-i-lynx.html",
    titre: "Valoriser le showroom haute sécurité d'i-Lynx par un reportage photographique",
    client: "i-Lynx · Pardalys",
    secteur: "Systèmes de sécurité, sûreté & vidéosurveillance",
    categorie: "Film de marque",
    annee: "2025",
    livrables: "Reportage photo corporate & industriel HD (plus de 55 visuels livrés)",
    duree: "Livraison selon les deadlines client",
    accroche:
      "Une série photographique précise et immersive pour mettre en valeur le showroom technologique d'i-Lynx : mur d'écrans de supervision, contrôle d'accès, caméras IA et simulateur d'entraînement.",
    cover: "assets/img/ilynx-cover.jpg?v=2",
    galerie: [
      "assets/img/ilynx-4.jpg",
      "assets/img/ilynx-1.jpg",
      "assets/img/ilynx-2.jpg",
      "assets/img/ilynx-3.jpg",
      "assets/img/ilynx-5.jpg",
      "assets/img/ilynx-6.jpg",
      "assets/img/ilynx-7.jpg",
      "assets/img/ilynx-8.jpg",
      "assets/img/ilynx-9.jpg",
      "assets/img/ilynx-10.jpg",
      "assets/img/ilynx-11.jpg",
      "assets/img/ilynx-12.jpg"
    ],
    video: null,
    misEnAvant: false,
    resultats: [
      { valeur: "55+", label: "photos HD livrées pour le web & les supports" },
      { valeur: "100%", label: "des technologies du showroom valorisées" },
      { valeur: "4 pôles", label: "supervision, accès, détection & simulation" },
      { valeur: "B2B", label: "banque d'images propriétaire clé en main" }
    ],
    contexte:
      "Pour accompagner son développement commercial, l'entreprise de sécurité i-Lynx souhaitait mettre en avant son showroom technologique à travers un reportage photographique professionnel. L'enjeu était de montrer concrètement à ses clients et partenaires l'étendue de ses solutions : mur d'images de télésurveillance, barrières et contrôle d'accès LPR, caméras motorisées, générateur de brouillard anti-intrusion et salle de simulation.",
    attentes: [
      "Mettre en valeur l'ensemble du showroom i-Lynx avec un rendu haut de gamme, technologique et crédible",
      "Photographier à la fois les vues d'ensemble (mur d'écrans, barrière automatique, totem d'urgence) et les détails techniques (caméras dômes PTZ, claviers biométriques, pupitre de commande)",
      "Incarner l'expertise humaine avec des mises en situation d'opérateurs au poste de supervision et en salle de simulation",
      "Constituer une banque d'images complète pour le site web, les présentations commerciales et LinkedIn"
    ],
    contraintes: [
      "Gestion des fortes différences d'exposition entre le mur d'écrans LED, l'enseigne lumineuse i-Lynx et l'éclairage ambiant du showroom",
      "Éviter le moiré et les reflets parasites sur les moniteurs de contrôle, les optiques de caméras et les panneaux noirs brillants",
      "Capturer des ambiances très contrastées : du showroom lumineux jusqu'à la salle de simulation laser plongée dans la pénombre bleutée et aux tests de brouillard opacifiant",
      "Assurer une parfaite netteté sur les interfaces logicielles d'analyse vidéo et les équipements électroniques"
    ],
    pistes: [
      {
        nom: "Des photos catalogue isolées produit par produit",
        idee: "Photographier chaque caméra ou boîtier séparément : utile pour une fiche technique, mais incapable de montrer l'intégration globale du showroom.",
        retenue: false
      },
      {
        nom: "Des vues grand-angle purement immobilières",
        idee: "Montrer les pièces vides en très grand-angle, au risque de perdre la dimension technologique et opérationnelle des équipements.",
        retenue: false
      },
      {
        nom: "Un reportage immersif alliant architecture du showroom, précision produit et posture métier",
        idee: "Alterner des perspectives structurées du showroom complet, des plans serrés sur les optiques et terminaux, et des mises en situation réelles au pupitre de supervision et en salle tactique.",
        retenue: true
      }
    ],
    solution:
      "Nous avons retenu cette approche complète en trois niveaux de lecture : les vues larges installent immédiatement l'envergure du showroom i-Lynx, les gros plans soulignent la qualité du matériel (caméras, contrôle d'accès, pupitres), et les scènes incarnées démontrent le savoir-faire opérationnel des équipes.",
    production: {
      tournage: "Prises de vues au boîtier plein format haute définition avec optiques lumineuses, équilibrage précis des températures de couleur entre écrans LED, néons et éclairage ambiant.",
      montage: "Sélection rigoureuse, développement colorimétrique soigné (fidélité du rouge identitaire i-Lynx et propreté des noirs) et livraison en haute définition.",
      equipe: "Photographe corporate & industriel dédié."
    },
    temoignage: {
      citation:
        "Les photos mettent parfaitement en valeur notre showroom et la technicité de nos équipements. C'est un vrai atout pour nos présentations clients et notre communication.",
      auteur: "Direction i-Lynx",
      poste: "Showroom systèmes de sécurité & sûreté"
    }
  }
];


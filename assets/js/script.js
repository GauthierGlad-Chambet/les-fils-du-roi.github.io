//////////////////////////////////////////////////////////////////////////////////
///////////////        Setup des variables générales        /////////////////////
////////////////////////////////////////////////////////////////////////////////

// récupération des différents éléments du burger et le menu de navigation détaillé
const burger = document.querySelector(".Burger");
const ligne1 = document.querySelector(".Ligne1");
const ligne2 = document.querySelector(".Ligne2");
const ligne3 = document.querySelector(".Ligne3");
const menunavoverlay = document.querySelector(".MenuNavOverlay");
const boutonNavOverlay = document.querySelectorAll(".BoutonNavOverlay");

//récupère tous les éléments du DOm
const all = document.querySelectorAll("*");
//récupère le bouton accessibilité
const btnAccessibilite = document.getElementById("IconeAccessibilite");

//Récupère le bouton pour l'anglais
const btnEn = document.getElementById("anglais");
//Récupère le bouton pour l'anglais
const btnFr = document.getElementById("francais");
//Récupère tous les éléments dont la langue peut switcher
const elementsTraduisibles = document.querySelectorAll("[data-lang-fr]");
//récupère la langue active dans le stockage local
const lang = localStorage.getItem("langue");

//Récupère la barre clignottante de la section accueil de la page index
const barreClignottante = document.getElementById("BarreClignottante");

// récupération des vidéos de la page index
const videos = document.querySelectorAll(".VideoSansControls");

//Récupère l'id de main, utile pour le carrousel
const pageId = document.querySelector("main").id;
// récupération des différents éléments du carrousel et des articles
const blocAlphabet = document.querySelector("#Alphabet");
const carousel = document.querySelector("#Carousel");
const articleTitre = document.getElementById("ArticleTitre");
const articleImage = document.getElementById("ArticleImage");
const articleContenu = document.getElementById("ArticleContenu");
const flechegauche = document.getElementById("FlecheGauche");
const flechedroite = document.getElementById("FlecheDroite");
const flechehaut = document.getElementById("FlecheHaut");

//(Objet JSON en javascript qui contient des propriétés qui ont chacune des infos)
// En gros, c'est une BDD des informations à afficher dans et via les carrousels personnage, culture et géographie
const personnageData = {
  Lula: {
    titre: "Lula",
    vignette: "assets/images/lula_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/lula_332x1024.jpg",
    imageL: "assets/images/lula_332x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Lula",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Belsan: {
    titre: "Belsan",
    vignette: "assets/images/belsan_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/belsan_437x982.jpg",
    imageL: "assets/images/belsan_437x982.jpg",
    contenu:
      "Belsan NomDeFamille est le roi du pays unifié de Belleterre. Il est le frère du héros et fait plein de choses dans la vie.",
    titreEn: "Belsan",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Lythan: {
    titre: "Lythan",
    vignette: "assets/images/lythan_vignette_250x250.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/lythan_400x841.jpg",
    imageL: "assets/images/lythan_487x1024.jpg",
    contenu:
      "Charlie est un magicien mystérieux qui garde de nombreux secrets.",
    titreEn: "Lythan",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Garvian: {
    titre: "Garvian",
    vignette: "assets/images/garvian_vignette_229x229.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/garvian_400x741.jpg",
    imageL: "assets/images/garvian_553x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Garvian",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Niko: {
    titre: "Niko",
    vignette: "assets/images/niko_vignette_250x250.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/niko_400x857.jpg",
    imageL: "assets/images/niko_478x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Niko",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Myriana: {
    titre: "Myriana",
    vignette: "assets/images/myriana_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/myriana_400x800.jpg",
    imageL: "assets/images/myriana_512x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Myriana",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Johan: {
    titre: "Johan",
    vignette: "assets/images/johan_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/johan_400x779.jpg",
    imageL: "assets/images/johan_526x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Johan",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Parzanuph: {
    titre: "Parzanuph",
    vignette: "assets/images/parzanuph_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/parzanuph_409x1024.jpg",
    imageL: "assets/images/parzanuph_409x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Parzanuph",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Valkilien: {
    titre: "Valkilien",
    vignette: "assets/images/valkilien_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/valkilien_418x1024.jpg",
    imageL: "assets/images/valkilien_418x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Valkilien",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Illyas: {
    titre: "Illyas",
    vignette: "assets/images/illyas_vignette_247x247.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/illyas_328x1024.jpg",
    imageL: "assets/images/illyas_328x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Illyas",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  DuchesseDeRivesdOr: {
    titre: "Duchesse de Rives d'Or",
    vignette: "assets/images/duchesse_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/duchesse_400x721.jpg",
    imageL: "assets/images/duchesse_568x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Duchess of Gilded Banks",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
};

const cultureData = {
  Rùnites: {
    titre: "Rùnites",
    vignette: "assets/images/rùnites_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/rùnites_400x400.jpg",
    imageL: "assets/images/rùnites_1024x1204.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Rùnites",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Arminiens: {
    titre: "Arminiens",
    vignette: "assets/images/arminiens_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/arminiens_400x400.jpg",
    imageL: "assets/images/arminiens_1024x1024.jpg",
    contenu:
      "Belsan NomDeFamille est le roi du pays unifié de Belleterre. Il est le frère du héros et fait plein de choses dans la vie.",
    titreEn: "Arminians",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Belcastois: {
    titre: "Belcastois",
    vignette: "assets/images/belcastois_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/belcastois_400x400.jpg",
    imageL: "assets/images/belcastois_1024x1024.jpg",
    contenu:
      "Charlie est un magicien mystérieux qui garde de nombreux secrets.",
    titreEn: "Belcastois",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Priscoliens: {
    titre: "Priscoliens",
    vignette: "assets/images/priscoliens_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/priscoliens_400x400.jpg",
    imageL: "assets/images/priscoliens_1024x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Priscolians",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Nephiliens: {
    titre: "Nephiliens",
    vignette: "assets/images/nephiliens_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/nephiliens_400x400.jpg",
    imageL: "assets/images/nephiliens_1024x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Nephilians",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Nautoniers: {
    titre: "Nautoniers",
    vignette: "assets/images/nautoniers_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/nautoniers_400x400.jpg",
    imageL: "assets/images/nautoniers_1024x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Nautoniers",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
};

const geographieData = {
  CitéantiquedeRochenue: {
    titre: "Cité antique de Rochenue",
    vignette: "assets/images/citeantique_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/citeantique_400x400.jpg",
    imageL: "assets/images/citeantique_1024x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Ancient city of Rochenue",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Nordterre: {
    titre: "Nord-Terre",
    vignette: "assets/images/nordterre_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/nordterre_400x400.jpg",
    imageL: "assets/images/nordterre_1024x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "North-Land",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  RivesdOr: {
    titre: "Rives d'Or",
    vignette: "assets/images/rivesdor_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/rivesdor_400x400.jpg",
    imageL: "assets/images/rivesdor_1024x1024.jpg",
    contenu:
      "Belsan NomDeFamille est le roi du pays unifié de Belleterre. Il est le frère du héros et fait plein de choses dans la vie.",
    titreEn: "Gilded Banks",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident  iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Centreterre: {
    titre: "Centre-Terre",
    vignette: "assets/images/centreterre_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/centreterre_400x400.jpg",
    imageL: "assets/images/centreterre_1024x1024.jpg",
    contenu:
      "Charlie est un magicien mystérieux qui garde de nombreux secrets.",
    titreEn: "Coreland",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Rochenue: {
    titre: "Rochenue",
    vignette: "assets/images/rochenue_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/rochenue_400x400.jpg",
    imageL: "assets/images/rochenue_1024x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Rochenue",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Belleterre: {
    titre: "Belleterre",
    vignette: "assets/images/belleterre_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/belleterre_400x400.jpg",
    imageL: "assets/images/belleterre_880x880.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Fairland",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  Moran: {
    titre: "Moran",
    vignette: "assets/images/moran_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/moran_400x400.jpg",
    imageL: "assets/images/moran_1024x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Moran",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  PlaineDesCorps: {
    titre: "Plaine des Corps",
    vignette: "assets/images/plainecorps_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/plainecorps_400x400.jpg",
    imageL: "assets/images/plainecorps_1024x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Plain of Remains",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
  MaraisAuxLicoles: {
    titre: "Marais aux Licoles",
    vignette: "assets/images/marais_vignette_220x220.jpg",
    chapeau:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    imageS: "assets/images/marais_400x400.jpg",
    imageL: "assets/images/marais_1024x1024.jpg",
    contenu:
      "Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
    titreEn: "Licoles Swamp",
    chapeauEng:
      "Lorem anglais dolor sit, amet consectetur adipisicing elit. Veritatis a provident iure enim consequatur aliquam, fugit dicta eaque. Voluptatem repellendus quidem blanditiis corporis praesentium magnam corrupti provident omnis facere nemo.",
    contenuEng:
      "Lorem <strong>anglais</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam. <br/> <br/> Lorem <strong>ipsum</strong> dolor sit amet, consectetur adipiscing elit. Phasellus tortor nulla, cursus sit amet maximus id, hendrerit nec ligula. Donec tempor, dolor eget vehicula scelerisque, leo sapien dictum dolor, at imperdiet massa ligula id lorem. Morbi vitae metus at orci suscipit <strong>vestibulum</strong>. Pellentesque sed metus sed turpis finibus maximus. Aenean nec nisi scelerisque, accumsan velit vitae, <strong>vulputate velit</strong>. Phasellus non gravida ligula, at pulvinar massa. Nullam suscipit, sem eget efficitur accumsan, nunc nibh scelerisque velit, vel finibus risus dui sed velit. <strong>Morbi</strong> sed massa quam.",
  },
};

///////////////////////////////////////////////////////////////////////       FONCTIONS    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////
/////////////////   Fonction pour ouvrir les différents overlays   /////////////////
///////////////////////////////////////////////////////////////////////////////////
function overlayOnOff(boutonId, overlayId) {
  const bouton = document.getElementById(boutonId);
  const overlay = document.getElementById(overlayId);

  bouton.addEventListener("click", function (event) {
    event.stopPropagation(); // Empêche la propagation pour éviter que le clic sur le bouton ferme
    //  immédiatement la popup, sinon l'événement 'click' se propagerait à la popup et ferait
    // qu'elle se ferme directement.
    overlay.classList.toggle("hidden");
    overlay.classList.toggle("active");
  });

  // Fermer la popup en cliquant en dehors "Si overlay avec enfants (donc la popup)
  // ET bouton avec enfants (donc la punaise) ne sont PAS cliqués, alors on ferme la popup"
  document.addEventListener("click", function (event) {
    if (!overlay.contains(event.target) && !bouton.contains(event.target)) {
      overlay.classList.add("hidden");
      overlay.classList.remove("active");
    }
  });
}

///////////////////////////////////////////////////////////////////////////////////
/////////////////  Fonction pour activer/Désactiver le mode dyslexique  /////////////////////
/////////////////////////////////////////////////////////////////////////////////

function activerModeDyslexique2() {
  const moddys = localStorage.getItem("ModeDyslexique") === "false";
  if (moddys) {
    const carrouselDys = document.querySelectorAll(".CarrouselDys");
    btnAccessibilite.style.color = "var(--Gold-Color)";
    all.forEach(function (tout) {
      tout.style.fontFamily = "OpenDyslexic";
    });
    carrouselDys.forEach(function (element) {
      element.classList.add("DyslexiqueActive");
    });
    // Met la valeur true dans le stockage local du mode dyslexique, pour que ça reste enregistré pendant toute la navigation
    localStorage.setItem("ModeDyslexique", "true");
  } else {
    const carrouselDys = document.querySelectorAll(".CarrouselDys");
    btnAccessibilite.style.color = "var(--Sage-Color)";
    all.forEach(function (tout) {
      tout.style.fontFamily = "";
    });
    carrouselDys.forEach(function (element) {
      element.classList.remove("DyslexiqueActive");
    });
    // Met la valeur false dans le stockage local du mode dyslexique, pour que ça reste enregistré pendant toute la navigation
    localStorage.setItem("ModeDyslexique", "false");
  }
}

///////////////////////////////////////////////////////////////////////////
/////////////////   Fonction pour appliquer une langue   /////////////////
/////////////////////////////////////////////////////////////////////////

function appliquerLangue(langue) {
  elementsTraduisibles.forEach(function (element) {
    //Pour chaque élément qui contient l'attribut "data-lang-fr"
    const texte = element.getAttribute(`data-lang-${langue}`); //Récupère le texte correspondant à l'attribut langue qu'on veut
    if (texte) {
      const parser = new DOMParser(); //créé une variable temporaire pour stocker le DOMParser
      // (interface js intégrée au navigateur qui permet de convertir une chaîne de caractères (string)
      // contenant du HTML, du XML ou du SVG en un document DOM que JavaScript peut manipuler.
      // Car le texte dans data-lang peut contenir des contenus échappés pour faire des balises comme <strong>,
      // ces balises doivent être transformées en véritables balises pour être interprétées )
      const contenuDecode = parser.parseFromString(texte, "text/html").body
        .innerHTML;
      //parseFromString(texte, "text/html") est une méthode qui prend en argument le texte à traiter et le fait qu'il
      //faut l'interpréter comme du html
      element.innerHTML = contenuDecode; //Au final, le contenu de l'élément est mis à jour avec la langue sélectionnée
      // après avoir déchiffer le texte mis dans le data-lang
    }
  });

  // Change la langue dans le placeholder de la barre de recherche
  const barreDeRecherche = document.getElementById("RechercheInput");
  const placeholderTexte = barreDeRecherche.getAttribute(`data-lang-${langue}`);
  barreDeRecherche.setAttribute("placeholder", placeholderTexte);

  // Enregistre la langue sélectionnée dans Local Storage
  localStorage.setItem("langue", langue);
  // Change l'attribu langue dans le html pour changer langue de tarteaucitron + bon pour le SEO
  document.documentElement.setAttribute("lang", langue);
  // Mettre à jour l'état visuel des boutons.
  // Si la langue est "fr" alors on fait ceci, si c'est "en" alors on fait cela
  if (langue === "fr") {
    btnFr.style.color = "var(--Gold-Color)";
    btnFr.style.textDecoration = "underline";
    btnEn.style.color = "var(--Sage-Color)";
    btnEn.style.textDecoration = "none";
  } else {
    btnEn.style.color = "var(--Gold-Color)";
    btnEn.style.textDecoration = "underline";
    btnFr.style.color = "var(--Sage-Color)";
    btnFr.style.textDecoration = "none";
  }
}

////////////////////////////////////////////////////////////////////////////////////
////   Fonction pour créer le carrousel en fonction du tableau correspondant   ////
//////////////////////////////////////////////////////////////////////////////////

function creationCarrousel(name, tableau) {
  if (lang == "en") {
    carousel.insertAdjacentHTML(
      "beforeend",
      `
            <div class="Cartouche" data-name="${name}">
                <img src="${tableau.vignette}" alt="image of ${tableau.titreEn}">
                <div class="CartoucheFlex">
                  <h3 class="CarrouselDys">${tableau.titreEn}</h3>
                  <p class="CarrouselDys">${tableau.chapeauEng}</p>
                  <button class="CarrouselDys">Continue reading ➝</button>
                </div>
            </div>
        `
    );
  } else {
    carousel.insertAdjacentHTML(
      "beforeend",
      `
            <div class="Cartouche" data-name="${name}">
                <img src="${tableau.vignette}" alt="image représentant ${tableau.titre}">
                <div class="CartoucheFlex">
                  <h3 class="CarrouselDys">${tableau.titre}</h3>
                  <p class="CarrouselDys">${tableau.chapeau}</p>
                  <button class="CarrouselDys">Continuer à lire ➝</button>
                </div>
            </div>
        `
    );
  }
}

//////////////////////////////////////////////////////////////////////////////////////////
//////////   Fonction pour afficher les articles sur les différentes pages   /////////////
/////////////////////////////////////////////////////////////////////////////////////////
function afficherArticles(tableau) {
  if (window.innerWidth < 768) {
    //images petit format
    if (lang == "en") {
      articleTitre.textContent = tableau.titreEn;
      articleContenu.innerHTML = tableau.contenuEng;
      articleImage.src = tableau.imageS;
      articleImage.style.border = "solid 4px var(--Gold-Color)";
      articleImage.alt = `Image of ${tableau.titreEn}`;
      articleTitre.style.marginLeft = "auto"; //aligne le titre au centre
      articleTitre.style.textAlign = "center";
    } else {
      articleTitre.textContent = tableau.titre;
      articleContenu.innerHTML = tableau.contenu;
      articleImage.src = tableau.imageS;
      articleImage.style.border = "solid 4px var(--Gold-Color)";
      articleImage.alt = `Image représentant ${tableau.titre}`;
      articleTitre.style.marginLeft = "auto"; //aligne le titre au centre
      articleTitre.style.textAlign = "center";
    }
  } else {
    //images grand format
    if (lang == "en") {
      articleTitre.textContent = tableau.titreEn;
      articleContenu.innerHTML = tableau.contenuEng;
      articleImage.src = tableau.imageL;
      articleImage.style.border = "solid 4px var(--Gold-Color)";
      articleImage.alt = `Image of ${tableau.titreEn}`;
      articleTitre.style.marginLeft = "40vw"; //aligne le titre avec le paragraphe
      articleTitre.style.textAlign = "left";
    } else {
      articleTitre.textContent = tableau.titre;
      articleContenu.innerHTML = tableau.contenu;
      articleImage.src = tableau.imageL;
      articleImage.style.border = "solid 4px var(--Gold-Color)";
      articleImage.alt = `Image représentant ${tableau.titre}`;
      articleTitre.style.marginLeft = "40vw"; //aligne le titre avec le paragraphe
      articleTitre.style.textAlign = "left";
    }
  }
}

//////////////////////////////////////////////////////  MODULES      ////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////   Gestion des langues   /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

// Initialisation des paramètres de langue : Appliquer la langue enregistrée ou par défaut
document.addEventListener("DOMContentLoaded", function () {
  //DOMContentLoaded garanti que le code est exécuté une fois que tout le html est chargé
  const langue = localStorage.getItem("langue") || "fr"; // Vérifie qu'une langue a été enregistrée dans le stockage local et sinon la langue par défaut est le français
  appliquerLangue(langue); //Exécution de la fonction appliquerLangue
});

// Écouteurs pour les boutons de langue puis action de la fonction
btnFr.addEventListener("click", function () {
  appliquerLangue("fr");
  // recharge les page contenant un carrousel au clic pour faire en sorte que tous les éléments changent de langue
  location.reload();
});

btnEn.addEventListener("click", function () {
  appliquerLangue("en");
  // recharge les page contenant un carrousel au clic pour faire en sorte que tous les éléments changent de langue
  location.reload();
});

/////////////////////////////////////////////////////////////
/////////////////////   ACCESSIBILITE   ////////////////////
///////////////////////////////////////////////////////////

// Pour l'accessibilité : vérifie si une préférence est enregistrée dans Local Storage
document.addEventListener("DOMContentLoaded", function () {
  const estDyslexique = localStorage.getItem("ModeDyslexique") === "true";
  if (estDyslexique) {
    localStorage.setItem("ModeDyslexique", "false");
    activerModeDyslexique2();
  }
});

// Écouteur sur le bouton pour basculer le mode d'accessibilité
btnAccessibilite.addEventListener("click", function () {
  activerModeDyslexique2();
});

///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////   Gestion de l'ouverture + animation menu burger   /////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

burger.addEventListener("click", function () {
  ligne1.classList.toggle("Ligne1Active");
  ligne2.classList.toggle("Ligne2Active");
  ligne3.classList.toggle("Ligne3Active");
  menunavoverlay.classList.toggle("active");
});

// Gestion fermeture du menu quand un bouton de l'overlay amène à une ancre dans la page sur laquelle on se situe déjà
boutonNavOverlay.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    ligne1.classList.toggle("Ligne1Active");
    ligne2.classList.toggle("Ligne2Active");
    ligne3.classList.toggle("Ligne3Active");
    menunavoverlay.classList.remove("active");
  });
});

////////////////////////////////////////////////////////////
//////////////////// Barre de recherche ////////////////////
////////////////////////////////////////////////////////////
try {
  //récupérer le fichier json contenant les résultats de recherche.
  fetch("recherche.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const rechercheInput = document.getElementById("RechercheInput"); //champ de recherche
      const resultatsConteneur = document.getElementById("RechercheResultats"); //liste des résultats
      const lang = localStorage.getItem("langue") || "fr"; // récupère la langue activée.

      // Affichage des résultats de la recherche
      rechercheInput.addEventListener("input", function () {
        //input correspond aux modifs (sans validation dans un champ)
        const requete = this.value.toLowerCase();
        //this.value correspond à la valeur écrite dans le champ
        const resultats = data.filter(
          //on retourne dans la variable 'résultats' tous les éléments récupérés
          // du json qui contiennent ce que l'utilisateur a tapé
          (
            page //gestion des approximations non gérée -> utiliser Fuse.js ou algo de distance de Levenshtein, mais trop compliqué pour l'instant.
          ) =>
            page.title.toLowerCase().includes(requete) ||
            page.keywords.some((keyword) =>
              // some veut dire qu'on veut au moins qu'un élément du tableau corresponde
              keyword.toLowerCase().includes(requete)
            )
        );
        //si la variable résultat renvoie au moins 1 caractère,
        // alors la liste de résultats de recherche s'affiche
        if (resultats.length > 0) {
          resultatsConteneur.style.opacity = "1";
          resultatsConteneur.style.display = "block";

          resultatsConteneur.innerHTML = resultats; //on va mettre le résultat de la recherche dans le conteneur résultat qui est masqué
          // tant qu'il y a pas au moins 1 élément à afficher
          let html = ""; // On initialise la chaîne vide
          resultats.forEach(function (resultat) {
            //pour chaque résultat on va créé le code html correspondant, et tous les concaténer avec 'html +='
            if (lang === "en") {
              html += `
                <a aria-label="Page ${resultat.titleEn}" style="justify-content: left;" href="${resultat.url}">
                  <div class="resultat-item">
                    <h3>${resultat.titleEn}</h3>
                    <p>${resultat.descriptionEn}</p>
                  </div>
                </a>`;
            } else {
              html += `
                <a aria-label="Page ${resultat.title}" style="justify-content: left;" href="${resultat.url}">
                  <div class="resultat-item">
                    <h3>${resultat.title}</h3>
                    <p>${resultat.description}</p>
                  </div>
                </a>`;
            }
          });
          resultatsConteneur.innerHTML = html;
          //on retourne le code html dans le block de résultats
        } else {
          resultatsConteneur.style.display = "none"; // Masquer si aucun résultat
        }
      });

      // Gestion de la fermeture en cliquant en dehors
      document.addEventListener("click", function (event) {
        if (
          !rechercheInput.contains(event.target) && // Si le clic n'est pas dans l'input
          !resultatsConteneur.contains(event.target) // Si le clic n'est pas dans les résultats
        ) {
          resultatsConteneur.style.display = "none";
          resultatsConteneur.style.opacity = "0"; // Masquer les résultats
        }
      });
    });
} catch (warn) {
  console.warn("Une erreur s'est produite dans :", warn);
}

/////////////////////////////////////////////////////////////
/////////////////////   OVERLAYS   /////////////////////////
///////////////////////////////////////////////////////////

// Appel de la fonction qui ouvre les overlays pour tout ce qui doit s'ouvrir en overlay

try {
  overlayOnOff("PinHelrun", "PopupHelrun");
  overlayOnOff("PinArminia", "PopupArminia");
  overlayOnOff("PinCastelbeau", "PopupCastelbeau");
  overlayOnOff("PinNephilopolis", "PopupNephilopolis");
  overlayOnOff("PinPriscol", "PopupPriscol");
  overlayOnOff("CroixHelrun", "PopupHelrun");
  overlayOnOff("CroixArminia", "PopupArminia");
  overlayOnOff("CroixCastelbeau", "PopupCastelbeau");
  overlayOnOff("CroixNephilopolis", "PopupNephilopolis");
  overlayOnOff("CroixPriscol", "PopupPriscol");
} catch (warn) {
  console.warn("Une erreur s'est produite dans overlayOnOff :", warn);
}

///////////////////////////////////////////////////////////
/////////////////////   SCROLL HAUT DE PAGE   ////////////
/////////////////////////////////////////////////////////
try {
  flechehaut.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
} catch (warn) {
  console.warn("Une erreur s'est produite dans :", warn);
}

///////////////////////////////////////////////////////////
//////////////   BARRE CLIGNOTTANTE ACCUEIL   ////////////
/////////////////////////////////////////////////////////

//Page Index Section Accueil : disparition barre clignottante
try {
  window.addEventListener("scroll", () => {
    let aScrolle = false;
    if (!aScrolle) {
      aScrolle = true; // Empêche de déclencher plusieurs fois
      if (barreClignottante) {
        barreClignottante.style.animation = "arretClignottement 0.5s"; // Arrête l'animation
      }
    }
  });
} catch (warn) {
  console.warn("Une erreur s'est produite dans :", warn);
}

///////////////////////////////////////////////////////////
/////////////////////   VIDEOS   /////////////////////////
/////////////////////////////////////////////////////////

// Lance les vidéos au clic, sans barre de contrôle, avec juste icone speaker.
try {
  videos.forEach(function (video) {
    const iconeSon = video.nextElementSibling;
    video.volume = 1;
    video.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        iconeSon.style.visibility = "visible";
      } else {
        video.pause();
        iconeSon.style.visibility = "hidden";
      }
    });
    // Muter ou non video
    iconeSon.addEventListener("click", function () {
      iconeSon.classList.toggle("SonOn");
      iconeSon.classList.toggle("SonOff");
      if (video.volume == 1) {
        video.volume = 0;
      } else {
        video.volume = 1;
      }
    });
  });
} catch (warn) {
  console.warn("Une erreur s'est produite dans :", warn);
}

/////////////////////////////////////////////////////////////
/////////////////////   PAGES AVEC CARROUSEL   /////////////
///////////////////////////////////////////////////////////

// Script pour tout ce qui concerne les pages personnages, culture et géographie
try {
  switch (
    pageId //récupère la bonne base de données selon sur quelle page on est (en fonction de l'id présent dans <main>)
  ) {
    case "PagePersonnages":
      Object.entries(personnageData)
        .sort(([key1], [key2]) => key1.localeCompare(key2)) // Tri des clés de la bdd alphabetiquement
        .forEach(([name, personnage]) => {
          creationCarrousel(name, personnage);
        });
      break;
    case "PageCultures":
      Object.entries(cultureData)
        .sort(([key1], [key2]) => key1.localeCompare(key2)) // Tri des clés de la bdd alphabetiquement
        .forEach(([name, culture]) => {
          creationCarrousel(name, culture);
        });
      break;
    case "PageGeographie":
      Object.entries(geographieData)
        .sort(([key1], [key2]) => key1.localeCompare(key2)) // Tri des clés de la bdd alphabetiquement
        .forEach(([name, geographie]) => {
          creationCarrousel(name, geographie);
        });
      break;
  }

  // récupère chaque cartouche dans une nodeliste maintenant qu'ils sont créés dans le html
  const cartouche = document.querySelectorAll(".Cartouche");

  //ajoute uniquement les lettres de l'alphabet correspondantes aux nom des cartouches
  const lettresAjoutees = new Set(); //Création d'une structure de données qui stockera toutes les lettres déjà
  // ajoutées dans l'alphabet, ne peut stocker que des éléments uniques.
  cartouche.forEach(function (cartouche) {
    const name = cartouche.dataset.name;
    const premiereLettre = name.charAt(0).toUpperCase();
    if (!lettresAjoutees.has(premiereLettre)) {
      //has() permet de vérifier si la valeur existe dans le set.
      lettresAjoutees.add(premiereLettre); //add ajoute dans le set
      blocAlphabet.insertAdjacentHTML(
        "beforeend",
        `
        <button class="CarrouselDys" data-letter="${premiereLettre}">${premiereLettre}</button>
        `
      );
    }
  });

  // récupère chaque boutons dans une nodeliste maintenant qu'ils sont créés dans le html
  const alphabetBoutons = document.querySelectorAll("#Alphabet button");

  alphabetBoutons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Au clic, change la couleur du bouton et réinitialise la couleur des autres boutons
      alphabetBoutons.forEach(function (autresBoutons) {
        autresBoutons.style.color = ""; // Réinitialise la couleur des boutons pas cliqués
      });
      // Change le style du bouton cliqué
      button.style.color = "var(--Gold-Color)";

      //Scroller le carousel quand on clique sur une lettre dans l'alphabet
      cartouche.forEach((cartouche) => {
        const name = cartouche.dataset.name;
        // charAt permet de récupérer une lettre en particulier, ici la première lettre
        if (name.charAt(0).toUpperCase() === button.dataset.letter) {
          // Calculer la position pour centrer le cartouche
          const carouselRect = carousel.getBoundingClientRect(); //récupère les positions et dimensions du carousel
          const targetRect = cartouche.getBoundingClientRect(); //récupère les positions et dimensions du cartouche en question
          const offset =
            targetRect.left -
            carouselRect.left -
            carouselRect.width / 2 +
            targetRect.width / 2; //calcul pour obtenir le décalage que doit subir le cartouche pour arriver au centre du carousel
          // Scroller le carousel de la distance calculée par offset
          carousel.scrollBy({ left: offset, behavior: "smooth" });
        }
      });
    });
  });

  // Cliquer sur un cartouche du carousel
  cartouche.forEach(function (cartouche) {
    cartouche.addEventListener("click", function () {
      const name = cartouche.dataset.name;

      switch (
        pageId //récupère la bonne base de données selon sur quelle page on est (en fonction de l'id présent dans <main>)
      ) {
        case "PagePersonnages":
          // Récupérer les données du personnage
          const personnage = personnageData[name];
          if (personnage) {
            afficherArticles(personnage);
          }
          break;
        case "PageCultures":
          // Récupérer les données de culture
          const culture = cultureData[name];
          if (culture) {
            afficherArticles(culture);
          }
          break;
        case "PageGeographie":
          // Récupérer les données de geographie
          const geographie = geographieData[name];
          if (geographie) {
            afficherArticles(geographie);
          }
          break;
      }

      // Mettre à jour la couleur de la lettre correspondante
      alphabetBoutons.forEach(function (button) {
        if (button.dataset.letter === name.charAt(0).toUpperCase()) {
          // charAt permet de récupérer une lettre en particulier, ici la première lettre
          button.style.color = "var(--Gold-Color)"; // Applique la couleur dorée
        } else {
          button.style.color = ""; // Réinitialise les autres boutons
        }
      });

      // Scroller jusqu'à l'article
      const articleTitreDecale = articleTitre.offsetTop + -150;
      //offsetTop renvoie la distance entre le bord sup de l'élément et son parent
      window.scrollTo({
        top: articleTitreDecale,
        behavior: "smooth",
      });
    });
  });

  //défilement du carousel avec les flèches sur le côté
  flechegauche.addEventListener("click", function () {
    //Si le carrousel est tout à gauche, il scroll jusqu'à tout à droite
    if (carousel.scrollLeft <= 0) {
      carousel.scrollTo({ left: carousel.scrollWidth, behavior: "smooth" });
    } else {
      if (window.innerWidth < 700) {
        carousel.scrollBy({ left: -250, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: -500, behavior: "smooth" });
      }
    }
  });

  flechedroite.addEventListener("click", function () {
    //Si le carrousel est tout à droite, il scroll jusqu'à tout à gauche.
    //"Si la position de défilement actuelle du carousel + la largeur visible du carousel
    // correspond à la largeur totale du contenu"
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
      carousel.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    } else {
      if (window.innerWidth < 700) {
        carousel.scrollBy({ left: 250, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: 500, behavior: "smooth" });
      }
    }
  });
} catch (warn) {
  console.warn("Une erreur s'est produite dans :", warn);
}

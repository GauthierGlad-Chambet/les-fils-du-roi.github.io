const introText =
  "Oh ! Bonjour à toi, voyageur.<br>Moi, c’est Gauthier, le conducteur de cette locomotive un peu spéciale.<br>Quand tu seras prêt à embarquer, il te suffira de scroller doucement vers le bas, et le voyage commencera.";

const text1 =
  "Tu sais, la vie ne suit pas toujours des rails bien droits. Il arrive qu’on change de voie en cours de route. Aussi surprenant que ça puisse paraître, j’ai moi-même commencé comme neuropsychologue.         ";
const text2 =
  "Cette époque me paraît déjà bien lointaine, mais elle a façonné la personne que je suis aujourd’hui : empathique, à l’écoute... enfin, sauf en ce moment, où je monopolise la parole, j’avoue !                                            ";
const text3 =
  "Toutefois, ma passion pour l’informatique remonte à l’enfance. À 8 ans déjà, je jouais à des MMORPG, tu te rends compte ! À l’époque, il fallait souvent bidouiller son PC, même pour lancer un jeu. C’est comme ça que j’ai appris, petit à petit.             ";
const text4 =
  "À côté de ça, je faisais du montage vidéo, des retouches photo, et même un premier site web avec mon grand frère. Je créais aussi de petits jeux sur RPG Maker... Tu verras, l’inspiration est partout, regarde par la fenêtre !                                             ";
const text5 =
  "Je tiens les commandes de ce train depuis peu mais j'ai déjà appris tant de choses en chemin !                                                                \u00A0";
const text6 =
  "Je ne vais pas te mentir, je n’ai pas encore tout compris à ce qui se passe sous le capot. Mais je suis débrouillard et plein de motivation, ce train n'est pas près de dérailler je peux te le garantir !                                            ";
const text7 = `Curieux de voir ce que j’ai déjà construit ? Monte à bord du wagon <a class = "linkTextBox" target="_blank" href="https://gauthierglad-chambet.github.io/les-fils-du-roi.github.io/\">Les Fils du Roi</a>. C’est un site qui introduit un univers fictif que j’imagine de A à Z. Il met bien en valeur mes compétences front-end (surtout la page personnages, héhé).                         `;
const text8 =
  "Voilà, le voyage touche à sa fin. J’espère que tu as apprécié la balade autant que moi. Merci pour ton attention et qui sait, nos chemins se croiseront peut-être à nouveau ?";

const speaker = document.querySelector(".speaker");
const darkMode = document.querySelector(".darkMode");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const indexHeader = document.querySelector(".indexHeader");
const indexMain = document.querySelector(".indexMain");
const indexFooter = document.querySelector(".indexFooter");
const sunWrapper = document.querySelector(".sunWrapper");
const moonWrapper = document.querySelector(".moonWrapper");
const sunRope = document.querySelector(".sunRope");
const moonRope = document.querySelector(".moonRope");

const cloudHTML = document.querySelector(".cloudHTML");
const cloudCSS = document.querySelector(".cloudCSS");
const cloudJS = document.querySelector(".cloudJS");
const cloudPHP = document.querySelector(".cloudPHP");
const cloudSQL = document.querySelector(".cloudSQL");

const paragraph = document.getElementById("paragraph");
const textBox = document.querySelector(".textBox");
const train = document.querySelector(".train");
const openSound = new Audio("assets/sounds/open_pannel.mp3");
openSound.volume = 0.3;
const closeSound = new Audio("assets/sounds/close_pannel.mp3");
closeSound.volume = 0.3;
const music = new Audio("assets/sounds/Magical 8bit Plug - Seashore.mp3");
music.volume = 0.1;
music.loop = true;
let isPlaying = false;

let triggeredTextIntro = true;
let triggeredText5 = false;
let triggeredText6 = false;
let triggeredText7 = false;

/////////CLOUD TRIGGER /////////////

function triggerCloudAnimationLeft(cloudName) {
  cloudName.classList.add("cloudHappenLeft");
  setTimeout(() => {
    cloudName.classList.remove("cloudHappenLeft");
  }, 5000);
}

function triggerCloudAnimationRight(cloudName) {
  cloudName.classList.add("cloudHappenRight");
  setTimeout(() => {
    cloudName.classList.remove("cloudHappenRight");
  }, 5000);
}

/////////// START PAGE ///////////

if (window.location.pathname.includes("index.html")) {
  disableScroll();

  const startButton = document.querySelector(".start");
  startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    music.play();
    isPlaying = true;
    enableScroll();

    let currentSection = null;

    //////// Texte1 autoomatique /////////////
    function typeWriter(element, text, speed = 7, callback) {
      let tokens = text.match(/<[^>]+>|[^<]/g); // Balises ou caractères simples
      let i = 0;

      function type() {
        if (i < tokens.length) {
          element.innerHTML += tokens[i];
          i++;
          setTimeout(type, speed);
        } else if (callback) {
          callback();
        }
      }

      type();
    }

    // Affiche la boîte avec un bounce
    function showTextBox() {
      openSound.play().catch((e) => console.log(e));
      textBox.classList.remove("closeTextBox");
      void textBox.offsetWidth; // Forcer le reflow pour relancer l’animation
      textBox.classList.add("showTextBox");
    }

    // Cache la boîte avec un bounce
    function hideTextBox() {
      closeSound.play();
      textBox.classList.remove("showTextBox");
      void textBox.offsetWidth;
      textBox.classList.add("closeTextBox");
    }

    // Initialisation à l'ouverture de la page
    if (window.location.pathname.includes("index.html")) {
      if (window.scrollY === 0) {
        currentSection = "intro";
        setTimeout(() => {
          showTextBox(); // on affiche la boîte
          paragraph.innerHTML = ""; // on vide le contenu avant de commencer
          typeWriter(paragraph, introText, 7); // vitesse en ms par caractère
        }, 500); // délai avant apparition
      }

      window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        const scrollProgress = scrollTop / scrollHeight;

        // ➤ Si on quitte le haut de la page, même de 1px
        if (window.innerWidth > 420) {
          if (scrollTop > 0.01) {
            train.style.top = "50vh";
          } else {
            train.style.top = "155px";
          }
        } else {
          if (scrollTop > 0.01) {
            train.style.top = "50vh";
          } else {
            train.style.top = "130px";
          }
        }
        if (scrollProgress <= 0.01 && !triggeredTextIntro) {
          showTextBox();
          paragraph.innerHTML = "";
          typeWriter(paragraph, introText, 7);
          triggeredTextIntro = true;

          // }
        } else if (scrollProgress > 0.02 && scrollProgress <= 0.098) {
          triggeredTextIntro = false;
          if (currentSection !== "text1") {
            currentSection = "text1";
            showTextBox();
          }
          const localProgress = scrollProgress - 0.02;
          const charsToShow = Math.floor(localProgress * 3000);
          paragraph.innerHTML = text1.substring(0, charsToShow);

          // if (charsToShow >= text1.length) {
          //   hideTextBox();
          // }
        } else if (scrollProgress > 0.098 && scrollProgress <= 0.17) {
          if (currentSection !== "text2") {
            currentSection = "text2";

            showTextBox();
            openSound.pause();
          }
          const localProgress = scrollProgress - 0.098;
          const charsToShow = Math.floor(localProgress * 3000);
          paragraph.innerHTML = text2.substring(0, charsToShow);

          if (charsToShow >= text2.length) {
            hideTextBox();
          }
        } else if (scrollProgress > 0.2 && scrollProgress <= 0.3) {
          if (currentSection !== "text3") {
            currentSection = "text3";
            showTextBox();
          }
          const localProgress = scrollProgress - 0.2;
          const charsToShow = Math.floor(localProgress * 3000);
          paragraph.innerHTML = text3.substring(0, charsToShow);

          // if (charsToShow >= text3.length) {
          //   hideTextBox();
          // }
        } else if (scrollProgress > 0.3 && scrollProgress <= 0.39) {
          if (currentSection !== "text4") {
            currentSection = "text4";
            showTextBox();
            openSound.pause();
          }
          const localProgress = scrollProgress - 0.3;
          const charsToShow = Math.floor(localProgress * 3000);
          paragraph.innerHTML = text4.substring(0, charsToShow);

          if (charsToShow >= text4.length) {
            hideTextBox();
          }
        } else if (scrollProgress > 0.45 && scrollProgress <= 0.5) {
          if (currentSection !== "text5") {
            currentSection = "text5";
            showTextBox();
            setTimeout(() => {
              triggerCloudAnimationLeft(cloudHTML);
            }, 2000);
            setTimeout(() => {
              triggerCloudAnimationRight(cloudCSS);
            }, 3000);
            setTimeout(() => {
              triggerCloudAnimationLeft(cloudJS);
            }, 4000);
          }
          const localProgress = scrollProgress - 0.45;
          const charsToShow = Math.floor(localProgress * 3000);
          paragraph.innerHTML = text5.substring(0, charsToShow);

          if (charsToShow >= text5.length && !triggeredText5) {
            triggeredText5 = true;
            hideTextBox();
          }
        } else if (scrollProgress > 0.6 && scrollProgress <= 0.69) {
          if (currentSection !== "text6") {
            currentSection = "text6";
            showTextBox();
            setTimeout(() => {
              triggerCloudAnimationRight(cloudPHP);
            }, 2000);
            setTimeout(() => {
              triggerCloudAnimationLeft(cloudSQL);
            }, 3000);
          }
          const localProgress = scrollProgress - 0.6;
          const charsToShow = Math.floor(localProgress * 3000);
          paragraph.innerHTML = text6.substring(0, charsToShow);

          if (charsToShow >= text6.length && !triggeredText6) {
            triggeredText6 = true;
            hideTextBox();
          }
        } else if (scrollProgress > 0.74 && scrollProgress <= 0.88) {
          if (currentSection !== "text7") {
            currentSection = "text7";
            showTextBox();
          }
          const localProgress = scrollProgress - 0.74;
          const charsToShow = Math.floor(localProgress * 3000);
          paragraph.innerHTML = text7.substring(0, charsToShow);

          if (charsToShow >= text7.length && !triggeredText7) {
            triggeredText7 = true;
            hideTextBox();
          }
        } else if (scrollProgress > 0.93 && scrollProgress <= 1) {
          if (currentSection !== "text8") {
            currentSection = "text8";
            showTextBox();
          }
          const localProgress = scrollProgress - 0.93;
          const charsToShow = Math.floor(localProgress * 3000);
          paragraph.innerHTML = text8.substring(0, charsToShow);

          if (charsToShow >= text8.length) {
            // hideTextBox();
          }
        } else {
          if (currentSection !== "afterText") {
            currentSection = "afterText";
            hideTextBox();
            //   paragraph.innerHTML = ""; // on vide s'il faut
          }
        }
      });

      // Forcer le bon texte au chargement (au cas où on recharge en haut)
      if (window.scrollY === 0) {
        if (currentSection !== "intro") {
          currentSection = "intro";
          showTextBox();
        }
        paragraph.innerHTML =
          "Oh ! Bonjour voyageur.<br>Je m'appelle Gauthier, je suis le conducteur de cette locomotive.<br>Tu souhaites te rendre quelque part ? Alors quand tu seras prêt, scroll vers le bas et nous démarrerons.";
        if (currentSection !== "intro") {
          currentSection = "intro";
          hideTextBox();
        }
      }
    }

    ////////// DARK MODE ////////////////

    if (window.location.pathname.includes("index.html")) {
      darkMode.addEventListener("click", () => {
        sun.classList.toggle("noSun");
        sunRope.classList.toggle("noSunRope");
        sunWrapper.classList.toggle("noSunWrapper");
        moon.classList.toggle("noMoon");
        moonRope.classList.toggle("noMoonRope");
        moonWrapper.classList.toggle("noMoonWrapper");
        indexHeader.classList.toggle("night");
        indexMain.classList.toggle("night");
        indexFooter.classList.toggle("night");
        hideTextBox();
      });
    }
  });
}

//////// MENU PAUSE OPEN/CLOSE  ///////////////

let isMenuOpen = false;

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

function preventKeyScroll(e) {
  const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
  if (keys.includes(e.keyCode)) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
}

function disableScroll() {
  window.addEventListener("wheel", preventScroll, { passive: false });
  window.addEventListener("touchmove", preventScroll, { passive: false });
  window.addEventListener("keydown", preventKeyScroll, false);
  document.body.classList.add("scroll-locked");
}

function enableScroll() {
  window.removeEventListener("wheel", preventScroll, { passive: false });
  window.removeEventListener("touchmove", preventScroll, { passive: false });
  window.removeEventListener("keydown", preventKeyScroll, false);
  document.body.classList.remove("scroll-locked");
}

const containerMenu = document.querySelector(".containerMenu");
const ribbon = document.querySelector(".ribbon");
const closeMenu = document.querySelector(".closeMenu");

ribbon.addEventListener("click", () => {
  containerMenu.classList.toggle("containerMenuOpen");
  if (containerMenu.classList.contains("containerMenuOpen")) {
    disableScroll();
  } else {
    enableScroll();
  }
  openSound.play();
});

closeMenu.addEventListener("click", () => {
  containerMenu.classList.remove("containerMenuOpen");
  enableScroll();
  closeSound.play();
});

/////////// FOND DUPLIQUÉ AVEC BLUR ////////////////

if (window.location.pathname.includes("index.html")) {
  const mainContent = document.getElementById("mainContent");
  const blurBackground = document.querySelector(".blur-background");

  const clonedContent = mainContent.cloneNode(true);
  clonedContent.classList.add("clone");

  blurBackground.appendChild(clonedContent);

  // Synchronisation du scroll
  window.addEventListener("scroll", () => {
    blurBackground.scrollTop = window.scrollY;
  });

  // Synchronise le thème nuit
  const observer = new MutationObserver(() => {
    if (indexHeader.classList.contains("night")) {
      clonedContent.classList.add("night");
      blurBackground.classList.add("night");
    } else {
      clonedContent.classList.remove("night");
      blurBackground.classList.remove("night");
    }
  });

  observer.observe(indexHeader, {
    attributes: true,
    attributeFilter: ["class"],
  });
}

///////// ACTIVER DESACTIVER SON //////////////
if (window.location.pathname.includes("index.html")) {
  speaker.addEventListener("click", function () {
    if (isPlaying) {
      music.pause();
      openSound.volume = 0;
      closeSound.volume = 0;
      speaker.classList.remove("soundOn");
      speaker.classList.add("soundOff");
      isPlaying = false;
    } else {
      music.play().catch((e) => {
        console.log("Erreur lors de la lecture audio:", e);
      });
      openSound.volume = 0.3;
      closeSound.volume = 0.3;
      speaker.classList.remove("soundOff");
      speaker.classList.add("soundOn");
      isPlaying = true;
    }
  });
}

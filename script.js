const menu = document.querySelector('.menu-icon'); // Sélectionne l'icône du menu
const navlinks = document.querySelector('.nav-links'); // Sélectionne la liste des liens

menu.addEventListener('click', () => {
  navlinks.classList.toggle('mobile-menu'); // Ajoute/retire la classe mobile-menu
});
// Fonction pour obtenir la valeur d'un cookie par son nom
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name + '=') === 0) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }
  return "";
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Durée du cookie en jours
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Vérifier si le consentement aux cookies a déjà été donné
function checkCookieConsent() {
  const cookieConsent = getCookie("cookieConsent");
  if (cookieConsent === "true") {
    document.getElementById("cookie-banner").style.display = "none"; // Cacher la bannière
  } else {
    document.getElementById("cookie-banner").style.display = "block"; // Afficher la bannière
  }
}

// Fonction pour accepter les cookies
function acceptCookies() {
  setCookie("cookieConsent", "true", 365); // Le consentement est stocké pendant 365 jours
  document.getElementById("cookie-banner").style.display = "none"; // Cacher la bannière après acceptation
}

// Fonction pour refuser les cookies (facultatif, vous pouvez modifier ou supprimer cette partie)
function rejectCookies() {
  setCookie("cookieConsent", "false", 365); // Refuser les cookies
  document.getElementById("cookie-banner").style.display = "none"; // Cacher la bannière après refus
}

// Exécuter lors du chargement de la page
window.onload = function() {
  checkCookieConsent();
};
const menuButton = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Ajouter un événement de clic sur le bouton
menuButton.addEventListener('click', function() {
  // Basculer la classe 'active' sur le menu
  navLinks.classList.toggle('active');
});
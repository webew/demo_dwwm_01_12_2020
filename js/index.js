// on cible les éléments du DOM
let bod = document.querySelector("body");
let header = document.querySelector("header");
// oncrée la navBar
let navBar = document.createElement("nav");
// on crée une liste de menus
let menuTopItems = [
    {
        texte: "Accueil",
        href: "accueil",
    },
    {
        texte: "Actualités",
        href: "actualites",
    },
    {
        texte: "Contact",
        href: "contact",
    },
    {
        texte: "Connexion",
        href: "connexion",
    },
];

// on boucle sur la liste de menus
for (let menuItem of menuTopItems) {
    let lien = buildLink(menuItem); // on fait appel à la fonction buildLink
    navBar.appendChild(lien);
}
// on ajoute la navBar à header
header.appendChild(navBar);

// on cible les éléments de type a => NodeList
let menuLinks = document.querySelectorAll("a");
// on boucle sur les liens
// menuLinks.forEach((element) => {
//     handleHover(element); // ajoute un gestionnaire d'événement à chaque lien
// });
// gestion du hover sur nav
navBar.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "#F27";
});
navBar.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "transparent";
});

// gestion du clic sur les liens de la navBar
navBar.addEventListener("click", function (event) {
    // désactiver le comportement naturel du lien
    event.preventDefault();

    // masquer tous les articles
    let articles = document.querySelectorAll("article");
    articles.forEach((article) => {
        article.style.display = "none";
    });

    // afficher l'article correspondant au lien
    let linkHref = event.target.getAttribute("href"); // accueil
    let articleCible = document.getElementById(linkHref);
    articleCible.style.display = "block";
});

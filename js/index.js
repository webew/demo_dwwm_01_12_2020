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
menuLinks.forEach((element) => {
    handleHover(element); // ajoute un gestionnaire d'événement à chaque lien
});

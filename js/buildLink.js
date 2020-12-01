function buildLink(linkObject) {
    let menuLink = document.createElement("a");
    menuLink.textContent = linkObject.texte;
    menuLink.href = linkObject.href;
    return menuLink;
}

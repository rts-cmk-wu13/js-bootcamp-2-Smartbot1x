function hideFunktion(hideElement) {
    const hide = document.querySelector(hideElement);
    if (hide) {
        hide.style.display = "none";
    }
}
hideFunktion(".profil img");

// teacher
function skjulElementerViaCssSelector(cssSelector) {
    let elements = document.querySelectorAll(cssSelector)
    elements.forEach(function(element) {
        skjulElement(element)
    })
}

function skjulElement (element) {
    if(element != null) element.style.display = "none"
}

skjulElementerViaCssSelector(".bodycopy")




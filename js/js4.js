// Vælg alle knapper inden i elementet med ID "buttons"
let buttons = document.querySelectorAll("#buttons button");

// Function to handle click events
function handleClick(clickedElement) {
    buttons.forEach(function(button) {
        button.style.backgroundColor = "#eee"; 
    });
    clickedElement.style.backgroundColor = "#7f7";
}

// Tilføj en click-event til hver knap
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        handleClick(button);
    });
});

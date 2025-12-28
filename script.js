// Uppgift 4 - Skapa variabler

// Hämta checkboxen med getElementById (eftersom vi inte använt den förut)
const checkbox = document.getElementById('divStyle').querySelector('input[type="checkbox"]');

// Hämta alla textfält med getElementsByClassName (eftersom vi inte använt den förut)
const textFields = document.getElementsByClassName('textfield');

// Hämta knappen med querySelector (eftersom vi inte använt den förut)
const button = document.querySelector('button');

// Hämta div-elementet med getElementsByClassName (rutan som innehåller allt)
const divElement = document.getElementsByClassName('ruta')[0];

// Uppgift 5 - Skapa en fördefinierad funktion
function handleInputEvent(e) {
    // Skriv ut vilket element som genererade eventet
    console.log('Event genererat av:', e.target);
    
    // Ta reda på inputfältets name-attribut (eller id som fallback)
    const elementId = e.target.parentElement.id;
    
    // Om det är inputfältet med id "content"
    if (elementId === 'content') {
        // Hämta värdet från inputfältet
        const inputValue = e.target.value;
        
        // Skriv ut värdet till div-elementet
        divElement.innerHTML += `<p>${inputValue}</p>`;
    }
}

// Uppgift 6 - Koppla eventlyssnare

// Eventlyssnare till checkboxen (anonym funktion)
checkbox.addEventListener('change', function() {
    // Hämta färgen från första input-fältet
    const colorInput = textFields[0].querySelector('input[type="text"]');
    const colorValue = colorInput.value;
    
    // Ändra bakgrundsfärgen på div-elementet
    divElement.style.backgroundColor = colorValue;
    
    console.log('Bakgrundsfärg ändrad till:', colorValue);
});

// Eventlyssnare till textfälten
for (let i = 0; i < textFields.length; i++) {
    const inputField = textFields[i].querySelector('input[type="text"]');
    
    if (inputField) {
        // Använd 'input' event för att fånga all skrivning
        inputField.addEventListener('input', handleInputEvent);
        
        // Använd 'blur' event för när man lämnar fältet
        inputField.addEventListener('blur', handleInputEvent);
    }
}

// Eventlyssnare till knappen (anonym funktion)
button.addEventListener('click', function() {
    // Ta bort div-elementet från DOM-trädet
    if (divElement.parentNode) {
        divElement.parentNode.removeChild(divElement);
        console.log('Div-elementet har tagits bort från DOM-trädet');
    }
    
    // Alternativt med remove() metoden:
    // divElement.remove();
});

// Extra: Ta bort den befintliga inline onclick-funktionen från HTML
button.removeAttribute('onclick');

// Initieringsmeddelande
console.log('Lab 2 - Grupp 47 är redo!');

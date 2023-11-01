const listNames = ["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", "Josué", "Thibault", "Eduarda", "Mohammed", "Funda", "Luis", "Alexandru", "Andrej", "Danté", "Jonasi", "Kelsey", "Rana", "Jana", "Sieglinde", "Gustave", "Sezin", "Thierry", "Sylvie", "Anaïs"]
function shuffleArray(array) {
    for (let index = array.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        // const copy = array[index];
        // Math.random(): This function in JavaScript generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
        //  It produces a random fractional value.
        // Math.floor rounds down the randomIndex to make sure it is an integer.
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    }
}

        shuffleArray(listNames);

function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }

function addSection(person) {
    const newSection = document.createElement("section");
    const newParagraph = document.createElement("paragraph");
    const newContent = document.createTextNode(person);
    newParagraph.appendChild(newContent);
    newSection.appendChild(newParagraph);

    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + R + "," + G + "," + B + ")";
    console.log(randomColor)

    newSection.style.backgroundColor = randomColor;
    if (R+G+B < 330){
        
        newParagraph.style.color = "white";
    }
        document.querySelector('article').appendChild(newSection);
}
listNames.forEach(element => {
    addSection(element);
    console.log("add section for " + element);
});
        // Append the shuffled list items back to the list
        listNames.forEach((element) => addSection(element));
// Type Racer Game

// Variables for HTML Elements
let phraseOneEl = document.getElementById("phraseOne");
let phraseTwoEl = document.getElementById("phraseTwo");
let questionInputEl = document.getElementById("questionInput")

// Array the user has to type
let strOne = phraseOneEl.innerHTML;
let q1Array = strOne.split("");
let strTwo = phraseTwoEl.innerHTML;
let q2Array = strTwo.split("");



// Empty Array for User's Keystrokes
let userKeys = [];

// Event Listener
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    // Add keys to array
    userKeys.push(event.key);


    // Cap length of array
    let question = questionInputEl.ariaValueMax;
    if (question === "one") {
        if (userKeys.length > 44) {
            userKeys.splice(0, 1);
        }
    } else if (question === "two") {
        if (userKeys.length > 46) {
            userKeys.splice(0, 1);
        }
    }

    console.log(userKeys);

    // Check if correct
    if (JSON.stringify(userKeys) === JSON.stringify(q1Array)) {
        phraseOneEl.style.fontWeight = "bold";
        phraseOneEl.style.color = "green";
    } else if (JSON.stringify(userKeys) === JSON.stringify(q2Array)) {
        phraseTwoEl.style.fontWeight = "bold";
        phraseTwoEl.style.color = "green";
    }
}

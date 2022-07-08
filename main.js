// Type Racer Game

// Variables for HTML Elements
let phraseOneEl = document.getElementById("phraseOne");
let phraseTwoEl = document.getElementById("phraseTwo");
let phraseThreeEl = document.getElementById("phraseThree");
let phraseFourEl = document.getElementById("phraseFour");
let phraseInputEl = document.getElementById("phraseInput");

// Array the user has to type
let strOne = phraseOneEl.innerHTML;
let q1Array = strOne.split("");
let strTwo = phraseTwoEl.innerHTML;
let q2Array = strTwo.split("");
let strThree = phraseThreeEl.innerHTML;
let q3Array = strThree.split("");
let strFour = phraseFourEl.innerHTML;
let q4Array = strFour.split("");


// Empty Array for User's Keystrokes
let userKeys = [];

// Event Listener
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    // Add keys to array
    userKeys.push(event.key);


    // Cap length of array
    let phraseNum = phraseInputEl.value;
    limitUserInput(phraseNum);

    console.log(userKeys);

    // Check if correct
    if (JSON.stringify(userKeys) === JSON.stringify(q1Array)) {
        phraseOneEl.style.fontWeight = "bold";
        phraseOneEl.style.color = "green";
    } else if (JSON.stringify(userKeys) === JSON.stringify(q2Array)) {
        phraseTwoEl.style.fontWeight = "bold";
        phraseTwoEl.style.color = "green";
    } else if (JSON.stringify(userKeys) === JSON.stringify(q3Array)) {
        phraseThreeEl.style.fontWeight = "bold";
        phraseThreeEl.style.color = "green";
    } else if (JSON.stringify(userKeys) === JSON.stringify(q4Array)) {
        phraseFourEl.style.fontWeight = "bold";
        phraseFourEl.style.color = "green";
    }
}

function limitUserInput(phrase) {
    if (phrase === "one") {
        if (userKeys.length > 44) {
            userKeys.splice(0, 1);
        }
    } else if (phrase === "two") {
        if (userKeys.length > 46) {
            userKeys.splice(0, 1);
        }
    } else if (phrase === "three") {
        if (userKeys.length > 53) {
            userKeys.splice(0, 1);
        }
    } else if (phrase === "four") {
        if (userKeys.length > 85) {
            userKeys.splice(0, 1);
        }
    }
}

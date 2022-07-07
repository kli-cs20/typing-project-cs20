// Type Racer Game

// Array the user has to type
let str = "The quick brown fox jumps over the lazy dog.";
let finalArray = str.split("");

// Empty Array for User's Keystrokes
let userKeys = [];

// Event Listener
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    // Add keys to array
    userKeys.push(event.key);

    // Cap length of array
    if (userKeys.length > 44) {
        userKeys.splice(0, 1);
    }

    console.log(userKeys);

    // Check if correct
    if (JSON.stringify(userKeys) === JSON.stringify(finalArray)) {
        alert("Correct!");
    }
}
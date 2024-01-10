// 1. Create a variable named `place` and set the value to a string that says whatever place you want.
let place = "Etris";
// 2. Create a variable named `creatureName` and set the value to a string that says whatever name you want to give the creature.
let creatureName = "Lucina";
// 3. Create a variable named `color` and set the value to a string that says whatever color you want.
let color = "purple";
// 4. Create a variable named `color2` and set the value to a string that says a different color you want.
var color2 = "red"; 
// 5. Create a variable named `emotion` and set the value to a string that says whatever emotion you want.
var emotion = "tired";
// 6. Create a variable named `character` and set the value to a string that says whatever name for a character you want.
var character = "Mario";
// 7. Create a variable named `number` and set the value to a number greater than 1.
var number = "2";
// 8. Create a variable named `item` and set the value to a string that says whatever item/thing you want.
var item = "maze shards";
// 9. Create a variable named `item2` and set the value to a string that says a different item/thing you want.
var item2 = "KS-23";
// 10. Create a variable named `verb` and set the value to a string that says whatever verb you want.
var verb = "running";
// 11. Create a variable named `adverb` and set the value to a string that says whatever adverb you want.
var adverb = "smoothly";
// 12. Create a variable named `number2` and set the value to a number greater than 1.
var number2 = "30";

var creatureNameAgain = "Lucina";

var characterAgain = "Mario";

// 14. Replace the null values with the appropriate variable you created above.
// - Afterwards, run your code and press the button to see your story ✨

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".place").innerHTML = "Etris";
    document.querySelector(".creature-name").innerHTML = "Lucina";
    document.querySelector(".color").innerHTML = "purple";
    document.querySelector(".color-2").innerHTML = "red";
    document.querySelector(".emotion").innerHTML = "tired";
    document.querySelector(".character").innerHTML = "Mario";
    document.querySelector(".creature-name-again").innerHTML = "Lucina";
    document.querySelector(".number").innerHTML = "2";
    document.querySelector(".item").innerHTML = "maze shards";
    document.querySelector(".character-again").innerHTML = "Mario";
    document.querySelector(".item-2").innerHTML = "KS-23";
    document.querySelector(".verb").innerHTML = "running";
    document.querySelector(".adverb").innerHTML = "smoothly";
    document.querySelector(".number-2").innerHTML = "30";
    document.querySelector(".story-container").style = "display:block";
});

console.log(place);
console.log(creatureName);
console.log(color);
console.log(color2);
console.log(emotion);
console.log(character);
console.log(number);
console.log(item);
console.log(item2);
console.log(verb);
console.log(adverb);
console.log(number2);
console.log(creatureNameAgain);
console.log(characterAgain);
//? Exercise: String Manipulation Challenge

//? Objective
// Learners will use popular JavaScript string methods to solve real-world text-processing problems. This exercise introduces them to essential string methods such as length, toUpperCase, toLowerCase, trim, slice, indexOf, replace, split, and includes.

//? Scenario

// You're working on a content editing app that processes user-generated text. You need to implement various features to clean up, analyze, and modify user input.

// Tasks
console.log("=================Task 1=============================");
// Todo Task 1: Basic Cleanup
let userInput = prompt("Enter Sentence:").trim();
console.log("New Sentence:", userInput);


console.log("=================Task 2=============================");
// Todo Task 2: Convert Case
let toUpperCase = userInput.toUpperCase();
console.log("Uppercase:", toUpperCase);

let toLowerCase = userInput.toLowerCase();
console.log("Lowercase:", toLowerCase);

console.log("=================Task 3=============================");
// Todo Task 3: Extract a Substring

// Ask the user to input a position (number).
// Use .slice() to extract a substring from that position to the end of the sentence.

let positionNumber = parseInt(prompt("Enter position:"));

if (positionNumber > 0 && positionNumber < userInput.length) {
  console.log("Substring:", userInput.slice(positionNumber));
} else {
  console.log("Invalid position number");
}

console.log("=================Task 4=============================");
// Todo Task 4: Find and Replace Words
let findStr = prompt(`sentence is: ${userInput} \nword to find:`);
let replaceStr = prompt(`sentence is: ${userInput} \nWord to replace:`);
let result = userInput.replace(findStr, replaceStr);
console.log(`Old Sentence: ${userInput}, New Sentence: ${result}`);


console.log("=================Task 5=============================");
// Todo Task 5: Search for a Word
let searchStr = prompt("search for:");

if (userInput.includes(searchStr)) {
  console.log(`The word '${searchStr}' is in the sentence.`);
} else {
  console.log(`The word '${searchStr}' is not in the sentence.`);
}

console.log("=================Task 6=============================");
// Todo Task 6: Word Count
let words = userInput.split(" ");
console.log(`Word Count: ${words.length}\nWords are: ${words}`);

console.log("=================Task 7=============================");
// Todo Task 7: Character Count
console.log(`Total number of characters is: ${userInput.length}`);

// =============== Code Template ====================================
/*
// Task 1: Basic Cleanup
let sentence = prompt("Enter a sentence with extra spaces:").trim();
console.log("Cleaned Sentence:", sentence);

// Task 2: Convert Case
console.log("Uppercase:", sentence.toUpperCase());
console.log("Lowercase:", sentence.toLowerCase());

// Task 3: Extract a Substring
let position = parseInt(prompt("Enter a starting position to extract a substring:"));
console.log("Substring:", sentence.slice(position));

// Task 4: Find and Replace Words
let wordToFind = prompt("Enter a word to find:");
let wordToReplace = prompt("Enter a word to replace it with:");
console.log("Updated Sentence:", sentence.replace(wordToFind, wordToReplace));

// Task 5: Check for a Word
let searchWord = prompt("Enter a word to search for:");
if (sentence.includes(searchWord)) {
  console.log(`The word '${searchWord}' is in the sentence.`);
} else {
  console.log(`The word '${searchWord}' is not in the sentence.`);
}

// Task 6: Word Count
let wordCount = sentence.split(" ").length;
console.log("Word Count:", wordCount);

// Task 7: Character Count
console.log("Character Count:", sentence.length);
*/

// ========== Bonus Challenge (Optional) =============================
// Capitalize the First Letter:
// Write a function that takes a sentence and capitalizes the first letter of each word. 
// Use .split(), .toUpperCase(), and .slice().

function capitalizeFirstLetter(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

// Reverse the Sentence:
// Write a function to reverse the sentence using a combination of
// .split(), .reverse(), and .join().

function reverseSentence(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

//Get the input
function solveChallenge() {
  const sentence = document.getElementById("sentence").value;

  let result = `Capitalized: ${capitalizeFirstLetter(sentence)} <br> Reversed: ${reverseSentence(sentence)}`;
  document.getElementById("output").innerHTML = result;
}
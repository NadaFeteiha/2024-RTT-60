/**
 * ================ Introduction ===============================
 * The document object is an object that represent the current HTML page: eg: index.html
 *
 * Using the method "getElementById" we can select any HTML element by it's assigned id attribute.
 * (see index.html line 11)
 *
 * We can cached or store the reference to these element in variables and
 * change or manipulate it using JavaScript.
 *
 * 👨‍💻 Happy Hacking! 👩‍💻
 */

// TODO: 1. Select the button and title elements using their assigned id's.
// Check index.html to find their id's
const button = document.getElementById("magicButton"); // <- this one is done!
const title = document.getElementById("title"); // TODO: <- pass the id of the H1
const btnTheme = document.getElementById("themChange");
const container = document.getElementById("container");

// TODO: 2. console log the button and title variables:
console.log(button); // <-- button
console.log(title); // <-- title
console.log(btnTheme); // <-- button theme
// check the browser console, you should see the elements!

// TODO: 3. Magic
// Add a click event listener to the button,
// replace the underscores with the button variable: eg (button.onclick)
button.onclick = function () {
  // TODO: Click the button on the browser and see the magic!

  // TODO: Experiment! -> Change the text and style of the title
  title.textContent = "✨ Magic Happened! ✨";
  title.style.color = "purple";
  title.style.fontSize = "2em";
};

// This is just a small example of how we can make dynamic applications using JS!
// TODO: 4. Read more about the DOM:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

// Fun Add-On Challenge:
// Add another button to create your own page color theme.
// Steps:
// 1. Add another button in the HTML file with an unique id.
// 2. Cache the new button in a variable using "getElementById".
// 3. To the "onclick" property of the button assign a new function that changes:
// the background color and the text color eg:
// ___.style.backgroundColor = "black"
// ___.style.color = "white"
// You can start right below this line.

btnTheme.onclick = function () {
  document.body.style.backgroundColor = "#E6E6FA";
  document.body.style.color = "white";
  title.style.color = "Gray";
  title.style.fontSize = "2em";
  title.style.fontFamily = "Arial";
  title.style.fontWeight = "bold";
  title.style.textAlign = "center";
  title.style.padding = "10px";

  // style the button
  button.style.backgroundColor = "black";
  button.style.color = "white";

  btnTheme.style.backgroundColor = "black";
  btnTheme.style.color = "white";

  // add the container div to the center
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.gap = "10px";

}
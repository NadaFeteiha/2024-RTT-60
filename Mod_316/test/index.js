// Caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");

// Registering an anonymous event listener to the
// list of comments.
cList.addEventListener("click", (e) => {
    // Using the event object's "target" property
    // to apply styling to the *actual* element
    // that fired the event!
    e.target.classList.toggle("strikethrough");
    // get access to the actual element that fired the event
    // if with id or content test do something
    if (e.target.id === "test") {
        console.log("test");
    }

    console.log(e.target);
});

// The function to handle adding new comments.
function addComment() {
    const newComment = cInput.value;

    // This wasn't in the instructions, but
    // we added a guard against empty comments:
    if (newComment === "") return;

    cList.appendChild(document.createElement("li")).textContent = newComment;
    cInput.value = "";
    cInput.focus();
}

// Register the event listener.
cBtn.addEventListener("click", addComment);


// const app = document.getElementById('app');

// const div = document.createElement('div');
// const ul = document.createElement('ul');
// const li = document.createElement('li');
// li.textContent = 'Hello World';


// ul.appendChild(li);
// div.appendChild(ul);
// app.appendChild(div);


// // table
// // for (let i = 0; i < 5; i++) {
// //     const table = document.createElement('table');
// //     const tr = document.createElement('tr');
// //     const td = document.createElement('td');
// //     td.textContent = 'Hello World';
// //     tr.appendChild(td);
// //     table.appendChild(tr);
// //     app.appendChild(table);
// // }


// //prepend
// // prepend is a method that inserts a set of Node objects or
// // DOMString objects before the first child of the ParentNode.
// const p = document.createElement('p');
// p.textContent = 'Hello prepend';
// app.prepend(p);


// // insertBefore
// // The Node.insertBefore() inserts a node before the reference node.
// const h1 = document.createElement('h1');
// h1.textContent = 'Hello insertBefore';
// app.insertBefore(h1, div);


// // append
// // The ParentNode.append()  inserts  after the last child of the ParentNode.
// const h2 = document.createElement('h2');
// h2.textContent = 'Hello append';
// app.append(h2);



// // replaceChild
// // The Node.replaceChild() replaces a child node within the given parent.
// const h3 = document.createElement('h3');
// h3.textContent = 'Hello replaceChild';


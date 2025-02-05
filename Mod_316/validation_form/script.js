
const form = document.getElementById('register');
console.log("===================================");
console.log(form);


console.log(form.elements);

const username = form.elements.username;
const email = form.elements.email;

username.addEventListener('input', function (event) {
    console.log(username.value);

    if (["user1", "user2"].includes(username.value)) {
        console.log('Username already taken');
    } else {
        console.log('Username available');
    }
});

email.addEventListener('input', function (event) {
    console.log(email.value);

    if (email.value.includes('@')) {
        console.log('Email is valid');
    } else {
        console.log('Email is not valid');
    }
});


// fires when the form is submitted
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Form submitted');
    console.log(username.value);
    console.log(email.value);
});

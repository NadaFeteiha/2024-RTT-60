


// =========== DOG API =====================
const dog = document.getElementById('dog');
dog.addEventListener("click", getNewDog);

async function getNewDog() {
    dog.style.cursor = 'wait';
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    const url = jsonData.message;

    dog.src = url;
    dog.style.cursor = 'pointer';
}

getNewDog();


// =================== POST ====================

document.getElementById("myBtn").addEventListener("click", testRequest);

async function testRequest() {
    let inputVal = document.getElementById("myInput").value;

    let requestBody = {
        data: inputVal
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    alertResponse(response);
}


async function alertResponse(response) {
    console.log(response);

    if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData);
    } else {
        alert("Failed to post data");
    }
}

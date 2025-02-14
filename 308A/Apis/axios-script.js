
document
    .getElementById("myBtn")
    .addEventListener("click", testRequest);

async function testRequest() {
    let inputVal = document.getElementById("myInput").value;
    let requestBody = { data: inputVal };

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    });

    logResponse(response);
}

async function logResponse(response) {
    if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData);
    } else {
        console.log("The request returned a status other than 200 OK: " + response.status);
    }
}



/**
 * @method POST 
 * @route /todos
 * @description create a new todo
 */
async function testRequest() {
    let inputVal = document.getElementById("myInput").value;
    let requestBody = { data: inputVal, username: "user1" };

    const response = await axios.post('https://jsonplaceholder.typicode.com/todos',
        requestBody, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    });

    console.log("Response Time in MS: ", response.durationInMS);

    logResponse(response);
}

//* logResponse
async function logResponse(response) {
    console.log(response);

    console.log(response.data);
}


/**
 * @method GET 
 * @description Fetch users from the API
 * @param
 */
async function fetchData() {
    const response = await axios('https://jsonplaceholder.typicode.com/users');

    console.log("Response Time in MS: ", response.durationInMS);
    console.log(response.data);

}
fetchData()
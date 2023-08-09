const url = 'https://jsonplaceholder.typicode.com/posts';

async function postData(event) {
    event.preventDefault();

    title = document.getElementById('title').value;
    body = document.getElementById('body').value;
    userId = document.getElementById('userId');

    const request = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userId
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', 
        }
    });
    const data = await request.json();
    console.log(data);
    document.getElementById("form").reset();
}

const form = document.getElementById('form');
form.addEventListener('submit', postData);



// Create a form that 
// Has - title, body and userId - number

// When you hit submit, get the form values and send your request to the posts endpoint: 'https://jsonplaceholder.typicode.com/posts'

// After you send the request and get a response, log the response in the terminal.

// Here is an sample example of a post request using  fetch API

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// The output would be as follows:

// {
//     id: 101,
//     title: 'foo',
//     body: 'bar',
//     userId: 1
//   }

//  You can read more here https://jsonplaceholder.typicode.com/guide/
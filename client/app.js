const graphQL_URL = 'http://localhost:9000';

async function fetchGreeting() {
    const response = await fetch(graphQL_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: `
                query {
                    greeting
                }
            `
        })
    });
   const {data} = await response.json();
   return data;
}
//Because this is an Async function it returns a promoise, destructor greeting prop
fetchGreeting()
    .then(({greeting}) => {
        const title = document.querySelector('h1');
        title.textContent = greeting;
    })
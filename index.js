// Add your code here
function submitData(userName, userEmail) {

    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    };

    return fetch('http://localhost:3000/users', configObject)
    .then(resp => resp.json())
    .then(obj => {
        const elem = document.createElement('h1');
        elem.innerHTML = obj.id;
        return elem;
    })
    .then(elem => document.querySelector('body').appendChild(elem))
    .catch(error => {
        const errorMessage = document.createElement('h3');
        errorMessage.innerHTML = error.message;
        document.querySelector('body').appendChild(errorMessage);
    });
}
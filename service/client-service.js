const listClients = () => {
    return fetch('http://localhost:3000/profile')
    .then( response => {
        return response.json()
    })
}

const newClient = (name, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then( response => {
        return response.body
    })
}

const removeClient = () => {
    return fetch(`http://localhost:3000/profile`, {

    })
}

export const clientService = {
    listClients,
    newClient
}

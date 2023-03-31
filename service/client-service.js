const listClients = () => {
    return fetch('http://localhost:3000/profile')
    .then( response => {
        if(response.ok){
            return response.json()
        }
        throw new Error('Unable to list clients')
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
        if(response.ok){
            return response.json()
        }
        throw new Error('Unable to add new client')
    })
}

const removeClient = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then( response => {
        if(!response.ok){
            throw new Error('Unable to delete client')
        }
    })
}

const infoClient = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( response => {
        if(response.ok){
            return response.json()
        }
        throw new Error('Unable to detail client')
    })
}

const updateClient = (id, name, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then( response => {
        if(response.ok){
            return response.json()
        }
        throw new Error('Unable to update client')
    })
}

export const clientService = {
    listClients,
    newClient,
    removeClient,
    infoClient,
    updateClient
}

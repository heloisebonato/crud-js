import { clientService } from "../service/client-service.js";

const newRow = ( name, email, id) => {
    const newClient = document.createElement('tr')
    const content = `
        <td class="td" data-td>${name}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html?id=${id}" class="simple-button button-edit">Editar</a></li>
                <li><button class="simple-button button-delete" type="button">Excluir</button></li>
            </ul>
        </td>
    `
    newClient.innerHTML = content
    newClient.dataset.id = id
    return newClient

}

const table = document.querySelector('[data-table]')

table.addEventListener('click', async(event) => {
    let deleteButton = event.target.className === 'simple-button button-delete'
    if(deleteButton){
        try{
            const rowClient = event.target.closest('[data-id]')
            let id = rowClient.dataset.id
            await clientService.removeClient(id)
            rowClient.remove()
        }
        catch(error){
            console.log(error)
            window.location.href = '../pages/error.html'
        }

    }
})

const render = async () => {
    try{
        const listClients = await clientService.listClients()

        listClients.forEach(element => {
        table.appendChild(newRow(element.name, element.email, element.id))
    })
    }
    catch(error){
        console.log(error)
        window.location.href = '../pages/error.html'
    }

}

render()
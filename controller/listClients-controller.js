import { clientService } from "../service/client-service.js";

const newRow = ( name, email) => {
    const newClient = document.createElement('tr')
    const content = `
        <td class="td" data-td>${name}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>
    `
    newClient.innerHTML = content
    return newClient

}

const table = document.querySelector('[data-table]')

clientService.listClients()
.then( data => {
    data.forEach(element => {
    table.appendChild(newRow(element.name, element.email))
})})
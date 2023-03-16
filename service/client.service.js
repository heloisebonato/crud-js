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

const ListCLients = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest()

        http.open('GET', 'http://localhost:3000/profile')

        http.onload = () => {
           if(http.status >= 400){
            reject(JSON.parse(http.response))
           }else{
            resolve(JSON.parse(http.response))
           }
        }
        http.send()
    })
    return promise
}

ListCLients()
.then( data => {
    const data = JSON.parse(http.response)
    data.forEach(element => {
    table.appendChild(newRow(element.name, element.email))

})})
import { clientService } from "../service/client-service.js";

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = event.target.querySelector('[data-name]').value
    const email = event.target.querySelector('[data-email]').value

    clientService.newClient( name, email )
    .then(() => {
        window.location.href = '../pages/register_completed.html'
    })
})
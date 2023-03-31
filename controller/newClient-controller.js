import { clientService } from "../service/client-service.js";

const form = document.querySelector('[data-form]')

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    try{
        const name = event.target.querySelector('[data-name]').value
        const email = event.target.querySelector('[data-email]').value

        await clientService.newClient( name, email )
        window.location.href = '../pages/register_completed.html'
    }
    catch(error){
        console.log(error)
        window.location.href = '../pages/error.html'
    }
})
import { clientService } from "../service/client-service.js";

(async () => {
    const getUrl = new URL(window.location)

    const id = getUrl.searchParams.get('id')
    const inputName = document.querySelector('[data-name]')
    const inputEmail = document.querySelector('[data-email]')

    try{
        const data = await clientService.infoClient(id)
        inputName.value = data.name
        inputEmail.value = data.email
    }
    catch(error){
        console.log(error)
        window.location.href = '../pages/error.html'
    }

    const form = document.querySelector('[data-form]')

    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        try{
        await clientService.updateClient(id, inputName.value, inputEmail.value)
        window.location.href = './pages/edit_completed.html'

        }
        catch(error){
            console.log(error)
            window.location.href = '../pages/error.html'
        }
    })
})()

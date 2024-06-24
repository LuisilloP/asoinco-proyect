import { FormDataAsoinco } from '../Interfaces';
export const sendData = (formData: FormDataAsoinco): Promise<Response> => {

    const { correo } = formData

    const getResponse = fetch('https://formsubmit.co/ajax/trabajoluisaraya@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            data: formData,

        })
    })
        .then((response) => response.json())
    return getResponse
}
import type { ISendContactData } from "../interfaces/ISendContactData"

export default class HomeController {

    public static async sendContact(data: ISendContactData) {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            const data = await response.json().catch(() => ({}))
            throw new Error(data?.error ?? 'Não foi possível enviar a mensagem agora.')
        }
    }

}

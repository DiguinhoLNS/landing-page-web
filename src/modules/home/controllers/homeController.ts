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

        if(response.ok) {
            return
        }

        const body = await response.json().catch(() => null) as { message?: string } | null

        throw new Error(body?.message ?? 'Nao foi possivel enviar a mensagem agora.')
    }

}

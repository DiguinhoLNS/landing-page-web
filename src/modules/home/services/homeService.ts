import type { ISendContactData } from "../interfaces/ISendContactData"

export default class HomeService {

    public static async sendContact(data: ISendContactData) {
        return await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

}
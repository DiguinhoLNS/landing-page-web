import { type FormikState } from "formik"
import HomeService from "../services/homeService"
import type { ISendContactData } from "../interfaces/ISendContactData"

export default class HomeController {

    public static async sendContact(
        data: ISendContactData,
        resetForm: (nextState?: Partial<FormikState<ISendContactData>> | undefined) => void,
        setStatus: (status?: unknown) => void
    ) {
        setStatus(undefined)

        const response = await HomeService.sendContact(data)

        if (!response.ok) {
            const data = await response.json().catch(() => ({}))
            
            setStatus({
                type: 'error',
                message: data?.error?.message ?? 'Não foi possível enviar a mensagem agora.'
            })
        }

        setStatus({ type: 'success', message: 'Mensagem enviada com sucesso.' })
    }

}

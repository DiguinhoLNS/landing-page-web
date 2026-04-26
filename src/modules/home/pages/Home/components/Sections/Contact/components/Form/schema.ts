import * as yup from 'yup'

export const contactFormSchema = yup.object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
    message: yup.string().required('A mensagem é obrigatória'),
})
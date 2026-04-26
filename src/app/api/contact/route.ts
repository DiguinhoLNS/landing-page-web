import { Resend } from 'resend'
import type { ISendContactData } from '@/modules/home/interfaces/ISendContactData'

export const runtime = 'nodejs'

function isSendContactData(value: unknown): value is ISendContactData {

    if(!value || typeof value !== 'object') {
        return false
    }

    const body = value as Partial<Record<keyof ISendContactData, unknown>>

    if(typeof body.name !== 'string' || !body.name.trim()) {
        return false
    }

    if(typeof body.email !== 'string' || !body.email.trim()) {
        return false
    }

    const normalizedEmail = body.email.trim()

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
        return false
    }

    if(typeof body.message !== 'string' || !body.message.trim()) {
        return false
    }

    return true

}

export async function POST(request: Request) {

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_EMAIL

    if(!resendApiKey) {
        return Response.json(
            { message: 'Variavel RESEND_API_KEY nao configurada.' },
            { status: 500 }
        )
    }

    if(!toEmail) {
        return Response.json(
            { message: 'Variavel RESEND_TO_EMAIL nao configurada.' },
            { status: 500 }
        )
    }

    let payload: unknown = null

    try {
        payload = await request.json()
    }
    catch {
        return Response.json(
            { message: 'Corpo da requisicao invalido.' },
            { status: 400 }
        )
    }

    if(!isSendContactData(payload)) {
        return Response.json(
            { message: 'Dados de contato invalidos.' },
            { status: 400 }
        )
    }

    const data: ISendContactData = {
        name: payload.name.trim(),
        email: payload.email.trim(),
        message: payload.message.trim(),
    }

    const resend = new Resend(resendApiKey)

    const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev',
        to: [toEmail],
        replyTo: data.email,
        subject: `Novo contato de ${data.name}`,
        text: [
            'Novo contato recebido pela landing page.',
            '',
            `Nome: ${data.name}`,
            `Email: ${data.email}`,
            '',
            'Mensagem:',
            data.message,
        ].join('\n')
    })

    if(error) {
        return Response.json(
            { message: 'Falha ao enviar e-mail de contato.' },
            { status: 502 }
        )
    }

    return Response.json({ message: 'Mensagem enviada com sucesso.' })

}

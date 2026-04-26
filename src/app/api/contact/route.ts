import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Campos obrigatórios faltando.' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
        from: 'Rodrigo <contato@rodrigolns.com.br>',
        to: process.env.CONTACT_EMAIL!,
        replyTo: email,
        subject: `Nova mensagem de ${name}`,
        html: `
            <div style="font-family: monospace; max-width: 520px; margin: 0 auto; color: #18181b;">
                <p style="font-size: 11px; letter-spacing: 0.1em; color: #a1a1aa; text-transform: uppercase; margin-bottom: 4px;">
                    Nova mensagem — Portfólio
                </p>
                <h2 style="font-size: 20px; margin: 0 0 24px;">Nova mensagem de ${name}</h2>
                <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                    <tr>
                        <td style="padding: 8px 0; color: #71717a; width: 80px;">Nome</td>
                        <td style="padding: 8px 0;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #71717a;">Email</td>
                        <td style="padding: 8px 0;">
                            <a href="mailto:${email}" style="color: #18181b;">${email}</a>
                        </td>
                    </tr>
                </table>
                <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 16px 0;" />
                <p style="font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 24px 0 12px;" />
                <p style="font-size: 11px; color: #a1a1aa;">
                    Responda diretamente neste email — o reply-to já está apontado para ${email}.
                </p>
            </div>
        `,
    })

    if (error) {
        console.error('[contact] Resend error:', error)
        return NextResponse.json({ error: 'Falha ao enviar email.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
}
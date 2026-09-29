import CookiePolicy from '@/modules/legal/pages/CookiePolicy'

export const metadata = {
    title: 'Política de cookies — rodrigo.dev',
    description: 'Quais cookies o rodrigo.dev usa, para quê e como gerenciar o seu consentimento.'
}

export default function Page() {
    return <CookiePolicy />
}

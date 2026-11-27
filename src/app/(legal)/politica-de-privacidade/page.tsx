import type { Metadata } from 'next'
import PrivacyPolicy from '@/modules/legal/pages/PrivacyPolicy'
import { siteName } from '@/constants/site'
import { PRIVACY_POLICY_PATH } from '@/modules/legal/constants/routes'

const title = 'Política de privacidade'
const description = 'Quais dados o rodrigo.dev coleta, para quê, com quem compartilha e como gerenciar cookies.'

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: PRIVACY_POLICY_PATH
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        siteName,
        url: PRIVACY_POLICY_PATH,
        title,
        description
    }
}

export default function Page() {
    return <PrivacyPolicy />
}

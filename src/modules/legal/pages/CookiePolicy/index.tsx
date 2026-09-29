import Link from 'next/link'
import clsx from 'clsx'
import Chip from '@/components/common/Chip'
import Icon from '@/components/common/Icon'
import Container from '@/components/page/Container'
import contacts from '@/modules/home/constants/contacts'
import cookieGroups, { cookiePolicyUpdatedAt } from '../../constants/cookies'
import CookiePolicyConsentControls from './components/ConsentControls'

const email = contacts.find(contact => contact.type === 'email')

const linkStyle = clsx(
    'text-primary underline underline-offset-2 rounded-sm',
    'outline-none focus-visible:ring-2 focus-visible:ring-primary'
)

function PolicySection({ title, children }: { title: string, children: React.ReactNode }) {

    return(

        <>
            <section className={clsx('flex flex-col gap-4')}>
                <h2 className={clsx('text-headline text-onSurface')}>
                    {title}
                </h2>

                <div className={clsx('flex flex-col gap-4', 'text-body text-onSurfaceVariant text-pretty')}>
                    {children}
                </div>
            </section>
        </>

    )

}

export default function CookiePolicy() {

    return(

        <>
            <Container className={clsx('flex flex-col gap-12 max-w-3xl py-12', 'md:py-16')}>
                <div className={clsx('flex flex-col gap-6')}>
                    <Link
                        href='/'
                        className={clsx(
                            'flex items-center gap-1.5 self-start rounded-full',
                            'text-footnote font-medium text-onSurfaceVariant',
                            'outline-none focus-visible:ring-2 focus-visible:ring-primary',
                            'hover:text-onSurface transition-colors duration-150'
                        )}
                    >
                        <Icon iconName='arrow_back' iconSize={18} />
                        Voltar para home
                    </Link>

                    <div className={clsx('flex flex-col gap-3')}>
                        <div className={clsx('flex items-center gap-3')}>
                            <span className={clsx('h-px w-6 bg-primary')} />

                            <p className={clsx('text-overline text-primary uppercase')}>
                                Privacidade
                            </p>
                        </div>

                        <h1 className={clsx('text-title-lg text-onSurface text-balance')}>
                            Política de cookies
                        </h1>

                        <p className={clsx('text-footnote text-onSurfaceVariant')}>
                            Última atualização: {cookiePolicyUpdatedAt}
                        </p>
                    </div>

                    <p className={clsx('text-body-lg text-onSurfaceVariant text-pretty')}>
                        Este é um portfólio pessoal. Não vendo dados, não uso publicidade e só coleto o necessário
                        para entender como o site é navegado. Abaixo está, em detalhes, o que é guardado no seu
                        navegador, por quem e por quanto tempo.
                    </p>
                </div>

                <CookiePolicyConsentControls />

                <PolicySection title='O que são cookies'>
                    <p>
                        Cookies são pequenos arquivos de texto que um site grava no seu navegador para lembrar
                        informações entre uma página e outra ou entre visitas. Tecnologias parecidas, como o
                        armazenamento local (localStorage), cumprem o mesmo papel e são tratadas aqui da mesma forma.
                    </p>
                </PolicySection>

                <PolicySection title='Quem é o responsável'>
                    <p>
                        O site rodrigo.dev é mantido por Rodrigo Santos, responsável pelo tratamento dos dados
                        descritos nesta política, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
                    </p>
                </PolicySection>

                <PolicySection title='O que é utilizado'>
                    {cookieGroups.map(group => (
                        <div key={group.id} className={clsx('flex flex-col gap-3')}>
                            <div className={clsx('flex flex-wrap items-center gap-3')}>
                                <h3 className={clsx('text-body font-medium text-onSurface')}>
                                    {group.title}
                                </h3>

                                <Chip
                                    label={group.required ? 'Sempre ativos' : 'Dependem do seu consentimento'}
                                    variant={group.required ? 'default' : 'warning'}
                                />
                            </div>

                            <p>{group.description}</p>

                            <ul
                                className={clsx(
                                    'flex flex-col rounded-2xl overflow-hidden',
                                    'bg-elevation-1 border border-outlineVariant',
                                    'divide-y divide-outlineVariant'
                                )}
                            >
                                {group.items.map(item => (
                                    <li key={item.name} className={clsx('flex flex-col gap-1 p-4')}>
                                        <div className={clsx('flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1')}>
                                            <code className={clsx('font-mono text-footnote text-onSurface')}>
                                                {item.name}
                                            </code>

                                            <p className={clsx('text-caption text-onSurfaceVariant')}>
                                                {item.provider} · {item.storage} · {item.duration}
                                            </p>
                                        </div>

                                        <p className={clsx('text-footnote text-onSurfaceVariant')}>
                                            {item.purpose}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </PolicySection>

                <PolicySection title='Microsoft Clarity'>
                    <p>
                        O Clarity registra como as páginas são usadas: cliques, rolagem, movimentos do cursor,
                        tamanho da tela, navegador, sistema operacional e país aproximado. Com isso gera mapas de
                        calor e gravações anônimas das sessões. Textos digitados em formulários, como o de contato,
                        são mascarados e não chegam à Microsoft.
                    </p>

                    <p>
                        Enquanto você não responde ao banner, o Clarity funciona sem gravar cookies. Se você recusar,
                        ele continua sem cookies e cada visita é tratada como independente. Os dados são tratados
                        pela Microsoft conforme a{' '}
                        <a href='https://privacy.microsoft.com/privacystatement' target='_blank' rel='noreferrer' className={linkStyle}>
                            Declaração de Privacidade da Microsoft
                        </a>.
                    </p>

                    <p>
                        A base legal para os cookies de análise é o seu consentimento (art. 7º, I, da LGPD), que pode
                        ser retirado a qualquer momento nesta página.
                    </p>
                </PolicySection>

                <PolicySection title='Métricas sem cookies'>
                    <p>
                        O site também usa o Vercel Web Analytics e o Vercel Speed Insights para contar visitas e
                        medir desempenho. Eles não usam cookies nem identificam você: os dados são agregados e
                        anônimos.
                    </p>
                </PolicySection>

                <PolicySection title='Como gerenciar'>
                    <p>
                        Você pode aceitar ou recusar os cookies de análise no banner ou no quadro no topo desta
                        página. Também é possível bloquear ou apagar cookies nas configurações do seu navegador —
                        nesse caso, o banner aparece de novo na próxima visita.
                    </p>
                </PolicySection>

                <PolicySection title='Seus direitos'>
                    <p>
                        Pela LGPD, você pode pedir confirmação de que seus dados são tratados, acesso, correção,
                        anonimização, eliminação e informações sobre compartilhamento, além de revogar o
                        consentimento. Como os dados do Clarity são pseudônimos, pedidos de eliminação podem depender
                        do ID gravado no cookie <code className={clsx('font-mono text-footnote')}>_clck</code>.
                    </p>
                </PolicySection>

                <PolicySection title='Alterações e contato'>
                    <p>
                        Esta política pode mudar se o site passar a usar outras ferramentas. A data no topo indica a
                        última revisão. Dúvidas ou pedidos podem ser enviados para{' '}
                        <a href={email?.link} className={linkStyle}>
                            {email?.displayValue}
                        </a>.
                    </p>
                </PolicySection>
            </Container>
        </>

    )

}

import Link from 'next/link'
import clsx from 'clsx'
import Chip from '@/components/common/Chip'
import Icon from '@/components/common/Icon'
import Container from '@/components/page/Container'
import contacts from '@/modules/home/constants/contacts'
import cookieGroups, { privacyPolicyUpdatedAt } from '../../constants/cookies'
import { COOKIES_SECTION_ID } from '../../constants/routes'
import PrivacyPolicyConsentControls from './components/ConsentControls'

const email = contacts.find(contact => contact.type === 'email')

const linkStyle = clsx(
    'text-primary underline underline-offset-2 rounded-sm',
    'outline-none focus-visible:ring-2 focus-visible:ring-primary'
)

interface PolicySectionProps {
    id?: string
    title: string
    children: React.ReactNode
}

function PolicySection({ id, title, children }: PolicySectionProps) {

    return(

        <>
            <section id={id} className={clsx('flex flex-col gap-4 scroll-mt-20')}>
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

function PolicyList({ items }: { items: React.ReactNode[] }) {

    return(

        <>
            <ul className={clsx('flex flex-col gap-2 pl-5 list-disc marker:text-primary')}>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>

    )

}

function Strong({ children }: { children: React.ReactNode }) {
    return <strong className={clsx('font-medium text-onSurface')}>{children}</strong>
}

export default function PrivacyPolicy() {

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
                            Política de privacidade
                        </h1>

                        <p className={clsx('text-footnote text-onSurfaceVariant')}>
                            Última atualização: {privacyPolicyUpdatedAt}
                        </p>
                    </div>

                    <p className={clsx('text-body-lg text-onSurfaceVariant text-pretty')}>
                        Este é um portfólio pessoal. Não vendemos dados, não exibimos publicidade e só coletamos o
                        necessário para responder quem entra em contato e entender como o site é usado. Abaixo
                        explicamos o que é coletado, por quê, com quem é compartilhado e como você controla isso.
                    </p>
                </div>

                <PolicySection title='Quem é o responsável'>
                    <p>
                        O site rodrigo.dev é mantido por Rodrigo Santos, controlador dos dados pessoais descritos
                        nesta política, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
                    </p>
                </PolicySection>

                <PolicySection title='Quais dados coletamos'>
                    <PolicyList
                        items={[
                            <><Strong>Dados que você envia</Strong> — nome, e-mail e mensagem, quando usa o formulário de contato.</>,
                            <><Strong>Dados de navegação</Strong> — páginas vistas, interações, tipo de dispositivo e navegador, coletados por ferramentas de análise.</>,
                            <><Strong>Preferências</Strong> — tema e a sua escolha sobre cookies, guardados só no seu navegador.</>
                        ]}
                    />

                    <p>
                        Não pedimos documentos, dados de pagamento nem dados sensíveis, e o site não tem cadastro
                        ou login.
                    </p>
                </PolicySection>

                <PolicySection title='Formulário de contato'>
                    <p>
                        Quando você envia uma mensagem, recebemos o nome, o e-mail e o texto que você escreveu. Esses
                        dados são usados apenas para ler e responder o seu contato — não entram em listas de e-mail
                        nem são usados para marketing.
                    </p>

                    <p>
                        O envio é feito pelo{' '}
                        <a href='https://resend.com/legal/privacy-policy' target='_blank' rel='noreferrer' className={linkStyle}>
                            Resend
                        </a>
                        , serviço que entrega a mensagem na nossa caixa de e-mail. As mensagens ficam guardadas pelo
                        tempo necessário para responder e manter o histórico da conversa, e podem ser apagadas a
                        qualquer momento a seu pedido.
                    </p>

                    <p>
                        A base legal é o legítimo interesse em atender uma solicitação que você mesmo iniciou
                        (art. 7º, IX, da LGPD).
                    </p>
                </PolicySection>

                <PolicySection title='Métricas de uso e desempenho'>
                    <p>
                        Usamos o{' '}
                        <a href='https://vercel.com/docs/analytics/privacy-policy' target='_blank' rel='noreferrer' className={linkStyle}>
                            Vercel Web Analytics e o Vercel Speed Insights
                        </a>{' '}
                        para contar visitas e medir a velocidade das páginas. Eles registram dados como a página
                        acessada, o site de origem, o país, o tipo de dispositivo e métricas de carregamento. Não
                        usam cookies e não identificam você individualmente: os dados são agregados.
                    </p>
                </PolicySection>

                <PolicySection id={COOKIES_SECTION_ID} title='Cookies'>
                    <p>
                        Cookies são pequenos arquivos de texto que um site grava no seu navegador para lembrar
                        informações entre uma página e outra ou entre visitas. Tecnologias parecidas, como o
                        armazenamento local (localStorage), cumprem o mesmo papel e são tratadas aqui da mesma forma.
                    </p>

                    <PrivacyPolicyConsentControls />

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

                    <h3 className={clsx('text-body font-medium text-onSurface')}>
                        Microsoft Clarity
                    </h3>

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
                        ser retirado a qualquer momento no quadro acima. Também é possível bloquear ou apagar cookies
                        nas configurações do seu navegador — nesse caso, o banner aparece de novo na próxima visita.
                    </p>
                </PolicySection>

                <PolicySection title='Compartilhamento e transferência internacional'>
                    <p>
                        Não vendemos nem cedemos seus dados. Eles só passam pelos fornecedores que operam o site, cada
                        um limitado à sua função:
                    </p>

                    <PolicyList
                        items={[
                            <><Strong>Vercel</Strong> — hospedagem do site, métricas de uso e desempenho.</>,
                            <><Strong>Microsoft</Strong> — análise de navegação pelo Clarity.</>,
                            <><Strong>Resend</Strong> — envio das mensagens do formulário de contato.</>
                        ]}
                    />

                    <p>
                        Esses fornecedores podem armazenar dados em servidores fora do Brasil, principalmente nos
                        Estados Unidos. A transferência segue o art. 33 da LGPD, com base nas garantias contratuais e
                        nas políticas de privacidade de cada um.
                    </p>
                </PolicySection>

                <PolicySection title='Segurança'>
                    <p>
                        Todo o tráfego do site é criptografado com HTTPS, e o acesso às mensagens recebidas e aos
                        painéis das ferramentas é restrito ao responsável pelo site.
                    </p>
                </PolicySection>

                <PolicySection title='Seus direitos'>
                    <p>
                        Pela LGPD (art. 18), você pode pedir, a qualquer momento:
                    </p>

                    <PolicyList
                        items={[
                            'confirmação de que tratamos seus dados e acesso a eles;',
                            'correção de dados incompletos ou desatualizados;',
                            'anonimização, bloqueio ou eliminação de dados desnecessários;',
                            'informação sobre com quem os dados foram compartilhados;',
                            'revogação do consentimento e eliminação dos dados tratados com base nele.'
                        ]}
                    />

                    <p>
                        Como os dados do Clarity são pseudônimos, pedidos sobre eles podem depender do ID gravado no
                        cookie <code className={clsx('font-mono text-footnote')}>_clck</code>. Você também pode
                        reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
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

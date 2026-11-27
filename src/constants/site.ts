const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    ?? (productionHost ? `https://${productionHost}` : 'http://localhost:3000')

export const siteName = 'rodrigo.dev'

export const authorName = 'Rodrigo Santos'

export const authorJobTitle = 'Desenvolvedor Full-stack'

export const siteTitle = `${authorName} — ${authorJobTitle}`

export const siteDescription = 'Portfólio de Rodrigo Santos, desenvolvedor full-stack especializado em React, Next.js, React Native e TypeScript. Veja experiências, projetos, stack e entre em contato.'

export const siteKeywords = [
    'Rodrigo Santos',
    'desenvolvedor full-stack',
    'desenvolvedor front-end',
    'desenvolvedor back-end',
    'React',
    'Next.js',
    'React Native',
    'TypeScript',
    'portfólio'
]

export const authorImagePath = '/images/rodrigo.jpeg'

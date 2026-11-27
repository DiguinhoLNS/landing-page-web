import { authorImagePath, authorJobTitle, authorName, siteDescription, siteName, siteUrl } from '@/constants/site'
import contacts from './contacts'
import jobs from './jobs'
import stack from './stack'

const currentJob = jobs[0]

const knowledgeGroups = ['Linguagens', 'Frameworks & Libs', 'Bancos de dados', 'Estilização']

const knowsAbout = [
    'Desenvolvimento Full-stack',
    'Desenvolvimento Front-end',
    'Desenvolvimento Back-end',
    'Desenvolvimento Mobile',
    'APIs REST',
    'Design Systems',
    'Arquitetura de software',
    ...stack
        .filter(group => knowledgeGroups.includes(group.title))
        .flatMap(group => group.items.map(item => item.name))
]

const personSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: siteName,
            description: siteDescription,
            inLanguage: 'pt-BR',
            author: { '@id': `${siteUrl}/#person` }
        },
        {
            '@type': 'ProfilePage',
            '@id': `${siteUrl}/#profile`,
            url: siteUrl,
            name: `${authorName} — ${authorJobTitle}`,
            inLanguage: 'pt-BR',
            isPartOf: { '@id': `${siteUrl}/#website` },
            mainEntity: { '@id': `${siteUrl}/#person` }
        },
        {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: authorName,
            alternateName: 'Diguinho',
            jobTitle: authorJobTitle,
            url: siteUrl,
            image: `${siteUrl}${authorImagePath}`,
            nationality: { '@type': 'Country', name: 'Brasil' },
            knowsAbout,
            ...(currentJob && {
                worksFor: {
                    '@type': 'Organization',
                    name: currentJob.title,
                    url: currentJob.link
                }
            }),
            sameAs: contacts
                .filter(contact => contact.type === 'link')
                .map(contact => contact.link)
        }
    ]
}

export default personSchema

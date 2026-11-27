import { authorImagePath, authorJobTitle, authorName, siteDescription, siteName, siteUrl } from '@/constants/site'
import contacts from './contacts'
import jobs from './jobs'

const currentJob = jobs[0]

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
            knowsAbout: ['React', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'Design Systems', 'Expo'],
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

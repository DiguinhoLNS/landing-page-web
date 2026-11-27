import type { MetadataRoute } from 'next'
import { siteUrl } from '@/constants/site'
import { PRIVACY_POLICY_PATH } from '@/modules/legal/constants/routes'

export default function sitemap(): MetadataRoute.Sitemap {

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: `${siteUrl}${PRIVACY_POLICY_PATH}`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3
        }
    ]

}

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { authorImagePath, authorJobTitle, authorName, siteName } from '@/constants/site'

export const alt = `${authorName} — ${authorJobTitle}`

export const size = {
    width: 1200,
    height: 630
}

export const contentType = 'image/png'

const surface = 'rgb(10, 10, 12)'
const onSurface = 'rgb(242, 242, 245)'
const onSurfaceVariant = 'rgb(170, 170, 180)'
const primary = 'rgb(172, 199, 255)'

export default async function Image() {

    const photo = await readFile(join(process.cwd(), 'public', authorImagePath))
    const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 64,
                    width: '100%',
                    height: '100%',
                    padding: '80px 96px',
                    background: surface,
                    color: onSurface
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, flex: 1 }}>
                    <div style={{ display: 'flex', fontSize: 36, color: onSurfaceVariant }}>
                        {siteName.replace('.dev', '')}
                        <span style={{ color: primary }}>.dev</span>
                    </div>

                    <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
                        {authorName}
                    </div>

                    <div style={{ display: 'flex', fontSize: 40, color: primary }}>
                        {authorJobTitle}
                    </div>

                    <div style={{ display: 'flex', fontSize: 30, color: onSurfaceVariant }}>
                        React · Next.js · React Native · TypeScript
                    </div>
                </div>

                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img
                    src={photoSrc}
                    width={360}
                    height={360}
                    style={{ borderRadius: 48, objectFit: 'cover' }}
                />
            </div>
        ),
        {
            ...size
        }
    )

}

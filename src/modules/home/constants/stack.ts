import {
    siHtml5, siCss, siJavascript, siTypescript, siPhp, siMysql,
    siReact, siExpo, siNextdotjs, siVite, siAngular, siFramer, siReactquery, siNodedotjs,
    siExpress, siNestjs, siRedux, siJest,
    siPostgresql, siFirebase,
    siSass, siTailwindcss, siStyledcomponents, siMui, siFontawesome,
    siFigma, siStorybook, siChromatic, siGit, siGithub, siGithubactions, siAndroidstudio, siXcode,
    siInsomnia, siNpm, siJira, siConfluence, siTrello, siSentry, siNewrelic
} from 'simple-icons'
import type { IStackGroup } from '@/modules/home/interfaces/IStackItem'

/**
 * Espelha o `tech_stack` do README do GitHub. As cores são as dos badges de lá;
 * marcas que o simple-icons não publica (Microsoft, Zustand, Monday...) viram monograma.
 */
const stack: IStackGroup[] = [
    {
        title: 'Linguagens',
        items: [
            { name: 'HTML5', color: '#E34F26', iconPath: siHtml5.path },
            { name: 'CSS3', color: '#1572B6', iconPath: siCss.path },
            { name: 'JavaScript', color: '#F7DF1E', iconPath: siJavascript.path },
            { name: 'TypeScript', color: '#3178C6', iconPath: siTypescript.path },
            { name: 'PHP', color: '#777BB4', iconPath: siPhp.path },
            { name: 'SQL', color: '#4479A1', iconPath: siMysql.path },
            { name: 'C#', color: '#239120', monogram: 'C#' }
        ]
    },
    {
        title: 'Frameworks & Libs',
        items: [
            { name: 'React', color: '#61DAFB', iconPath: siReact.path },
            { name: 'React Native', color: '#61DAFB', iconPath: siReact.path },
            { name: 'Expo', color: '#1C2024', iconPath: siExpo.path },
            { name: 'Next.js', color: '#000000', iconPath: siNextdotjs.path },
            { name: 'Vite', color: '#646CFF', iconPath: siVite.path },
            { name: 'Angular', color: '#DD0031', iconPath: siAngular.path },
            { name: 'Framer Motion', color: '#0055FF', iconPath: siFramer.path },
            { name: 'TanStack Query', color: '#FF4154', iconPath: siReactquery.path },
            { name: 'Redux', color: '#764ABC', iconPath: siRedux.path },
            { name: 'Zustand', color: '#000000', monogram: 'Z' },
            { name: 'Jest', color: '#C21325', iconPath: siJest.path },
            { name: 'Node.js', color: '#339933', iconPath: siNodedotjs.path },
            { name: 'Express', color: '#000000', iconPath: siExpress.path },
            { name: 'NestJS', color: '#E0234E', iconPath: siNestjs.path },
        ]
    },
    {
        title: 'Bancos de dados',
        items: [
            { name: 'MySQL', color: '#4479A1', iconPath: siMysql.path },
            { name: 'PostgreSQL', color: '#4169E1', iconPath: siPostgresql.path },
            { name: 'Firebase', color: '#FFCA28', iconPath: siFirebase.path }
        ]
    },
    {
        title: 'Estilização',
        items: [
            { name: 'Sass', color: '#CC6699', iconPath: siSass.path },
            { name: 'Tailwind CSS', color: '#06B6D4', iconPath: siTailwindcss.path },
            { name: 'Styled Components', color: '#DB7093', iconPath: siStyledcomponents.path },
            { name: 'MUI', color: '#007FFF', iconPath: siMui.path },
            { name: 'FontAwesome', color: '#528DD7', iconPath: siFontawesome.path }
        ]
    },
    {
        title: 'Ferramentas',
        items: [
            { name: 'Figma', color: '#F24E1E', iconPath: siFigma.path },
            { name: 'Storybook', color: '#FF4785', iconPath: siStorybook.path },
            { name: 'Chromatic', color: '#FC521F', iconPath: siChromatic.path },
            { name: 'Git', color: '#F05032', iconPath: siGit.path },
            { name: 'GitHub', color: '#181717', iconPath: siGithub.path },
            { name: 'GitHub Actions', color: '#2088FF', iconPath: siGithubactions.path },
            { name: 'Android Studio', color: '#3DDC84', iconPath: siAndroidstudio.path },
            { name: 'Xcode', color: '#007ACC', iconPath: siXcode.path },
            { name: 'Visual Studio', color: '#5C2D91', monogram: 'VS' },
            { name: 'VS Code', color: '#007ACC', monogram: 'VSC' },
            { name: 'Insomnia', color: '#4000BF', iconPath: siInsomnia.path },
            { name: 'NPM', color: '#CB3837', iconPath: siNpm.path },
            { name: 'Jira', color: '#0052CC', iconPath: siJira.path },
            { name: 'Confluence', color: '#172B49', iconPath: siConfluence.path },
            { name: 'Monday.com', color: '#FF6A13', monogram: 'M' },
            { name: 'Azure DevOps', color: '#0078D7', monogram: 'AZ' },
            { name: 'Trello', color: '#0079BF', iconPath: siTrello.path },
            { name: 'Sentry', color: '#362D59', iconPath: siSentry.path },
            { name: 'New Relic', color: '#008000', iconPath: siNewrelic.path },
            { name: 'Clarity', color: '#0078D7', monogram: 'CL' },
            { name: 'OneSignal', color: '#1E2022', monogram: 'OS' }
        ]
    }
]

export default stack

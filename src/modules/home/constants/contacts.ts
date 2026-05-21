import type { IContact } from "../interfaces/IContact"

const contacts: IContact[] = [
    {
        type: 'email',
        label: 'Email',
        displayValue: 'rolnspessoal@gmail.com',
        link: 'mailto:rolnspessoal@gmail.com',
    },
    {
        type: 'link',
        label: 'LinkedIn',
        displayValue: 'Rodrigo Santos',
        link: 'https://www.linkedin.com/in/rodrigo-santos-389288202',
    },
    {
        type: 'link',
        label: 'Github',
        displayValue: 'DiguinhoLNS',
        link: 'https://github.com/DiguinhoLNS',
    },
    {
        type: 'link',
        label: 'Instagram',
        displayValue: 'orodrigolns',
        link: 'https://www.instagram.com/orodrigolns',
    },
]

export default contacts
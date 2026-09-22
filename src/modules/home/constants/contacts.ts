import type { IContact } from "../interfaces/IContact"

const contacts: IContact[] = [
    {
        type: 'email',
        label: 'Email',
        displayValue: 'rolnspessoal@gmail.com',
        link: 'mailto:rolnspessoal@gmail.com',
        icon: 'mail'
    },
    {
        type: 'link',
        label: 'LinkedIn',
        displayValue: 'Rodrigo Santos',
        link: 'https://www.linkedin.com/in/rodrigo-santos-389288202',
        icon: 'work'
    },
    {
        type: 'link',
        label: 'Github',
        displayValue: 'DiguinhoLNS',
        link: 'https://github.com/DiguinhoLNS',
        icon: 'code'
    },
    {
        type: 'link',
        label: 'Instagram',
        displayValue: 'orodrigolns',
        link: 'https://www.instagram.com/orodrigolns',
        icon: 'photo_camera'
    },
]

export default contacts

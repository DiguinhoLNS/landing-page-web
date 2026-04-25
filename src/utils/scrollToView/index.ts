export default function scrollToView(sectionId: string) {
    const section = document.getElementById(sectionId)

    if (!!section) {
        section.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }
}
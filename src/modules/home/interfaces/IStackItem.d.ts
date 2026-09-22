export interface IStackItem {
    name: string
    /** Cor da marca, em hex — a mesma dos badges do README. */
    color: string
    /** Path SVG (viewBox 24x24) do simple-icons. Sem ele, o badge mostra um monograma. */
    iconPath?: string
    /** Texto do monograma quando a marca não tem ícone no simple-icons. */
    monogram?: string
}

export interface IStackGroup {
    title: string
    items: IStackItem[]
}

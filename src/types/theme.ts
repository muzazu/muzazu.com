export type mode = "dark" | "light"

export interface breakPoints {
    xs?: number
    s?: number
    m?: number
    l?: number
    xl?: number
    xxl?: number
}

export interface theme {
    mode: "dark" | "light"
    color: string
    background: string
    textSize: string
    lang: string
    breakPoints: breakPoints
}

export const UPDATE_THEME: String = "UPDATE_THEME"

export interface updateTheme {
    type: typeof UPDATE_THEME
    payload: theme
}

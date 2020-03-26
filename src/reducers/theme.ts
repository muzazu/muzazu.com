import { theme, UPDATE_THEME, updateTheme } from "../types/theme"
const DEFAULT_STATE: theme = {
    color: "dark",
    textSize: "14px",
    lang: "en",
    breakPoints: {
        xs: 480,
        s: 768,
        m: 1024,
        l: 1280,
        xl: 1440,
        xxl: 1920,
    }
}

export default (state = DEFAULT_STATE, actions: updateTheme) => {
    switch (actions.type) {
        case UPDATE_THEME:
            return actions.payload

        default:
            return state
    }
}

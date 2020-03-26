import { theme, updateTheme, UPDATE_THEME } from "../types/theme"

export default (newTheme: theme): updateTheme => {
    return {
        type: UPDATE_THEME,
        payload: newTheme,
    }
}

import { theme, mode } from "../types/theme"
import merge from "lodash/merge"
import { useState, useEffect } from "react"

// theme
export const defaultTheme: theme = {
    mode: "light",
    color: "#000",
    background: "#fff",
    textSize: "14px",
    lang: "en",
    breakPoints: {
        xs: 0,
        s: 768,
        m: 1024,
        l: 1280,
        xl: 1440,
        xxl: 1920,
    },
}

// default theme
export const lightTheme: theme = merge({}, defaultTheme, {
    mode: "light",
    color: "#000",
    background: "#fff",
})

// dark theme
export const darkTheme: theme = merge({}, defaultTheme, {
    mode: "dark",
    background: "#363333 !important",
    color: "#fff !important",
})

/**
 * handle get / set theme
 */
export const useThemeConfig = () => {
    const [themeMode, setThemeMode] = useState<mode>("light")
    const [componentMounted, setComponentMounted] = useState(false)

    const setMode = (mode: mode): void => {
        window.localStorage.setItem("theme", mode)
        setThemeMode(mode)
    }

    const toggleDarkMode = (mode: mode): void => {
        const activeMode: mode = mode === "dark" ? "light" : "dark"
        setMode(activeMode)
    }

    useEffect(() => {
        const localTheme: mode = window.localStorage.getItem("theme") as mode

        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches &&
        !localTheme
            ? setMode("dark")
            : localTheme
            ? setThemeMode(localTheme)
            : setMode("light")

        setComponentMounted(true)
    }, [])

    return [themeMode, toggleDarkMode, componentMounted]
}

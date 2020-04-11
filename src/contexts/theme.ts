import { theme } from "../types/theme"
import merge from "lodash/merge"
import { useState, useEffect, useCallback } from "react"

// default state
const defaultTheme: theme = {
    mode: "light",
    color: "#000",
    background: "#fff",
    textSize: "14px",
    lang: "en",
    breakPoints: {
        xs: 480,
        s: 768,
        m: 1024,
        l: 1280,
        xl: 1440,
        xxl: 1920,
    },
}
const loadStorage = () => {
    try {
        const getTheme = window.localStorage.getItem("theme")
        if (getTheme) {
            const combinedTheme: theme = merge(
                defaultTheme,
                JSON.parse(getTheme)
            )
            window.localStorage.setItem("theme", JSON.stringify(combinedTheme))
            return combinedTheme
        }
        return defaultTheme
    } catch (err) {
        return defaultTheme
    }
}
const Theme = loadStorage()

export const useThemeConfig = () => {
    const [localTheme, setTheme] = useState(Theme)

    useEffect(() => {
        try {
            const getTheme = window.localStorage.getItem("theme")
            if (getTheme) {
                const combinedTheme: theme = merge(Theme, JSON.parse(getTheme))
                setTheme(combinedTheme)
                window.localStorage.setItem(
                    "theme",
                    JSON.stringify(combinedTheme)
                )
            }
            setTheme(Theme)
        } catch (err) {
            setTheme(Theme)
        }
    }, [localTheme])

    type mode = "night" | "light"

    const toggleNightMode = (mode: mode): void => {
        const activeMode: mode = mode === "night" ? "light" : "night"
        const combinedTheme: theme = merge(localTheme, {
            mode: activeMode,
            background:
                activeMode === "night"
                    ? "#363333 !important"
                    : "#fff !important",
            color:
                activeMode === "night" ? "#fff !important" : "#000 !important",
        })
        window.localStorage.setItem("theme", JSON.stringify(combinedTheme))
        setTheme(combinedTheme)
        window.location.reload()
    }

    return [localTheme, toggleNightMode]
}

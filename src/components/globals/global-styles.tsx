import React from "react"

import { Global } from "@emotion/core"
import { useTheme } from "emotion-theming"
import { theme } from "../../types/theme"

export const GlobalStyles = () => {
    const Theme: theme = useTheme()
    return (
        <Global
            styles={{
                body: {
                    background: (Theme as theme).background,
                    color: (Theme as theme).color,
                },
                a: {
                    color:
                        (Theme as theme).mode === "light" ? "#e68ac2" : "#fad",
                },
            }}
        />
    )
}

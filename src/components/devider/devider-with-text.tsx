import React, { FC } from "react"
import { useTheme } from "emotion-theming"
import { theme } from "../../types/theme"

interface Props {
    alignText?:
        | "stretch"
        | "center"
        | "flex-start"
        | "flex-end"
        | "baseline"
        | "initial"
        | "inherit"
    borderWidth?: number
    borderColor?: string
    backgroundText?: string
    text: string
}

export const DeviderWithText: FC<Props> = ({
    alignText,
    borderWidth,
    borderColor,
    backgroundText,
    text,
}) => {
    const Theme: theme = useTheme()
    return (
        <div
            css={{
                width: "100%",
                display: "flex",
                justifyContent: alignText || "center",
                borderTop: `${borderWidth || "1"}px solid ${
                    borderColor || "#ddd"
                }`,
                position: "relative",
            }}
        >
            <div
                css={{
                    position: "absolute",
                    top: "-14px",
                    background: backgroundText || Theme.background,
                    padding: "4px 32px",
                    fontWeight: "bold",
                }}
            >
                {text}
            </div>
        </div>
    )
}

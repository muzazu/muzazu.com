import React, { FC } from "react"

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
}) => (
    <div
        css={{
            width: "100%",
            display: "flex",
            justifyContent: alignText || "center",
            borderTop: `${borderWidth || "1"}px solid ${borderColor || "#ddd"}`,
            position: "relative",
        }}
    >
        <div
            css={{
                position: "absolute",
                top: "-14px",
                background: backgroundText || "#fff",
                padding: "4px 32px",
                fontWeight: "bold",
            }}
        >
            {text}
        </div>
    </div>
)

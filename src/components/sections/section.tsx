import React, { FC } from "react"

interface SectionProps {
    maxWidth?: string | number
}
export const Section: FC<SectionProps> = ({ children, maxWidth }) => (
    <div css={{ maxWidth: maxWidth || "1366px", width: "100%" }}>
        {children}
    </div>
)

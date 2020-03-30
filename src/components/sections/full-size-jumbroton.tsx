import React, { FC } from "react"

export const FullSizeJumbroton: FC = ({ children }) => (
    <div
        css={{
            width: "100%",
            height: "100vh",
            "&> div": {
                height: "100%",
                "&> div": {
                    height: "100%",
                },
            },
        }}
    >
        {children}
    </div>
)

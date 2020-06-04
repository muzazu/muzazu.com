import React, { FC } from "react"
import { breakPoints, theme } from "../../types/theme"
import { mq } from "./breakpoints"

export const FlexWrapper: FC = (props) => {
    return (
        <div
            css={{
                display: "flex",
                flexWrap: "wrap",
            }}
            {...props}
        >
            {props.children}
        </div>
    )
}

/**
 * Flex Items
 */
const widthTransform = (
    w: Array<number | undefined>
): Array<string | null> | null => {
    if (!w) return null

    return w.map((width: number | undefined) =>
        width ? `${width * 100}%` : null
    )
}

interface FlexItemProps extends breakPoints {}

export const FlexItem: FC<FlexItemProps> = (props) => {
    const { children, xs, s, m, l, xl, xxl } = props
    return (
        <div
            css={(activeTheme: theme) =>
                mq(activeTheme.breakPoints)({
                    width: widthTransform([xs, s, m, l, xl, xxl]),
                })
            }
            {...props}
        >
            {children}
        </div>
    )
}

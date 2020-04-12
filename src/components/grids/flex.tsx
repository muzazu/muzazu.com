import React, { FC } from "react"
import { breakPoints, theme } from "../../types/theme"
import { mq } from "./breakpoints"

interface FlexWrapperProps {
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "initial"
        | "inherit"
    alignItems?:
        | "stretch"
        | "center"
        | "flex-start"
        | "flex-end"
        | "baseline"
        | "initial"
        | "inherit"
    alignContent?:
        | "stretch"
        | "center"
        | "flex-start"
        | "flex-end"
        | "baseline"
        | "initial"
        | "inherit"
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit"
    flexDirection?:
        | "row"
        | "row-reverse"
        | "column"
        | "column-reverse"
        | "initial"
        | "inherit"
}

export const FlexWrapper: FC<FlexWrapperProps> = ({
    children,
    justifyContent,
    alignItems,
    alignContent,
    flexWrap,
    flexDirection,
}) => {
    return (
        <div
            css={{
                display: "flex",
                justifyContent,
                alignItems,
                alignContent,
                flexWrap,
                flexDirection,
            }}
        >
            {children}
        </div>
    )
}
FlexWrapper.defaultProps = {
    flexWrap: "wrap",
}

/**
 * Flex Items
 */
interface RootState {
    theme: theme
}

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
            css={(theme: theme) =>
                mq(theme.breakPoints)({
                    width: widthTransform([xs, s, m, l, xl, xxl]),
                })
            }
            {...props}
        >
            {children}
        </div>
    )
}

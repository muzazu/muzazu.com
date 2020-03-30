import React, { FC } from "react"
import { breakPoints, theme } from "../../types/theme"
import { useSelector } from "react-redux"
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

interface FlexItemProps extends breakPoints {
    alignSelf?:
        | "auto"
        | "flex-start"
        | "flex-end"
        | "center"
        | "baseline"
        | "stretch"
}

export const FlexItem: FC<FlexItemProps> = ({
    children,
    alignSelf,
    xs,
    s,
    m,
    l,
    xl,
    xxl,
}) => {
    const breakpoint: object = useSelector(
        (state: RootState) => state.theme.breakPoints
    )
    return (
        <div
            css={mq(breakpoint)({
                alignSelf: alignSelf,
                width: widthTransform([xs, s, m, l, xl, xxl]),
            })}
        >
            {children}
        </div>
    )
}

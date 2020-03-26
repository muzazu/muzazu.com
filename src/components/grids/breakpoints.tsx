import facepaint from "facepaint"

export const mq = (breakpoint: object) => {
    const breakpointValues: Array<string> = Object.values(breakpoint).map(
        (val: number) => `@media(min-width: ${val}px)`
    )
    return facepaint(breakpointValues, { overlap: true, literal: true })
}

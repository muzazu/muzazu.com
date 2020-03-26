import { mq } from "./breakpoints"

describe("Breakpoint", () => {
    it("should return css with breakpoint", () => {
        const breakpoint: Array<number> = [100, 200, 300]
        const css: Array<object> = mq(breakpoint)({
            width: ["100%", "40%", "20%"],
            color: ["red", "green", "blue"],
        })
        expect(css).toStrictEqual([
            {
                "@media(min-width: 100px)": {
                    color: "red",
                    width: "100%",
                },
                "@media(min-width: 200px)": {
                    color: "green",
                    width: "40%",
                },
                "@media(min-width: 300px)": {
                    color: "blue",
                    width: "20%",
                },
            },
        ])
    })

    it("should return empty array object", () => {
        const css: Array<object> = mq({})({
            width: ["100%", "40%", "20%"],
            color: ["red", "green", "blue"],
        })
        expect(css).toStrictEqual([{}])
    })
})

import React from "react"
import renderWithReducer from "../../utils/test/renderWithReducer"
import { FlexWrapper, FlexItem } from "./flex"
import { matchers } from "jest-emotion"

expect.extend(matchers)

describe("Flex", () => {
    it("should render flexwrapper", () => {
        const { getByText } = renderWithReducer(
            <FlexWrapper>Hellow</FlexWrapper>
        )
        expect(getByText("Hellow")).toHaveStyleRule("display", "flex")
    })

    it("should render flexitem", () => {
        const { getByText } = renderWithReducer(
            <FlexWrapper>
                <FlexItem m={1 / 2}>Hi</FlexItem>
                <FlexItem m={1 / 2}>Amazing</FlexItem>
                <FlexItem m={1 / 1}>Size</FlexItem>
            </FlexWrapper>
        )

        expect(getByText("Hi")).toHaveStyleRule("width", "50%", {
            media: "(min-width: 1024px)",
        })
    })
})

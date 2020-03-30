import React, { FC } from "react"
import { RouteComponentProps } from "@reach/router"
import { FlexWrapper, FlexItem } from "../components/grids/flex"
import { FullSizeJumbroton } from "../components/sections/full-size-jumbroton"
import { Section } from "../components/sections/section"
import { GutterPxs } from "../components/gutters/gutters"

const Home: FC<RouteComponentProps> = () => {
    return (
        <FullSizeJumbroton>
            <Section>
                <FlexWrapper alignItems="stretch">
                    <FlexItem
                        xs={1 / 1}
                        m={2 / 3}
                        xl={2 / 3}
                        alignSelf="center"
                    >
                        <GutterPxs p={32}>Hellow</GutterPxs>
                    </FlexItem>
                    <FlexItem
                        xs={1 / 1}
                        m={1 / 3}
                        xl={1 / 3}
                        alignSelf="center"
                    >
                        <GutterPxs p={24}>Hellow</GutterPxs>
                    </FlexItem>
                </FlexWrapper>
            </Section>
        </FullSizeJumbroton>
    )
}

export default Home

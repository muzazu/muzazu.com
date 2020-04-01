import React, { FC } from "react"
import { RouteComponentProps, Link } from "@reach/router"
import { FlexWrapper, FlexItem } from "../components/grids/flex"
import { FullSizeJumbroton } from "../components/sections/full-size-jumbroton"
import { Section } from "../components/sections/section"
import { GutterPxs } from "../components/gutters/gutters"
import { ReactComponent as Human } from "../images/human.svg"

const Home: FC<RouteComponentProps> = () => {
    return (
        <>
            <FullSizeJumbroton>
                <Section>
                    <FlexWrapper alignItems="stretch">
                        <FlexItem
                            xs={1 / 1}
                            m={2 / 3}
                            xl={2 / 3}
                            alignSelf="center"
                        >
                            <GutterPxs p={32}>
                                <h1>
                                    <Link to="/">muzazu.</Link>
                                </h1>
                                <h2>
                                    Hellow there, here's my{" "}
                                    <a href="#stories">stories...</a>
                                </h2>
                            </GutterPxs>
                        </FlexItem>
                        <FlexItem
                            xs={1 / 1}
                            m={1 / 3}
                            xl={1 / 3}
                            alignSelf="flex-end"
                            css={{ height: "100%" }}
                        >
                            <GutterPxs p={24}>
                                <Human
                                    css={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    viewBox={"0 0 700 700"}
                                    preserveAspectRatio="xMidYMid meet"
                                />
                            </GutterPxs>
                        </FlexItem>
                    </FlexWrapper>
                </Section>
            </FullSizeJumbroton>
            <div id="stories">
                <FullSizeJumbroton>
                    <Section>
                        <FlexWrapper
                            justifyContent="center"
                            alignItems="stretch"
                        >
                            <FlexItem xs={1 / 1} alignSelf="center">
                                <GutterPxs p={32}>
                                    There's nothing here yet...
                                </GutterPxs>
                            </FlexItem>
                        </FlexWrapper>
                    </Section>
                </FullSizeJumbroton>
            </div>
        </>
    )
}

export default Home

import React from "react"
import { FlexWrapper, FlexItem } from "../grids/flex"
import { GutterPxs } from "../gutters/gutters"
import { Link } from "@reach/router"
import { Section } from "../sections/section"

export const HeaderNavigation = () => (
    <div
        css={{
            width: "100%",
            borderBottom: "1px solid #ddd",
        }}
    >
        <Section>
            <GutterPxs px={32} py={8}>
                <FlexWrapper>
                    <FlexItem xs={1 / 1}>
                        <Link to="/">
                            <h1 css={{ margin: 0 }}>
                                <img
                                    src="/favicon-32x32.png"
                                    alt="muzazu.com"
                                />
                            </h1>
                        </Link>
                    </FlexItem>
                </FlexWrapper>
            </GutterPxs>
        </Section>
    </div>
)

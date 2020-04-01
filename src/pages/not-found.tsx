import React, { FC } from "react"
import { FullSizeJumbroton } from "../components/sections/full-size-jumbroton"
import { FlexWrapper, FlexItem } from "../components/grids/flex"
import { Section } from "../components/sections/section"
import { Link, RouteComponentProps } from "@reach/router"
import { ReactComponent as NotFoundSVG } from "../images/404.svg"
import { GutterPxs } from "../components/gutters/gutters"
import { Helmet } from "react-helmet"

const NotFound: FC<RouteComponentProps> = () => (
    <FullSizeJumbroton>
        <Helmet>
            <title>muzazu - 404</title>
            <meta name="description" content="Nothing here" />
            <meta name="robots" content="noindex" />
        </Helmet>
        <Section>
            <FlexWrapper justifyContent="center" alignItems="stretch">
                <FlexItem alignSelf="center">
                    <NotFoundSVG
                        css={{
                            display: "block",
                            maxWidth: "200px",
                            height: "auto",
                            margin: "auto",
                        }}
                    />
                    <GutterPxs mt={8}>
                        Woops Look like there's nothing here,{" "}
                        <Link to="/">back to Home</Link>
                    </GutterPxs>
                </FlexItem>
            </FlexWrapper>
        </Section>
    </FullSizeJumbroton>
)

export default NotFound

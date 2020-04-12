import React from "react"
import { FlexItem, FlexWrapper } from "../grids/flex"
import { GutterPxs } from "../gutters/gutters"
import { ReactComponent as LinkedIn } from "../../images/feather/linkedin.svg"
import { ReactComponent as Twitter } from "../../images/feather/twitter.svg"
import { ReactComponent as Ig } from "../../images/feather/instagram.svg"
import { theme } from "../../types/theme"

export const Footer = () => (
    <FlexWrapper
        css={(Theme: theme) => ({
            background: Theme.mode === "light" ? "#eee" : "#2b2b2b",
        })}
    >
        <FlexItem xs={1 / 1} m={1 / 3}>
            <GutterPxs p={32}>
                <FlexWrapper css={{ alignItems: "center" }}>
                    <FlexItem>
                        <GutterPxs p={4}>Find me: </GutterPxs>
                    </FlexItem>
                    <FlexItem>
                        <GutterPxs p={4}>
                            <a
                                href={process.env.REACT_APP_LINKEDIN}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedIn />
                            </a>
                        </GutterPxs>
                    </FlexItem>
                    <FlexItem>
                        <GutterPxs p={4}>
                            <a
                                href={process.env.REACT_APP_TWITTER}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter />
                            </a>
                        </GutterPxs>
                    </FlexItem>
                    {process.env.REACT_APP_INSTAGRAM && (
                        <GutterPxs p={4}>
                            <FlexItem>
                                <a
                                    href={process.env.REACT_APP_INSTAGRAM}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Ig />
                                </a>
                            </FlexItem>
                        </GutterPxs>
                    )}
                </FlexWrapper>
            </GutterPxs>
        </FlexItem>
        <FlexItem xs={1 / 1} m={1 / 3}></FlexItem>
    </FlexWrapper>
)

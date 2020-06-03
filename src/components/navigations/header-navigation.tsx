import React, { FC } from "react"
import { FlexWrapper, FlexItem } from "../grids/flex"
import { GutterPxs } from "../gutters/gutters"
import { Link } from "@reach/router"
import { Section } from "../sections/section"
import Toggle from "react-toggle"
import { ReactComponent as Moon } from "../../images/feather/moon.svg"
import { ReactComponent as Sun } from "../../images/feather/sun.svg"
import { useTheme } from "emotion-theming"

interface Props {
    onUpdateThemeConfig: Function
}

export const HeaderNavigation: FC<Props> = (props) => {
    const { mode } = useTheme()
    return (
        <div
            css={{
                width: "100%",
                borderBottom: "1px solid #ddd",
            }}
        >
            <Section>
                <GutterPxs px={32} py={8}>
                    <FlexWrapper>
                        <FlexItem xs={2 / 3}>
                            <Link to="/">
                                <h1 css={{ margin: 0 }}>
                                    <img
                                        src="/favicon-32x32.png"
                                        alt="muzazu.com"
                                    />
                                </h1>
                            </Link>
                        </FlexItem>
                        <FlexItem
                            xs={1 / 3}
                            css={{ textAlign: "right", alignSelf: "center" }}
                        >
                            {mode && (
                                <Toggle
                                    defaultChecked={mode !== "dark"}
                                    icons={{
                                        unchecked: (
                                            <Moon
                                                css={{
                                                    width: "14px",
                                                    margin: "-7px 0 0",
                                                    color: "#fff",
                                                }}
                                            />
                                        ),
                                        checked: (
                                            <Sun
                                                css={{
                                                    width: "14px",
                                                    margin: "-7px 0 0",
                                                    color: "yellow",
                                                }}
                                            />
                                        ),
                                    }}
                                    onChange={() =>
                                        props.onUpdateThemeConfig(mode)
                                    }
                                />
                            )}
                        </FlexItem>
                    </FlexWrapper>
                </GutterPxs>
            </Section>
        </div>
    )
}

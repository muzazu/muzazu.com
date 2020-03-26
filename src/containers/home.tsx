import React, { FC } from "react"
import { RouteComponentProps } from "@reach/router"
import { FlexWrapper, FlexItem } from "../components/grids/flex"

const Home: FC<RouteComponentProps> = () => {
    return (
        <FlexWrapper alignItems="center">
            <FlexItem xs={1/1} m={1/2} xl={2/3}>
                Hellow
            </FlexItem>
            <FlexItem xs={1/1} m={1/2} xl={1/3}>
                Test
            </FlexItem>
        </FlexWrapper>
    )
}

export default Home

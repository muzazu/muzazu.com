import React, { FC } from "react"
import Loadable from "@loadable/component"
import { Router } from "@reach/router"

const Loading = <>Loading...</>

const Home = Loadable(() => import("../../containers/home"), {
    fallback: Loading,
})

const Routes: FC = () => {
    return (
        <Router>
            <Home path="/" />
        </Router>
    )
}

export default Routes

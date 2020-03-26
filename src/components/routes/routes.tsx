import React, { FC } from "react"
import Loadable from "react-loadable"
import { Router } from "@reach/router"

const Loading: FC = () => {
    return <div></div>
}

const Home = Loadable({
    loader: () => import("../../containers/home"),
    loading: Loading,
})

const Routes: FC = () => {
    return (
        <Router>
            <Home path="/" />
        </Router>
    )
}

export default Routes

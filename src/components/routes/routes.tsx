import React, { FC } from "react"
import Loadable from "@loadable/component"
import { Router } from "@reach/router"

const Loading = <>Loading...</>

const Home = Loadable(() => import("../../containers/home"), {
    fallback: Loading,
})
const Post = Loadable(() => import("../../containers/post"), {
    fallback: Loading,
})
const NotFound = Loadable(() => import("../../pages/not-found"), {
    fallback: Loading,
})

const Routes: FC = () => {
    return (
        <Router>
            <Home path="/" />
            <Post path="/:dateId/:postId" />
            <NotFound default />
        </Router>
    )
}

export default Routes

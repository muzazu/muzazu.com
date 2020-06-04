import React, { FC } from "react"
import Loadable from "@loadable/component"
import { Router, Location } from "@reach/router"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const Loading = <></>

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
        <Location>
            {({ location }) => (
                <TransitionGroup className="transition-group">
                    <CSSTransition
                        key={location.key}
                        classNames="router--fade"
                        timeout={500}
                    >
                        <Router location={location} css={{minHeight: "100vh"}}>
                            <Home path="/" />
                            <Post path="/:dateId/:postId" />
                            <NotFound default />
                        </Router>
                    </CSSTransition>
                </TransitionGroup>
            )}
        </Location>
    )
}

export default Routes

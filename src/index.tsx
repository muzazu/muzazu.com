import React, { FC } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./store"
import TagManager, { TagManagerArgs } from "react-gtm-module"
import Router from "./components/routes/routes"

import "./css/reset.css"

const App: FC = () => {
    const tagManagerArgs: TagManagerArgs = {
        gtmId: process.env.REACT_APP_GTM!,
    }
    TagManager.initialize(tagManagerArgs)

    return (
        <Provider store={configureStore()}>
            <Router />
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

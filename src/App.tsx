import React from "react"
import logo from "./logo.svg"
import "./App.css"
import TagManager, { TagManagerArgs } from "react-gtm-module"

const App: React.FC = () => {
    const tagManagerArgs: TagManagerArgs = {
        gtmId: process.env.REACT_APP_GTM!,
    }

    TagManager.initialize(tagManagerArgs)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Wohooo ,,,,,,,,,,</p>
            </header>
        </div>
    )
}

export default App

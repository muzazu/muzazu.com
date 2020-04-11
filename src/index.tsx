import React, { FC } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./store"
import TagManager, { TagManagerArgs } from "react-gtm-module"
import Router from "./components/routes/routes"
import { ThemeProvider } from "emotion-theming"
import { useThemeConfig } from "./contexts/theme"
import { theme } from "./types/theme"
import { HeaderNavigation } from "./components/navigations/header-navigation"
import { GlobalStyles } from "./components/globals/global-styles"

// css
import "./sass/app.scss"
import "react-toggle/style.css"

// libs
import "./libs/fonts"

const App: FC = () => {
    const [Theme, toggleNightMode] = useThemeConfig()

    const tagManagerArgs: TagManagerArgs = {
        gtmId: process.env.REACT_APP_GTM!,
    }
    TagManager.initialize(tagManagerArgs)

    return (
        <Provider store={configureStore()}>
            <ThemeProvider theme={Theme as theme}>
                <div>
                    <GlobalStyles />
                    <HeaderNavigation
                        onUpdateThemeConfig={toggleNightMode as Function}
                    />
                    <Router />
                </div>
            </ThemeProvider>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

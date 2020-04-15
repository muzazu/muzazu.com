import "./utils/disableSpeedy"
import React, { FC } from "react"
import { render, hydrate } from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./store"
import TagManager, { TagManagerArgs } from "react-gtm-module"
import Router from "./components/routes/routes"
import { ThemeProvider } from "emotion-theming"
import { useThemeConfig } from "./contexts/theme"
import { theme } from "./types/theme"
import { HeaderNavigation } from "./components/navigations/header-navigation"
import { GlobalStyles } from "./components/globals/global-styles"
import { Footer } from "./components/footer/footer"
import { HelmetProvider } from "react-helmet-async"

// css
import "./sass/app.scss"
import "react-toggle/style.css"

// libs
import "./libs/fonts"
import { CacheProvider } from "@emotion/core"
import createCache from "@emotion/cache"

// redux
declare global {
    interface Window {
        __PRELOADED_STATE__: object | undefined
    }
}
// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const App: FC = () => {
    const [Theme, toggleNightMode] = useThemeConfig()

    const tagManagerArgs: TagManagerArgs = {
        gtmId: process.env.REACT_APP_GTM!,
    }
    TagManager.initialize(tagManagerArgs)

    return (
        <Provider store={configureStore(preloadedState)}>
            <ThemeProvider theme={Theme as theme}>
                <HelmetProvider>
                    <GlobalStyles />
                    <HeaderNavigation
                        onUpdateThemeConfig={toggleNightMode as Function}
                    />
                    <Router />
                    <Footer />
                </HelmetProvider>
            </ThemeProvider>
        </Provider>
    )
}

const $root = document.getElementById("root")
if ($root && $root.hasChildNodes()) {
    const cache = createCache()
    hydrate(
        <CacheProvider value={cache}>
            <App />
        </CacheProvider>,
        $root
    )
} else {
    render(<App />, $root)
}

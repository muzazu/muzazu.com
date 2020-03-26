import React from "react"
import configureStore from "../../store"
import { Provider } from "react-redux"
import { render } from "@testing-library/react"

export default (ui: React.ReactNode, state?: object) => ({
    ...render(<Provider store={configureStore(state)}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store: configureStore(state),
})

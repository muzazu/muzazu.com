import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import rootReducer from "./reducers"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

export default function configureStore(initialState = {}) {
    const middlewares: [any] = [thunk]
    let composeDevTool: any
    if (process.env.NODE_ENV !== "production") {
        middlewares.push(createLogger())
        composeDevTool = composeWithDevTools(applyMiddleware(...middlewares))
    } else {
        composeDevTool = applyMiddleware(...middlewares)
    }

    const store = createStore(rootReducer, initialState, composeDevTool)

    return store
}

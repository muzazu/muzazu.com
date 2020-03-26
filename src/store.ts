import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import rootReducer from "./reducers"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

export default function configureStore(initialState = {}) {
    const middlewares:[any] = [thunk]
    if (process.env.NODE_ENV !== "production") {
        middlewares.push(createLogger())
    }
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares))
    )

    return store
}

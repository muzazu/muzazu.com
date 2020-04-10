import { createStore, applyMiddleware, Action } from "redux"
import { createLogger } from "redux-logger"
import rootReducer, { RootState } from "./reducers"
import thunk, { ThunkAction, ThunkMiddleware } from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

export default function configureStore(initialState = {}) {
    const middlewares: [any] = [thunk as ThunkMiddleware]
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

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    undefined,
    Action<string>
>

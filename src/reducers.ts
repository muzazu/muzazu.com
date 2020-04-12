import { combineReducers } from "redux"
import { articlesIds, articles } from "./reducers/articles"

const rootReducer = combineReducers({ articlesIds, articles })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

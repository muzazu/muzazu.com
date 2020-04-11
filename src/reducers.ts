import { combineReducers } from "redux"
import theme from "./reducers/theme"
import { articlesIds, articles } from "./reducers/articles"

const rootReducer = combineReducers({ theme, articlesIds, articles })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

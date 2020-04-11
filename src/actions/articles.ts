import * as ArticleTypes from "../types/articles"
import { AppThunk } from "../store"
import { Dispatch } from "redux"
import { RootState } from "../reducers"

export const getArticlesIds = (): AppThunk<Promise<void>> => async (
    dispatch
) => {
    const fetchData: ArticleTypes.articlesIdsActionTypes = {
        type: ArticleTypes.REQUEST_ARTICLES_IDS,
    }
    dispatch(fetchData)
    try {
        const req = await fetch("/static/data/selectors.json")
        const data = await req.json()
        const returnData: ArticleTypes.articlesIdsActionTypes = {
            type: ArticleTypes.RECEIVE_ARTICLES_IDS,
            payload: data,
        }
        dispatch(returnData)
    } catch (error) {
        console.log(error)
    }
}

export const setSelectedId = (id: string): AppThunk<void> => (dispatch) => {
    const dispatchData: ArticleTypes.articlesIdsActionTypes = {
        type: ArticleTypes.SET_SELECTED_ARTICLES_ID,
        payload: id,
    }
    dispatch(dispatchData)
}

const getArticle = async (
    dispatch: Dispatch<any>,
    getState: RootState,
    id: string
) => {
    const dateId: string = id.split(":")[0]

    const findData: ArticleTypes.articlesTypes = getState.articles.articles
    if (findData[dateId as keyof ArticleTypes.articlesIdsTypes]) return

    const fetchData: ArticleTypes.articlesActionTypes = {
        type: ArticleTypes.REQUEST_ARTICLES,
    }
    dispatch(fetchData)
    const req = await fetch(`/static/data/${dateId}.json`)
    const data = await req.json()
    
    const returnData: ArticleTypes.articlesActionTypes = {
        type: ArticleTypes.RECEIVE_ARTICLES,
        payload: { [dateId]: data },
    }
    dispatch(returnData)
}

export const getArticles = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    const ids = getState().articlesIds
    if (!ids || !ids.ids.length) {
        return
    }

    try {
        for (const id of ids.ids) {
            getArticle(dispatch, getState(), id as string)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getArticleDetail = (id: string): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    getArticle(dispatch, getState(), id)
}

import {
    RECEIVE_ARTICLES_IDS,
    articlesIdsActionTypes,
    REQUEST_ARTICLES_IDS,
    IarticlesIdsTypes,
    IarticlesTypes,
    RECEIVE_ARTICLES,
    REQUEST_ARTICLES,
    articlesActionTypes,
    SET_SELECTED_ARTICLES_ID,
} from "../types/articles"
import merge from "lodash/merge"

const initialStateArticlesIds: IarticlesIdsTypes = {
    isFetching: false,
    ids: [],
    selectedId: null,
}

export const articlesIds = (
    state = initialStateArticlesIds,
    actions: articlesIdsActionTypes
): IarticlesIdsTypes => {
    switch (actions.type) {
        case RECEIVE_ARTICLES_IDS:
            return {
                ...state,
                isFetching: false,
                ids: actions.payload,
            }
        case REQUEST_ARTICLES_IDS:
            return {
                ...state,
                isFetching: true,
                ids: [],
            }
        case SET_SELECTED_ARTICLES_ID:
            return {
                ...state,
                selectedId: actions.payload,
            }

        default:
            return state
    }
}

const initialStateArticles: IarticlesTypes = {
    isFetching: false,
    articles: {},
}

export const articles = (
    state = initialStateArticles,
    actions: articlesActionTypes
): IarticlesTypes => {
    switch (actions.type) {
        case RECEIVE_ARTICLES:
            return {
                isFetching: false,
                articles: merge(state.articles.articles, actions.payload),
            }
        case REQUEST_ARTICLES:
            return {
                ...state,
                isFetching: true,
            }
        default:
            return state
    }
}

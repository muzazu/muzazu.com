export const REQUEST_ARTICLES_IDS = "REQUEST_ARTICLES_IDS"
export const RECEIVE_ARTICLES_IDS = "RECEIVE_ARTICLES_IDS"
export const SET_SELECTED_ARTICLES_ID = "SET_SELECTED_ARTICLES_ID"
export const REQUEST_ARTICLES = "REQUEST_ARTICLES"
export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES"

export interface metadata {
    dateId: string
    title: string
    lang: string
    desc: string
    created_at: string
    image: string
}

export interface article {
    metadata: metadata
    content: String
}
export type articlesIdsTypes = Array<String>
export interface IarticlePostId {
    [postId: string]: article
}
export type articlesTypes = {
    [dateId: string]: IarticlePostId
}
export interface IarticlesIdsTypes {
    isFetching: boolean
    ids: articlesIdsTypes
    selectedId: string | null
}
export interface IarticlesTypes {
    isFetching: boolean
    articles: articlesTypes
}

/**
 * Action articles
 */
interface RequestArticlesAction {
    type: typeof REQUEST_ARTICLES
}
interface ReceiveArticlesAction {
    type: typeof RECEIVE_ARTICLES
    payload: articlesTypes
}
export type articlesActionTypes = ReceiveArticlesAction | RequestArticlesAction

/**
 * Action articles ids
 */
interface RequestArticlesIdsAction {
    type: typeof REQUEST_ARTICLES_IDS
}
interface ReceiveArticlesIdsAction {
    type: typeof RECEIVE_ARTICLES_IDS
    payload: articlesIdsTypes
}
interface SetSelectedArticlesId {
    type: typeof SET_SELECTED_ARTICLES_ID
    payload: string
}
export type articlesIdsActionTypes =
    | RequestArticlesIdsAction
    | ReceiveArticlesIdsAction
    | SetSelectedArticlesId

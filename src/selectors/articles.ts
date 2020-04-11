import { createSelector } from "reselect"
import { RootState } from "../reducers"
import { article, articlesTypes, IarticlePostId } from "../types/articles"
import merge from "lodash/merge"
import cloneDeep from "lodash/cloneDeep"

const articlesIds = (state: RootState) => state.articlesIds
const articles = (state: RootState) => state.articles

export const articleList = createSelector(
    articlesIds,
    articles,
    (articlesIds, items) => {
        let visibleArticles: Array<article> | [] = []
        for (let id of articlesIds.ids) {
            const [dateId, postId]: string[] = id.split(":")
            if (items.articles[dateId as keyof articlesTypes]) {
                const clonedItem: any = cloneDeep<article>(
                    items.articles[dateId as keyof articlesTypes][
                        postId as keyof IarticlePostId
                    ]
                )

                const articleDate = new Date(
                    clonedItem.metadata.created_at as string
                )
                clonedItem.metadata.dateId = `${articleDate.getMonth()}-${articleDate.getFullYear()}`

                visibleArticles = merge(visibleArticles, [clonedItem])
            }
        }

        return visibleArticles
    }
)

export const articleDetail = createSelector(
    articlesIds,
    articles,
    (ids, articles): article | null => {
        if (!ids.selectedId || Object.keys(articles.articles).length < 1)
            return null

        const [dateId, postId]: string[] = ids.selectedId.split(":")

        return articles.articles[dateId as keyof articlesTypes][
            postId as keyof IarticlePostId
        ]
    }
)

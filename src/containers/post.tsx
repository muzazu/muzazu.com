import React, { FC, useEffect, Dispatch } from "react"
import { connect } from "react-redux"
import { RouteComponentProps } from "@reach/router"
import { RootState } from "../reducers"
import { getArticleDetail, setSelectedId } from "../actions/articles"
import { articleDetail } from "../selectors/articles"
import Helmet from "react-helmet"
import Loadable from "@loadable/component"

const mapStateToProps = (state: RootState) => ({
    article: articleDetail(state),
})
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    getArticleDetail: (id: string) => dispatch(getArticleDetail(id)),
    setSelectedArticle: (id: string) => dispatch(setSelectedId(id)),
})

type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> &
    RouteComponentProps<{ dateId: string; postId: string }>

const MD = Loadable(() => import("react-markdown"), {
    fallback: <div>Loading...</div>,
})

const PostComponent: FC<Props> = ({
    getArticleDetail,
    setSelectedArticle,
    article,
    dateId,
    postId,
}) => {
    useEffect(() => {
        setSelectedArticle(`${dateId}:${postId}` as string)
        getArticleDetail(dateId as string)
    })
    if (article)
        return (
            <>
                <Helmet>
                    <title>{article.metadata.title}</title>
                    <meta
                        name="description"
                        content={article.metadata.desc as string}
                    />
                </Helmet>
                <article>
                    <header>
                        <h1>{article.metadata.title}</h1>
                    </header>
                    <MD source={article.content as string} />
                </article>
            </>
        )
    else return <div>Loading...</div>
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent)

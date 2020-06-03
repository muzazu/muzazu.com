import React, { FC, useEffect, Dispatch } from "react"
import { connect } from "react-redux"
import { RouteComponentProps } from "@reach/router"
import { RootState } from "../reducers"
import { getArticleDetail, setSelectedId } from "../actions/articles"
import { articleDetail } from "../selectors/articles"
import { Helmet } from "react-helmet-async"
import Loadable from "@loadable/component"
import { GutterPxs } from "../components/gutters/gutters"
import { FlexWrapper, FlexItem } from "../components/grids/flex"
import { Section } from "../components/sections/section"

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
                    <meta
                        property="og:description"
                        content={article.metadata.desc as string}
                    />
                    <meta property="og:site_name" content="muzazu.com" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:locale:alternate" content="id_ID" />
                    <meta
                        property="og:title"
                        content={article.metadata.title as string}
                    />
                    <meta property="og:type" content="article" />
                    <meta
                        property="og:url"
                        content={`${process.env.REACT_APP_DOMAIN}/${dateId}/${postId}`}
                    />
                    {article.metadata.image ? (
                        <meta
                            property="og:image"
                            content={article.metadata.image}
                        />
                    ) : (
                        <meta
                            property="og:image"
                            content={`${process.env.REACT_APP_DOMAIN}android-chrome-512x512.png`}
                        />
                    )}
                </Helmet>
                <Section>
                    <FlexWrapper css={{ justifyContent: "center" }}>
                        <FlexItem xs={1 / 1} m={2 / 3}>
                            <article>
                                <GutterPxs p={32}>
                                    <header
                                        css={{ borderBottom: "1px solid #ddd" }}
                                    >
                                        <h1 css={{ fontSize: "2.2em" }}>
                                            {article.metadata.title}
                                        </h1>
                                        <div css={{ color: "#888" }}>
                                            <GutterPxs pb={12}>
                                                <span>Created:</span>
                                                <time
                                                    dateTime={
                                                        article.metadata
                                                            .created_at as string
                                                    }
                                                >
                                                    {
                                                        article.metadata
                                                            .created_at
                                                    }
                                                </time>
                                            </GutterPxs>
                                        </div>
                                    </header>
                                    <MD source={article.content as string} />
                                </GutterPxs>
                            </article>
                        </FlexItem>
                    </FlexWrapper>
                </Section>
            </>
        )
    else return <div>Loading...</div>
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent)

import React, { FC, useEffect, Dispatch } from "react"
import { Link, RouteComponentProps } from "@reach/router"
import { FlexWrapper, FlexItem } from "../components/grids/flex"
import { FullSizeJumbroton } from "../components/sections/full-size-jumbroton"
import { Section } from "../components/sections/section"
import { GutterPxs } from "../components/gutters/gutters"
import { ReactComponent as Human } from "../images/human.svg"
import { connect } from "react-redux"
import { RootState } from "../reducers"
import { getArticlesIds, getArticles } from "../actions/articles"
import { articleList } from "../selectors/articles"
import { article } from "../types/articles"

const mapStateToProps = (state: RootState) => ({
    articles: articleList(state),
    articleIds: state.articlesIds,
})
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    getArticleIds: () => dispatch(getArticlesIds()),
    getArticles: () => dispatch(getArticles()),
})

type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> &
    RouteComponentProps

const HomeComponent: FC<Props> = ({
    getArticleIds,
    getArticles,
    articles,
    articleIds,
}) => {
    useEffect(() => {
        if (!articleIds.ids.length) getArticleIds()
    }, [articleIds.ids.length, getArticleIds])

    useEffect(() => {
        if (articleIds.ids.length) getArticles()
    }, [articleIds.ids, getArticles])

    return (
        <>
            <FullSizeJumbroton>
                <Section>
                    <FlexWrapper alignItems="stretch">
                        <FlexItem
                            xs={1 / 1}
                            m={2 / 3}
                            xl={2 / 3}
                            alignSelf="center"
                        >
                            <GutterPxs p={32}>
                                <h1>
                                    <Link to="/">muzazu.</Link>
                                </h1>
                                <h2>
                                    Hellow there, here's my{" "}
                                    <a href="#stories">stories...</a>
                                </h2>
                            </GutterPxs>
                        </FlexItem>
                        <FlexItem
                            xs={1 / 1}
                            m={1 / 3}
                            xl={1 / 3}
                            alignSelf="flex-end"
                            css={{ height: "100%" }}
                        >
                            <GutterPxs p={24}>
                                <Human
                                    css={{
                                        width: "100%",
                                        height: "auto",
                                    }}
                                    viewBox={"0 0 700 700"}
                                    preserveAspectRatio="xMidYMid meet"
                                />
                            </GutterPxs>
                        </FlexItem>
                    </FlexWrapper>
                </Section>
            </FullSizeJumbroton>
            <div id="stories">
                <FullSizeJumbroton>
                    <Section>
                        <FlexWrapper alignItems="stretch">
                            {articles.length ? (
                                (articles as Array<article>).map(
                                    (data: article) => (
                                        <FlexItem
                                            xs={1 / 4}
                                            alignSelf="center"
                                            key={`${data.metadata.title}-${data.metadata.created_at}`}
                                        >
                                            <Link
                                                to={`/${data.metadata.dateId}/${data.metadata.title}`}
                                            >
                                                <GutterPxs p={12}>
                                                    <h3>
                                                        {data.metadata.title}
                                                    </h3>
                                                    <p>{data.metadata.desc}</p>
                                                </GutterPxs>
                                            </Link>
                                        </FlexItem>
                                    )
                                )
                            ) : (
                                <FlexItem xs={1 / 4} alignSelf="center">
                                    <GutterPxs p={12}>
                                        There is nothing here yet
                                    </GutterPxs>
                                </FlexItem>
                            )}
                        </FlexWrapper>
                    </Section>
                </FullSizeJumbroton>
            </div>
        </>
    )
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

export default Home

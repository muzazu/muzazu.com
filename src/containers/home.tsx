import React, { FC, useEffect, Dispatch } from "react"
import { Link, RouteComponentProps } from "@reach/router"
import { FlexWrapper, FlexItem } from "../components/grids/flex"
import { FullSizeJumbroton } from "../components/sections/full-size-jumbroton"
import { Section } from "../components/sections/section"
import { GutterPxs } from "../components/gutters/gutters"
import { ReactComponent as Human } from "../images/human.svg"
import { ReactComponent as BGHuman } from "../images/bg-human.svg"
import { connect } from "react-redux"
import { RootState } from "../reducers"
import { getArticlesIds, getArticles } from "../actions/articles"
import { articleList } from "../selectors/articles"
import { article } from "../types/articles"
import { PostItem } from "../components/post/post-item"
import { DeviderWithText } from "../components/devider/devider-with-text"
import { Helmet } from "react-helmet-async"
import { useTheme } from "emotion-theming"
import { theme } from "../types/theme"

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
    const activeTheme: theme = useTheme()
    useEffect(() => {
        if (!articleIds.ids.length) getArticleIds()
    }, [articleIds.ids.length, getArticleIds])

    useEffect(() => {
        if (articleIds.ids.length) getArticles()
    }, [articleIds.ids, getArticles])

    return (
        <>
            <Helmet>
                <title>muzazu</title>
                <meta name="description" content="poofs my stories" />
                <meta property="og:title" content="muzazu" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content={`${process.env.REACT_APP_DOMAIN}`}
                />
                <meta
                    property="og:image"
                    content={`${process.env.REACT_APP_DOMAIN}android-chrome-512x512.png`}
                />
            </Helmet>
            <FullSizeJumbroton>
                <Section>
                    <FlexWrapper css={{ alignItems: "stretch" }}>
                        <FlexItem
                            xs={1 / 1}
                            m={2 / 3}
                            xl={2 / 3}
                            css={{ alignSelf: "center" }}
                        >
                            <GutterPxs p={32}>
                                <h1>
                                    <Link to="/">Muzazu.com</Link>
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
                            css={{ alignSelf: "center" }}
                        >
                            <GutterPxs p={24}>
                                <figure
                                    css={{
                                        maxWidth: "100%",
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    <BGHuman
                                        css={{
                                            "> path": {
                                                fill:
                                                    activeTheme.mode === "dark"
                                                        ? "#da8cbb!important"
                                                        : "#9EF0F0!important",
                                            },
                                        }}
                                    />
                                    <Human
                                        css={{
                                            width: "100%",
                                            height: "auto",
                                            position: "absolute",
                                            left: "25%",
                                            top: "10%",
                                            "> .human__pants": {
                                                fill:
                                                    activeTheme.mode === "dark"
                                                        ? "#e1e1e1!important"
                                                        : "#2f2e41!important",
                                            },
                                            "> .human__shoe": {
                                                fill:
                                                    activeTheme.mode === "dark"
                                                        ? "#525252!important"
                                                        : "#2f2e41!important",
                                            },
                                        }}
                                        viewBox={"0 0 700 700"}
                                        preserveAspectRatio="xMidYMid meet"
                                    />
                                </figure>
                            </GutterPxs>
                        </FlexItem>
                    </FlexWrapper>
                </Section>
            </FullSizeJumbroton>
            <div id="stories">
                <Section>
                    <GutterPxs p={32}>
                        <GutterPxs mb={32}>
                            <DeviderWithText text="Stories" />
                        </GutterPxs>
                        <FlexWrapper css={{ alignItems: "stretch" }}>
                            {articles.length ? (
                                (articles as Array<article>).map(
                                    (data: article) => (
                                        <FlexItem
                                            xs={1 / 1}
                                            s={1 / 2}
                                            m={1 / 4}
                                            css={{ width: "100%" }}
                                            key={`${data.metadata.title}-${data.metadata.created_at}`}
                                        >
                                            <PostItem article={data} />
                                        </FlexItem>
                                    )
                                )
                            ) : (
                                <FlexItem css={{ alignSelf: "center" }}>
                                    <GutterPxs p={12}>
                                        There is nothing here yet
                                    </GutterPxs>
                                </FlexItem>
                            )}
                        </FlexWrapper>
                    </GutterPxs>
                </Section>
            </div>
        </>
    )
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

export default Home

import React, { FC } from "react"
import { FlexItem } from "../grids/flex"
import { GutterPxs } from "../gutters/gutters"
import { Link } from "@reach/router"
import { article } from "../../types/articles"

interface Props {
    article: article
}

export const PostItem: FC<Props> = ({ article }) => {
    return (
        <FlexItem
            xs={1 / 4}
            key={`${article.metadata.title}-${article.metadata.created_at}`}
        >
            <Link
                to={`/${article.metadata.dateId}/${article.metadata.title}`}
                css={{ textDecoration: "none" }}
            >
                <article css={{ border: "1px solid #ddd" }}>
                    <GutterPxs p={8}>
                        <header>
                            <h3 css={{ margin: "8px 0" }}>
                                {article.metadata.title}
                            </h3>
                        </header>
                        <small>
                            <time
                                dateTime={article.metadata.created_at as string}
                            >
                                {article.metadata.created_at}
                            </time>
                        </small>
                        <p css={{ color: "#111", marginTop: "4px" }}>
                            {article.metadata.desc}
                        </p>
                    </GutterPxs>
                </article>
            </Link>
        </FlexItem>
    )
}

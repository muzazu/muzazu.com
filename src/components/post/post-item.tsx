import React, { FC } from "react"
import { GutterPxs } from "../gutters/gutters"
import { Link } from "@reach/router"
import { article } from "../../types/articles"
import { theme } from "../../types/theme"
import { useTheme } from "emotion-theming"

interface Props {
    article: article
}

export const PostItem: FC<Props> = ({ article }) => {
    const Theme: theme = useTheme()
    return (
        <Link
            to={`/${
                article.metadata.dateId
            }/${article.metadata.title.toLowerCase()}`}
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
                        <time dateTime={article.metadata.created_at as string}>
                            {article.metadata.created_at}
                        </time>
                    </small>
                    <p css={{ color: Theme.color, marginTop: "4px" }}>
                        {article.metadata.desc}
                    </p>
                </GutterPxs>
            </article>
        </Link>
    )
}

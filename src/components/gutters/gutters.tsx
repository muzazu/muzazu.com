import React, { FC } from "react"

type space = 4 | 8 | 12 | 16 | 20 | 24 | 32 | 36 | 40

interface GutterPxsProps {
    m?: space
    mx?: space
    my?: space
    mt?: space
    mb?: space
    ml?: space
    mr?: space
    p?: space
    px?: space
    py?: space
    pt?: space
    pb?: space
    pl?: space
    pr?: space
}

const transformPx = (pixel: space): string => {
    return `${pixel}px`
}

export const GutterPxs: FC<GutterPxsProps> = (props) => {
    const {
        children,
        m,
        mx,
        my,
        mt,
        mb,
        ml,
        mr,
        p,
        px,
        py,
        pt,
        pb,
        pl,
        pr,
    } = props
    
    return (
        <div
            css={{
                padding: p && transformPx(p),
                margin: m && transformPx(m),
                marginRight: (mr && transformPx(mr)) || (mx && transformPx(mx)),
                marginLeft: (ml && transformPx(ml)) || (mx && transformPx(mx)),
                marginTop: (mt && transformPx(mt)) || (my && transformPx(my)),
                marginBottom:
                    (mb && transformPx(mb)) || (my && transformPx(my)),
                paddingRight:
                    (pr && transformPx(pr)) || (px && transformPx(px)),
                paddingLeft: (pl && transformPx(pl)) || (px && transformPx(px)),
                paddingTop: (pt && transformPx(pt)) || (py && transformPx(py)),
                paddingBottom:
                    (pb && transformPx(pb)) || (py && transformPx(py)),
            }}
            {...props}
        >
            {children}
        </div>
    )
}

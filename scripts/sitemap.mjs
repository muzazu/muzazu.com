import { writeFileSync } from 'fs'
import { allPosts } from '../.contentlayer/generated/Post/_index.mjs'
import prettier from 'prettier'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
	path: path.resolve(process.cwd(), '.env.local'),
})

function generateAllPost() {
	let val = ''
	allPosts.forEach((post) => {
		val += `
            <url>
                <loc>${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.url}</loc>
            </url>
        `
	})

	return val
}

async function generate() {
	const prettierConfig = await prettier.resolveConfig('../.prettierrc')

	const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${`${process.env.NEXT_PUBLIC_SITE_URL}/`}</loc>
        </url>
        <url>
            <loc>${`${process.env.NEXT_PUBLIC_SITE_URL}/posts`}</loc>
        </url>
        ${generateAllPost()}
    </urlset>
    `

	const formatted = prettier.format(sitemap, {
		...prettierConfig,
		parser: 'html',
	})

	writeFileSync('public/sitemap.xml', formatted)
}
generate()

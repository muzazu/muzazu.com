import { writeFileSync } from 'fs'
import RSS from 'rss'
import { allPosts } from '../.contentlayer/generated/Post/_index.mjs'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
	path: path.resolve(process.cwd(), '.env.local'),
})

async function generate() {
	const feed = new RSS({
		title: process.env.NEXT_PUBLIC_SITE_TITLE,
		site_url: process.env.NEXT_PUBLIC_SITE_URL,
		feed_url: `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
	})

	allPosts.map((post) => {
		feed.item({
			title: post.title,
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.url}`,
			date: post.date,
			description: post.description,
		})
	})

	writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}
generate()

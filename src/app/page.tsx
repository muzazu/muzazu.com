import { allPosts } from 'contentlayer/generated'
import { Posts } from './posts'

export default function Home() {
	return (
		<main>
			<Posts posts={allPosts} />
		</main>
	)
}

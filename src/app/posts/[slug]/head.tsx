import { allPosts } from 'contentlayer/generated'

import MdxHead from '@/components/mdx-head'

export default function Head({ params }) {
	const slug = params?.slug || ''
	const doc = allPosts.find((doc) => doc.url === slug)
	return (
		<MdxHead
			params={params}
			og={{
				heading: doc?.description,
				type: 'post',
				mode: 'dark',
			}}
		/>
	)
}

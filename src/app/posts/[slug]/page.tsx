import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

import { Mdx } from '@/components/mdx'

interface DocPageProps {
	params: {
		slug: string
	}
}

export async function generateStaticParams(): Promise<
	DocPageProps['params'][]
> {
	return allPosts.map((doc) => ({
		slug: doc.url,
	}))
}

export default async function DocPage({ params }: DocPageProps) {
	const slug = params?.slug || ''
	const doc = allPosts.find((doc) => doc.url === slug)

	if (!doc) {
		notFound()
	}

	return (
		<main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
			<div className="mx-auto w-full min-w-0">
				<Mdx code={doc.mdxCode} />
			</div>
		</main>
	)
}

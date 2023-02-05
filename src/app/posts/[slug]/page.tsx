import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

import { Mdx } from '@/components/mdx'
import { usDateString } from '@/lib/utils'

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
		<main className="relative">
			<div className="mx-auto w-full min-w-0">
				<div className="mb-4">
					<h1 className="text-xl font-bold">{doc.title}</h1>
					<span className="text-sm text-rose-800">
						{usDateString(doc.date)}
					</span>
				</div>
				<Mdx code={doc.mdxCode} />
			</div>
		</main>
	)
}

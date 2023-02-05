import {
	defineComputedFields,
	defineDocumentType,
	makeSource,
} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import { bundleMDX } from 'mdx-bundler'

const computedFields = defineComputedFields<'Post'>({
	url: {
		type: 'string',
		resolve: (post) => post._raw.flattenedPath,
	},
	mdxCode: {
		type: 'string',
		resolve: async (doc) => {
			const { code } = await bundleMDX({ source: doc.body.raw })

			return code
		},
	},
})

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `**/*.mdx`,
	fields: {
		title: {
			type: 'string',
			description: 'The title of the post',
			required: true,
		},
		description: {
			type: 'string',
			description: 'The description of the post',
			required: true,
		},
		date: {
			type: 'date',
			description: 'The date of the post',
			required: true,
		},
	},
	computedFields,
}))

export default makeSource({
	contentDirPath: 'posts',
	documentTypes: [Post],
	mdx: {
		rehypePlugins: [
			rehypeSlug,
			rehypeCodeTitles,
			rehypePrism,
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['anchor'],
					},
				},
			],
		],
	},
})

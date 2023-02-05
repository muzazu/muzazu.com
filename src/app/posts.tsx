'use client'
import { usDateString } from '@/lib/utils'
import { Post } from 'contentlayer/generated'
import fuzzysort from 'fuzzysort'
import Link from 'next/link'
import { FC, ReactNode, useState } from 'react'

interface PostsProps {
	posts: Post[]
	children?: ReactNode
}

export const Posts: FC<PostsProps> = ({ posts, children, ...props }) => {
	const [searchValue, setSearchValue] = useState('')
	let filteredBlogPosts = fuzzysort.go(searchValue, posts, {
		key: 'title',
		all: true,
	})

	return (
		<div className="relative" {...props}>
			<div
				className={`sticky top-0 w-full flex flex-nowrap items-center py-2.5 px-5 rounded-3xl border-2 border-solid border-purple-50 bg-white mb-8 transition-all ease-in-out delay-150 hover:border-pink-300`}
			>
				<input
					className={`appearance-none bg-transparent flex-1 outline-none`}
					type="text"
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder="Search..."
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
					fill="#B7BAB6"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
				</svg>
			</div>
			{filteredBlogPosts.map((post) => (
				<div key={post.obj._id}>
					<Link href={`/posts/${post.obj.url}`} passHref>
						<div className="flex flex-nowrap items-center justify-between w-full my-4 p-1.5 rounded-xl cursor-pointer transition-all ease-linear duration-200 hover:bg-gradient-to-r hover:from-pink-200 hover:pl-4 hover:text-slate-800">
							<div className="flex flex-col flex-nowrap items-start flex-1">
								<h2 className="text-xl font-bold my-1.5">
									{post.obj.title}
								</h2>
								<span className="font-light break-words text-lg md:text-base">
									{post.obj.description}
								</span>
								<span className="text-sm mt-1.5 text-rose-800">
									{usDateString(post.obj.date)}
								</span>
							</div>
						</div>
					</Link>
				</div>
			))}

			{children}
		</div>
	)
}

import '@/styles/globals.css'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={inter.className}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className="min-h-screen bg-slate-900 text-slate-100">
				<div className="bg-[url('/pattern.svg')] bg-repeat min-h-screen">
					<div className="container m-auto">
						<header className="pt-24 mb-12">
							<h1 className="m-auto">
								<Link
									href="/"
									className="flex items-center text-xl font-bold"
								>
									<Image
										width={60}
										height={60}
										src="/android-chrome-512x512.png"
										alt="muzazu.com"
										className="mr-4"
									/>
									MUZAZU NOTES
								</Link>
							</h1>
						</header>
						{children}
					</div>
				</div>
			</body>
		</html>
	)
}

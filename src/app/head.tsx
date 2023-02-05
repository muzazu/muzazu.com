export default function Head() {
	return (
		<>
			<title>MUZAZU NOTES</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width" />
			<meta
				name="description"
				content="Just some random thought and stuffs"
			/>

			<meta
				property="og:title"
				content={process.env.NEXT_PUBLIC_SITE_TITLE}
			/>
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content={process.env.NEXT_PUBLIC_SITE_URL}
			/>
			<meta
				property="og:image"
				content={`{process.env.NEXT_PUBLIC_SITE_URL}/android-chrome-512x512.png`}
			/>
			<meta
				name="twitter:title"
				content={process.env.NEXT_PUBLIC_SITE_TITLE}
			/>
			<meta name="twitter:card" content="summary_large_image" />
			<meta
				property="twitter:url"
				content={process.env.NEXT_PUBLIC_SITE_URL}
			/>
			<meta
				name="twitter:image"
				content={`{process.env.NEXT_PUBLIC_SITE_URL}/android-chrome-512x512.png`}
			/>
		</>
	)
}

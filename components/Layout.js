import Head from "next/head";
import Favicons from "./Favicons";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title = "", className = "" }) {
	return (
		<main className={className}>
			<Head>
				<title>{title ? title : process.env.NEXT_PUBLIC_DEFAULT_TITLE}</title>

				<meta property="og:title" content={title ? title : process.env.NEXT_PUBLIC_DEFAULT_TITLE} />
				<meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
				<meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
				<meta property="og:description" content={process.env.NEXT_PUBLIC_DEFAULT_DESCRIPTION} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={"TODO"} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content={title ? title : process.env.NEXT_PUBLIC_DEFAULT_TITLE} />
				<meta name="twitter:description" content={process.env.NEXT_PUBLIC_DEFAULT_DESCRIPTION} />
				<meta name="twitter:image" content={"TODO"} />
				<meta name="twitter:image:alt" content={process.env.NEXT_PUBLIC_DEFAULT_TITLE} />

				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@900&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<Favicons />
			<Header />
			{children}
			<Footer />
		</main>
	);
}

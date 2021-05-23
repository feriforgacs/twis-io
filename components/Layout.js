import Head from "next/head";
import Favicons from "./Favicons";
import Header from "./Header";

export default function Layout({ children, title = "twis" }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Mulish:wght@900&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<Favicons />
			<Header />
			{children}
		</>
	);
}

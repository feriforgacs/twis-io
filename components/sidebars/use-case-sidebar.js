import Link from "next/link";
import { useRouter } from "next/router";

const sidebarLinks = [
	{
		url: "/use-cases/collect-emails-and-grow-your-database-through-tiktok",
		label: "TikTok and twis",
	},
	{
		url: "/use-cases/collect-emails-and-grow-your-database-through-instagram",
		label: "Instagram and twis",
	},
	{
		url: "/use-cases/campaigns-in-story-format-to-grow-your-database",
		label: "Twis was built for mobile",
	},
];

export default function UseCaseSidebar() {
	const router = useRouter();

	return (
		<nav className="nav--sidebar">
			<h4>Related pages</h4>
			<ul>
				{sidebarLinks.map((item, index) => {
					if (router.pathname !== item.url) {
						return (
							<li key={index}>
								<Link href={item.url}>
									<a>{item.label}</a>
								</Link>
							</li>
						);
					}
				})}
			</ul>
		</nav>
	);
}

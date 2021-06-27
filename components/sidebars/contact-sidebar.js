import Link from "next/link";
import { useRouter } from "next/router";

const sidebarLinks = [
	{
		url: "/frequently-asked-questions",
		label: "Frequently Asked Questions",
	},
	{
		url: "/contact-us",
		label: "Contact Us",
	},
];

export default function ContactSidebar() {
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

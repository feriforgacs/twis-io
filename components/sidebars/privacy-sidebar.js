import Link from "next/link";
import { useRouter } from "next/router";

const sidebarLinks = [
	{
		url: "/terms-and-conditions",
		label: "Terms and Conditions",
	},
	{
		url: "/privacy-policy",
		label: "Privacy Policy",
	},
	{
		url: "/sub-processors",
		label: "Sub-Processors",
	},
];

export default function PrivacySidebar() {
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

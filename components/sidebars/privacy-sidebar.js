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
		<nav>
			<ul>
				{sidebarLinks.map((item, index) => (
					<li key={index} className={`${router.pathname === item.url ? "active" : ""}`}>
						<Link href={item.url}>
							<a>{item.label}</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

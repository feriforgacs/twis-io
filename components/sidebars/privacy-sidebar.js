import Link from "next/link";

export default function PrivacySidebar() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/terms-and-conditions">
						<a>Terms and Conditions</a>
					</Link>
				</li>
				<li>
					<Link href="/privacy-policy">
						<a>Privacy Policy</a>
					</Link>
				</li>
				<li>
					<Link href="/sub-processors">
						<a>Sub-Processors</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

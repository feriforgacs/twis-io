import Link from "next/link";

export default function Header() {
	return (
		<header id="header">
			<nav>
				<ul>
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>

					<li>
						<Link href="/features">
							<a>Features</a>
						</Link>
					</li>

					<li>
						<Link href="examples">
							<a>Examples</a>
						</Link>
					</li>

					<li>
						<Link href="/use-cases">
							<a>Use cases</a>
						</Link>
					</li>

					<li>
						<Link href="/pricing">
							<a>Pricing</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

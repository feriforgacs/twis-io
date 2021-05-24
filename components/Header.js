import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header id="header">
			<div className="logo">
				<Link href="/">
					<a>
						<Image src="/twis-logo.png" alt="twis logo" width={50} height={50} />
						<span className="font--mulish">twis</span>
					</a>
				</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link href="/features">
							<a>Features</a>
						</Link>
					</li>

					<li>
						<Link href="/examples">
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

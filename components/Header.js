import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	const [navVisible, setNavVisible] = useState(false);

	return (
		<header id="header">
			<button className="btn btn--nav-open" onClick={() => setNavVisible(!navVisible)}>
				<span>&#9776;</span>
			</button>
			<div className="logo">
				<Link href="/">
					<a>
						<Image src="/twis-logo.png" alt="twis logo" width={30} height={30} />
						<span className="font--mulish">twis</span>
					</a>
				</Link>
			</div>
			<nav className={`${navVisible ? "visible" : ""}`}>
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
				<button className="btn btn--primary btn--nav-close" onClick={() => setNavVisible(!navVisible)}>
					<span>&times;</span>
				</button>
			</nav>
		</header>
	);
}

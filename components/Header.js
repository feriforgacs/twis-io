import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	const [navVisible, setNavVisible] = useState(false);

	return (
		<>
			<header id="header">
				<div id="header__body">
					<button className="btn nav-btn nav-btn--nav-open" onClick={() => setNavVisible(!navVisible)}>
						<span>&#9776;</span>
					</button>
					<div className="logo">
						<Link href="/">
							<a>
								<div className="colored">
									<Image src="/twis-logo.png" alt="twis logo" width={30} height={30} />
								</div>
								<div className="black-and-white">
									<Image src="/twis-logo-black-and-white.svg" alt="twis logo" width={30} height={30} />
								</div>
								<span className="font--mulish">twis</span>
							</a>
						</Link>
					</div>
					<nav className={`nav--primary ${navVisible ? "visible" : ""}`}>
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
						<button className="btn btn--primary nav-btn nav-btn--nav-close" onClick={() => setNavVisible(!navVisible)}>
							<span>&times;</span>
						</button>
					</nav>

					<nav className="nav--secondary">
						<ul>
							<li className="hidden-on-mobile">
								<a href="https://app.twis.io" className="link">
									Log in
								</a>
							</li>
							<li>
								<a href="https://app.twis.io" className="btn btn--primary">
									<span className="hidden-on-desktop">Try now</span>
									<span className="hidden-on-mobile">Try for free</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}

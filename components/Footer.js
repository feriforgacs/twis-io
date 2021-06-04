import Link from "next/link";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__contact">
					<h4>Contact and Support</h4>
					<p>
						If you have any questions feel free to get in touch via email at <a href="mailto:support@twis.io">support@twis.io</a>.
					</p>
				</div>

				<nav className="footer__nav">
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
						<li>
							<Link href="/frequently-asked-questions">
								<a>Frequently Asked Questions</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<div className="container">
				<p className="footer__copyright">&copy; All Rights Reserved 2021</p>
			</div>
		</footer>
	);
}
